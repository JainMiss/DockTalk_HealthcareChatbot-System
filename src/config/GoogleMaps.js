import axios from "axios";

// Google Maps API key (remember to keep this secure, don't expose it publicly)
const API_KEY = "YOUR_GOOGLE_API_KEY"; 

export const fetchNearbyPlaces = async (lat, lon, type = "hospital", radius = 5000) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=${radius}&type=${type}&key=${API_KEY}`
    );
    return response.data.results; // Returns the list of hospitals or doctors
  } catch (error) {
    console.error("Error fetching data from Google Maps API", error);
    return [];
  }
};
