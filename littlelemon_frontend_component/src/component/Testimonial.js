import Dafe from "../llemon_asset/dafetite.jpeg"
import Ayanfe from "../llemon_asset/smiley"
import Elizabeth from "../llemon_asset/sitter"
import Famous from "../llemon_asset/lady"
import star from "../llemon_asset/star"
import styled from "styled-components"

export default function Testimonial () {
	const specials = {
		DafeKey: {
			image: Dafe,
            name: "Dafe",
			remark: "Excellent!",
            description: `Little Lemon is incredible and simply
				the best. I love how it operates, customer 
				service, etc.`,
            rating: 5,
            stars: [star, star, star, star, star],
		},
		AyanfeKey: {
			image: Ayanfe,
            name: "Ayanfe",
			remark: "Amazing!",
            description: `I've been eating at Little Lemon for a few
				years now. What a wonderful place.`,
            rating: 5,
            stars: [star, star, star, star, star],
		},
		ElizabethKey: {
			image: Elizabeth,
            name: "Elizabeth",
			remark: "Beautiful!",
            description: `I started eating at Little Lemon
				few weeks ago and i haven't been able to
				stop coming here.`,
            rating: 5,
            stars: [star, star, star, star, star],
		},
		FamousKey: {
			image: Famous,
            name: "Famous",
			remark: "Awesome!",
            description: `Thanks to Little Lemon i can now I can order for deliveries online.`,
            rating: 5,
            stars: [star, star, star, star, star],
		},
	}
	const Section = styled.section``
	const FlexContainer = styled.div`
		display: flex;
		flex-direction: ${props => (props.vertical ? 'column' : 'row')};
		justify-content: ${props => (props.noHorAlign ? 'start' : 'center')};
		align-items: ${props => (props.NoVertAlign ? 'none' : 'center')};
		padding-top: ${props => (props.noPad ? '8%' : '0')};

		@media (max-width: 1000px) {
			padding-top: ${props => (props.noPad ? '8%' : '0')};
		}
	`
	const Image = styled.img`
		width: ${props => (props.hlight ? '15%' : '70%')};
		height: ${props => (props.hlight ? '15%' : '140%')};
		border-radius: ${props => (props.curve ? '25%' : '0')};

		@media (max-width: 1000px) {
			width: ${props => (props.hlight ? '10%' : '100%')};
			height: ${props => (props.hlight ? '10%' : '125%')};
		}
		@media (max-width: 740px) {
			width: ${props => (props.hlight ? '14%' : '70%')};
			height: ${props => (props.hlight ? '14%' : '125%')};
		}
		@media (max-width: 480px) {
			width: ${props => (props.hlight ? '14%' : '100%')};
			height: ${props => (props.hlight ? '14%' : '130%')};
		}
	`
	const Head1 = styled.h1`
		color: white;
		font-size: 250%;
		margin-bottom: 4%;
		margin-top: 0;

		@media (max-width: 1000px) {
			font-size: 175%;
		}
		@media (max-width: 740px) {
			font-size: 140%;
		}
		@media (max-width: 480px) {
			font-size: 100%;
		}
	`
	const LightBackground = styled.div`
		background-color: #EDEFEE;
		height: 100%;
		width: 16%;
		border-radius: 15%;
		padding: 1% 1%;
		margin-right: 1%;
		margin-left: 1%;

		@media (max-width: 1000px) {
			width: 13%;
		}
		@media (max-width: 740px) {
            width: 17%;
        }
        @media (max-width: 480px) {
            width: 16%;
        }
	`
	const Head3 = styled.h3`
		margin: 0 0;

        @media (max-width: 1000px) {
            font-size: 90%;
        }
		@media (max-width: 867px) {
            font-size: 80%;
        }
		@media (max-width: 777px) {
            font-size: 75%;
        }
        @media (max-width: 740px) {
            font-size: 70%;
        }
		@media (max-width: 545px) {
            font-size: 62%;
        }
        @media (max-width: 484px) {
            font-size: 50%;
        }
		@media (max-width: 400px) {
			font-size: 45%;
		}
    `
	const Paragraph = styled.p`
		margin-top: 0;

		@media (max-width: 1000px) {
			font-size: 90%;
		}
		@media (max-width: 867px) {
            font-size: 80%;
        }
		@media (max-width: 777px) {
            font-size: 75%;
		}
		@media (max-width: 740px) {
			font-size: 70%;
		}
		@media (max-width: 545px) {
            font-size: 62%;
        }
		@media (max-width: 550px) {
			font-size: 60%;
		}
		@media (max-width: 484px) {
			font-size: 45%;
		}
		@media (max-width: 400px) {
			font-size: 40%;
		}
	`
	const Background = styled.div`
		background-color: #495E57;
		height: auto;
		min-height: 10vh; /* Default minimum height */
		padding-top: 5%;
		padding-bottom: 5%;
		padding-left: 10%;
		padding-right: 10%;
	`
	return (
		<>
			<Section>
				<Background>
					<FlexContainer>
						<Head1>Testimonials</Head1>
					</FlexContainer>
					<FlexContainer>
					{Object.values(specials).map((special, index) => (
						<LightBackground key={index}>
							<FlexContainer noPad noHorAlign>
								<Head3>Rating:</Head3>
								<Image hlight src={star} alt="star logo"/>
							</FlexContainer>
							<FlexContainer style={{justifyContent: 'space-between'}} noPad noHorAlign>
								<Image
									curve
									style={{
										width: '30%',
										// height: '1%',
									}}
									src={special.image} alt="my photo"
								/>
								<Head3>{special.remark}</Head3>
							</FlexContainer>
							<FlexContainer NoVertAlign noHorAlign vertical noPad>
								<Head3>Said:</Head3>
								<Paragraph>
									"{special.description}"
								</Paragraph>
							</FlexContainer>
						</LightBackground>
						))}
					</FlexContainer>
				</Background>
			</Section>
		</>
	)
}
