"use strict";
// dom elements
const elements = {
    canvas: document.querySelector('#canvas'),
    activeToolEl: document.getElementById('active-tool'),
    brushColorBtn: document.getElementById('brush-color'),
    brushIcon: document.getElementById('brush'),
    brushSize: document.getElementById('brush-size'),
    brushSlider: document.getElementById('brush-slider'),
    bucketColorBtn: document.getElementById('bucket-color'),
    eraser: document.getElementById('eraser'),
    clearCanvasBtn: document.getElementById('clear-canvas'),
    saveStorageBtn: document.getElementById('save-storage'),
    loadStorageBtn: document.getElementById('load-storage'),
    clearStorageBtn: document.getElementById('clear-storage'),
    downloadBtn: document.getElementById('download'),
};
// Global Variables
const ctx = elements.canvas.getContext('2d');
let selectedTool = 'Brush';
// brush
class Brush {
    constructor(size, color) {
        this.size = size;
        this.color = color;
        //
    }
    set brushSize(size) {
        this.size = size;
    }
    set brushColor(color) {
        this.color = color;
    }
}
const brush = new Brush(10, '#fff');
// functions
const displaySelectedTool = () => (elements.activeToolEl.textContent = selectedTool);
const displayBrushSize = () => (elements.brushSize.textContent = brush.size.toString());
const updateBG = (color) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, elements.canvas.width, elements.canvas.height);
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
