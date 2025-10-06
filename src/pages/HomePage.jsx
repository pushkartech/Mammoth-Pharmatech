import React from "react";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TimelineSection from '../components/TimelineSection';
import ProductsSection from '../components/ProductsSection';
import PrinciplesSection from '../components/PrinciplesSection';
import ContactSection from '../components/ContactSection';

const HomePage = ()=>{
    return (
        <div className="App">
        <HeroSection/>
        <AboutSection/>
        <PrinciplesSection/>
        <TimelineSection/>
        <ProductsSection/>
        {/* <PartnersSection/> */}
        <ContactSection/>
      </div>
    );
}

export default HomePage;