import greeksalad from "../llemon_asset/greekSalad.jpg"
import bruchetta from "../llemon_asset/bruchetta.jpg"
import lemonDessert from "../llemon_asset/lemonDessert.jpg"
import styled from "styled-components"
import deliveryLogo from "../llemon_asset/deliveryLogo.svg"
import { useNavigate } from 'react-router-dom';

const specials = [
	{
		image: greeksalad,
		name: "Greek Salad",
		price: 12.99,
		description: `It typically includes ripe tomatoes,
			cucumbers, red onion, green bell pepper, Kalamata
			olives, and a block of feta cheese, all seasoned
			with dried oregano and drizzled with extra virgin
			olive oil`,
		delivery: "Order a delivery",
	},
	{
		image: bruchetta,
		name: "Bruchetta",
		price: 5.99,
		description: `Consists of grilled bread rubbed with garlic
			and topped with a variety of fresh ingredients.
			It is garnished with diced tomatoes, fresh basil,
			and a drizzle of olive oil.`,
		delivery: "Order a delivery",
	},
	{
		image: lemonDessert,
		name: "Lemon Dessert",
		price: 5.00,
		description: `Delightful and tangy treat that perfectly
			balances sweetness with a refreshing citrus zest.
			Often features a smooth, creamy lemon filling made from
			fresh lemon juice and zest.`,
		delivery: "Order a delivery",
	},
]

const Section = styled.section``
const FlexContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 5%;
	margin-bottom: 2%;
`
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2%;
	margin-bottom: 3%;
`
const Image = styled.img`
	width: ${ ({$hlight})=> $hlight ? '100%' : '70%'};
	height: ${ ({$hlight})=> $hlight ? '100%' : '140%'};
	border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	border-bottom-left-radius: ${ ({$hlight})=> $hlight ? '0' : '3.25rem'};
	border-bottom-right-radius: ${ ({$hlight})=> $hlight ? '0' : '3.25rem'};

	@media (max-width: 1000px) {
		height: 125%;
		border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
		border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	}
	@media (max-width: 740px) {
		height: 125%;
		border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
		border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	}
	@media (max-width: 480px) {
		height: 130%;
		border-top-left-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
		border-top-right-radius: ${ ({$hlight})=> $hlight ? '1.5rem' : '3.25rem'};
	}
`
const Head1 = styled.h1`
	margin-bottom: 0;
`
const ButtonBox = styled.div`
	height: 110%;
	width: 50%;
	justify-self: end;
`
const Button = styled.button``
const LightBackground = styled.div`
	background-color: #EDEFEE;
	height: 100%;
	width: 20%;
	border-top-left-radius: 1.5rem;
	border-top-right-radius: 1.5rem;
	margin-right: 2%;
	margin-left: 2%;

	@media (max-width: 1000px) {
		padding-bottom: 1%;
	}
`
const SpecialsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 5%;
`
const Head3 = styled.h3`
	color: #444645;
`
const Paragraph = styled.p`
	margin-top: 0;
`
const Background = styled.div``
export default function Highlights () {
	const navigate = useNavigate();
	const submitForm = () => navigate("/booking-page");
	return (
		<>
			<Section>
				<Background className='App'>
					<GridContainer>
						<Head1 className='head1'>Specials!</Head1>
						<ButtonBox
							className="botton-box"
							onClick={submitForm}>
								<Button>Online menu</Button>
						</ButtonBox>
					</GridContainer>
					<FlexContainer>
						{specials.map((special, index) => (
							<LightBackground key={index}>
								<Image $hlight src={special.image} alt={special.name} />
								<SpecialsContainer>
									<Head3 className='head3'>{special.name}</Head3>
									<Head3 className='head3' style={{ color: '#EE9972' }}>${special.price}</Head3>
								</SpecialsContainer>
								<SpecialsContainer>
									<Paragraph className='paragraph'>{special.description}</Paragraph>
								</SpecialsContainer>
								<SpecialsContainer>
									<Paragraph className='paragraph'>{special.delivery}</Paragraph>
									<img
									style={{ width: '10%', paddingBottom: '10%' }}
									src={deliveryLogo}
									alt="delivery logo"
									/>
								</SpecialsContainer>
							</LightBackground>
						))}
					</FlexContainer>
				</Background>
			</Section>
		</>
	)
}
