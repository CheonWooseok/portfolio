import { forwardRef } from "react";
import { SectionTitle, SectionWrapper } from "../App";
import TypescriptIcon from "../assets/icons/typscript.png";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
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
				}}
			>
				<img src={TypescriptIcon} alt="typescript" />
			</div>
		</SectionWrapper>
	);
});

export default Skills;
