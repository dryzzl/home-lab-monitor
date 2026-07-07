async function updateMetrics() {

    const response = await fetch("http://127.0.0.1:8000/metrics");
    const data = await response.json();

    const cpuPercent = data.cpu_percent;
    const memoryPercent = data.memory_percent;
    const diskPercent = data.disk_percent;

    // Update text
    document.getElementById("cpu-percent").textContent = cpuPercent + "%";
    document.getElementById("memory-percent").textContent = memoryPercent + "%";
    document.getElementById("disk-percent").textContent = diskPercent + "%";

    // Update progress bars
    const cpuBar = document.getElementById("cpu-bar");
    const memoryBar = document.getElementById("memory-bar");
    const diskBar = document.getElementById("disk-bar");

    cpuBar.style.width = cpuPercent + "%";
    memoryBar.style.width = memoryPercent + "%";
    diskBar.style.width = diskPercent + "%";

    // Reset colors
    cpuBar.className = "progress-bar";
    memoryBar.className = "progress-bar";
    diskBar.className = "progress-bar";

    // CPU Colors
    if (cpuPercent < 60) {
        cpuBar.classList.add("good");
    } else if (cpuPercent < 85) {
        cpuBar.classList.add("warning");
    } else {
        cpuBar.classList.add("danger");
    }

    // Memory Colors
    if (memoryPercent < 60) {
        memoryBar.classList.add("good");
    } else if (memoryPercent < 85) {
        memoryBar.classList.add("warning");
    } else {
        memoryBar.classList.add("danger");
    }

    // Disk Colors
    if (diskPercent < 60) {
        diskBar.classList.add("good");
    } else if (diskPercent < 85) {
        diskBar.classList.add("warning");
    } else {
        diskBar.classList.add("danger");
    }

}

// Run once immediately
updateMetrics();

// Refresh every 5 seconds
setInterval(updateMetrics, 5000);