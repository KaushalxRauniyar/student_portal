# random forest
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score
import pickle


# Load dataset
data = pd.read_csv('depression_data.csv')

# Ensure the Depression_Status is binary (0 for No, 1 for Yes)
if data['Depression_Status'].nunique() != 2:
    raise ValueError("Depression_Status column must contain only binary values (0 for No, 1 for Yes).")

# Features and target
X = data.drop(columns=['id', 'Depression_Status'])
y = data['Depression_Status']

# Preprocessing
categorical_features = ['Gender', 'City', 'Profession']
numeric_features = ['Age', 'Academic Pressure', 'Work Pressure', 'CGPA', 'Study Satisfaction', 'Job Satisfaction']

preprocessor = ColumnTransformer(
    transformers=[
        ('num', StandardScaler(), numeric_features),
        ('cat', OneHotEncoder(handle_unknown='ignore'), categorical_features)
    ]
)

# Build a pipeline
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', RandomForestClassifier())
])

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
pipeline.fit(X_train, y_train)

# Evaluate the model
y_pred = pipeline.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save the model and pipeline
with open('model.pkl', 'wb') as f:
    pickle.dump(pipeline, f)

with open('pipeline.pkl', 'wb') as f:
    pickle.dump(preprocessor, f)

print("Model and pipeline successfully saved!")
