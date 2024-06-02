import footlogo from '../llemon_asset/Asset 18@4x.png'
import styled from 'styled-components'

// export default function Footer () {
const FooterContainer = styled.footer`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 2%;
`
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 2.6%;

	@media (max-width: 1000px) {
		font-size: 0.875rem;
		padding: 2.4%;
	}
	@media (max-width: 580px) {
		font-size: 0.75rem;
		padding: 2%;
	}
	@media (max-width: 480px) {
		font-size: 0.75rem;
		padding: 2%;
	}
`
const LogoImage = styled.img`
	padding-top: 4%;
	height: 130px;

	@media (max-width: 1000px) {
		padding-top: 3.5%;
		height: 78px;
	}
	@media (max-width: 740px) {
		padding-top: 4%;
		// height: 78px;
	}
	@media (max-width: 480px) {
		padding-top: 3%;
		height: 48px;
	}
`
export default function Footer () {
	return (
		<>
			<FooterContainer>
				<LogoImage src={footlogo} alt="footer logo" />
				<GridContainer>
					<div>
						<p className='paragraph'>
							<span>Copyright © 2021</span><br></br>
							<span>Lemon Restaurant</span><br></br>
							<span>All rights reserved</span><br></br>
							<span>Privacy Policy</span><br></br>
							<span>Terms of Service</span><br></br>
						</p>
					</div>
					<div>
						<p className='paragraph'>
							<span>Social media:</span><br></br><br></br>
							<span><a href='www.facebook.com'>facebook</a></span><br></br>
							<span><a href='www.twitter.com'>twitter</a></span><br></br>
							<span><a href='www.linkedin.com'>linkedin</a></span>
						</p>
					</div>
					<div>
						<p className='paragraph'>
							<span>Address:</span><br></br>
							<span>123 Main Street City</span><br></br>
							<span>State 12345</span><br></br>
							<span>Phone: 123-456-7890</span><br></br>
							<span>Fax: 123-456-7890</span><br></br>
							<span>Email: 123-456-7890</span><br></br>
							<span>Hours: 123-456-7890</span>
						</p>
					</div>
				</GridContainer>
			</FooterContainer>
		</>
    );
}
