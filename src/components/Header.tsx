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

	const HeaderWrapper = styled.header`
		background-color: ${isScroll ? "white" : "transparent"};
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		height: 70px;
		z-index: 100;
		border-bottom: ${isScroll ? "2px solid #eee" : "none"};
	`;

	const Title = styled.h1`
		font-family: "BlackHanSans";
		color: ${isScroll ? "black" : "white"};
	`;

	const Button = styled.button`
		color: ${isScroll ? "black" : "white"};
		background-color: ${isScroll ? "white" : "transparent"};
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
		<HeaderWrapper>
			<Title>Wooseok</Title>
			{media === "pc" && (
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
			)}
		</HeaderWrapper>
	);
};

export default Header;
