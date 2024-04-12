import React  from "react";
import auntImage from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
    return (
        <div className="mt-16">

            <div className="flex flex-row gap-20 items-center">
                
                <div className="w-[50%] ">
                    <img src={auntImage} className="shadow-white"/>
                </div>
                    
                <div className="w-[50%] flex flex-col gap-10">
                    <div className="text-4xl font-semibold w-[40%]">
                            Become an <HighlightText text={"Instructor"}/> 
                    </div>
                    <p className="font-medium text-[16px] w-[80%] text-richblack-300">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                    <div className="w-fit">
                    <CTAButton active={true} linkto={"/signup"}>
                        <div className="flex flex-row gap-2 items-center">
                            <div>Start Learning Today</div>
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InstructorSection;