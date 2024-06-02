import './App.css';
import About from './component/About';
import Navigation from './component/Navigation';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import BookingPage from './component/BookingPage';
import NotFound from './component/NotFound';
import Home from './component/Home';
import ConfirmedBooking from './component/ConfirmedBooking';
import Logo from './component/Logo';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'

// import BookingForm from './component/BookingForm';
// import Hero from './component/Hero';
// import Highlights from './component/Highlights';


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  // all viewport height
  // height: 100vh;
`
const HeaderContainer = styled.header`
  // display: grid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // grid-template-columns: 1fr 1fr;
  margin-top: 2%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
    place-items: center;
  }
  @media (max-width: 480px) {
      padding: 1% 3%;
      font-size: 60%;
  }
`

// const HEaders = () => {
//   return (
//     <>
//       <Logo />
//       <Navigation />
//     </>
//   )
// }

const BodyContainer = styled.div``
function App() {
  return (
    <MainContainer>
      <Router>
        <HeaderContainer className='App'>
          <Logo />
          <Navigation />
        </HeaderContainer>
        <BodyContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/booking-page" element={<BookingPage/>} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="/BookingForm" element={<BookingForm />}></Route> */}
            {/* <Route path="/header" element={<HEaders/>} /> */}
            {/* <Route path="/booking-form" element={<BookingForm />} /> */}
            {/* <Route path="/hero" element={<Hero />} /> */}
            {/* <Route path="/highlights" element={<Highlights />} /> */}

          </Routes>
        </BodyContainer>
        <Footer className='App'/>
      </Router>
    </MainContainer>
  );
}

export default App;
