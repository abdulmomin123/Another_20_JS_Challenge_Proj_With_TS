"use strict";
// dom elements
const elements = {
    canvas: document.querySelector('#canvas'),
    activeToolEl: document.getElementById('active-tool'),
    brushColorBtn: document.getElementById('brush-color'),
    brush: document.getElementById('brush'),
    brushSize: document.getElementById('brush-size'),
    brushSlider: document.getElementById('brush-slider'),
    bucketColorBtn: document.getElementById('bucket-color'),
    eraser: document.getElementById('eraser'),
    clearCanvasBtn: document.getElementById('clear-canvas'),
    saveStorageBtn: document.getElementById('save-storage'),
    loadStorageBtn: document.getElementById('load-storage'),
    clearStorageBtn: document.getElementById('clear-storage'),
    downloadBtn: document.getElementById('download'),
    brushAndEraser: document.querySelectorAll('#brush, #eraser'),
};
// Global Variables
const ctx = elements.canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isMouseDown = false;
let lastX = 0;
let lastY = 0;
// brush
class Brush {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        this.mode = 'Brush';
        //
    }
    set brushSize(size) {
        this.size = size;
    }
    set brushColor(color) {
        this.color = color;
    }
    set changeMode(mode) {
        this.mode = mode;
    }
}
const brush = new Brush(10, elements.brushColorBtn.value);
// functions
const displaySelectedTool = () => (elements.activeToolEl.textContent = brush.mode);
const displayBrushSize = () => (elements.brushSize.textContent = brush.size.toString());
const updateBG = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, elements.canvas.width, elements.canvas.height);
};
const updateTool = (mode) => (brush.mode = elements.activeToolEl.textContent = mode);
const saveCanvas = () => localStorage.setItem('savedCanvas', `${elements.canvas.toDataURL()}`);
const clearCanvas = () => localStorage.removeItem('savedCanvas');
const retriveCanvas = () => {
    const savedImg = localStorage.getItem('savedCanvas');
    if (!savedImg)
        return;
    const img = new Image();
    img.src = savedImg;
    img.addEventListener('load', () => ctx.drawImage(img, 0, 0));
};
const downloadCanvas = () => {
    const img = elements.canvas.toDataURL();
    elements.downloadBtn.setAttribute('href', img);
    elements.downloadBtn.setAttribute('download', 'your-drawing.png');
};
// ////////////////// the draw func
const draw = (e) => {
    if (!isMouseDown)
        return;
    ctx.strokeStyle = brush.color;
    ctx.lineWidth = brush.size;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
};
updateBG('#fff');
displaySelectedTool();
displayBrushSize();
// event listeners
// updte brush color
elements.brushColorBtn.addEventListener('change', () => (brush.color = elements.brushColorBtn.value));
// update bg color
elements.bucketColorBtn.addEventListener('input', () => updateBG(elements.bucketColorBtn.value));
// update brush size
elements.brushSlider.addEventListener('input', () => ((brush.size = +elements.brushSlider.value), displayBrushSize()));
// update the selected tool
elements.brushAndEraser.forEach(btn => {
    btn.addEventListener('click', e => {
        const btn = e.target;
        elements.brushAndEraser.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        if (btn.id === 'brush')
            updateTool('Brush');
        else
            updateTool('Eraser');
    });
});
// clear canvas
elements.clearCanvasBtn.addEventListener('click', () => updateBG(`${elements.bucketColorBtn.value}`));
// save canvas
elements.saveStorageBtn.addEventListener('click', saveCanvas);
// retrive canvas
elements.loadStorageBtn.addEventListener('click', retriveCanvas);
// delete canvas
elements.clearStorageBtn.addEventListener('click', clearCanvas);
// save canvas to disk
elements.downloadBtn.addEventListener('click', downloadCanvas);
//////////////// the drawing events
elements.canvas.addEventListener('mousedown', e => ((isMouseDown = true), (lastX = e.offsetX), (lastY = e.offsetY)));
elements.canvas.addEventListener('mouseup', () => (isMouseDown = false));
elements.canvas.addEventListener('mousemove', draw);
