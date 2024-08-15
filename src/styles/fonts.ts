import { css } from "styled-components";
import BlackHanSans from "../fonts/BlackHanSans-Regular.ttf";
import NotoSansKR from "../fonts/NotoSansKR-VariableFont_wght.ttf";
import TiltNeon from "../fonts/TiltNeon-Regular-VariableFont_XROT,YROT.ttf";

export const fonts = css`
	@font-face {
		font-family: "BlackHanSans";
		src: url(${BlackHanSans});
		font-weight: 400;
		font-style: normal;
		/* font-display: optional; */
	}

	@font-face {
		font-family: "NotoSansKR";
		src: url(${NotoSansKR});
		/* font-weight: 400; */
		font-style: normal;
	}

	@font-face {
		font-family: "TiltNeon";
		src: url(${TiltNeon});
		font-weight: 400;
		font-style: normal;
	}
`;
