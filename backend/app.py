# random forest
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the combined pipeline (which already includes preprocessing and model)
with open('model.pkl', 'rb') as f:
    pipeline = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Parse the input data
        data = request.json

        # Rename input keys to match training feature names
        column_mapping = {
            "AcademicPressure": "Academic Pressure",
            "WorkPressure": "Work Pressure",
            "StudySatisfaction": "Study Satisfaction",
            "JobSatisfaction": "Job Satisfaction"
        }
        mapped_data = {column_mapping.get(key, key): value for key, value in data.items()}

        # Convert input to DataFrame
        feature_df = pd.DataFrame([mapped_data])

        # Directly use the pipeline for preprocessing and prediction
        prediction = pipeline.predict(feature_df)

        return jsonify({'depression_status': int(prediction[0])})
    except Exception as e:
        print("Error during prediction:", str(e))
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
