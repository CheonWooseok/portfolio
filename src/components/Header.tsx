import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindow from "../hooks/useWindow";

export interface contentRef {
	focusFirst: React.RefObject<HTMLDivElement>;
	focusSecond: React.RefObject<HTMLDivElement>;
	focusThird: React.RefObject<HTMLDivElement>;
}

const HeaderWrapper = styled.header<{ scroll: boolean; media: string }>`
	background-color: ${(props) =>
		props.media === "mobile" || props.scroll ? "white" : "transparent"};
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	position: fixed;
	top: 0;
	width: 100%;
	height: 70px;
	z-index: 100;
	border-bottom: ${(props) => (props.scroll ? "1px solid #aaa" : "none")};
`;

const HeaderContainer = styled.div<{ media: string }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	width: 100%;
	justify-content: ${(props) =>
		props.media === "pc" ? "space-around" : "space-between"};
`;

const Title = styled.h1<{ scroll: boolean; media: string }>`
	font-family: "BlackHanSans";
	color: ${(props) =>
		props.media === "mobile" || props.scroll ? "black" : "white"};
`;

const HeaderNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20;
`;

const NavButton = styled.button<{ media: string; isScroll: boolean }>`
	color: ${(props) =>
		props.media === "mobile" || props.isScroll ? "black" : "white"};
	background-color: ${(props) =>
		props.media === "mobile" || props.isScroll ? "white" : "transparent"};
	font-size: 1.2rem;
	font-family: "BlackHanSans";
	font-weight: 700;
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
	cursor: pointer;
`;

const Header = (buttonRef: contentRef) => {
	const media = useWindow();

	const [isScroll, setIsScroll] = useState(false);
	const [isMobileMenu, setIsMobileMenu] = useState(false);

	useEffect(() => {
		//y 100 이하로 내려가면 헤더가 투명에서 color: white;로 바뀌게 하고 싶다.
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		});
		return () => {
			window.removeEventListener("scroll", () => {
				console.log("remove");
			});
		};
	}, []);

	const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			// y - 70
			ref.current.scrollIntoView({ behavior: "smooth" });

			window.scrollTo({
				top: ref.current.offsetTop - 70,
				behavior: "smooth",
			});
		}
		console.log(ref.current);
	};

	return (
		<HeaderWrapper scroll={isScroll} media={media}>
			<HeaderContainer
				media={media}
				style={
					{
						// display: "flex",
						// justifyContent: media === "pc" ? "space-around" : "space-between",
						// width: media === "pc" ? "100%" : "90%",
						// alignItems: "center",
					}
				}
			>
				<Title scroll={isScroll} media={media}>
					Wooseok
				</Title>
				{media === "pc" ? (
					<HeaderNav>
						<NavButton
							media={media}
							isScroll={isScroll}
							onClick={() => scrollToRef(buttonRef.focusFirst)}
						>
							About Me
						</NavButton>
						<NavButton
							media={media}
							isScroll={isScroll}
							onClick={() => scrollToRef(buttonRef.focusThird)}
						>
							Experience
						</NavButton>
						<NavButton
							media={media}
							isScroll={isScroll}
							onClick={() => scrollToRef(buttonRef.focusSecond)}
						>
							Skills
						</NavButton>
						<NavButton
							media={media}
							isScroll={isScroll}
							onClick={() => scrollToRef(buttonRef.focusThird)}
						>
							Projects
						</NavButton>
					</HeaderNav>
				) : (
					<>
						<NavButton
							media={media}
							isScroll={isScroll}
							onClick={() => setIsMobileMenu(!isMobileMenu)}
						>
							<MenuOutlined />
						</NavButton>
						{isMobileMenu && MobileMenu(buttonRef, scrollToRef)}
					</>
				)}
			</HeaderContainer>
		</HeaderWrapper>
	);
};

const MobileMenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	/* align-items: center; */
	background-color: white;
	width: 200px;
	height: 100vh;
	position: fixed;
	top: 70px;
	right: 0;
	z-index: 100;
`;

const MobileMenuItem = styled.button`
	font-size: 1.2rem;
	font-family: "BlackHanSans";
	font-weight: 700;
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
	cursor: pointer;
`;

const MobileMenu = (
	buttonRef: contentRef,
	scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void
) => {
	return (
		<MobileMenuWrapper>
			<MobileMenuItem onClick={() => scrollToRef(buttonRef.focusFirst)}>
				About Me
			</MobileMenuItem>
			<MobileMenuItem onClick={() => scrollToRef(buttonRef.focusSecond)}>
				Skills
			</MobileMenuItem>
			<MobileMenuItem onClick={() => scrollToRef(buttonRef.focusThird)}>
				Experience
			</MobileMenuItem>
			<MobileMenuItem onClick={() => scrollToRef(buttonRef.focusThird)}>
				Projects
			</MobileMenuItem>
		</MobileMenuWrapper>
	);
};

export default Header;
