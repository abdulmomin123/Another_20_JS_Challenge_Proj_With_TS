// dom elements
const elements = {
  addBtns: document.querySelectorAll(
    '.add-btn:not(.solid)'
  ) as NodeListOf<HTMLButtonElement>,
  saveItemBtns: document.querySelectorAll(
    '.solid'
  ) as NodeListOf<HTMLButtonElement>,
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
  constructor(public title: string) {
    //
  }

  addItem() {
    //
  }
}

// functions

// event listeners
