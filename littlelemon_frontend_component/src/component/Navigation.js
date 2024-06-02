import { Link } from 'react-router-dom';
import styled from'styled-components'

const Navigations = styled.nav`
	list-style-type: none;
	padding-right: 6%;
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
	
	text-align: center;
	padding: 2%;
	text-decoration: none;
`

export default function Navigation () {
	return (
		<>
			<Navigations>
				<Anchor><Link to="/" className='head3'>Home</Link></Anchor>
				<Anchor><Link to="/booking-page" className='head3'>Bookings</Link></Anchor>
				<Anchor><Link to="/about" className='head3'>About</Link></Anchor>
				<Anchor><Link to="/testimonial" className='head3'>Testimonial</Link></Anchor>
				<Anchor><Link to="/contact" className='head3'>Contact</Link></Anchor>
			</Navigations>
		</>
	)
}
