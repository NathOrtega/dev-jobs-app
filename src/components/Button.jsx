import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	width: 141px;
	height: 48px;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	font-weight: bold;
	background-color: ${({ variant, theme }) => {
		if (variant === "primary") {
			return theme.button.variants.primary.backgroundColor;
		} else if (variant === "secondary") {
			return theme.button.variants.secondary.backgroundColor;
		} else {
			return theme.button.variants.primaryDisabled.backgroundColor;
		}
	}};
	color: ${({ variant, theme }) => {
		if (variant === "primary") {
			return theme.button.variants.primary.color;
		} else if (variant === "secondary") {
			return theme.button.variants.secondary.color;
		} else {
			return theme.button.variants.primaryDisabled.color;
		}
	}};

	&:hover {
		background-color: ${({ variant, theme }) => {
			if (variant === "primary") {
				return theme.button.variants.primary.hover.backgroundColor;
			} else if (variant === "secondary") {
				return theme.button.variants.secondary.hover.backgroundColor;
			} else {
				return theme.button.variants.primaryDisabled.backgroundColor;
			}
		}};
		cursor: ${({ variant }) => {
			if (variant === "primary" || variant === "secondary") {
				return "pointer";
			} else {
				return "not-allowed";
			}
		}};
	}
`;

export default function Button({
	variant,
	style,
	children,
	onClick,
	disabled = false,
	className,
}) {
	const buttonVariant = variant.toLowerCase();

	const handleOnClick = () => {
		if (typeof onClick === "function") {
			onClick();
		}
	};

	return (
		<StyledButton
			variant={buttonVariant}
			style={style}
			onClick={handleOnClick}
			disabled={disabled}
			className={className}
		>
			{children}
		</StyledButton>
	);
}
