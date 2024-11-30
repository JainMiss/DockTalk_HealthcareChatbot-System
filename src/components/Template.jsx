// import React from "react";
// import LoginForm from "./LoginForm";
// import SignupForm from "./SignUpForm";
// import { FcGoogle } from "react-icons/fc";

// const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
//   return (
//     <div className="flex  h-screen  w-screen  mx-auto gap-x-12 gap-y-0 py-12 justify-center items-center">
//       <div className="w-11/12 max-w-[1160px] ">

//         <div className=" items-center ">
//           <h1 className="text-black font-semibold text-[28px]  leading-[2.375rem] justify-self-center ">
//             {title}
//           </h1>
//         </div>

//         {/* <p className="text-[1.125rem] leading-[1.625rem] mt-4">
//           <span className="text-richblack-100">{desc1}</span>
//           <br/>
//           <span className="text-blue-100 italic">{desc2}</span>
//         </p> */}
//         <div className="border border-black shadow-lg p-8 max-w-[50%] mx-auto rounded-lg mt-4">
//           {formtype === "signup" ? (
//             <SignupForm setIsLoggedIn={setIsLoggedIn} />
//           ) : (
//             <LoginForm setIsLoggedIn={setIsLoggedIn} />
//           )}

//           <div className="flex w-full items-center my-4 gap-x-2">
//             <div className="w-full h-[1px] bg-richblack-700"></div>
//             <p className="text-richblack-700 font-medium leading[1.375rem]">
//               OR
//             </p>
//             <div className="w-full h-[1px] bg-richblack-700"></div>
//           </div>

//           <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-black border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
            
//             <p>Sign In</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template;



import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex  h-screen  w-screen  mx-auto gap-x-12 gap-y-0 py-12 justify-center items-center">
      <div className="w-11/12 max-w-[1160px] ">

        <div className=" items-center ">
          <h1 className="text-black font-semibold text-[28px]  leading-[2.375rem] justify-self-center ">
            {title}
          </h1>
        </div>

        {/* <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br/>
          <span className="text-blue-100 italic">{desc2}</span>
        </p> */}
        <div className="border border-black shadow-lg p-8 max-w-[50%] mx-auto rounded-lg mt-4">
          {formtype === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-richblack-700"></div>
            <p className="text-richblack-700 font-medium leading[1.375rem]">
              OR
            </p>
            <div className="w-full h-[1px] bg-richblack-700"></div>
          </div>

          <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-black border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
            <FcGoogle />
            <p>Sign Up With Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Template;
