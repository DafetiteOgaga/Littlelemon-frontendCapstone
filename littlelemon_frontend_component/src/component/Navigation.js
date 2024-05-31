import { Link } from 'react-router-dom';
import styled from'styled-components'

const Navigations = styled.nav`
	list-style-type: none;
	// grid-column: 2
	display: flex;
	text-align: end;
	// justify-content: space-between;
	// width: 45%;

	// @media (max-width: 1206px) {
	// 	width: 65%;
	// }
	// @media (max-width: 1058px) {
	// 	width: 67%;
	// }
	// @media (max-width: 1018px) {
	// 	width: 69%;
	// }
	// @media (max-width: 1000px) {
	// 	flex-wrap: wrap;
	// }
`
const Anchor = styled.li`
	flex: 1 1 auto;
	
	// text-align: center;
	// padding: 1%;
	text-decoration: none;
`

export default function Navigation () {
	return (
		<>
			<Navigations>
				<Anchor><Link to="/">Home</Link></Anchor>
				<Anchor><Link to="/booking-page">Bookings</Link></Anchor>
				<Anchor><Link to="/about">About</Link></Anchor>
				<Anchor><Link to="/testimonial">Testimonial</Link></Anchor>
				<Anchor><Link to="/contact">Contact</Link></Anchor>
			</Navigations>
		</>
	)
}
