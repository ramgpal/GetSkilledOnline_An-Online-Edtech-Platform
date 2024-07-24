import React from 'react';
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import PerfectPlatform from "../components/core/HomePage/body2";
import Features from "../components/core/HomePage/Feature";
import FeaturesSection from "../components/core/HomePage/Fourthsection";
import FAQSection from "../components/core/HomePage/Frequentlyaskques";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import StartSection from "../components/core/HomePage/StartSection";
import StatSection from "../components/core/HomePage/StatSection";
import useScrollToHash from '../hooks/useScrollToHash';   

const Home = () => {
  
  useScrollToHash();   

  return (
    <div className="mt-16 md:mt-0">
      <StartSection />
      <PerfectPlatform />
      <StatSection />

      <div id="about">
        <Features />
        <FeaturesSection />
        <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
          <InstructorSection />
        </div>
      </div>
    
      <FAQSection />
      <div className="relative mx-auto my-20 flex flex-col items-center justify-between gap-8 text-white mt-[30px] mb-[80px]">
        <h1 className="text-center text-4xl font-semibold -mb-[35px]"> Experiences shared by learners </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
