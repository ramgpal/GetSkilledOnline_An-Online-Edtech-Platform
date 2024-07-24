import React from 'react';
import { FaBookOpen, FaChartLine, FaCheck, FaComments, FaLightbulb, FaQuestionCircle, FaSignInAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Discussion Forums',
    description: 'Interactive forums where students and instructors can engage in discussions and answer queries.',
    icon: FaComments,
  },
  {
    title: 'Progress Tracking',
    description: 'Track learning progress with detailed analytics and reports for students and instructors.',
    icon: FaChartLine,
  },
  {
    title: 'Doubt Support',
    description: 'Get your doubts resolved quickly with dedicated support from instructors and peers.',
    icon: FaQuestionCircle,
  },
  {
    title: 'Idea Sharing',
    description: 'Share and explore innovative ideas with peers and instructors to foster a collaborative learning environment.',
    icon: FaLightbulb ,
  },
];

const steps = [
  {
    title: 'Step 1: Sign Up',
    description: "Kickstart your learning journey by signing up. Create your account to access a plethora of courses and educational resources.",
    icon: FaSignInAlt,
  },
  {
    title: 'Step 2: Enroll in Courses',
    description: "Browse through our extensive course catalog. Enroll in the courses that align with your learning goals and interests.",
    icon: FaBookOpen,
  },
  {
    title: 'Step 3: Engage and Interact',
    description: 'Participate in live sessions, discussions, and forums. Engage with instructors and peers to enhance your learning experience.',
    icon: FaComments,
  },
  {
    title: 'Ready!',
    description: 'You are all set! Begin your journey of knowledge acquisition and skill development with GetSkilledOnline.',
    icon: FaCheck,
  },
];

 


const FeaturesSection = () => {
  return (

     <>
        <section className="relative not-prose scroll-mt-[72px] text-white ">
          <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-7xl">
            
              <div className="text-center md:mx-auto mb-8 md:mb-10 lg:max-w-2xl max-w-xl sm:mx-auto">
                <p className="font-black text-sky-400 text-2xl text-heading uppercase">Features</p>
                <h2 className="font-bold leading-tight tracking-tighter text-4xl md:text-5xl text-heading mb-2">Unlock Your Potential with GetSkilledOnline with Engaging and Effective Learning!</h2>
              </div>
            
              <div className="mx-auto max-w-7xl md:px-8 p-4">
                <div className="lg:flex md:gap-16 lg:flex-row-reverse">
                    <div className="lg:basis-1/2 self-center">
                   
                    <div className="mb-12 dark:text-slate-400 text-lg">
                        <h3 className="font-bold dark:text-white text-2xl mb-2 sm:text-3xl tracking-tight">Building on modern foundations</h3>
                        Gain a competitive advantage by incorporating industry-leading practices in online education.
                    </div>
                
                    <div className="mx-auto gap-8 grid gap-y-4 md:gap-y-8 mb-10 lg:mb-0">
                        {features.map((feature, index) => (
                        <div key={index}>
                            <div className="flex flex-row max-w-none">
                            <div className="flex justify-center">
                                    <feature.icon className="flex justify-center bg-white  text-richblack-900 items-center h-7 mr-2 p-1 rounded-full w-7"/> 
                            </div>
                            <div className="mt-0.5">
                                <h3 className="font-medium dark:text-white leading-6 ml-2 text-lg">{feature.title}</h3>
                                <p className="text-richblack-200 ml-2 mt-1 ">{feature.description}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                  
                    </div>
                
                    <div className="md:basis-1/2 md:mt-0 mt-10" aria-hidden="true">
                      <div className="relative m-auto max-w-4xl">
                          <img 
                          alt="Colorful Image" 
                          className="mx-auto w-full bg-gray-500 rounded-lg shadow-lg" 
                          loading="lazy" 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                          crossOrigin="anonymous" 
                          decoding="async" 
                          height="500" 
                          referrerPolicy="no-referrer" 
                          sizes="(max-width: 768px) 100vw, 432px" 
                          srcSet="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80&h=400 400w, https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80&h=768 768w" 
                          style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: 'auto', aspectRatio: 1 }}
                          width="500"
                          />

                      </div>
                    </div>
            
                </div>
              </div>
          </div>
        </section>

        <section className="relative not-prose scroll-mt-[72px] -mt-[60px] text-white">
          <div className="relative mx-auto px-4 lg:py-20 md:px-6 md:py-16 py-12 text-default max-w-5xl">
           <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:basis-1/2 md:py-4 md:self-center">
                <div className="mb-8 md:mb-12 md:mx-auto rtl:text-right text-left">
                <h2 className="font-bold font-heading leading-tighter tracking-tighter text-heading text-3xl lg:text-4xl">
                     Get started with GetSkilledOnline and enhance your learning experience.
                </h2>
                </div>
                <div>
                {steps.map((step, index) => (
                    <div className="flex" key={index}>
                    <div className="flex items-center rtl:mr-0 flex-col mr-4 rtl:ml-4">
                        <div>
                        <div className="flex justify-center items-center">
                            <step.icon className="text-primary border-2 border-primary border-[#627ae7] text-[#627ae7] h-14 w-14 p-3 rounded-full" />
                        </div>
                        </div>
                        {index !== steps.length - 1 && (
                        <div className="bg-white h-full w-px"></div>
                        )}
                    </div>
                    <div className={`pt-1 pb-8 ${index === steps.length - 1 && 'pt-1'}`}>
                        <p className="font-bold text-xl">
                        {step.title} <span className="font-medium">{step.subtitle}</span>
                        </p>
                        <p className="text-richblack-200 mt-1">{step.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="relative md:basis-1/2">
                <img
                alt="Steps image"
                className="w-full shadow-lg bg-gray-400 dark:bg-slate-700 md:h-full inset-0 md:absolute object-cover object-top rounded-md"
                loading="lazy"
                src="https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=987&amp;q=80"
                crossOrigin="anonymous"
                decoding="async"
                height="768"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 432px"
                srcSet="https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80&amp;h=711 400w, https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=768&amp;q=80&amp;h=1365 768w"
                style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '100%', maxHeight: '100%' }}
                width="432"
                />
            </div>
            </div>
          </div>
        </section>
  </>

  );
};

export default FeaturesSection;







