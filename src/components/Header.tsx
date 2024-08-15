import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindow from "../hooks/useWindow";

export interface contentRef {
	focusFirst: React.RefObject<HTMLDivElement>;
	focusSecond: React.RefObject<HTMLDivElement>;
	focusThird: React.RefObject<HTMLDivElement>;
}

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

	const HeaderWrapper = styled.header<{ scroll: boolean }>`
		background-color: ${(props) =>
			media === "mobile" || props.scroll ? "white" : "transparent"};
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

	const Title = styled.h1<{ scroll: boolean }>`
		font-family: "BlackHanSans";
		color: ${(props) =>
			media === "mobile" || props.scroll ? "black" : "white"};
	`;

	const Button = styled.button`
		color: ${media === "mobile" || isScroll ? "black" : "white"};
		background-color: ${media === "mobile" || isScroll
			? "white"
			: "transparent"};
		font-size: 1.2rem;
		font-family: "BlackHanSans";
		font-weight: 700;
		border: none;
		padding: 5px 10px;
		border-radius: 5px;
		cursor: pointer;
	`;

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
		<HeaderWrapper scroll={isScroll}>
			<div
				style={{
					display: "flex",
					justifyContent: media === "pc" ? "space-around" : "space-between",
					width: media === "pc" ? "100%" : "90%",
					alignItems: "center",
				}}
			>
				<Title scroll={isScroll}>Wooseok</Title>
				{media === "pc" ? (
					<div>
						<Button onClick={() => scrollToRef(buttonRef.focusFirst)}>
							About Me
						</Button>
						<Button onClick={() => scrollToRef(buttonRef.focusThird)}>
							Experience
						</Button>
						<Button onClick={() => scrollToRef(buttonRef.focusSecond)}>
							Skills
						</Button>
						<Button onClick={() => scrollToRef(buttonRef.focusThird)}>
							Projects
						</Button>
					</div>
				) : (
					<>
						<Button onClick={() => setIsMobileMenu(!isMobileMenu)}>
							<MenuOutlined />
						</Button>
						{isMobileMenu && MobileMenu(buttonRef, scrollToRef)}
					</>
				)}
			</div>
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
