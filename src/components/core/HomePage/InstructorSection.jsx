import React from 'react';
import AboutImage from '../../../assets/Images/about_image.jpg'; 
import HighlightText from './HighLightText';
import { FaArrowRight } from 'react-icons/fa';
import CTAButton from '../HomePage/Button';

const AboutSection = () => {
  return (
    <section id="about_section" className="diffSection -mt-[50px]">
      <div className="max-w-maxContent mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Left part - Image */}
        <div className="w-full lg:w-1/2">
        <img
            src={AboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg object-cover object-center w-full h-auto lg:max-w-none border-none"
          />
        </div>

        {/* Right part - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">

          <h1 className="text-4xl font-semibold">
            What you think about us? <HighlightText text={"Educational Website"} />
          </h1>

          <p className="text-[16px] text-justify text-richblack-200 -mt-6">
            Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion, and directed research.
            Educational websites can include games, videos, or topic-related resources that act as tools to enhance learning and supplement classroom teaching. These websites help make the process of learning entertaining and attractive to students, especially in today's age.
            Using HTML (HyperText Markup Language), CSS (Cascading Style Sheet), JavaScript, we can make learning easier and more interesting.
          </p>

          <div className="flex gap-7">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Learning Today <FaArrowRight />
              </div>
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
              <div className="flex items-center gap-3">
                Book a Demo <FaArrowRight />
              </div>
            </CTAButton>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
