// backend/controllers/predictController.js
const axios = require("axios");

const predictPrice = async (req, res) => {
  try {
    const userInput = req.body; // Data from frontend

    // Call Python model API
    const response = await axios.post(
      "http://localhost:5000/predict",
      userInput
    );

    // Send prediction result back to frontend
    res.json({ predicted_price: response.data.predicted_price });
  } catch (error) {
    console.error("Prediction error:", error.message || error);
    res.status(500).json({ error: "Prediction failed" });
  }
};

module.exports = { predictPrice };
