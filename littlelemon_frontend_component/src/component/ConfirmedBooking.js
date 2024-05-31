import { useContext } from "react";
import { BookingContext } from '../component/BookingContext';
import styled from "styled-components";

const Background = styled.div`
	background-color: #495E57;
	color: white;
	// color: #F4CE14;
	border-radius: 2%;
	// height: auto;
	// min-height: 10vh; /* Default minimum height */
	padding-top: 1%;
	padding-bottom: 2%;
	// padding-left: 10%;
	// padding-right: 10%;
	// display: ${ ({$booking}) => $booking ? 'grid' : 'flex'};
	// justify-content: center;

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
const SpanText = styled.span`
	color: #F4CE14;
`
export default function ConfirmedBooking(props) {
	// Access submit state
	const { submit } = useContext(BookingContext);
    return (
		<>
			<div className='App'>
				<Background style={{
					textAlign: 'center'
				}}>
					<h1><SpanText>Booking Confirmed!!!</SpanText></h1>
					<h2>Please provide your name and contact number at the reception upon arrival</h2>
					<h2>We are excited to serve you</h2>
					<div style={{
						display: 'grid',
						// justifyContent: 'center',
						// alignItems: 'center',
						gridTemplateColumns: '1fr 1fr',
						gridGap: '2%',
						padding: '10px',
					}}>
						<div>
							<h3>Firstname: <SpanText>{submit.firstname}</SpanText></h3>
							<h3>Lastname: <SpanText>{submit.lastname}</SpanText></h3>
							<h3>Phone No.: <SpanText>{submit.contactNumber}</SpanText></h3>
							<h3>Email: <SpanText>{submit.email}</SpanText></h3>
						</div>
						<div>
							<h3>Date: <SpanText>{submit.date}</SpanText></h3>
							<h3>Time: <SpanText>{submit.time}</SpanText></h3>
							<h3>Number of Guest: <SpanText>{submit.noOfGuests}</SpanText></h3>
							<h3>Occassion: <SpanText>{submit.occasion}</SpanText></h3>
						</div>
					</div>
					<div>
						<h3>Type: <SpanText>{submit.selectedOption}</SpanText></h3>
					</div>
				</Background>
			</div>
		</>
    )
}
