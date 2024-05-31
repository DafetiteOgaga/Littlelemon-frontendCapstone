import greeksalad from "../llemon_asset/greekSalad.jpg"
import bruchetta from "../llemon_asset/bruchetta.jpg"
import lemonDessert from "../llemon_asset/lemonDessert.jpg"
import styled from "styled-components"
import deliveryLogo from "../llemon_asset/deliveryLogo.svg"
import { useNavigate } from 'react-router-dom';

// export default function Highlights () {
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

		// @media (max-width: 1030px) {
		// 	padding-top: 5%;
		// }
		// @media (max-width: 1000px) {
		// 	padding-top: 0;
		// }
	`
	const GridContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2%;
		margin-top: 12%;
		margin-bottom: 3%;

		// @media (max-width: 560px) {
		// 	margin-top: 16%;
		// }
		// @media (max-width: 400px) {
		// 	margin-top: 20%;
		// }
	`
	const Image = styled.img`
		width: ${ ({$hlight})=> $hlight ? '100%' : '70%'};
		height: ${ ({$hlight})=> $hlight ? '100%' : '140%'};
		border-top-left-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		border-top-right-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		border-bottom-left-radius: ${ ({$hlight})=> $hlight ? '0' : '3.25rem'};
		border-bottom-right-radius: ${ ({$hlight})=> $hlight ? '0' : '3.25rem'};

		// @media (max-width: 1000px) {
		// 	height: 125%;
		// 	border-top-left-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		// 	border-top-right-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		// }
		// @media (max-width: 740px) {
		// 	height: 125%;
		// 	border-top-left-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		// 	border-top-right-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		// }
		// @media (max-width: 480px) {
		// 	height: 130%;
		// 	border-top-left-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		// 	border-top-right-radius: ${ ({$hlight})=> $hlight ? '20%' : '3.25rem'};
		// }
	`
	const Head1 = styled.h1`
		color: black;
		font-size: 250%;
		margin-bottom: 0;
		margin-top: 0;

		// @media (max-width: 1000px) {
		// 	font-size: 175%;
		// }
		// @media (max-width: 740px) {
		// 	font-size: 140%;
		// }
		// @media (max-width: 480px) {
		// 	font-size: 100%;
		// }
	`
	const ButtonBox = styled.div`
		background-color: #F4CE14;
		height: 110%;
		width: 50%;
		border-radius: 30px;
		border-style: hidden;
		display: flex;
		justify-self: end;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		// @media (max-width: 1221px) {
		// 	height: 130%;
		// }
		// @media (max-width: 613px) {
		// 	width: 60%;
		// }
		// @media (max-width: 480px) {
		// 	width: 70%;
		// }

		&:hover {
			background-color: #fddd50;
		}
		&:active {
			background-color: #6e6a52;
		}
	`
	const Button = styled.button`
		background-color: transparent;
		font-weight: 900;
		border-style: hidden;
		font-size: 170%;
		text-align: center;
		display: inline-flex;
		cursor: pointer;

		// @media (max-width: 1221px) {
		// 	font-size: 170%;
		// }
		// @media (max-width: 1000px) {
		// 	font-size: 130%;
		// }
		// @media (max-width: 740px) {
		// 	font-size: 100%;
		// }
		// @media (max-width: 480px) {
		// 	font-size: 80%;
		// }

		&:active {
			color: white
		}
	`
	const LightBackground = styled.div`
		background-color: #EDEFEE;
		height: 100%;
		width: 20%;
		border-top-left-radius: 20%;
		border-top-right-radius: 20%;
		margin-right: 2%;
		margin-left: 2%;

		// @media (max-width: 1000px) {
		// 	padding-bottom: 1%;
		// }
	`
	const SpecialsContainer = styled.div`
		display: flex;
		justify-content: space-between;
		padding: 0 5%;
	`
	const Head3 = styled.h3`
		// @media (max-width: 1000px) {
		// 	font-size: 90%;
		// }
		// @media (max-width: 740px) {
		// 	font-size: 80%;
		// }
		// @media (max-width: 651px) {
		// 	font-size: 70%;
		// }
		// @media (max-width: 550px) {
		// 	font-size: 60%;
		// }
		// @media (max-width: 480px) {
		// 	font-size: 60%;
		// }
		// @media (max-width: 457px) {
		// 	font-size: 55%;
		// }
		// @media (max-width: 431px) {
		// 	font-size: 50%;
		// }
		// @media (max-width: 389px) {
		// 	font-size: 45%;
		// }
    `
	const Paragraph = styled.p`
		margin-top: 0;

		// @media (max-width: 1000px) {
		// 	font-size: 90%;
		// }
		// @media (max-width: 740px) {
		// 	font-size: 80%;
		// }
		// @media (max-width: 651px) {
		// 	font-size: 65%;
		// }
		// @media (max-width: 550px) {
		// 	font-size: 60%;
		// }
		// @media (max-width: 480px) {
		// 	font-size: 55%;
		// }
		// @media (max-width: 400px) {
		// 	font-size: 50%;
		// }
	`
	const Background = styled.div`
		// padding-left: 10%;
		// padding-right: 10%;

		// @media (max-width: 1000px) {
		// 	padding-left: 10%;
		// 	padding-right: 10%;
		// }
		// @media (max-width: 480px) {
		// 	padding-left: 10%;
		// 	padding-right: 10%;
		// }
	`
export default function Highlights () {
	const navigate = useNavigate();
	const submitForm = () => navigate("/booking-page");
	return (
		<>
			<Section>
				<Background className='App'>
					<GridContainer>
						<Head1>Specials!</Head1>
						<ButtonBox onClick={submitForm}>
							<Button>Online menu</Button>
						</ButtonBox>
					</GridContainer>
					<FlexContainer>
						{specials.map((special, index) => (
							<LightBackground key={index}>
								<Image $hlight src={special.image} alt={special.name} />
								<SpecialsContainer>
									<Head3>{special.name}</Head3>
									<Head3 style={{ color: '#EE9972' }}>${special.price}</Head3>
								</SpecialsContainer>
								<SpecialsContainer>
									<Paragraph>{special.description}</Paragraph>
								</SpecialsContainer>
								<SpecialsContainer>
									<Paragraph>{special.delivery}</Paragraph>
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
