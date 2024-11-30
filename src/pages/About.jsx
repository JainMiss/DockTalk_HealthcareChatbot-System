
// import React from "react";

// const About = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
//       <h1 className="text-4xl font-bold mb-4">About Us</h1>
//       <p className="text-lg text-center max-w-2xl">
//         Welcome to DocTalk HealthCare Chatbot! Our mission is to provide a seamless healthcare experience, offering symptom checks, doctor recommendations, and much more.
//       </p>
//       <p className="text-lg text-center max-w-2xl mt-4">
//         Our chatbot leverages cutting-edge technology to connect patients with the right care. Thank you for choosing us as your healthcare partner.
//       </p>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 text-gray-900 px-6 sm:px-10 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium text-lg transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-blue-600 animate-fadeIn">
        About <span className="text-green-700">DocTalk HealthCare Chatbot</span>
      </h1>

      {/* Introduction Section */}
      <section className="text-center mb-10">
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Welcome to <strong>DocTalk</strong>, your trusted healthcare assistant. 
          Designed to make healthcare accessible, efficient, and personalized, 
          DocTalk is here to revolutionize the way you approach your health.
        </p>
        <img
          src="https://images.pexels.com/photos/4226257/pexels-photo-4226257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Doctor with patient"
          className="rounded-lg shadow-lg w-full max-w-[600px] mx-auto hover:scale-105 transition duration-300"
        />
      </section>

      {/* Mission Section */}
      <section className="mt-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-blue-700 mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          At <strong>DocTalk</strong>, our mission is to bridge the gap between people and quality healthcare by offering instant access to personalized healthcare solutions, nearby services, and reliable health tips.
        </p>
        <div className="flex justify-center mt-8">
          <img
            src="https://plus.unsplash.com/premium_photo-1682141268892-3c31617c7eb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnMlMjB0ZWFtJTIwY2FydG9vbiUyMGltYWdlfGVufDB8fDB8fHww"
            alt="Team discussing"
            className="rounded-lg shadow-lg w-full max-w-[500px] hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mt-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-green-700 mb-6">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">📋 Symptom Checker</h3>
            <p>Get instant health recommendations based on your symptoms.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">🏥 Nearby Services</h3>
            <p>Locate hospitals and doctors closest to your location.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">💡 Health Tips</h3>
            <p>Stay informed with daily health tips and precautions.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">⏰ Reminders</h3>
            <p>Never miss your checkups with timely appointment reminders.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">📑 Medical Records</h3>
            <p>Access all your medical reports in one place.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">⚕️ Preventive Care</h3>
            <p>Learn about essential preventive care for a healthier life.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-green-700 mb-6">
          Meet the Team
        </h2>
        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
          Our dedicated team of developers, healthcare professionals, and researchers work tirelessly to provide you with the best healthcare chatbot experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">Jane Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="font-bold text-blue-800 mb-2">John Smith</h3>
            <p>Healthcare Advisor</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 text-center text-gray-600 w-full">
        <p>© 2024 DocTalk HealthCare Chatbot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
