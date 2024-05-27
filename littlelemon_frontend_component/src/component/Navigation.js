import { Link } from 'react-router-dom';
import styled from'styled-components'

export default function Navigation () {
	const Navigations = styled.nav`
		list-style-type: none;
		display: flex;
		justify-content: space-between;
		width: 55%;
		// padding: 0;
		// margin: 0;

		@media (max-width: 1206px) {
			width: 65%;
		}
		@media (max-width: 1058px) {
			width: 67%;
		}
		@media (max-width: 1018px) {
			width: 69%;
		}
		@media (max-width: 1000px) {
			flex-wrap: wrap;
		}
		`
	const Anchor = styled.li`
		flex: 1 1 auto;
		text-align: center;
		padding: 1%;
		text-decoration: none;
	`
	return (
		// <nav>
			<Navigations>
				<Anchor><Link to="/">Home</Link></Anchor>
				<Anchor><Link to="/contact">Contact</Link></Anchor>
				<Anchor><Link to="/about">About</Link></Anchor>
				<Anchor><Link to="/reservations">Reservations</Link></Anchor>
				<Anchor><Link to="/testimonial">Testimonial</Link></Anchor>
				<Anchor><Link to="/login">Login</Link></Anchor>
				<Anchor><Link to="/logout">Logout</Link></Anchor>
				<Anchor><Link to="/register">Register</Link></Anchor>
			</Navigations>
		// </nav>
	)
}
