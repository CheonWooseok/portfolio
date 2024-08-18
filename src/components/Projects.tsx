import { Tag } from "antd";
import { forwardRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionWrapper } from "../App";
import PortfolioImg from "../assets/screenshot/portfolio1.png";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
	const ProjectWrapper = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
	`;

	const Project = styled.div`
		background-color: white;
		width: 80%;
		min-height: 50vh;
		border-radius: 10px;
		padding: 20px;
		margin-top: 50px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;

	const ProjectMain = styled.div`
		display: flex;
		/* flex-direction: column; */
		justify-content: center;
		/* align-items: center; */
		/* width: 80%; */
		padding: 20px;
		width: 100%;
		height: 100%;
	`;

	const ProjectImage = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		margin: 0px 30px;

		img {
			width: 100%;
			height: 100%;
			border: 0.5px solid #999;
		}
	`;

	const ProjectTitle = styled.h2`
		margin: 20px;
		font-size: 2.5rem;
		font-weight: 800;
	`;

	const ProjectDescription = styled.p`
		font-size: 1.2rem;
		font-weight: 500;
		width: 100%;
	`;

	const ProjectInfo = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		/* margin-top: 50px; */
		width: 50%;
		height: 100%;
		flex-wrap: wrap;
	`;

	const ProjectStack = styled.div`
		display: flex;
		/* justify-content: center; */
		align-items: center;
		margin-top: 20px;
		width: 100%;
		height: 100%;
		flex-wrap: wrap;
	`;
	const ProjectStackTitle = styled.h3`
		font-size: 1.5rem;
		font-weight: 700;
		margin-right: 10px;
		font-family: "BlackHanSans";
	`;

	return (
		<SectionWrapper ref={ref} background="#36BA98">
			<SectionTitle>Projects</SectionTitle>
			<ProjectWrapper>
				<Project>
					<ProjectTitle>포트폴리오</ProjectTitle>
					<ProjectMain>
						<ProjectImage>
							<img src={PortfolioImg} alt="portfolio" loading="lazy" />
						</ProjectImage>
						<ProjectInfo>
							<ProjectDescription>
								포트폴리오로써 자신을 소개하기 위해 제작한 웹사이트입니다.
								<br />
								<br />
								React, Typescript, Styled-components, Ant-design을 사용하여
								제작하였습니다.
							</ProjectDescription>
							<ProjectStack>
								<ProjectStackTitle>URL : </ProjectStackTitle>
								<a
									href="http://wooseok-portfolio.s3-website.ap-northeast-2.amazonaws.com/"
									target="_blank"
									rel="noreferrer"
								>
									<Tag color="#333">URL</Tag>
								</a>
							</ProjectStack>
							<ProjectStack>
								<ProjectStackTitle>GitHub : </ProjectStackTitle>
								<a
									href="https://github.com/CheonWooseok/portfolio/"
									target="_blank"
									rel="noreferrer"
								>
									<Tag color="#333">GitHub</Tag>
								</a>
							</ProjectStack>

							<ProjectStack>
								<ProjectStackTitle>Stack : </ProjectStackTitle>
								<ReactTag />
								<TypescriptTag />
								<StyledComponentsTag />
								<AntDesignTag />
							</ProjectStack>
						</ProjectInfo>
					</ProjectMain>
				</Project>
			</ProjectWrapper>
		</SectionWrapper>
	);
});

const ReactTag = () => {
	return <Tag color="#61DAFB">React</Tag>;
};

const TypescriptTag = () => {
	return <Tag color="#007ACC">Typescript</Tag>;
};

const StyledComponentsTag = () => {
	return <Tag color="#DB7093">Styled-components</Tag>;
};

const AntDesignTag = () => {
	return <Tag color="#0170FE">Ant-design</Tag>;
};

export default Projects;
