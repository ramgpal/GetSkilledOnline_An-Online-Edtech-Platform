import React from "react"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import ContactForm from "../components/ContactPage/ContactForm"



const Contact = () => {
  return (

    <div className="mt-16 md:mt-0">
      
        <div className="flex mt-8 justify-center text-white">      
          <div className="lg:w-[60%]">  <ContactForm /> </div>                     
        </div>

        <div className = "relative mx-auto my-20 flex flex-col items-center justify-between gap-8 text-white mt-[130px]  mb-[80px] ">
          <h1 className = "text-center text-4xl font-semibold -mb-[15px]"> Experiences shared by learners </h1>
          <ReviewSlider/>
        </div>

        <Footer/>

       
    </div>
  
)}


export default Contact