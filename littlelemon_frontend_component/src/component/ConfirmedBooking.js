import { useContext } from "react";
import { BookingContext } from '../component/BookingContext';
import styled from "styled-components";

const Background = styled.div`
	background-color: #495E57;
	color: white;
	border-radius: 1.9rem;
	padding: 3% 1.5%;
`
const SpanText = styled.span`
	color: #F4CE14;
`
export default function ConfirmedBooking(props) {
	// Access submit state
	const { submit } = useContext(BookingContext);
    return (
		<>
			<div className='App head3'>
				<Background style={{
					textAlign: 'center'
				}}>
					<h1 className="head1"><SpanText>Booking Confirmed!!!</SpanText></h1>
					<h2 style={{ color: "white"}} className="head2">Please provide your name and contact number at the reception upon arrival</h2>
					<h2 style={{ color: "white"}} className="head2">We are excited to serve you</h2>
					<div style={{
						display: 'grid',
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
