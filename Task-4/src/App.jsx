import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import { carousel } from './data/carouselData';
import CardSection from './components/CardSection/CardSection';
import Header from './components/Header/Header';
import Emergency from './components/Emergency/Emergency';
import About from './components/About/About';
import AwardsSection from './components/AwardsSection/AwardsSection';
import EnimSection from './components/EnimSection/EnimSection';
import Services from './components/Services/Services';
import Appointment from './components/Appointment/Appointment';
import Departments from './components/Departments/Departments';
import Testimonials from './components/Testimonials/Testimonials';
import Doctors from './components/Doctors/Doctors';
import GallerySection from './components/GallerySection/GallerySection';
import Pricing from './components/Pricing/Pricing';
import Fq from './components/Fq/Fq';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <Header/>
      <Hero CarousalData={carousel}/>
      <CardSection/>
      <Emergency textBtn={'Make an Appointment'}/>
      <About
       p={'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'}
      />
      <AwardsSection/>
      <EnimSection
      img={"./images/EnimSection/features.jpg"}
      />
      <Services/>
      <Appointment/>
      <Departments/>
      <Testimonials/>
      <Doctors/>
      <Pricing/>
      <Fq/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
