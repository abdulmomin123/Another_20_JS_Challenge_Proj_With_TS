// dom elements
const elements = {
  canvas: document.querySelector('#canvas') as HTMLCanvasElement,
  activeToolEl: document.getElementById('active-tool') as HTMLSpanElement,
  brushColorBtn: document.getElementById('brush-color') as HTMLInputElement,
  brushIcon: document.getElementById('brush') as HTMLDivElement,
  brushSize: document.getElementById('brush-size') as HTMLSpanElement,
  brushSlider: document.getElementById('brush-slider') as HTMLInputElement,
  bucketColorBtn: document.getElementById('bucket-color') as HTMLInputElement,
  eraser: document.getElementById('eraser') as HTMLDivElement,
  clearCanvasBtn: document.getElementById('clear-canvas') as HTMLDivElement,
  saveStorageBtn: document.getElementById('save-storage') as HTMLDivElement,
  loadStorageBtn: document.getElementById('load-storage') as HTMLDivElement,
  clearStorageBtn: document.getElementById('clear-storage') as HTMLDivElement,
  downloadBtn: document.getElementById('download') as HTMLDivElement,
};

// Global Variables
const ctx = elements.canvas.getContext('2d')!;

let selectedTool: 'Brush' | 'Eraser' = 'Brush';

// brush
class Brush {
  constructor(public size: number, public color: string) {
    //
  }

  set brushSize(size: number) {
    this.size = size;
  }

  set brushColor(color: string) {
    this.color = color;
  }
}

const brush = new Brush(10, '#fff');

// functions
const displaySelectedTool = () =>
  (elements.activeToolEl.textContent = selectedTool);

const displayBrushSize = () =>
  (elements.brushSize.textContent = brush.size.toString());

const updateBG = (color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, elements.canvas.width, elements.canvas.height);
};

updateBG('#fff');

displaySelectedTool();
displayBrushSize();

// event listeners
// updte brush color
elements.brushColorBtn.addEventListener(
  'change',
  () => (brush.color = elements.brushColorBtn.value)
);

// update bg color
elements.bucketColorBtn.addEventListener('input', () =>
  updateBG(elements.bucketColorBtn.value)
);

// update brush size
elements.brushSlider.addEventListener(
  'input',
  () => ((brush.size = +elements.brushSlider.value), displayBrushSize())
);
