import React from 'react';
import girlImage from '../../../assets/Images/girl.webp'; 
import mocktest from '../../../assets/Images/mocktest.webp'; 
import practicepaper from '../../../assets/Images/practicepaper.webp'; 
import videolecture from '../../../assets/Images/videolecture.webp'; 


const StatsSection = () => {
  return (
    <section className="text-center py-16 text-black bg-white">
      <h2 className="text-4xl font-bold mb-2">A Platform Trusted by Students Worldwide</h2>
      <p className="mb-12">Don't Just Take Our Word for It. Delve into the Numbers and Witness the Excellence for Yourself!</p>
     

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
      
        <div className='flex flex-row justify-center space-x-4'>
            
            <div className={`relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-yellow-100 group overflow-hidden`} >
                <div className="transition-all duration-300 group-hover:mb-32">
                  <div className="text-4xl font-bold">15 Million+</div>
                  <div className="text-gray-600">Happy Students</div>
                </div>
                <div  className = {`absolute bottom-[-66px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300`}>
                  <img src={girlImage} alt="Happy Students" className="w-[130px] text-yellow-500" />  
                </div>
            </div>

            <div className={`relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-pink-100 group overflow-hidden`} >
                <div className="transition-all duration-300 group-hover:mb-32">
                  <div className="text-4xl font-bold">24000+</div>
                  <div className="text-gray-600">Mock Tests</div>
                </div>
                <div  className = {`absolute bottom-[-56px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300`}>
                  <img src={mocktest} alt="Mock Tests" className="w-[130px] text-yellow-500" />  
                </div>
            </div>
       
        </div>
       
        <div className='flex flex-row justify-center space-x-4'>
            
            <div className={`relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-blue-100 group overflow-hidden`} >
                <div className="transition-all duration-300 group-hover:mb-32">
                  <div className="text-4xl font-bold">14000+</div>
                  <div className="text-gray-600">Video Lectures</div>
                </div>
                <div  className = {`absolute bottom-[-66px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300`}>
                  <img src={videolecture} alt="Video Lectures" className="w-[130px] text-yellow-500" />  
                </div>
            </div>

            <div className={`relative flex flex-col justify-center w-[200px] sm:w-[250px] h-[280px] rounded-lg bg-orange-400 group overflow-hidden`} >
                <div className="transition-all duration-300 group-hover:mb-32">
                  <div className="text-4xl font-bold">80000+</div>
                  <div className="text-gray-600">Practice Papers</div>
                </div>
                <div  className = {`absolute bottom-[-55px] left-0 right-0 flex justify-center items-center transform scale-0 group-hover:scale-100 group-hover:translate-y-[-50%] transition-all duration-300`}>
                  <img src={practicepaper} alt="Practice Papers" className="w-[130px] text-yellow-500" />  
                </div>
            </div>
      
        </div>
      
      </div>


       {/* Slanted Line */}
       <div className="relative w-full h-0 border-t-[150px] border-transparent border-r-[160vw] border-r-white transform rotate-2 -mt-10 -ml-32 -mb-24"></div>

    </section>
  );
};


export default StatsSection;
