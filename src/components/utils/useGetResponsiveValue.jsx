import { down, between } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

export default function useGetResponsiveValue() {
	const isMobile = useBreakpoint(down("md"));
	const isTablet = useBreakpoint(between("md", "xl"));

	const getResponsiveValue = (mobile, tablet, desktop) => {
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
