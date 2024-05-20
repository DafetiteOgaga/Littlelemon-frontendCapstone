// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navigation from './component/Navigation';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import Highlights from './component/Highlights';
import Main from './component/Main';

// function App() {

function App() {
  return (
    <>
      <div className='header-plus'>
        <Header />
        <Navigation />
      </div>
      <Hero />
      <Main />
      <Highlights />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}

export default App;
