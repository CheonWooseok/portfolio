import {
	CalendarOutlined,
	GithubOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { forwardRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionWrapper } from "../App";

const AboutMe = forwardRef<HTMLDivElement>((props, ref) => {
	const Profile = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		width: 80%;
		height: 100%;
		flex-wrap: wrap;
	`;

	const ProfileInfo = styled.div`
		display: flex;
		/* justify-content: center; */
		align-items: center;
		height: 100%;
		font-size: 2rem;
		font-family: "NotosansKR";
		color: #333;
		flex-basis: 350px;
		padding: 20px;
		p {
			padding-left: 20px;
		}
	`;

	const Label = styled.p`
		font-size: 1.5rem;
		font-weight: 600;
	`;

	const Text = styled.p`
		font-size: 1.2rem;
		font-weight: 400;
	`;

	return (
		<SectionWrapper ref={ref}>
			<SectionTitle>About Me</SectionTitle>
			<Profile>
				<ProfileInfo>
					<UserOutlined />
					<p>
						<Label>이름</Label>
						<Text>천우석</Text>
					</p>
				</ProfileInfo>
				<ProfileInfo>
					<CalendarOutlined />
					<p>
						<Label>생년월일</Label>
						<Text>03.11.10</Text>
					</p>
				</ProfileInfo>
				<ProfileInfo>
					<PhoneOutlined />
					<p>
						<Label>전화번호</Label>
						<Text>010-3448-8442</Text>
					</p>
				</ProfileInfo>
				<ProfileInfo>
					<MailOutlined />
					<p>
						<Label>이메일</Label>
						<Text>rightsn1110@gmail.com</Text>
					</p>
				</ProfileInfo>
				<ProfileInfo>
					<GithubOutlined />
					<p>
						<Label>Github</Label>
						<Text>
							<a
								href="https://github.com/CheonWooseok"
								style={{
									color: "#3FA2F6",
									textDecoration: "none",
									fontWeight: "bold",
								}}
							>
								바로가기
							</a>
						</Text>
					</p>
				</ProfileInfo>
			</Profile>
		</SectionWrapper>
	);
});

export default AboutMe;
