import React, { useState } from "react";
import jsPDF from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MedicalReportForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    dob: "",
    diagnosis: "",
    symptoms: "",
    precautions: "",
    nextAppointment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGeneratePDF = () => {
    const {
      name,
      age,
      gender,
      dob,
      diagnosis,
      symptoms,
      precautions,
      nextAppointment,
    } = formData;

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("Medical Report", 105, 20, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Age: ${age}`, 20, 50);
    doc.text(`Gender: ${gender}`, 20, 60);
    doc.text(`Date of Birth: ${dob}`, 20, 70);
    doc.text("Diagnosis:", 20, 90);
    doc.text(diagnosis, 20, 100, { maxWidth: 170 });
    doc.text("Symptoms:", 20, 120);
    doc.text(symptoms, 20, 130, { maxWidth: 170 });
    doc.text("Precautions:", 20, 150);
    doc.text(precautions, 20, 160, { maxWidth: 170 });
    doc.text("Next Appointment:", 20, 180);
    doc.text(nextAppointment, 20, 190);

    doc.save("Medical_Report.pdf");

    toast.success("Your medical report has been generated!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-10 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold font-serif text-center mb-8 text-blue-700">
          Medical Report Form
        </h1>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* DOB */}
          <div>
            <label className="block text-lg font-semibold text-gray-800">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            />
          </div>

          {/* Diagnosis */}
          <div className="md:col-span-2">
            <label className="block text-lg font-semibold text-gray-800">
              Diagnosis
            </label>
            <textarea
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChange}
              placeholder="Enter the diagnosis"
              rows="3"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            ></textarea>
          </div>

          {/* Symptoms */}
          <div className="md:col-span-2">
            <label className="block text-lg font-semibold text-gray-800">
              Symptoms
            </label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              placeholder="Enter the symptoms"
              rows="3"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            ></textarea>
          </div>

          {/* Precautions */}
          <div className="md:col-span-2">
            <label className="block text-lg font-semibold text-gray-800">
              Precautions
            </label>
            <textarea
              name="precautions"
              value={formData.precautions}
              onChange={handleChange}
              placeholder="Enter the precautions"
              rows="3"
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            ></textarea>
          </div>

          {/* Next Appointment */}
          <div className="md:col-span-2">
            <label className="block text-lg font-semibold text-gray-800">
              Next Appointment
            </label>
            <input
              type="datetime-local"
              name="nextAppointment"
              value={formData.nextAppointment}
              onChange={handleChange}
              className="mt-2 p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              required
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-200"
            >
              Back to Home
            </button>
            <button
              type="button"
              onClick={handleGeneratePDF}
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-200"
            >
              Generate PDF
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default MedicalReportForm;
