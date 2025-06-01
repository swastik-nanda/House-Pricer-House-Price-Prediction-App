// backend/controllers/predictController.js
const axios = require("axios");
require("dotenv").config();

const predictPrice = async (req, res) => {
  try {
    const userInput = req.body; // Data from frontend

    // Call Python model API
    const response = await axios.post(
      `${process.env.BACKEND_URL}/predict`,
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
