# home-lab-monitor
A full-stack system monitoring dashboard that provides live hardware metrics through a FastAPI backend and a responsive web interface. The application collects real-time CPU, memory, and disk usage using Python's psutil library and displays the information through dynamic progress bars powered by JavaScript.

Technologies Used...

Backend: Python, FastAPI, psutil
Frontend: HTML5, CSS3, JavaScript (ES6)
API: RESTful API (JSON)
Version Control: Git & GitHub

Getting Started...

1. Clone the repository
  git clone https://github.com/dryzzl/home-lab-monitor.git
  cd home-lab-monitor
2. Create and activate a virtual environment
  python -m venv venv
.\venv\Scripts\Activate.ps1
3. Install dependencies
  pip install -r backend/requirements.txt
4. Start the FastAPI backend
  cd backend
  python -m uvicorn main:app --reload

The API will be available at:

http://127.0.0.1:8000/metrics

5. Launch the frontend

Open frontend/index.html using Live Server (recommended) or your preferred local web server.

I would also add one more section

This makes your GitHub stand out much more.

This Project Features ... 
  Live CPU, memory, and disk usage monitoring
  REST API built with FastAPI
  Dynamic JavaScript frontend consuming JSON data
  Color-coded progress bars based on utilization thresholds
  Modular frontend/backend project architecture
  Automatic dashboard refresh with live system metrics
