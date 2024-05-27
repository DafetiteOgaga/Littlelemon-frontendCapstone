import styled from "styled-components"
import fruitLogo from "../llemon_asset/Asset 7@4x.png"
import me from "../llemon_asset/dafetite.jpeg"

export default function About () {
	const Section = styled.section``
	const GridContainer = styled.div`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2%;
		padding-top: 8%;
		margin-bottom: 3%;
	`
	const Image = styled.img`
		position: absolute;
		top: 0%;
		left: 52%;
		height: 140%;

		@media (max-width: 1310px) {
			height: 120%;
		}
		@media (max-width: 1300px) {
			height: 100%;
		}
		@media (max-width: 1032px) {
			height: 80%;
		}
		@media (max-width: 1000px) {
			height: 90%;
		}
		@media (max-width: 903px) {
			height: 72%;
		}
		@media (max-width: 759px) {
			height: 58%;
		}
		@media (max-width: 740px) {
			height: 70%;
		}
		@media (max-width: 671px) {
			height: 60%;
		}
	`
	const Image2 = styled(Image)`
		top: 30%;
		left: 17%;
		height: 140%;
		border-radius: 15%;

		@media (max-width: 1310px) {
			height: 120%;
		}
		@media (max-width: 1300px) {
			height: 100%;
		}
		@media (max-width: 1032px) {
			height: 80%;
		}
		@media (max-width: 1000px) {
			height: 90%;
		}
		@media (max-width: 903px) {
			height: 72%;
		}
		@media (max-width: 759px) {
			height: 58%;
		}
		@media (max-width: 740px) {
			height: 70%;
		}
		@media (max-width: 671px) {
			height: 60%;
		}
		// @media (max-width: 719px) {
		// 	height: 90%;
		// }
	`
	const Head1 = styled.h1`
		color: black;
		font-size: 250%;
		margin-bottom: 0;
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
	const Head2 = styled.h2`
		font-size: 180%;
		margin-top: 0;

		@media (max-width: 1000px) {
			font-size: 120%;
		}
		@media (max-width: 740px) {
			font-size: 100%;
		}
		@media (max-width: 550px) {
			font-size: 80%;
		}
		@media (max-width: 480px) {
			font-size: 70%;
		}
	`
	const Paragraph = styled.p`
		margin-top: 0;

		@media (max-width: 1000px) {
			font-size: 90%;
		}
		@media (max-width: 740px) {
			font-size: 80%;
		}
		@media (max-width: 550px) {
			font-size: 60%;
		}
		@media (max-width: 480px) {
			font-size: 55%;
		}
	`
	const OverlappingImagesContainer = styled.div`
		position: relative;
		width: 95%;
		height: 100%;

		@media (max-width: 1000px) {
			width: 80%;
		}
	`
	const Background = styled.div`
		background-color: #EDEFEE;
		padding-left: 10%;
		padding-right: 10%;
		padding-bottom: 10%;

		@media (max-width: 1000px) {
			padding-left: 10%;
			padding-right: 10%;
		}
		@media (max-width: 480px) {
			padding-left: 10%;
			padding-right: 10%;
		}
	`
	return (
		<>
			<Section>
				<Background>
					<GridContainer>
						<div>
						<Head1>Little Lemon</Head1>
							<Head2>Chicago</Head2>
							<Paragraph>A traditional Mediterranean dish
							known for its fresh and simple ingredients. It
							typically includes ripe tomatoes, cucumbers, red
							onion, green bell pepper, Kalamata olives, and a
							block of feta cheese, all seasoned with dried
							oregano and drizzled with extra virgin olive oil.</Paragraph>
						</div>
						<OverlappingImagesContainer>
							<Image
							style={{
								width: '30%',
								}}
								src={fruitLogo}
								alt="delivery logo"
							/>
							<Image2 style={{
								width: '50%',
								}}
								src={me}
								alt="delivery logo"
							/>
						</OverlappingImagesContainer>
					</GridContainer>
				</Background>
			</Section>
		</>
	)
}
