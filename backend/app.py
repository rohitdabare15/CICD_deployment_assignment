from flask import Flask, jsonify
import os

app = Flask(__name__)

# Health check endpoint
@app.route("/health")
def health():
    return jsonify({"status": "Backend is healthy!"}), 200

# Main route
@app.route("/")
def home():
    return jsonify({
        "message": "Flask Backend Running Successfully!",
        "environment": os.getenv("ENVIRONMENT", "development")
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)