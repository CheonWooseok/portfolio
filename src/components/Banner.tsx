import styled from "styled-components";
import TypingImg from "../assets/typing.gif";

const Banner = () => {
	const Typing = styled.div<{ img: string }>`
		position: relative;

		width: 100%;
		height: 600px;
		color: white;
		font-family: "BlackHanSans";
		font-size: 3.8rem;
		display: flex;
		flex-direction: column;
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

				<div
					style={{
						backgroundColor: "#2F3645",
						maxWidth: "80%",
						// color: "black",
						// minHeight: "50vh",
						borderRadius: "10px",
						padding: "20px",
						marginTop: "50px",
						boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
						fontFamily: "NotosansKR",
						fontSize: "1.2rem",
					}}
				>
					<p
						style={{
							fontFamily: "NewAmsterdam",
						}}
					>
						First, solve the problem. Then, write the code.
					</p>
				</div>
			</Typing>
		</div>
	);
};

export default Banner;
