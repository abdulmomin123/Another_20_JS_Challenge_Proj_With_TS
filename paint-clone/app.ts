// dom elements
const elements = {
  canvas: document.querySelector('#canvas') as HTMLCanvasElement,
  activeToolEl: document.getElementById('active-tool') as HTMLSpanElement,
  brushColorBtn: document.getElementById('brush-color') as HTMLInputElement,
  brush: document.getElementById('brush') as HTMLDivElement,
  brushSize: document.getElementById('brush-size') as HTMLSpanElement,
  brushSlider: document.getElementById('brush-slider') as HTMLInputElement,
  bucketColorBtn: document.getElementById('bucket-color') as HTMLInputElement,
  eraser: document.getElementById('eraser') as HTMLDivElement,
  clearCanvasBtn: document.getElementById('clear-canvas') as HTMLDivElement,
  saveStorageBtn: document.getElementById('save-storage') as HTMLDivElement,
  loadStorageBtn: document.getElementById('load-storage') as HTMLDivElement,
  clearStorageBtn: document.getElementById('clear-storage') as HTMLDivElement,
  downloadBtn: document.getElementById('download') as HTMLDivElement,
  brushAndEraser: document.querySelectorAll(
    '#brush, #eraser'
  ) as NodeListOf<HTMLDivElement>,
};

// Global Variables
const ctx = elements.canvas.getContext('2d')!;

let isMouseDown = false;

// brush
class Brush {
  mode: 'Brush' | 'Eraser' = 'Brush';

  constructor(public size: number, public color: string) {
    //
  }

  set brushSize(size: number) {
    this.size = size;
  }

  set brushColor(color: string) {
    this.color = color;
  }

  set changeMode(mode: 'Brush' | 'Eraser') {
    this.mode = mode;
  }
}

const brush = new Brush(10, '#fff');

// functions
const displaySelectedTool = () =>
  (elements.activeToolEl.textContent = brush.mode);

const displayBrushSize = () =>
  (elements.brushSize.textContent = brush.size.toString());

const updateBG = (color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, elements.canvas.width, elements.canvas.height);
};

const updateTool = (mode: 'Brush' | 'Eraser') =>
  (brush.mode = elements.activeToolEl.textContent = mode);

const saveCanvas = () =>
  localStorage.setItem('savedCanvas', `${elements.canvas.toDataURL()}`);

const clearCanvas = () => localStorage.removeItem('savedCanvas');

const retriveCanvas = () => {
  const savedImg = localStorage.getItem('savedCanvas');

  if (!savedImg) return;

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
const draw = () => {
  if (!isMouseDown) return;

  console.log('hi');
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

// update the selected tool
elements.brushAndEraser.forEach(btn => {
  btn.addEventListener('click', e => {
    const btn = e.target as HTMLButtonElement;

    elements.brushAndEraser.forEach(btn =>
      (btn as HTMLElement).classList.remove('active')
    );

    btn.classList.add('active');

    if (btn.id === 'brush') updateTool('Brush');
    else updateTool('Eraser');
  });
});

// clear canvas
elements.clearCanvasBtn.addEventListener('click', () =>
  updateBG(`${elements.bucketColorBtn.value}`)
);

// save canvas
elements.saveStorageBtn.addEventListener('click', saveCanvas);

// retrive canvas
elements.loadStorageBtn.addEventListener('click', retriveCanvas);

// delete canvas
elements.clearStorageBtn.addEventListener('click', clearCanvas);

// save canvas to disk
elements.downloadBtn.addEventListener('click', downloadCanvas);

//////////////// the drawing events
elements.canvas.addEventListener('mousedown', () => (isMouseDown = true));
elements.canvas.addEventListener('mouseup', () => (isMouseDown = false));

elements.canvas.addEventListener('mousemove', draw);
