import { forwardRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionWrapper } from "../App";
import WoorisoftImg from "../assets/icons/woorisoft.png";
import useWindow from "../hooks/useWindow";

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
	const WoorisoftIcon = styled.div`
		max-width: 200px;
		max-height: 200px;

		min-width: 200px;
		min-height: 200px;

		background-image: url(${WoorisoftImg});
		background-size: 80%;
		background-position: center;
		background-repeat: no-repeat;
		background-color: white;
		border-radius: 50%;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	`;

	const CompanyName = styled.h2`
		font-size: 1.5rem;
		font-weight: 700;
	`;

	const Period = styled.p`
		font-size: 1.1rem;
		font-weight: 400;
		padding-top: 4px;
		color: #999;
	`;

	const Position = styled.p`
		font-size: 1.2rem;
		font-weight: 500;
		padding-top: 4px;
	`;

	const DevPart = styled.h2`
		font-size: 1.2rem;
		font-weight: 500;
		padding-top: 4px;
		margin-top: 20px;

		&:before {
			content: "";
			background-color: #007acc;
			height: 0.8em;
			width: 3px;
			display: inline-block;
			margin-right: 10px;
		}
	`;

	const DevList = styled.ul`
		list-style-type: circle;
		padding-left: 20px;
		margin-top: 10px;
		padding-top: 10px;
		border-top: 1px solid #ddd;
		max-width: 800px;
	`;

	const DevListItem = styled.li`
		font-size: 1rem;
		font-weight: 400;
		padding-top: 7px;
	`;

	const media = useWindow();

	return (
		<SectionWrapper ref={ref} background="#e8f5e9">
			<SectionTitle>Experience</SectionTitle>
			<div
				style={{
					// backgroundColor: "white",
					maxWidth: "1200px",
					width: "70%",
					display: "flex",
					// justifyContent: "center",
					marginTop: "50px",
					justifyContent: "center",
					flexWrap: "wrap",
				}}
			>
				<WoorisoftIcon />
				<div
					style={{
						marginLeft: media === "mobile" ? "0" : "50px",
						borderLeft: media === "mobile" ? "none" : "2px solid #ddd",
						borderTop: media === "mobile" ? "2px solid #ddd" : "none",
						marginTop: media === "mobile" ? "20px" : "0",
						paddingTop: media === "mobile" ? "20px" : "0",
						paddingLeft: media === "mobile" ? "0" : "20px",
					}}
				>
					<CompanyName>(주) 우리소프트</CompanyName>
					<Period>2021.10 ~ 2024.03</Period>
					<Position>풀스택 개발자</Position>
					<DevPart>프론트엔드 개발</DevPart>
					<DevList>
						<DevListItem>
							ReactJS를 활용하여 사내 도서 관리 시스템 개발 및 관리
						</DevListItem>
						<DevListItem>
							Vanila JS 되어있던 노후화 된 모니터링 웹 ReactJS로 재개발 및
							유지보수
						</DevListItem>
						<DevListItem>
							기존에 적용되지 않았던 모바일, 태블릿, PC 반응형 웹 적용
						</DevListItem>
						<DevListItem>
							사내에서 기존에 사용하던 VanilaJS폼에서 React + Typescript 개발
							환경 구축 및 문서 작성
						</DevListItem>
						<DevListItem>Material-UI를 활용하여 UI 개발 및 디자인</DevListItem>
						<DevListItem>Ant-Design을 활용하여 UI 개발 및 디자인</DevListItem>
						<DevListItem>
							상태관리를 위해 Zustand, Recoil, Redux를 사용해보며 최종적으로
							Redux 적용
						</DevListItem>
						<DevListItem>
							기존에 화면을 새로고침해야만 데이터를 불러오던 방식을 swr을
							사용하여 데이터를 실시간으로 불러오도록 변경
						</DevListItem>
					</DevList>
					<DevPart>백엔드 개발</DevPart>
					<DevList>
						<DevListItem>
							AWS Lambda + Node.js를 이용한 모니터링 서버리스 백엔드 개발
						</DevListItem>
						<DevListItem>
							AWS RDS를 이용한 데이터베이스 설계 및 구축
						</DevListItem>
						<DevListItem>
							각 함수별로 저장되어 유지보수가 힘들었던 Lambda 함수들을 하나의
							Application으로 통합하여 관리
						</DevListItem>
						<DevListItem>
							기존 AWS Lambda + Node.js로 되어있던 백엔드를 AWS Lambda +
							NestJS로 변경 및 개발 환경 구축
						</DevListItem>
						<DevListItem>
							여러 가지의 테이블로 되어있으며 관리와 정의가 미흡한 DynamoDB
							테이블을 정리하여 앱 단위로 pk, sk를 명확히 정의하여 Single Table
							Design 적용 및 개선
						</DevListItem>
					</DevList>
				</div>
			</div>
		</SectionWrapper>
	);
});

export default Experience;
