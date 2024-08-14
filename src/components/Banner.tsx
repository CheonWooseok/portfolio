import styled from "styled-components";
import TypingImg from "../assets/typing.gif";

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
			<Typing img={TypingImg}>
				<p>
					천우석
					<br />
					개발 포트폴리오
				</p>
			</Typing>
		</div>
	);
};

export default Banner;
