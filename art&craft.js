// Get canvas and controls
const canvas = document.getElementById("art-canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color-picker");
const brushSize = document.getElementById("brush-size");
const clearButton = document.getElementById("clear");

// Set initial canvas size and properties
canvas.width = 800;
canvas.height = 600;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;
let color = "#000000";
let size = 5;

// Event listeners for mouse/touch drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Update color and brush size based on user input
colorPicker.addEventListener("input", (e) => {
    color = e.target.value;
});

brushSize.addEventListener("input", (e) => {
    size = e.target.value;
});

// Start drawing when the mouse is pressed
function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Draw when mouse is moving while pressed
function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

// Stop drawing when the mouse is released or leaves the canvas
function stopDrawing() {
    isDrawing = false;
}

// Clear the canvas
clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});