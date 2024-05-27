import './App.css';
import About from './component/About';
import Navigation from './component/Navigation';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import styled from 'styled-components'

function App() {
  const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 1% 10%;
  padding-left: 10%;
  padding-right: 10%;
  // width: 100%;
  // box-sizing: border-box;

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
  return (
    <div style={{
      marginTop: '2%',
    }}>
      <Router>
        <TopBarContainer>
          <Header />
          <Navigation />
        </TopBarContainer>
        <main>
        <div>
          <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/reservations" element={<Reservations />} /> */}
              <Route path="/testimonial" element={<Testimonial />} />
              {/* <Route path='/login' element={<Login />} /> */}
              {/* <Route path='/logout' element={<Logout />} /> */}
              {/* <Route path='/register' element={<Register />} /> */}
              <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
