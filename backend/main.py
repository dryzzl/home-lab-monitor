# This application is called Home Lab Montior
# This is an application that will allows users to be able to see their hardware status
# Includes things like CPU Percent, VRAM Usage, Disk Usage, and CPU Core Count

# This is where we're going to start by importing FastAPI and psutil
from fastapi import FastAPI
import psutil
import time

app = FastAPI()

@app.get("/")
def root ():
    return {"message": "Home Lab Monitor API Running"}

@app.get("/metrics")
def get_metrics():
    return {
        "cpu_percent": psutil.cpu_percent(interval=1),
        "cpu_cores": psutil.cpu_count(logical=False),
        "cpu_threads": psutil.cpu_count(logical=True),
        "memory_percent": psutil.virtual_memory().percent,
        "disk_percent": psutil.disk_usage("C:\\").percent,
        "uptime_seconds": time.time() - psutil.boot_time()
    }