import { forwardRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionWrapper } from "../App";
import AntdIcon from "../assets/icons/ant-design.svg";
import AWSIcon from "../assets/icons/aws.svg";
import DynamoDBIcon from "../assets/icons/dynamodb.svg";
import MuiIcon from "../assets/icons/material-ui.svg";
import NestjsIcon from "../assets/icons/nestjs.svg";
import ReactIcon from "../assets/icons/react.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import SwrIcon from "../assets/icons/swr.png";
import TypescriptIcon from "../assets/icons/typscript.png";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
	const Skill = styled.img`
		width: 80px;
		height: 80px;
		margin: 10px;
	`;

	return (
		<SectionWrapper ref={ref} background="#007acc">
			<SectionTitle>Skills</SectionTitle>
			<div
				style={{
					backgroundColor: "white",
					width: "80%",
					minHeight: "50vh",
					borderRadius: "10px",
					padding: "20px",
					marginTop: "50px",
					boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<Skill src={TypescriptIcon} alt="typescript" />
				<Skill src={NestjsIcon} alt="nestjs" />
				<Skill src={AWSIcon} alt="aws" />
				<Skill src={ReactIcon} alt="react" />
				<Skill src={AntdIcon} alt="antd" />
				<Skill src={MuiIcon} alt="mui" />
				<Skill src={SwrIcon} alt="swr" />
				<Skill src={ReduxIcon} alt="redux" />
				<Skill src={DynamoDBIcon} alt="dynamodb" />
			</div>
		</SectionWrapper>
	);
});

export default Skills;
