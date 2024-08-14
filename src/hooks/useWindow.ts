import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useWindow = () => {
	const [window, setWindow] = useState<"pc" | "mobile">("pc");

	const isPc = useMediaQuery({
		query: "(min-width: 1024px)",
	});

	const isMobile = useMediaQuery({
		query: "(max-width: 1024px)",
	});

	useEffect(() => {
		if (isPc) {
			setWindow("pc");
		} else if (isMobile) {
			setWindow("mobile");
		}
	}, [isPc, isMobile]);

	return window;
};

export default useWindow;
