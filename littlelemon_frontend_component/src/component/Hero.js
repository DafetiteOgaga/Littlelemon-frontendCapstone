import hero2 from "../llemon_asset/heroPic.jpg"
import hero1 from "../llemon_asset/greek salad.jpg"
import styled from "styled-components"
// import { useContext } from "react"
// import { BookingContext } from '../component/BookingContext';
import { useNavigate } from 'react-router-dom';

const specials = {
		image: hero2,
		name: "Greek Salad",
		price: 12.99,
		description: `Little Lemon is a charming and inviting
			restaurant known for its vibrant and flavorful
			Mediterranean cuisine. Nestled in a cozy corner
			of the city, our delightful eatery specializes
			in fresh, simple, and delicious dishes that
			highlight the best of Mediterranean flavors. With
			a menu that features classic favorites like Greek
			Salad, Bruchetta, and a variety of delectable lemon
			desserts, Little Lemon offers a culinary journey
			that tantalizes the taste buds.`,
		delivery: "Order a delivery",
		bookingTitie: 'Reserve a Table for any Occasion',
	}
// const bookingVar = '({$booking}) => $booking';
const Section = styled.section``
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2%;
	margin-bottom: -20%;

	// @media (max-width: 1310px) {
	// 	margin-bottom: -19%;
	// }
	// @media (max-width: 1259px) {
	// 	margin-bottom: -18%;
	// }
	// @media (max-width: 1223px) {
	// 	margin-bottom: -13%;
	// }
	// @media (max-width: 1110px) {
	// 	margin-bottom: -11%;
	// }
	// @media (max-width: 1058px) {
	// 	margin-bottom: -6%;
	// }
	// @media (max-width: 1000px) {
	// 	margin-bottom: -11%;
	// }
	// @media (max-width: 1000px) {
	// 	margin-bottom: -8%;
	// }
	// @media (max-width: 886px) {
	// 	margin-bottom: -4%;
	// }
	// @media (max-width: 817px) {
	// 	margin-bottom: -2%;
	// }
	// @media (max-width: 740px) {
	// 	margin-bottom: -8%;
	// }
	// @media (max-width: 533px) {
	// 	margin-bottom: -6%;
	// }
`
const Article = styled.article`
	// max-width: 600%;
	// margin: 0 auto;
`
const Image = styled.img`
	width: 70%;
	height: 77%;
	border-radius: 10%;

	// @media (max-width: 1300px) {
	// 	// width: 100%;
	// 	// height: 120%;
	// }
	// @media (max-width: 1221px) {
	// 	height: 80%;
	// 	// width: 45%;
	// }
	// @media (max-width: 1110px) {
	// 	height: 80%;
	// }
	// @media (max-width: 1058px) {
	// 	height: 90%;
	// }
	// @media (max-width: 1000px) {
	// 	width: 70%;
	// 	// height: 85%;
	// }
	// @media (max-width: 886px) {
	// 	height: 100%;
	// }
	// @media (max-width: 740px) {
	// 	height: 90%;
	// }
	// @media (max-width: 533px) {
	// 	height: 95%;
	// 	// border-radius: 10%;
	// }
	// @media (max-width: 480px) {
	// 	height: 110%;
	// 	// border-radius: 10%;
	// }
`
const CenterImage = styled.div`
	display: flex;
	justify-content: ${ ({$booking}) => $booking ? 'center' : 'end' };
	height: ${ ({$booking}) => $booking ? '85%' : 'none' };
`
const Head1 = styled.h1`
	color: ${ ({$booking}) => $booking ? 'white' : '#F4CE14' };
	font-size: ${ ({$booking}) => $booking ? '240%' : '200%' };
	text-align: ${ ({$booking}) => $booking ? 'center' : 'left' };
	padding-bottom: ${ ({$booking}) => $booking ? '4.5%' : '0' };
	padding-top: ${ ({$booking}) => $booking ? '2%' : '0' };
	margin-bottom: 0;
	margin-top: 0;

	// // @media (max-width: 1000px) {
	// // 	font-size: 250%;
	// // }
	// @media (max-width: 740px) {
	// 	font-size: 140%;
	// }
	// @media (max-width: 665px) {
	// 	font-size: 120%;
	// }
	// @media (max-width: 583px) {
	// 	font-size: 100%;
	// }
	// @media (max-width: 480px) {
	// 	font-size: 110%;
	// }
	// @media (max-width: 450px) {
	// 	font-size: 95%;
	// }
`
const Head2 = styled.h2`
	font-size: 130%;
	margin-top: 0;
	margin-bottom: ${ ({$booking}) => $booking ? '0' : '1' };
	color: white;

	// // @media (max-width: 1000px) {
	// // 	font-size: 130%;
	// // }
	// @media (max-width: 740px) {
	// 	font-size: 100%;
	// }
	// @media (max-width: 665px) {
	// 	font-size: 85%;
	// }
	// @media (max-width: 583px) {
	// 	font-size: 70%;
	// }
	// @media (max-width: 480px) {
	// 	font-size: 70%;
	// }
	// @media (max-width: 450px) {
	// 	font-size: 60%;
	// }
