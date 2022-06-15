import React from "react";
import lottie from "lottie-web";
import error from "./jsons/error.json";
import noResults from "./jsons/noResults.json";
import loader from "./jsons/loader.json";
import loadingText from "./jsons/loadingText.json";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const Container = styled.div`
	width: 300px;
	height: 300px;

	${up("md")} {
		width: 400px;
		height: 400px;
	}
`;

const TextContainer = styled.div`
	width: 100px;
	height: 100px;

	${up("md")} {
		width: 200px;
		height: 200px;
	}
`;

export function ErrorAnimation() {
	React.useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#errorImage"),
			animationData: error,
		});
	}, []);

	return <Container id="errorImage" />;
}

export function NoResultsAnimation() {
	React.useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#noResultsImage"),
			animationData: noResults,
		});
	}, []);

	return <Container id="noResultsImage" />;
}

export function Loader() {
	React.useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#loaderImage"),
			animationData: loader,
		});
	}, []);

	return <Container id="loaderImage" />;
}

export function LoadingText() {
	React.useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#loadingImage"),
			animationData: loadingText,
		});
	}, []);

	return <TextContainer id="loadingImage" />;
}
