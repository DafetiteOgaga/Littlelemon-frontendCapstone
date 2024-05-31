import './App.css';
import About from './component/About';
import Navigation from './component/Navigation';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Logo from './component/Logo';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import styled from 'styled-components'
import BookingPage from './component/BookingPage';
// import BookingForm from './component/BookingForm';
import ConfirmedBooking from './component/ConfirmedBooking';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  // ull viewport height
  height: 100vh;
`
const HeaderContainer = styled.header`
  flex: 1 1 auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  margin-top: 2%;

  // @media (max-width: 1000px) {
  //   flex-direction: column;
  //   align-items: flex-end;
  //   place-items: center;
  // }
  // @media (max-width: 480px) {
  //     padding: 1% 3%;
  //     font-size: 60%;
  }
`
const BodyContainer = styled.div`
  flex: 1 1 auto;
`
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
            <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
            {/* <Route path="/BookingForm" element={<BookingForm />}></Route> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BodyContainer>
        <Footer styled={{flex: `1 1 auto`}} className='App'/>
      </Router>
    </MainContainer>
  );
}

export default App;
