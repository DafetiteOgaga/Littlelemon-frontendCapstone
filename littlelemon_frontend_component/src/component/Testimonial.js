import Dafe from "../llemon_asset/dafetite.jpeg"
import Ayanfe from "../llemon_asset/smiley"
import Elizabeth from "../llemon_asset/sitter"
import Famous from "../llemon_asset/lady"
import star from "../llemon_asset/star"
import styled from "styled-components"

// export default function Testimonial () {
const specials = [
	{
		image: Dafe,
		name: "Dafe",
		remark: "Excellent!",
		description: `Little Lemon is incredible and simply
			the best. I love how it operates, customer 
			service, etc.`,
		rating: 5,
		stars: [star, star, star, star, star],
	},
	{
		image: Ayanfe,
		name: "Ayanfe",
		remark: "Amazing!",
		description: `I've been eating at Little Lemon for a few
			years now. What a wonderful place.`,
		rating: 5,
		stars: [star, star, star, star, star],
	},
	{
		image: Elizabeth,
		name: "Elizabeth",
		remark: "Beautiful!",
		description: `I started eating at Little Lemon
			few weeks ago and i haven't been able to
			stop coming here.`,
		rating: 5,
		stars: [star, star, star, star, star],
	},
	{
		image: Famous,
		name: "Famous",
		remark: "Awesome!",
		description: `Thanks to Little Lemon i can now I can order for deliveries online.`,
		rating: 5,
		stars: [star, star, star, star, star],
	},
]
const Section = styled.section``
const FlexContainer = styled.div`
	display: flex;
	flex-direction: ${ ({$vertical}) => $vertical ? 'column' : 'row' };
	justify-content: ${ ({$noHorAlign}) => $noHorAlign ? 'start' : 'center' };
	align-items: ${ ({$NoVertAlign}) => $NoVertAlign ? 'none' : 'center'};
	padding-top: ${ ({$noPad}) => $noPad ? '8%' : '0'};

	@media (max-width: 1000px) {
		padding-top: ${ ({$noPad}) => $noPad ? '8%' : '0'};
	}
`
const Image = styled.img`
	width: ${ ({$hlight}) => $hlight ? '12%' : '70%'};
	height: ${ ({$hlight}) => $hlight ? '12%' : '140%'};
	border-radius: ${ ({$curve}) => $curve ? '2rem' : '0'};

	@media (max-width: 1119px) {
		width: ${ ({$hlight}) => $hlight ? '11%' : '100%'};
		height: ${ ({$hlight}) => $hlight ? '11%' : '125%'};
	}
	@media (max-width: 1000px) {
		width: ${ ({$hlight}) => $hlight ? '10%' : '100%'};
		height: ${ ({$hlight}) => $hlight ? '10%' : '125%'};
	}
	@media (max-width: 740px) {
		width: ${ ({$hlight}) => $hlight ? '12%' : '70%'};
		height: ${ ({$hlight}) => $hlight ? '12%' : '125%'};
	}
	@media (max-width: 642px) {
		width: ${ ({$hlight}) => $hlight ? '11%' : '70%'};
		height: ${ ({$hlight}) => $hlight ? '11%' : '125%'};
	}
	@media (max-width: 597px) {
		width: ${ ({$hlight}) => $hlight ? '10%' : '70%'};
		height: ${ ({$hlight}) => $hlight ? '10%' : '125%'};
	}
	@media (max-width: 480px) {
		width: ${ ({$hlight}) => $hlight ? '10%' : '100%'};
		height: ${ ({$hlight}) => $hlight ? '10%' : '130%'};
	}
`
const Head1 = styled.h1`
	color: white;
	margin-bottom: 4%;
`
const LightBackground = styled.div`
	background-color: #EDEFEE;
	height: 100%;
	width: 16%;
	border-radius: 1rem;
	padding: 1% .5%;
	margin-right: 1%;
	margin-left: 1%;

	@media (max-width: 1000px) {
		width: 17%;
	}
	@media (max-width: 740px) {
		width: 21%;
	}
	@media (max-width: 480px) {
		width: 24%;
	}
`
const Head3 = styled.h3`
	margin: 0 0;
	color: #444645;
`
const Paragraph = styled.p`
	margin-top: 0;
`
const Background = styled.div`
	height: auto;
	min-height: 10vh; /* Default minimum height */
	padding-top: 5%;
	padding-bottom: 5%;
`
export default function Testimonial () {
	return (
		<>
			<Section>
				<Background className='App main-background'>
					<FlexContainer>
						<Head1 className="head1">Testimonials</Head1>
					</FlexContainer>
					<FlexContainer>
					{specials.map((special, index) => (
						<LightBackground key={index}>
							<FlexContainer $noPad $noHorAlign>
								<Head3 className="head3">Rating:</Head3>
								{Array.from({ length: special.rating }).map((_, starIndex) => (
									<Image key={starIndex} $hlight src={star} alt="star logo" />
								))}
							</FlexContainer>
							<FlexContainer style={{gap: '6%'}} $noPad $noHorAlign>
								<Image
									$curve
									style={{
										width: '30%',
										// height: '1%',
									}}
									src={special.image} alt="my photo"
								/>
								<Head3 className="head3">{special.remark}</Head3>
							</FlexContainer>
							<FlexContainer $NoVertAlign $noHorAlign $vertical $noPad>
								<Head3 className="head3">Said:</Head3>
								<Paragraph className="paragraph">
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
