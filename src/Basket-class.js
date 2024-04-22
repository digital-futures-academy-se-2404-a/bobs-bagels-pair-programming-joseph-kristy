import Item from './Item-class.js';

export default class Basket {
  #maxCapacity;
  #items;
  
  constructor() {
    this.#items = [];
    this.#maxCapacity = 10;
  }

  getMaxCapacity = () => this.#maxCapacity;

  getItems = () => this.#items;

  addItem = (item) => item instanceof Item && this.#items.push(item);

  removeItem = () => this.#items.pop();

  isFull = () => this.#items.length >= this.#maxCapacity;
}