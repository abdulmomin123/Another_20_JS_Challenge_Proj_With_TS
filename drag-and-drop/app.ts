// dom elements
const elements = {
  addBtns: [
    ...(document.querySelectorAll(
      '.add-btn:not(.solid)'
    ) as NodeListOf<HTMLDivElement>),
  ],
  saveItemBtns: [
    ...(document.querySelectorAll('.solid') as NodeListOf<HTMLDivElement>),
  ],
  addItemContainers: document.querySelectorAll(
    '.add-container'
  ) as NodeListOf<HTMLDivElement>,
  addItems: document.querySelectorAll(
    '.add-item'
  ) as NodeListOf<HTMLDivElement>,
  // Item Lists
  listColumns: document.querySelectorAll(
    '.drag-item-list'
  ) as NodeListOf<HTMLUListElement>,
  backlogListEl: document.getElementById('backlog-list') as HTMLUListElement,
  progressListEl: document.getElementById('progress-list') as HTMLUListElement,
  completeListEl: document.getElementById('complete-list') as HTMLUListElement,
  onHoldListEl: document.getElementById('on-hold-list') as HTMLUListElement,
};

// global variables
class Board {
  titleEl: HTMLHeadingElement;
  addBtn: HTMLDivElement;
  saveBtn: HTMLDivElement;
  textBox: HTMLDivElement;
  addContainer: HTMLDivElement;
  items: string[] = [];

  constructor(public title: string, public target: HTMLUListElement) {
    this.titleEl = target.querySelector('h1')!;
    this.addBtn = target.querySelector('.add-btn') as HTMLDivElement;
    this.saveBtn = target.querySelector('.add-btn.solid') as HTMLDivElement;
    this.textBox = target.querySelector('.add-item') as HTMLDivElement;
    this.addContainer = target.querySelector(
      '.add-container'
    ) as HTMLDivElement;

    // assigning the title
    this.titleEl.textContent = title;
  }

  // displays the textbox upon clicking add item btn
  displayTextbox() {
    // show the textbox & add save item btn
    [this.saveBtn, this.addContainer].forEach(btn =>
      (btn as HTMLElement).classList.add('flex')
    );

    // hide the add item btn
    this.addBtn.classList.add('hidden');
  }

  // saves the item
  saveItem(item: string) {
    this.items.push(item);
    console.log(this.items);
  }

  renderItems() {
    //
  }
}

// All boards
const boards = [
  new Board(
    'Backlog',
    document.querySelector('.backlog-column') as HTMLUListElement
  ),
  new Board(
    'In Progress',
    document.querySelector('.progress-column') as HTMLUListElement
  ),
  new Board(
    'Complete',
    document.querySelector('.complete-column') as HTMLUListElement
  ),
  new Board(
    'On Hold',
    document.querySelector('.on-hold-column') as HTMLUListElement
  ),
];

// functions
// returns the index of an element in an array
const indexOfEl = (el: HTMLElement, arr: any[]) => arr.indexOf(el);

// event listeners
// Add item handler
elements.addBtns.forEach(btn =>
  btn.addEventListener('click', e => {
    const index = indexOfEl(
      (e.target as HTMLElement).closest('.add-btn') as HTMLDivElement,
      elements.addBtns
    );

    boards[index].displayTextbox();
  })
);

// save item handler
elements.saveItemBtns.forEach(btn =>
  btn.addEventListener('click', e => {
    const index = indexOfEl(
      (e.target as HTMLElement).closest('.solid') as HTMLDivElement,
      elements.saveItemBtns
    );

    const item = boards[index].textBox.textContent!;

    // save the typed in text
    if (item.length) {
      boards[index].saveItem(item);
    }
  })
);
