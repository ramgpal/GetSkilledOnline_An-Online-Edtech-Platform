import React from 'react';
import { FaGoogle, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const StartSection = () => {
    
    const navigate = useNavigate();

    return (
        <div className='bg-blue-500 relative'>
           
            <div className="flex flex-col md:flex-row justify-between mx-auto px-8">
                <div className="flex flex-col items-start mt-14 ml-8">
                    <h1 className="text-6xl font-bold mb-6 text-black">Start your coding <br/> journey today</h1>
                    <p className="text-xl text-gray-900 mb-6">
                        Learn to code from scratch with <span className="font-semibold text-black">job focused courses</span> <br/> designed by experts.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center">
                        <input
                            className="p-4 border border-white rounded-t-lg lg:rounded-l-lg lg:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                            id="filter-input"
                            type="email"
                        />
                        <button onClick={() => navigate('/signup')} className="bg-blue-500 text-white p-5 lg:p-4 rounded-b-lg lg:rounded-b-none lg:rounded-r-lg border border-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500" id="saveUserNameAndEmail">
                            Start learning today <span className="text-yellow-400">⚡</span>
                        </button>
                    </div>
                    <Link to="/signup" className='mt-6'>
                        <div className="w-[180px] text-center text-[16px] sm:text-[20px] px-6 py-[18px] rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200 bg-richblack-800 text-white flex items-center justify-center">
                            Sign up
                            <FaArrowRight className="ml-2" />
                        </div>
                    </Link>
                </div>
                <div className="hidden md:block mt-14 mr-8">
                    <img className="w-100" src="https://cdn.codechef.com/images/home/coding_boy.svg" alt="infographic" />
                </div>
            </div>
            
            {/* Slanted Line */}
            <div className="relative w-[50vw] h-0 border-t-[100px] border-transparent border-l-[60vw] border-l-blue-500 transform -rotate-12 right-[30px] -mt-12 -mb-24"></div>
            <div className="relative w-[50vw] h-0 border-t-[100px] border-transparent border-r-[60vw] border-r-blue-500 transform rotate-12 left-[590px]"></div>
      
        </div>
    );
};

export default StartSection;
