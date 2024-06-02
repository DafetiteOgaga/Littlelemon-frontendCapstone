import logo from '../llemon_asset/Asset 16@4x.png'
import styled from 'styled-components'

// export default function Header () {
const HeaderContainer = styled.div`
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	// justify-content: center;
	gap: 20px;

	@media (max-width: 480px) {
		min-height: 10vh;
	}
`
const LogoImage = styled.img`
	height: 60px;

	@media (max-width: 1000px) {
		height: 50px;
	}
	@media (max-width: 740px) {
		height: 45px;
	}
	@media (max-width: 480px) {
		height: 40px;
	}
`
export default function Logo () {
	return (
		<>
			<HeaderContainer>
				<LogoImage src={logo} alt="page logo" />
			</HeaderContainer>
		</>
    )
}
