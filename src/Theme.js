export const lightTheme = {
	body: {
		backgroundColor: "var(--Light200)",
	},
	text: {
		colorH1: "var(--Dark100)",
		colorH2: "var(--Dark100)",
		colorH3: "var(--Dark100)",
		colorH4: "var(--Primary)",
		colorParagraph: "var(--Neutral200)",
	},
	card: {
		backgroundColor: "var(--Light100)",
	},
	button: {
		variants: {
			primary: {
				backgroundColor: "var(--Primary)",
				color: "var(--Light100)",
				hover: {
					backgroundColor: "var(--Secondary)",
				},
			},
			primaryDisabled: {
				color: "var(--Light100)",
				backgroundColor: "var(--Neutral300)",
			},
			secondary: {
				backgroundColor: "var(--LightBg100)",
				color: "var(--Primary)",
				hover: {
					backgroundColor: "var(--LightBg200)",
				},
			},
		},
	},
	input: {
		backgroundColor: "var(--Light100)",
		color: "var(--Dark100)",
		placeholder: {
			color: "var(--Neutral200)",
		},
	},
	checkbox: {
		color: "var(--Dark100)",
	},
};

export const darkTheme = {
	body: {
		backgroundColor: "var(--Dark200)",
	},
	text: {
		colorH1: "var(--Light100)",
		colorH2: "var(--Light100)",
		colorH3: "var(--Light100)",
		colorH4: "var(--Primary)",
		colorParagraph: "var(--Neutral100)",
	},
	card: {
		backgroundColor: "var(--DarkBg100)",
	},
	button: {
		variants: {
			primary: {
				backgroundColor: "var(--Primary)",
				color: "var(--Light100)",
				hover: {
					backgroundColor: "var(--Secondary)",
				},
			},
			primaryDisabled: {
				color: "var(--Light100)",
				backgroundColor: "var(--Neutral100)",
			},
			secondary: {
				backgroundColor: "var(--DarkBg200)",
				color: "var(--Light100)",
				hover: {
					backgroundColor: "var(--DarkBg300)",
				},
			},
		},
	},
	input: {
		backgroundColor: "var(--DarkBg100)",
		color: "var(--Light100)",
		placeholder: {
			color: "var(--Neutral100)",
		},
	},
	checkbox: {
		color: "var(--Light100)",
	},
};
