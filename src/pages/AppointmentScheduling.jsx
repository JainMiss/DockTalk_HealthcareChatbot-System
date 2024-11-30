import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "react-toastify/dist/ReactToastify.css";

const AppointmentScheduling = () => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const unavailableSlots = [
    { date: "2024-11-20", time: "10:00 AM" },
    { date: "2024-11-21", time: "3:00 PM" },
  ];

  const handleSchedule = () => {
    const isUnavailable = unavailableSlots.some(
      (slot) =>
        slot.date === appointmentDate && slot.time === appointmentTime
    );

    if (isUnavailable) {
      toast.error("The selected slot is not available. Please choose another.");
    } else {
      setIsScheduled(true);
      toast.success("Appointment Scheduled Successfully!");
      playAlarm();
    }
  };

  const playAlarm = () => {
    const alarmSound = new Audio("/alarm.mp3");
    alarmSound.play();
  };

  const handleBack = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center gradient-to-l ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Schedule Appointment
        </h2>

        <button
          onClick={handleBack}
          className="bg-gray-600 text-white px-4 py-2 rounded-md mb-4 hover:bg-gray-700 transition-all"
        >
          Back to Home
        </button>

        <label className="block mb-4 text-left">
          <span className="text-gray-700 font-medium">Select Date:</span>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="block mb-4 text-left">
          <span className="text-gray-700 font-medium">Select Time:</span>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </label>

        <button
          onClick={handleSchedule}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition-all"
        >
          Schedule Appointment
        </button>

        {isScheduled && (
          <div className="mt-4 text-green-600 text-center font-medium">
            Your appointment is scheduled for {appointmentDate} at {appointmentTime}.
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppointmentScheduling;