`
const Paragraph = styled.p`
	font-size: 110%;
	color: white;

	// // @media (max-width: 1310px) {
	// // 	font-size: 90%;
	// // }
	// @media (max-width: 740px) {
	// 	font-size: 75%;
	// }
	// @media (max-width: 755px) {
	// 	font-size: 75%;
	// }
	// @media (max-width: 655px) {
	// 	font-size: 70%;
	// }
	// @media (max-width: 629px) {
	// 	font-size: 65%;
	// }
	// @media (max-width: 583px) {
	// 	font-size: 58%;
	// }
	// @media (max-width: 513px) {
	// 	font-size: 53%;
	// }
	// @media (max-width: 480px) {
	// 	font-size: 55%;
	// }
	// @media (max-width: 450px) {
	// 	font-size: 45%;
	// }
	// @media (max-width: 370px) {
	// 	font-size: 40%;
	// }
`
const ButtonBox = styled.div`
	background-color: #F4CE14;
	height: 8%;
	width: ${ ({$booking}) => $booking ? '12%' : '45%' };
	padding-top: ${ ({$booking}) => $booking ? '1.2%' : '0%' };
	padding-bottom: ${ ({$booking}) => $booking ? '1.2%' : '0%' };
	margin-left: ${ ({$booking}) => $booking ? '10%' : '0%' };
	border-radius: 30px;
	border-style: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	// @media (max-width: 1221px) {
	// 	height: 9%;
	// 	width: 45%;
	// }
	// @media (max-width: 1000px) {
	// 	height: 8%;
	// }
	// @media (max-width: 823px) {
	// 	height: 11%;
	// }
	// @media (max-width: 740px) {
	// 	height: 8%;
	// 	width: 40%;
	// }
	// @media (max-width: 613px) {
	// 	height: 9%;
	// 	width: 50%;
	// }
	// @media (max-width: 480px) {
	// 	height: 10%;
	// }
`
const Button = styled.button`
	background-color: transparent;
	font-weight: 900;
	border-style: hidden;
	font-size: 130%;
	text-align: center;
	display: inline-flex;
	cursor: pointer;

	// @media (max-width: 1000px) {
	// 	font-size: 85%;
	// }
	// @media (max-width: 740px) {
	// 	font-size: 70%;
	// }
	// @media (max-width: 480px) {
	// 	font-size: 50%;
	// }
`
const Background = styled.div`
	background-color: #495E57;
	// height: auto;
	// min-height: 10vh; /* Default minimum height */
	padding-top: ${ ({$booking}) => $booking ? '1.5%' : '5%' };
	padding-bottom: 2%;
	// padding-left: 10%;
	// padding-right: 10%;
	display: ${ ({$booking}) => $booking ? 'grid' : 'flex'};
	justify-content: center;

	// @media (max-width: 1000px) {
	// 	padding-bottom:0;
	// 	// padding-left: 10%;
	// 	// padding-right: 10%;
	// }
	// @media (max-width: 887px) {
	// 	// padding-bottom:4%;
	// }
	// @media (max-width: 825px) {
	// 	// padding-bottom:8%;
	// }
	// @media (max-width: 740px) {
	// 	padding-top: 4%;
	// 	padding-bottom: 0;
	// }
	// @media (max-width: 655px) {
	// 	// padding-bottom: 3%;
	// }
	// @media (max-width: 480px) {
	// 	padding-top: 4%;
	// 	padding-bottom: 4%;
	// 	// padding-left: 10%;
	// 	// padding-right: 10%;
	// }
`
export default function Hero (props) {
	const navigate = useNavigate();

	const submitForm = () => navigate("/booking-page");

	// const { dispatchTimes, setSubmit } = useContext(BookingContext);
	return (
		<>
			<Section>
				<Background className='App' $booking={props.booking} >{ props.booking ? (
					<Article >
						<Head1 $booking={props.booking}
						>{specials.bookingTitie}</Head1>
					</Article>
					) : (null)}
					<GridContainer>
						{ props.booking ? (
							<CenterImage $booking={props.booking}>
								<Image src={hero1} alt="hero image 1"/>
							</CenterImage>
							) : (
							<Article>
								<Head1>Little Lemon</Head1>
								<Head2>Chicago</Head2>
								<Paragraph>{specials.description}</Paragraph>
								<ButtonBox $booking={props.booking}>
									<Button onClick={submitForm}>Reserve a table</Button>
								</ButtonBox>
							</Article>
						)}
						<CenterImage $booking={props.booking}>
							<Image src={specials.image} alt="hero image 2"/>
						</CenterImage>
					</GridContainer>
				</Background>
			</Section>
		</>
	)
}
