import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/HomePage/AboutSection";
import VideoSection from "../components/HomePage/VideoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import StepSection from "../components/HomePage/StepSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <VideoSection></VideoSection>

      <ServicesSection></ServicesSection>
      <StepSection></StepSection>
      <TestimonialSection></TestimonialSection>
     
     
    </div>
  );
};

export default Home;
