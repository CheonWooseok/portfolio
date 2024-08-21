import { forwardRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionWrapper } from "../App";
import AntdIcon from "../assets/icons/ant-design.svg";
import AWSIcon from "../assets/icons/aws.svg";
import DynamoDBIcon from "../assets/icons/dynamodb.svg";
import LambdaIcon from "../assets/icons/lambda.svg";
import MariaDBIcon from "../assets/icons/mariadb.svg";
import MuiIcon from "../assets/icons/material-ui.svg";
import NestjsIcon from "../assets/icons/nestjs.svg";
import ReactIcon from "../assets/icons/react.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import SwrIcon from "../assets/icons/swr.png";
// import TypescriptIcon from "../assets/icons/typscript.png";
import NextIcon from "../assets/icons/nextjs.svg";
import SpringIcon from "../assets/icons/spring.svg";

const SkillWrapper = styled.div`
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 20px;
`;

const Skill = styled.img`
	width: 80px;
	height: 80px;
	margin: 10px;
`;

const SkillTitle = styled.h2`
	font-size: 1.7rem;
	font-weight: 700;

	&:before {
		content: "";
		background-color: #f4ce14;
		height: 0.8em;
		width: 3px;
		display: inline-block;
		margin-right: 10px;
	}
`;

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<SectionWrapper ref={ref} background="#007acc">
			<SectionTitle>Skills</SectionTitle>
			<div
				style={{
					backgroundColor: "white",
					width: "80%",
					// minHeight: "50vh",
					borderRadius: "10px",
					padding: "20px",
					marginTop: "50px",
					boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<SkillTitle>Frontend</SkillTitle>
				<SkillWrapper>
					<Skill src={ReactIcon} alt="react" />
					<Skill src={AntdIcon} alt="antd" />
					<Skill src={MuiIcon} alt="mui" />
					<Skill src={SwrIcon} alt="swr" />
					<Skill src={ReduxIcon} alt="redux" />
				</SkillWrapper>
				<SkillTitle>Backend</SkillTitle>
				<SkillWrapper>
					{/* <Skill src={TypescriptIcon} alt="typescript" /> */}
					<Skill src={NestjsIcon} alt="nestjs" />
					<Skill src={AWSIcon} alt="aws" />
					<Skill src={LambdaIcon} alt="lambda" />
					<Skill src={DynamoDBIcon} alt="dynamodb" />
					<Skill src={MariaDBIcon} alt="mariadb" />
				</SkillWrapper>
				<SkillTitle>Preparation</SkillTitle>
				<SkillWrapper>
					<Skill src={NextIcon} alt="nextjs" />
					<Skill src={SpringIcon} alt="spring" />
				</SkillWrapper>
			</div>
		</SectionWrapper>
	);
});

export default Skills;
