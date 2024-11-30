// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

// const LoginForm = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setformData] = useState({
//     email: "",
//     password: "",
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
//     console.log("Printing Login Form Details : ");
//     console.log(formData);
//     setIsLoggedIn(true);
//     toast.success("Logged In");
//     navigate("/");
//   }
//   return (
//     <form
//       onSubmit={submitHandler}
//       className="flex flex-col w-full gap-y-0 mt-6"
//     >
//       <label className="w-full">
//         <p className="text-[1.3rem] text-black mb-1 leading-[1.475rem]">
//           Email Address <sup className="text-pink-200">*</sup>
//         </p>

//         <input
//           required
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={changeHandler}
//           placeholder="Enter email id"
//           className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
//         />
//       </label>
//       <br />
//       <label className="w-full relative">
//         <p className="text-[1.3rem] text-black-5 mb-1 leading-[1.375rem]">
//           Password <sup className="text-pink-200">*</sup>
//         </p>

//         <input
//           required
//           type={showPassword ? "text" : "password"}
//           name="password"
//           value={formData.password}
//           onChange={changeHandler}
//           placeholder="Enter email id"
//           className="border border-black rounded-[0.5rem] text-black-5 w-full p-[12px]"
//         />

//         <span
//          className="absolute right-3 top-[38px] cursor-pointer"
//          onClick={() => setShowPassword((prev) => !prev)}>
//           {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
//         </span>
//       </label>

//       <Link to="#">
//         <p className="text-xs mt-1 max-w-max text-blue-100 ml-auto">Forgot Password ?</p>
//       </Link>

//       <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Sign in</button>
//     </form>
//   );
// };

// export default LoginForm;



import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
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
    console.log("Printing Login Form Details : ");
    console.log(formData);
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-0 mt-6"
    >
      <label className="w-full">
        <p className="text-[1.3rem] text-black mb-1 leading-[1.475rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          className="border border-black rounded-[0.5rem] text-black w-full p-[12px]"
        />
      </label>
      <br />
      <label className="w-full relative">
        <p className="text-[1.3rem] text-black-5 mb-1 leading-[1.375rem]">
          Password <sup className="text-pink-200">*</sup>
        </p>

        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter email id"
          className="border border-black rounded-[0.5rem] text-black-5 w-full p-[12px]"
        />

        <span
         className="absolute right-3 top-[38px] cursor-pointer"
         onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/> : <AiOutlineEye  fontSize={24} fill="#AFB2BF"/>}
        </span>
      </label>

      <Link to="#">
        <p className="text-xs mt-1 max-w-max text-blue-100 ml-auto">Forgot Password ?</p>
      </Link>

      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Sign in</button>
    </form>
  );
};

export default LoginForm;
