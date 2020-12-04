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
  listColumns: [
    ...(document.querySelectorAll(
      '.drag-item-list'
    ) as NodeListOf<HTMLUListElement>),
  ],
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
  addContainer: HTMLDivElement;
  textBox: HTMLDivElement;
  itemsListEl: HTMLUListElement;

  items: string[] = [];

  constructor(public title: string, public target: HTMLUListElement) {
    this.titleEl = target.querySelector('h1')!;
    this.addBtn = target.querySelector('.add-btn') as HTMLDivElement;
    this.saveBtn = target.querySelector('.add-btn.solid') as HTMLDivElement;
    this.addContainer = target.querySelector(
      '.add-container'
    ) as HTMLDivElement;
    this.textBox = target.querySelector('.add-item') as HTMLDivElement;
    this.itemsListEl = target.querySelector(
      '.drag-item-list'
    ) as HTMLUListElement;

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

    // update the dom
    [this.saveBtn, this.addContainer].forEach(btn =>
      (btn as HTMLElement).classList.remove('flex')
    );
    this.addBtn.classList.remove('hidden');
    this.textBox.textContent = '';

    saveBoards();

    console.log(this.items);
  }

  renderItems() {
    this.itemsListEl.innerHTML = '';

    this.items.forEach((item, i) =>
      this.itemsListEl.insertAdjacentHTML(
        'beforeend',
        `
        <li id="${i}" class="drag-item" draggable="true" contenteditable="true">
          ${item}
        </li>
        `
      )
    );
  }

  updateItem(indexOfItem: number, update: string) {
    this.items[indexOfItem] = update;

    saveBoards();

    console.log(this.items);
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

// saves the boards to localStorage
const saveBoards = () => {
  boards.forEach((board, i) =>
    board.items.length
      ? localStorage.setItem(`board${i}`, JSON.stringify(board.items))
      : null
  );
};

// renders saved boards
const retriveBoards = () => {
  boards.forEach((board, i) => {
    // check if there's a saved board
    localStorage.getItem(`board${i}`)
      ? (board.items = JSON.parse(localStorage.getItem(`board${i}`)!))
      : null;

    // render the items of the board
    boards[i].renderItems();
  });
};

retriveBoards();

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
      boards[index].renderItems();
    }
  })
);

// update an item
elements.listColumns.forEach(list =>
  list.addEventListener('focusout', e => {
    const target = e.target as HTMLUListElement;
    const index = indexOfEl(
      target.parentNode as HTMLElement,
      elements.listColumns
    );
    const { id, textContent: update } = target;

    boards[index].updateItem(+id, update?.trim()!);
  })
);
