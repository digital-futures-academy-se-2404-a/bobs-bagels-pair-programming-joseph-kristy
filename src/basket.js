export default class Basket {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        
        if (typeof item === Object) {
            this.items.push(item);
        }
    }
    
    removeItem() {
        this.items.pop();
    }
}