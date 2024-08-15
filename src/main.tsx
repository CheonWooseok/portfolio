import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./fonts.css";
import GlobalStyle from "./styles/global-style.ts";

createRoot(document.getElementById("root")!).render(
	// <StrictMode>
	<>
		<GlobalStyle />
		<App />
	</>
	// </StrictMode>
);
