import React from "react";
import FiltersBar from "../components/FiltersBar";
import styled from "styled-components";
import OfferCard from "../components/OfferCard";
import fetchData from "../api";
import Button from "../components/Button";
import { StyledHeading3 } from "../components/designSystem/Typography";
import ErrorBoundary from "../components/ErrorBoundary";
import { NoResultsAnimation } from "../components/animations/Lottie";
import Loader from "../components/Loader";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 82px auto 49px;
	max-width: 1250px;
`;
const NoResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function Home() {
	const [jobOffers, setJobOffers] = React.useState([]);
	const [filteredOffers, setFilteredOffers] = React.useState([]);
	const [visibleJobOffers, setVisibleJobOffers] = React.useState(6);
	const [isLoading, setIsLoading] = React.useState(false);

	const loadMoreJobOffers = () => {
		setVisibleJobOffers((prevValue) => {
			if (prevValue + 6 >= filteredOffers.length) {
				return filteredOffers.length;
			} else {
				return prevValue + 6;
			}
		});
	};

	React.useEffect(() => {
		setIsLoading(true);
		fetchData().then((data) => {
			setJobOffers(data);
			setFilteredOffers(data);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<React.Fragment>
			<ErrorBoundary>
				<div>
					<FiltersBar
						jobOffers={jobOffers}
						onSearch={(e) => setFilteredOffers(e)}
					/>
					{filteredOffers.length && !isLoading ? (
						<StyledContainer data-cy="offerCardsContainer">
							{filteredOffers
								.slice(0, visibleJobOffers)
								.map((offerInfo, index) => {
									return <OfferCard key={index} offerInfo={offerInfo} data-cy="offerCard" id={`offerInfo${offerInfo.id}`}/>;
								})}
							{visibleJobOffers < filteredOffers.length && (
								<ButtonContainer>
									<Button variant="primary" onClick={loadMoreJobOffers} data-cy="loadMore">
										Load More
									</Button>
								</ButtonContainer>
							)}
						</StyledContainer>
					) : (
						<NoResultsContainer data-cy="noResults">
							<NoResultsAnimation />
							<StyledHeading3>No matching results found</StyledHeading3>
						</NoResultsContainer>
					)}
				</div>
			</ErrorBoundary>
		</React.Fragment>
	);
}
