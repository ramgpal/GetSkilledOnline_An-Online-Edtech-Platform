import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import './Template.css';


function Template({ title, description1, description2, image, formType }){

  const { loading } = useSelector((state) => state.auth);

  return (

    <div className="mt-16 md:mt-0 flex items-center justify-center relative">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="flex relative w-[100vw] h-[91vh] ">
        
          <div className="w-0 md:w-1/2 bg-white text-white flex flex-col justify-center p-8 relative slanted-bg">
            <div className="absolute inset-0 slanted-bg-inner"></div>
            <div className="flex items-center min-h-full z-10 ml-16">
                  <div className="yellow-line mr-12"></div>
                  <div>
                      <h1 className="text-6xl font-bold">
                        Start <br/> learning
                        <div className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">with <br/> GSO </div>
                      </h1>
                  </div>
            </div>
          </div>
         

          <div className="w-full md:w-1/2 bg-white p-8">  
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

      
        </div>
      )}
    </div>
  );
}

export default Template;
