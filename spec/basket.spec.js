import { assertEqual, assertFalse, assertTrue } from "./test-framework.js";
import Basket from "../src/Basket-class.js";
import Item from "../src/Item-class.js";

function CleanUp() {
    basket = undefined;
    testItem = undefined;
    expected = undefined;
    actual = undefined;
    result = undefined;
}

//? Statement 1 - Test 1
//* Basket is one larger after adding item.

console.log("Statement 1 - Test 1");
console.log("===============");

//Arrange
let basket = new Basket();
let testItem = new Item();
let expected, actual, result;

//Act
expected = basket.getItems().length + 1;
basket.addItem(testItem);
actual = basket.getItems().length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log("addItem is called -> basket is one larger: ");
console.log(`Test returned: ${result}`);

CleanUp();

console.log("===============");

//? Statement 1 - Test 2
//* Basket contains item after being added.

console.log("Statement 1 - Test 2");
console.log("===============");

//Arrange
basket = new Basket();
testItem = new Item();

//Act
expected = testItem;
basket.addItem(testItem);
actual = basket.getItems()[basket.getItems().length - 1];

//Assert
result = assertEqual(expected, actual);

//Report
console.log("addItem is called -> item is added to basket: ");
console.log(`Test returned: ${result}`);

CleanUp();
console.log("===============");

//? Statement 1 - Test 3
//* Check if a non-Item parameter is added it is not added to the basket array

console.log("Statement 1 - Test 3");
console.log("===============");

//Arrange
basket = new Basket();
testItem = {};

//Act
expected = 0;
basket.addItem(testItem);
actual = basket.getItems().length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log("Non-Item instance is added to basket -> basket remains empty: ");
console.log(`Test returned: ${result}`);

CleanUp();
console.log("===============");



//? Statement 2 - Test 1
//* Check removing from an empty basket

console.log("Statement 2 - Test 1");
console.log("===============");

//Arrange
basket = new Basket();

//Act
expected = basket.getItems().length;
basket.removeItem();
actual = basket.getItems().length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log("removeItem is called on empty basket -> basket size remains 0: ");
console.log(`Test returned: ${result}`);

CleanUp();

console.log("===============");

//? Statement 2 - Test 2
//* Check the Basket.items array decreases in size by 1 if it's not empty

console.log("Statement 2 - Test 2");
console.log("===============");

//Arrange
basket = new Basket();
testItem = new Item();
basket.addItem(testItem);

//Act
expected = basket.getItems().length - 1;
basket.removeItem();
actual = basket.getItems().length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log("removeItem is called -> basket size decreases by 1: ");
console.log(`Test returned: ${result}`);

CleanUp();

console.log("===============");


//? Statement 3 - Test 1
//* Check that it is not at max capacity with an amount of items smaller than maximum capacity

console.log("Statement 3 - Test 1");
console.log("===============");

// Arrange
basket = new Basket();
expected = false;
testItem = new Item();
basket.addItem(testItem); 


//Act
actual = basket.isFull(); // It should be false 


// Assert
result = assertFalse(actual);
console.log("isFull is called with items < maxCapacity -> is not full: ");
console.log(`Test returned: ${result}`);

CleanUp();

console.log("===============");

//? Statement 3 - Test 2
//* Check that it is at max capacity with an amount of items equal to maximum capacity

console.log("Statement 3 - Test 2");
console.log("===============");

// Arrange
basket = new Basket();
expected = true;

// Act
//* Populating basket to max capacity
for(let i = 0; i < basket.getMaxCapacity(); i++) {
    basket.addItem(new Item());
}

actual = basket.isFull(); // It should be full (true)

// Assert
result = assertTrue(actual);
console.log("isFull is called with items == maxCapacity -> it is full: ");
console.log(`Test returned: ${result}`);

CleanUp();

console.log("===============");

//? Statement 3 - Test 3
//* Check that it's not at max capacity with 0 items
console.log("Statement 3 - Test 3");
console.log("===============");

// Arrange
basket = new Basket();
expected = false;

// Act
actual = basket.isFull(); // It should not be full (true)

// Assert
result = assertFalse(actual);
console.log("isFull is called with 0 items -> it is not full: ");
console.log(`Test returned: ${result}`);

CleanUp();
console.log("===============");
