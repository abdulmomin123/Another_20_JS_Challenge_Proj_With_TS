"use strict";
// dom elements
const elements = {
    addBtns: [
        ...document.querySelectorAll('.add-btn:not(.solid)'),
    ],
    saveItemBtns: [
        ...document.querySelectorAll('.solid'),
    ],
    addItemContainers: document.querySelectorAll('.add-container'),
    addItems: document.querySelectorAll('.add-item'),
    // Item Lists
    listColumns: [
        ...document.querySelectorAll('.drag-item-list'),
    ],
    backlogListEl: document.getElementById('backlog-list'),
    progressListEl: document.getElementById('progress-list'),
    completeListEl: document.getElementById('complete-list'),
    onHoldListEl: document.getElementById('on-hold-list'),
};
// global variables
class Board {
    constructor(title, target) {
        this.title = title;
        this.target = target;
        this.items = [];
        this.titleEl = target.querySelector('h1');
        this.addBtn = target.querySelector('.add-btn');
        this.saveBtn = target.querySelector('.add-btn.solid');
        this.addContainer = target.querySelector('.add-container');
        this.textBox = target.querySelector('.add-item');
        this.itemsListEl = target.querySelector('.drag-item-list');
        // assigning the title
        this.titleEl.textContent = title;
    }
    // displays the textbox upon clicking add item btn
    displayTextbox() {
        // show the textbox & add save item btn
        [this.saveBtn, this.addContainer].forEach(btn => btn.classList.add('flex'));
        // hide the add item btn
        this.addBtn.classList.add('hidden');
    }
    // saves the item
    saveItem(item) {
        this.items.push(item);
        // update the dom
        [this.saveBtn, this.addContainer].forEach(btn => btn.classList.remove('flex'));
        this.addBtn.classList.remove('hidden');
        this.textBox.textContent = '';
        console.log(this.items);
    }
    renderItems() {
        this.itemsListEl.innerHTML = '';
        this.items.forEach((item, i) => this.itemsListEl.insertAdjacentHTML('beforeend', `
        <li id="${i}" class="drag-item" draggable="true" contenteditable="true">
          ${item}
        </li>
        `));
    }
    updateItem(indexOfItem, update) {
        this.items[indexOfItem] = update;
    }
}
// All boards
const boards = [
    new Board('Backlog', document.querySelector('.backlog-column')),
    new Board('In Progress', document.querySelector('.progress-column')),
    new Board('Complete', document.querySelector('.complete-column')),
    new Board('On Hold', document.querySelector('.on-hold-column')),
];
// functions
// returns the index of an element in an array
const indexOfEl = (el, arr) => arr.indexOf(el);
// event listeners
// Add item handler
elements.addBtns.forEach(btn => btn.addEventListener('click', e => {
    const index = indexOfEl(e.target.closest('.add-btn'), elements.addBtns);
    boards[index].displayTextbox();
}));
// save item handler
elements.saveItemBtns.forEach(btn => btn.addEventListener('click', e => {
    const index = indexOfEl(e.target.closest('.solid'), elements.saveItemBtns);
    const item = boards[index].textBox.textContent;
    // save the typed in text
    if (item.length) {
        boards[index].saveItem(item);
        boards[index].renderItems();
    }
}));
// update an item
elements.listColumns.forEach(list => list.addEventListener('focusout', e => {
    const target = e.target;
    const index = indexOfEl(target.parentNode, elements.listColumns);
    const { id, textContent: update } = target;
    boards[index].updateItem(+id, update?.trim());
}));
