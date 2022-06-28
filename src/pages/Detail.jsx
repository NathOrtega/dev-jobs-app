import React from "react";
import { useParams } from "react-router-dom";
import { fetchOffer } from "../api";
import Card from "../components/Card";
import styled from "styled-components";
import {
	StyledHeading3,
	StyledParagraph,
	StyledHeading4,
} from "../components/designSystem/Typography";
import Button from "../components/Button";
import DetailsFragment from "../components/DetailsFragment";
import { BsDot } from "react-icons/bs";
import { up, down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import NotFound from "./NotFound";
import Loader from "../components/Loader";

const StyledLogo = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 15px;
	background-color: var(--Neutral100);
	background-image: url(${({ logoURL }) => logoURL});
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: -25px;
	left: 50%;
	transform: translateX(-50%);

	${up("md")} {
		width: 140px;
		height: 140px;
		border-radius: 6px 0 0 6px;
		top: 0;
		left: 0;
		transform: translateX(0);
	}
`;

const StyledAnchor = styled.a`
	text-decoration: none;
`;

const StyledHeaderCard = styled(Card)`
	position: absolute;
	top: 7em;
	left: 50%;
	transform: translateX(-50%);

	${up("md")} {
		width: 90%;
		height: 140px;
		top: 7.5em;
	}

	${up("xl")} {
		width: 730px;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	padding: 32px;
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	${up("md")} {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 40px 40px 40px 180px;
	}
`;

const StyledContentCard = styled(Card)`
	height: fit-content;
	padding: 40px 25px;
	margin: 210px auto 64px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	${up("md")} {
		width: 90%;
		margin: 8em auto 64px;
		padding: 48px;

		.offerBasicInfo {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 50px;

			div {
				display: flex;
				align-items: flex-start;
				flex-direction: column;
			}
		}
	}

	${up("xl")} {
		width: 730px;
	}
`;

const StyledFooterCard = styled(Card)`
	width: 100%;
	height: 96px;
	display: flex;
	align-items: center;
	justify-content: center;

	.container {
		.textContainer {
			display: none;
		}
	}

	${up("md")} {
		padding: 25px 40px;
		justify-content: space-between;

		.container {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-direction: row;

			.textContainer {
				display: block;
			}
		}
	}

	${up("xl")} {
		.container {
			width: 730px;
			margin: 0 auto;
		}
	}
`;

export default function Detail() {
	const params = useParams();
	const [offer, setOffer] = React.useState({});
	const [notFound, setNotFound] = React.useState(false);
	const isOfferEmpty = !Object.keys(offer).length;
	const isLoading = isOfferEmpty && !notFound;

	const isMobile = useBreakpoint(down("md"));

	React.useEffect(() => {
		fetchOffer(params.offerId)
			.then((offer) => {
				setOffer(offer);
			})
			.catch((error) => {
				if (error.message === "not found") {
					setNotFound(true);
				}
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<React.Fragment>
			{notFound ? (
				<NotFound />
			) : (
				<React.Fragment>
					<StyledHeaderCard>
						<Wrapper>
							<StyledLogo logoURL={offer.logo} />
							<div>
								<StyledHeading3 style={{ marginBottom: "8px" }}>
									{offer.company}
								</StyledHeading3>
								<StyledParagraph>
									{offer.company?.toLowerCase()}.com
								</StyledParagraph>
							</div>
							<StyledAnchor
								href={offer.website}
								target="_blank"
								rel="noreferrer"
							>
								<Button
									variant="secondary"
									style={isMobile ? { margin: "24px 0 0" } : { margin: "0" }}
								>
									Company Site
								</Button>
							</StyledAnchor>
						</Wrapper>
					</StyledHeaderCard>
					<StyledContentCard>
						<div className="offerBasicInfo">
							<div
								style={
									isMobile
										? { width: "100%", marginBottom: "50px" }
										: { width: "100%", margin: "0" }
								}
							>
								<StyledParagraph style={{ marginBottom: "8px" }}>
									{offer.postedAt} • {offer.contract}
								</StyledParagraph>
								<StyledHeading3 style={{ marginBottom: "8px" }}>
									{offer.position}
								</StyledHeading3>
								<StyledHeading4 color="var(--Primary)">
									{offer.location}
								</StyledHeading4>
							</div>
							<StyledAnchor href={offer.apply} target="_blank" rel="noreferrer">
								<Button
									variant="primary"
									style={
										isMobile
											? { width: "279px", marginBottom: "32px" }
											: { width: "279px", margin: "0" }
									}
								>
									Apply Now
								</Button>
							</StyledAnchor>
						</div>
						<StyledParagraph style={{ marginBottom: "66px" }}>
							{offer.description}
						</StyledParagraph>
						<DetailsFragment
							title="Requirements"
							description={offer.requirements?.content}
							icon={BsDot}
							listItems={offer.requirements?.items}
							style={{ marginBottom: "40px" }}
						/>
						<DetailsFragment
							title="What You Will Do"
							description={offer.role?.content}
							listItems={offer.role?.items}
						/>
					</StyledContentCard>
					<StyledFooterCard>
						<div className="container">
							<div className="textContainer">
								<StyledHeading3>{offer.position}</StyledHeading3>
								<StyledParagraph>{offer.company}</StyledParagraph>
							</div>
							<StyledAnchor href={offer.apply} target="_blank" rel="noreferrer">
								<Button variant="primary" style={{ width: "279px" }}>
									Apply Now
								</Button>
							</StyledAnchor>
						</div>
					</StyledFooterCard>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}
