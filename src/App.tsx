// import "./App.css";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import typing from "./assets/typing.gif";

const Wrapper = styled.div`
	.content {
		display: flex;
		flex-direction: column;
		min-height: 150vh;
	}
	.content__item {
		width: 100px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50vh;
	}
	.item1 {
		background-color: red;
	}
	.item2 {
		background-color: blue;
	}
	.item3 {
		background-color: green;
	}
`;

function App() {
	const focusFirst = useRef<HTMLDivElement>(null);
	const focusSecond = useRef<HTMLDivElement>(null);
	const focusThird = useRef<HTMLDivElement>(null);

	const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Wrapper>
			<Header
				focusFirst={focusFirst}
				focusSecond={focusSecond}
				focusThird={focusThird}
			/>

			<div className="content">
				<Banner />
				<div className="content__item item1" ref={focusFirst}></div>
				<div className="content__item item2" ref={focusSecond}></div>
				<div className="content__item item3" ref={focusThird}></div>
			</div>
		</Wrapper>
	);
}

interface contentRef {
	focusFirst: React.RefObject<HTMLDivElement>;
	focusSecond: React.RefObject<HTMLDivElement>;
	focusThird: React.RefObject<HTMLDivElement>;
}

const Header = (buttonRef: contentRef) => {
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
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
		console.log(ref.current);
	};

	return (
		<HeaderWrapper>
			<Title>Wooseok</Title>
			<div>
				<Button onClick={() => scrollToRef(buttonRef.focusFirst)}>
					About Me
				</Button>
				<Button onClick={() => scrollToRef(buttonRef.focusSecond)}>
					Skills
				</Button>
				<Button onClick={() => scrollToRef(buttonRef.focusThird)}>
					Projects
				</Button>
				<Button onClick={() => scrollToRef(buttonRef.focusThird)}>
					Career
				</Button>
			</div>
		</HeaderWrapper>
	);
};

const Banner = () => {
	const Typing = styled.div<{ img: string }>`
		position: relative;

		width: 100%;
		height: 600px;
		color: white;
		font-family: "BlackHanSans";
		font-size: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		z-index: 1;

		&:before {
			content: "";
			z-index: -1;
			position: absolute;
			filter: brightness(30%);
			width: 100%;
			height: 100%;
			background-image: url(${(props) => props.img});
			background-size: cover;
			/* background-position: center; */
			background-position: 50% 90%;
			background-repeat: no-repeat;
			left: 0px;
			right: 0px;
			bottom: 0px;
		}
	`;

	return (
		<div>
			<Typing img={typing}>
				<p>
					천우석
					<br />
					개발 포트폴리오
				</p>
			</Typing>
		</div>
	);
};

export default App;
