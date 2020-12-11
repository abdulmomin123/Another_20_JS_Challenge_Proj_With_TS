"use strict";
// dom elements
const elements = {
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
// functions
const displaySelectedTool = () => (elements.activeToolEl.textContent = selectedTool);
displaySelectedTool();
// event listeners
