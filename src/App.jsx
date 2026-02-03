import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './Componants/Nav/Nav.jsx';
import HomeSection from './Componants/HomeSection/HomeSection.jsx';
import About from './Componants/About/About.jsx';
import ServiceSection from './Componants/ServiceSection/ServiceSection.jsx';
import WhyUs from './Componants/WhyUs/WhyUs.jsx';
import PortfolioSection from './Componants/PortfolioSection/PortfolioSection.jsx';
import Team from './Componants/Team/Team.jsx'
import Contact from './Componants/Contact/Contact.jsx'
import Footer from './Componants/Footer/Footer.jsx';
import Ecommerce from './Componants/ecommerce/Ecommerce.jsx';

import './App.css';

function App() {
  return (  
    <>
      <Nav />
      <HomeSection />
      <About />
      <ServiceSection />
      <WhyUs />
      <PortfolioSection />
      <Team />
      <Contact />
      <Footer/>
      <Ecommerce />
    </>
  );
}

export default App;


