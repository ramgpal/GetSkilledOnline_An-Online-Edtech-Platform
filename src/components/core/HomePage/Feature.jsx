import { faBookmark, faChalkboardTeacher, faCloud, faCreditCard, faUserShield, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';



const featuresData = {
  id: "features",
  tagline: "Features",
  items: [
    {
      icon: faUserShield,
      title: "User Authentication and Authorization",
      description: "Secure login and sign-up with email, OTP verification, and password recovery.",
    },
    {
      icon: faChalkboardTeacher,
      title: "Course Management",
      description: "Instructors can create, update, and manage course content, while students can view and rate courses.",
    },
    {
      icon: faCreditCard,
      title: "Payment Integration",
      description: "Seamless checkout process with Razorpay for course purchases and enrollments.",
    },
    {
      icon: faCloud,
      title: "Cloud-based Media Management",
      description: "Efficient storage and management of media content using Cloudinary.",
    },
    {
      icon: faVideo,
      title: "Virtual Rooms",
      description: "Collaborative virtual rooms featuring whiteboards, screen sharing, real-time chat, and audio/video conferencing.",
    },
    {
      icon: faBookmark,
      title: "Bookmark and Like",
      description: "Users can bookmark and like their favorite questions and answers for easy access.",
    },
  ],
};


const Features = () => {
  return (
    <section className="relative not-prose scroll-mt-[72px] text-white mt-[80px]" id="features">

        <div className="text-center md:mx-auto mb-8 md:mb-12 max-w-3xl">
            <p className="font-black text-sky-400 text-2xl text-heading uppercase">Features</p>
            <h2 className="font-bold font-heading leading-tighter tracking-tighter text-heading md:text-4xl text-3xl">What you get with GetSkilledOnline</h2>
            <p className="text-xl mt-3 text-richblack-25">GetSkilledOnline offers a cutting-edge platform for education, designed with top-notch features and exceptional user experience.</p>
        </div>

        <div className="grid md:gap-y-12 sm:grid-cols-2">
            {featuresData.items.map((item, index) => (
                  <div>
                    <div key={index} className="flex flex-row max-w-md mx-auto">
                        <div>
                            <span className="flex justify-center align-middle mr-4 -mt-[5px] bg-primary h-10 md:h-12 md:p-3 md:w-12 p-2 rounded-full text-white w-10">
                                <FontAwesomeIcon icon={item.icon} className="w-6 h-6 -mt-3 text-white bg-[#4a67e7] p-3.5 rounded-full"/>
                            </span>
                        </div>

                        <div className="mt-0.5">
                            <h4 className="font-bold text-xl md:text-[1.3rem]">{item.title}</h4>
                            <p className="mt-1 text-richblack-200">{item.description}</p>
                        </div>
                    </div>
                  </div>
        ))}
        </div>
   
    </section>
  );
};

export default Features;


 