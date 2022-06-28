import { down, between } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

export default function useResponsiveGetter(mobile, tablet, desktop) {
	const isMobile = useBreakpoint(down("md"));
	const isTablet = useBreakpoint(between("md", "xl"));

	const getResponsiveValue = () => {
		if (isMobile) {
			return mobile;
		} else if (isTablet) {
			return tablet;
		} else {
			return desktop;
		}
	};

	return getResponsiveValue;
}
