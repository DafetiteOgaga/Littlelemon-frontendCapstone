import Hero from './Hero';
import BookingForm from './BookingForm';
import { submitAPI } from "../API/api"
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import { BookingContext } from "../component/BookingContext";

export default function BookingPage () {
	const { state } = useContext(BookingContext);
	const navigate = useNavigate();

	const submitForm = (formData) => {
		const isSubmitted = submitAPI(formData);
		if (isSubmitted) {
			navigate("/confirmed");
		}
	}
	return (
        <>
		    <Hero booking={true} />
			<BookingForm availableTimes={state.availableTimes}
							// dispatchTimes={dispatchTimes}
							submitForm={submitForm}/>
        </>
    )
}