📘 Discover Dollar – DevOps MEAN Assignment

This project is a fully containerized MEAN (MongoDB, Express, Angular, Node.js) CRUD application deployed using Docker Compose with Nginx reverse proxy.
It was developed as part of the Discover Dollar DevOps Engineer Intern assignment.

🚀 Features
MEAN stack CRUD application
Node.js + Express backend
Angular frontend
MongoDB database
Nginx reverse proxy (port 80)
Fully Dockerized (backend, frontend, mongo, nginx)
Docker Hub images
Ready for CI/CD and cloud deployment

🐳 Docker Hub Images
Backend: https://hub.docker.com/repository/docker/rajgagan10/dd-backend
Frontend: https://hub.docker.com/repository/docker/rajgagan10/dd-frontend/general

📦 Deployment (Docker Compose)
1. Clone repo
git clone https://github.com/rajgagan10/discoverdollar-devops-mean.git
cd discoverdollar-devops-mean

2. Start application
docker compose up --build

3. Access application

Open:
👉 http://localhost

📁 Structure
backend/      → Node.js API  
frontend/     → Angular App  
nginx/        → Reverse Proxy  
docker-compose.yml  
Dockerfile.backend  
Dockerfile.frontend  

📸 Required Screenshots (as per assignment)
Docker image build & push
Docker Hub repos
docker compose up logs
Application UI
Nginx config
CI/CD (if added)
Cloud VM deployment (if included)

👨‍💻 Author
Gagan RajGitHub: https://github.com/rajgagan10
Docker Hub: https://hub.docker.com/u/rajgagan10
