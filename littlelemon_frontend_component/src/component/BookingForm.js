import { useState, useContext } from "react";
import styled from 'styled-components';
import { BookingContext } from '../component/BookingContext';

const FormStyle = styled.form`
// display: grid;
// max-width: 200px;
// gap: 20px
`
const Label = styled.label`
	font-size: 130%;
	padding-right: ${ ({$diff}) => ( $diff ? '4.3%' : '3%' )};
	// padding-top: ${ ({$diff}) => ( $diff ? '100%' : '0' )};
`
const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 4%;
	padding-left: 5%;
	padding-right: 5%;
	margin-bottom: 1%;
`
const RadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	// gap: 4%;
	padding-top: 3%;
	// padding-left: 5%;
	// padding-right: 5%;
	// margin-bottom: 7%;
`
const RadioInnerDiv = styled.div`
	padding-bottom: 3%;
`
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 3%;
`
const ButtonBox = styled.div`
	background-color: #F4CE14;
	height: 18%;
	width: ${ ({$booking}) => $booking ? '12%' : '35%' };
	padding-top: ${ ({$booking}) => $booking ? '1.2%' : '1.8%' };
	// padding-top: ${ ({$booking}) => $booking ? '1.2%' : '3%' };
	padding-bottom: ${ ({$booking}) => $booking ? '1.2%' : '1.8%' };
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
	border-radius: 2%;
	// height: auto;
	// min-height: 10vh; /* Default minimum height */
	padding-top: 2%;
	padding-bottom: 2%;
	margin-bottom: 2%;
	// padding-left: 10%;
	// padding-right: 10%;
	// display: flex;
	// justify-content: center;
	// align-items: center;
	// flex-direction: column;

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
const LightBackground = styled.div`
	background-color: #EDEFEE;
	padding: 2%;
	border-radius: 3%;
	display: inline-flex;
	width: 100%
	// height: auto;
	// min-height: 10vh; /* Default minimum height */
	// padding-top: 5%;
	// padding-bottom: 5%;
	// padding-left: 10%;
	// padding-right: 10%;
	`

const initValues = {
	firstname: "",
	lastname: "",
	contactNumber: "",
	email: "",
	date: "",
	time: "",
	noOfGuests: "1",
	occasion: "",
	selectedOption: "",
}
const currentDate = new Date().toISOString().split("T")[0];

export default function BookingForm (props) {

	const { dispatchTimes, setSubmit } = useContext(BookingContext);
	const [ form, updateForm] = useState(initValues)
	const handleForm = (e) => {
		const { name, value } = e.target;
		updateForm((prevItems) => ({
			...prevItems, [name]: value,
		}))
	}

	// const handleDateChange = async (e) => {
	const handleDateChange = (e) => {
		const { name, value } = e.target
		updateForm((prevItems) => ({
			...prevItems, [name]: value,
		}))
		// Dispatch action to update times
		dispatchTimes({ type: 'UPDATE_TIMES', payload: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const submit = form
		if (submit.date.trim() && submit.time.trim() &&
			submit.noOfGuests.trim() && submit.occasion.trim() &&
			submit.selectedOption.trim() && submit.firstname.trim() &&
			submit.lastname.trim() && submit.contactNumber.trim() &&
			submit.email.trim()) {
			setSubmit(submit);
			props.submitForm(submit);
			updateForm(initValues);
			}
	}
	return (
		<>
			<div style={{
				paddingLeft: '13%',
				paddingRight: '13%',
				paddingTop: '3%',
			}}>
			<FormStyle className='App' onSubmit={handleSubmit}>
				<Background>
					<FlexContainer>
						<LightBackground>
							<Label htmlFor="firstname">First:</Label>
							<input
								type="text"
								value={form.firstname}
								onChange={handleForm}
								id="firstname"
								name="firstname"
								placeholder="Firstname"
								autoComplete="given-name">
								</input>
						</LightBackground>
						<LightBackground>
							<Label htmlFor="lastname">Last:</Label>
							<input
								type="text"
								value={form.lastname}
								onChange={handleForm}
								id="lastname"
								name="lastname"
								placeholder="Lastname"
								autoComplete="family-name">
							</input>
						</LightBackground>
					</FlexContainer>
					<FlexContainer>
						<LightBackground>
							<Label htmlFor="contactNumber">Phone:</Label>
							<input
								type="tel"
								value={form.contactNumber}
								onChange={handleForm}
								id="contactNumber"
								name="contactNumber"
								placeholder="Phone Number"
								autoComplete="tel">
							</input>
						</LightBackground>
						<LightBackground>
							<Label htmlFor="email">Email:</Label>
							<input
								type="email"
								value={form.email}
								onChange={handleForm}
								id="email"
								name="email"
								placeholder="Email"
								autoComplete="email">
							</input>
						</LightBackground>
					</FlexContainer>
				</Background>

				<Background>
					<FlexContainer>
						<LightBackground>
							<Label htmlFor="res-date">Choose date:</Label>
							<input
								required min={currentDate}
								type="date"
								value={form.date}
								onChange={handleDateChange}
								id="res-date"
								name="date">
							</input>
						</LightBackground>
						<LightBackground>
							<Label htmlFor="res-time">Choose time:</Label>
							<select
								id="res-time"
								name="time"
								value={form.time}
								onChange={handleForm}>
									{props.availableTimes.map((times, index) => (
										<option key={index}>
											{times}
										</option>
										))}
							</select>
						</LightBackground>
					</FlexContainer>
					<FlexContainer>
						<LightBackground>
							<Label htmlFor="guests">Number of guests:</Label>
							<input
								type="number"
								value={form.noOfGuests}
								placeholder="0"
								min="1" max="10"
								id="guests"
								name="noOfGuests"
								// onChange={HandleGuests}
								onChange={handleForm}>
							</input>
						</LightBackground>
						<LightBackground>
							<Label htmlFor="occasion">Occasion:</Label>
							<select
								id="occasion"
								name="occasion"
								value={form.occasion}
								// onChange={HandleOccassion}
								onChange={handleForm}>
									<option>Select Occasion</option>
									<option>Birthday</option>
									<option>Anniversary</option>
									<option>Wedding</option>
									<option>Other</option>
							</select>
						</LightBackground>
					</FlexContainer>
				</Background>
				<RadioContainer>
					<RadioInnerDiv>
						<Label htmlFor="cbox1">Standard</Label>
							<input
								type="radio"
								value="standard"
								id="cbox1"
								name="selectedOption"
								checked={form.selectedOption === "standard"}
								// onChange={handleRadioChange}
								onChange={handleForm}>
							</input>
					</RadioInnerDiv>
					<RadioInnerDiv>
						<Label $diff htmlFor="cbox2">Outside</Label>
							<input
								type="radio"
								value="outside"
								id="cbox2"
								name="selectedOption"
								checked={form.selectedOption === "outside"}
								// onChange={handleRadioChange}
								onChange={handleForm}>
							</input>
					</RadioInnerDiv>
				</RadioContainer>
				<ButtonContainer>
					<ButtonBox>
						<Button>Make Your reservation</Button>
						{/* <input type="submit" value="Make Your reservation" /> */}
					</ButtonBox>
				</ButtonContainer>
			</FormStyle>
			</div>
		</>
	)
}
