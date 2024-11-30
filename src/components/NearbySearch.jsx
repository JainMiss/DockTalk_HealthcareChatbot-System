import React, { useState, useEffect } from "react";
import { fetchNearbyPlaces } from "../config/GoogleMaps"; // Make sure your fetchNearbyPlaces function works
import { toast } from "react-toastify";

const NearbySearch = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("hospital");  // Default query for 'hospital'

  // Get the user's current location using the Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast.error("Unable to fetch location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Function to search for hospitals or doctors based on user's location
  const searchNearby = async () => {
    if (location.lat && location.lon) {
      setLoading(true);

      let results;
      if (query === "hospital") {
        results = await fetchNearbyPlaces(location.lat, location.lon, "hospital");
        setHospitals(results);
      } else if (query === "doctor") {
        results = await fetchNearbyPlaces(location.lat, location.lon, "doctor");
      } else {
        setHospitals([]);
      }

      setLoading(false);
    } else {
      toast.error("Location not found.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Search for Nearby Hospitals/Doctors
        </h2>

        {/* Search Input and Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            placeholder="Search for 'hospital' or 'doctor'"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={searchNearby}
            className="w-full sm:w-1/3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center text-blue-500 mb-6">
            <p>Loading...</p>
          </div>
        )}

        {/* Display Nearby Hospitals */}
        {hospitals.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Nearby Hospitals:</h3>
            <ul className="space-y-2">
              {hospitals.map((hospital) => (
                <li
                  key={hospital.place_id}
                  className="bg-blue-50 p-4 rounded-md shadow-sm hover:bg-blue-100 transition duration-300"
                >
                  <p className="text-lg font-medium">{hospital.name}</p>
                  <p className="text-sm text-gray-500">{hospital.vicinity}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* If no results */}
        {hospitals.length === 0 && !loading && query && (
          <p className="text-center text-gray-600">No results found. Try searching for a different query.</p>
        )}
      </div>
    </div>
  );
};

export default NearbySearch;
