import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MedicalReport from "./pages/MedicalReport";
import About from "./pages/About";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute component
import AppointmentScheduling from "./pages/AppointmentScheduling"; // Update path as necessary
import NearbySearch from "./components/NearbySearch";
import Sidebar from "./components/sidebar/Sidebar";
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isLoggedIn ? (
//               <Sidebar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
//             ) : (
//               <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//             )
//           }
//         />

//         <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route
//           path="signup"
//           element={<Signup setIsLoggedIn={setIsLoggedIn} />}
//         />

//         <Route path="about" element={<About />} />
//         <Route path="medical-report" element={<MedicalReport />} />

//       </Routes>

//       {/* <Sidebar />
//       <Main /> */}
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
//         <Route path="about" element={<About />} />
//         {/* Wrap MedicalReport route with PrivateRoute */}
//         <Route
//           path="medical-report"
//           element={
//             <PrivateRoute isloggedIn={isLoggedIn}>
//               <MedicalReport />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/schedule" element={<AppointmentScheduling />} />{" "}
//         {/* Appointment scheduling route */}
//         <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route
//           path="signup"
//           element={<Signup setIsLoggedIn={setIsLoggedIn} />}
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Sidebar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        
         
        {/* <Route path="/nearby-search" element={<NearbySearch />} /> Add route for NearbySearch */}

        <Route path="medical-report" element={<MedicalReport />} />
        <Route path="/schedule" element={<AppointmentScheduling />} />{" "}
        {/* Appointment scheduling route */}
      </Routes>
      {/* <Sidebar />
      <Main /> */}
    </>
  );
};

export default App;
