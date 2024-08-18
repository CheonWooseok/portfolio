// import "./App.css";

import { useRef } from "react";
import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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

export const SectionTitle = styled.h1`
	font-family: "BlackHanSans";
	font-size: 3rem;
	color: black;
	border-bottom: 1px solid #333;
`;

export const SectionWrapper = styled.div<{ background?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px 0;
	background-color: ${(props) => props.background};
`;

function App() {
	const focusFirst = useRef<HTMLDivElement>(null);
	const focusSecond = useRef<HTMLDivElement>(null);
	const focusThird = useRef<HTMLDivElement>(null);

	return (
		<Wrapper>
			<Header
				focusFirst={focusFirst}
				focusSecond={focusSecond}
				focusThird={focusThird}
			/>

			<div className="content">
				<Banner />
				<AboutMe ref={focusFirst} />
				<Experience ref={focusThird} />
				<Skills ref={focusSecond} />
				<Projects ref={focusThird} />
			</div>
		</Wrapper>
	);
}

export default App;
