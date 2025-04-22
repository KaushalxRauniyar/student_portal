from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MongoDB Connection
MONGO_URI = "mongodb+srv://nisthapanjiyar:Nistha%40123@studentportal.gmvdm.mongodb.net/?retryWrites=true&w=majority&appName=studentportal"
client = MongoClient(MONGO_URI)
db = client["student-portal"]  # Database Name
collection = db["Books"]  # Collection Name

@app.route('/')
def home():
    for x in db.list_collections():
        print(x)
    return 'Flask API is running!'

@app.route('/books', methods=['GET'])
def get_books():
    """Fetch all books from MongoDB."""
    books = list(collection.find({}, {"_id": 0}))  # Exclude _id field
    return jsonify(books)

@app.route('/books/<domain>', methods=['GET'])
def get_book_by_name(domain):
    """Fetch a book by name from MongoDB."""
    book = collection.find_one({"domain": domain}, {"_id": 0})
    if book:
        return jsonify(book)
    return jsonify({"error": "Book not found"}), 404

@app.route('/books', methods=['POST'])
def add_book():
    """Insert a new book into MongoDB."""
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data format"}), 400
    # book = collection.find_one({"domain": data.domain}, {"_id": 0})
    # if book:
    #     return jsonify({"error": "Book already present."}), 400
    collection.insert_one(data)
    return jsonify({"message": "Book added successfully"}), 201

@app.route('/quizs', methods=['GET'])
def get_quizs():
    """Fetch all books from MongoDB."""
    quizs = list(db['Quizs'].find({}, {"_id": 0}))  # Exclude _id field
    return jsonify(quizs)

@app.route('/quizs/<domain>', methods=['GET'])
def get_quiz_by_name(domain):
    """Fetch a book by name from MongoDB."""
    quiz = db['Quizs'].find_one({"domain": domain}, {"_id": 0})
    if quiz:
        return jsonify(quiz)
    return jsonify({"error": "Book not found"}), 404

@app.route('/quizs', methods=['POST'])
def add_quiz():
    """Insert a new book into MongoDB."""
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data format"}), 400
    # quiz = db['Quizs'].find_one({"domain": data.domain}, {"_id": 0})
    # if quiz:
    #     return jsonify({"error": "Quiz already present."}), 400
    db['Quizs'].insert_one(data)
    return jsonify({"message": "Quiz added successfully"}), 201

@app.route('/roadmaps', methods=['GET'])
def get_roadmaps():
    """Fetch all roadmaps from MongoDB."""
    roadmaps = list(db['Roadmaps'].find({}, {"_id": 0}))  # Exclude _id field
    return jsonify(roadmaps)

@app.route('/roadmaps/<domain>', methods=['GET'])
def get_roadmap_by_name(domain):
    """Fetch a book by name from MongoDB."""
    roadmap = db['Roadmaps'].find_one({"domain": domain}, {"_id": 0})
    if roadmap:
        return jsonify(roadmap)
    return jsonify({"error": "Book not found"}), 404


@app.route('/roadmaps', methods=['POST'])
def add_roadmap():
    """Insert a new book into MongoDB."""
    data = request.json
    if not data:
        return jsonify({"error": "Invalid data format"}), 400
    # roadmap = db['Quizs'].find_one({"domain": data.domain}, {"_id": 0})
    # if roadmap:
    #     return jsonify({"error": "Roadmap already present."}), 400
    db['Roadmaps'].insert_one(data)
    return jsonify({"message": "Roadmap added successfully"}), 201


if __name__ == '__main__':
    from os import environ
    app.run(host='0.0.0.0', port=int(environ.get('PORT', 5000)))

    #1
