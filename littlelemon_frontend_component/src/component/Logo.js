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

	// @media (max-width: 480px) {
	// 	min-height: 10vh;
	// }
`
const LogoImage = styled.img`
	height: 60px;

	// @media (max-width: 480px) {
	// 	justify-content: center;
	// }
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
