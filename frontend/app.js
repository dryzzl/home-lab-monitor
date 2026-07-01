/*This gets data from FastAPI /* */
const cpuPercent = data.cpu_percent;
const memoryPercent = data.memory_percent;
const diskPercent = data.disk_percent;

/*Store value inside variables */
document.getElementById("cpu-percent").textContent = cpuPercent + "%";
document.getElementById("cpu-bar").textContent = cpuPercent + "%";

document.getElementById("memory-percent").textContent = memoryPercent + "%";
document.getElementById("memory-bar").textContent = memoryPercent + "%";

document.getElementById("disk-percent").textContent = diskPercent + "%";
document.getElementById("disk-bar").textContent = diskPercent + "%";

/*This applies the correct colors based on waring labels */
if (memoryPercent < 60) {
    bar.classList.add("good");
}
else if (memoryPercent < 85) {
    bar.classList.add("warning");
}
else {
    bar.classList.add("danger");
}