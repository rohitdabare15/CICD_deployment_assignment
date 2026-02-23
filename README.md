# Part 1: Deploy Flask and Express on a Single EC2 Instance

This project demonstrates deploying a Flask backend and an Express frontend on a single Amazon EC2 instance. It is designed for CI/CD automation using Jenkins.

## Architecture

Internet
   ↓
Amazon EC2 (Ubuntu)
   ├── Flask Backend (Port 5000)
   └── Express Frontend (Port 3000)

Frontend communicates with Backend internally.

## Tech Stack

- Python 3
- Flask
- Node.js
- Express
- PM2 (Process Manager)
- AWS EC2
- Git
- Jenkins

## Application Endpoints

### Backend

- Health Check:
  http://<EC2-PUBLIC-IP>:5000/health

- Main Route:
  http://<EC2-PUBLIC-IP>:5000/

### Frontend

- Main Route:
  http://<EC2-PUBLIC-IP>:3000/

The frontend attempts to connect to backend `/health` endpoint.


## Local Development

### Run Backend

cd backend
pip install -r requirements.txt
python3 app.py

Backend runs on:
http://localhost:5000

### Run Frontend

cd frontend
npm install
node server.js

Frontend runs on:
http://localhost:3000

## EC2 Deployment Steps (Manual)

1. SSH into EC2
2. Install Python, Node, Git
3. Clone repository
4. Install backend and frontend dependencies
5. Start apps using PM2

