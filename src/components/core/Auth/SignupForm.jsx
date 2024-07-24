import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sendOtp } from "../../../services/operations/authAPI";
import { setSignupData } from "../../../slices/authSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Tab from "../../common/Tab";


function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstName, lastName, email, password, confirmPassword } = formData;


  function handleOnChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const signupData = { ...formData, accountType };
    dispatch(setSignupData(signupData));
    dispatch(sendOtp(formData.email, navigate));
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  }

  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];


  return (

    <div className="bg-white">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg ml-12">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Create an Account</h2>

          {/* Tab */}
          <Tab tabData = {tabData} field={accountType} setField={setAccountType} />
          
          {/* Form */}
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-6">
         
            <div className="flex gap-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-bold mb-1">
                  First Name <sup className="text-pink-200">*</sup>
                </label>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={handleOnChange}
                  placeholder="Enter First Name"
                  name="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            
              <div className="w-1/2">
                <label className="block text-gray-700 font-bold mb-1">
                  Last Name <sup className="text-pink-200">*</sup>
                </label>
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={handleOnChange}
                  placeholder="Enter Last Name"
                  name="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <div>  
            <label className="block text-gray-700 font-bold mb-1">
              Email Address<sup className="text-pink-200">*</sup>
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter Email Address"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>

            <div className="flex gap-x-4">
              <div className="relative w-1/2">
                <label className="block text-gray-700 font-bold mb-1">
                  Create Password<sup className="text-pink-200">*</sup>
                </label>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <span className="absolute right-1 top-[36px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
              </div>
             
              <div className="relative w-1/2">
                <label className="block text-gray-700 font-bold mb-1">
                  Confirm Password<sup className="text-pink-200">*</sup>
                </label>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <span className="absolute right-1 top-[36px] cursor-pointer" onClick={() => setShowConfirmPassword((prev) => !prev)}>
                  {showConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
                </span>
              </div>
            </div>

            <button type="submit" className="mt-6 rounded-[8px] bg-yellow-50 py-2 px-4 font-medium text-gray-900">
              Create Account
            </button>
          </form>
       
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
