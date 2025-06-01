# model/predict.py

import joblib
import pandas as pd

# Load model, columns, and scaler
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model = joblib.load(os.path.join(BASE_DIR, "elastic_net_model.pkl"))
scaler = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))
model_columns = joblib.load(os.path.join(BASE_DIR, "elastic_net_model_columns.pkl"))


def make_prediction(user_input: dict) -> float:
    """
    Predict house price based on user input.

    Parameters:
    user_input (dict): Dictionary containing input features from frontend.

    Returns:
    float: Predicted house price
    """

    # Create a full input dict with default 0s for all columns
    full_input = {col: 0 for col in model_columns}

    # Fill in numerical and known categorical one-hot values
    for key in user_input:
        if key in full_input:
            full_input[key] = user_input[key]
        elif f"Sale Type_{user_input[key]}" in full_input:
            full_input[f"Sale Type_{user_input[key]}"] = 1
        elif f"Sale Condition_{user_input[key]}" in full_input:
            full_input[f"Sale Condition_{user_input[key]}"] = 1
        # Add more one-hot categories here if needed

    # Convert to DataFrame
    df = pd.DataFrame([full_input])

    # Scale the data
    scaled_df = scaler.transform(df)

    # Predict
    prediction = model.predict(scaled_df)[0]
    return round(prediction, 2)
