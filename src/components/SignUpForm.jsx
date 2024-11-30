// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// const SignupForm = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
//   const [formData, setformData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   function changeHandler(event) {
//     setformData((prevData) => {
//       return {
//         ...prevData,
//         [event.target.name]: event.target.value,
//       };
//     });
//   }
//   function submitHandler(event) {
//     event.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Password do no match");
//       return;
//     }
//     setIsLoggedIn(true);
//     toast.success("Account Created");
//     console.log("Printing Sign Up form details ");
//     console.log(formData);
//     navigate("/");
//   }
// //   const[accountType,setAccountType]=useState("student");
//   return (
//     <div >
//       {/* student-instructor tab */}

//       {/* <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
//         <button
//         className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
//          onClick={()=> setAccountType("student")}>Student</button>

//         <button  className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setAccountType("instructor")}>Instructor</button>
//       </div> */}

//       <form onSubmit={submitHandler}>
//         <div className="flex gap-x-4 mt-2">
//           <label className="w-full">
//             <p className="text-[1.3rem] text-black-5 mb-1 leading-[1.375rem]">
//               First Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               type="text"
//               required
//               name="firstName"
//               placeholder="Enter First Name"
//               onChange={changeHandler}
//               value={formData.firstName}
//               className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
//             />
//           </label>
//           <label className="w-full">
//             <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
//               Last Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               type="text"
//               required
//               name="lastName"
//               placeholder="Enter Last Name"
//               onChange={changeHandler}
//               value={formData.lastName}
//               className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
//             />
//           </label>
//         </div>

//         <div className="mt-2">
//         <label className="w-full ">
//           <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
//             Email Address <sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             type="email"
//             required
//             name="email"
//             placeholder="Enter Email Address"
//             onChange={changeHandler}
//             value={formData.email}
//             className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
//           />
//         </label>

//         </div>


//         <div className="flex gap-x-4  mt-2">
//           <label className="w-full relative">
//             <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
//               Create Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               type={showPassword ? "text" : "password"}
//               required
//               name="password"
//               placeholder="Enter Password"
//               onChange={changeHandler}
//               value={formData.password}
//               className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
//             />

//             <span
//               className="absolute right-3 top-[38px] cursor-pointer"
//               onClick={() => setShowPassword((prev) => !prev)}
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>

//           <label className="w-full relative">
//             <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
//               Confirm Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               type={showPasswordConfirm ? "text" : "password"}
//               required
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               onChange={changeHandler}
//               value={formData.confirmPassword}
//               className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
//             />

//             <span
//               className="absolute right-3 top-[40px] cursor-pointer"
//               onClick={() => setShowPasswordConfirm((prev) => !prev)}
//             >
//               {showPasswordConfirm ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//         </div>

//         <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;


import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setformData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do no match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    console.log("Printing Sign Up form details ");
    console.log(formData);
    navigate("/");
  }
//   const[accountType,setAccountType]=useState("student");
  return (
    <div >
      {/* student-instructor tab */}

      {/* <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
        className={`${accountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=> setAccountType("student")}>Student</button>

        <button  className={`${accountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=> setAccountType("instructor")}>Instructor</button>
      </div> */}

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-2">
          <label className="w-full">
            <p className="text-[1.3rem] text-black-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
            />
          </label>
          <label className="w-full">
            <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
            />
          </label>
        </div>

        <div className="mt-2">
        <label className="w-full ">
          <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            name="email"
            placeholder="Enter Email Address"
            onChange={changeHandler}
            value={formData.email}
            className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
          />
        </label>

        </div>


        <div className="flex gap-x-4  mt-2">
          <label className="w-full relative">
            <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[1.3rem] text-black mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPasswordConfirm ? "text" : "password"}
              required
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
            />

            <span
              className="absolute right-3 top-[40px] cursor-pointer"
              onClick={() => setShowPasswordConfirm((prev) => !prev)}
            >
              {showPasswordConfirm ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
