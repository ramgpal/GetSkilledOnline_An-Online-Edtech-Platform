import React from "react";
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";

const LearningLanguageSection = () => {
    return(
        <div className="mt-[150px] mb-32">
            <div className="flex flex-col gap-5 items-center">
                <div className="text-4xl text-center font-semibold">
                    Your swiss knofe for <HighlightText text={"learning any language"}/>
                </div>

                <div className="text-center text-black-600 mx-auto text-base font-medium w-[70%]">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
                
                <div className="flex flex-row items-center justify-center mt-5">
                    <img src = {knowYourProgress} className="object-contain -mr-32"/>
                    <img src = {compareWithOthers} className="object-contain"/>
                    <img src = {planYourLessons} className="object-contain -ml-36"/>
                </div>

                <div className="w-fit">
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>Learn more</div>
                    </CTAButton>
                </div>
            </div>
        </div>
    )
}

export default LearningLanguageSection;