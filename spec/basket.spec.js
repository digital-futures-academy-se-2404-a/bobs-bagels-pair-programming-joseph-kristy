import { assertEqual } from "./test-framework.js";
import Basket from "../src/basket.js"

function CleanUp() {
    basket.items = [];
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
let testItem = {};
let expected, actual, result;

//Act
expected = basket.items.length + 1;
basket.addItem(testItem);
actual = basket.items.length;

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
testItem = {};

//Act
expected = testItem;
basket.addItem(testItem);
actual = basket.items[basket.items.length - 1];

//Assert
result = assertEqual(expected, actual);

//Report
console.log("addItem is called -> item is added to basket: ");
console.log(`Test returned: ${result}`);

CleanUp();
console.log("===============");

//? Statement 1 - Test 3
//* Check if a non-object item is added it is not added to the basket array

console.log("Statement 1 - Test 3");
console.log("===============");

//Arrange
testItem = "";

//Act
expected = 0;
basket.addItem(testItem);
actual = basket.items.length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log("Non-object is added to basket -> basket remains empty: ");
console.log(`Test returned: ${result}`);

CleanUp();
console.log("===============");



//? Statement 2 - Test 1
//* Check removing from an empty basket

console.log("Statement 2 - Test 1");
console.log("===============");

//Arrange

//Act
expected = basket.items.length;
basket.removeItem();
actual = basket.items.length;

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
testItem = {};
basket.items = [testItem];

//Act
expected = basket.items.length - 1;
basket.removeItem();
actual = basket.items.length;

//Assert
result = assertEqual(expected, actual);

//Report
console.log("removeItem is called -> basket size decreases by 1: ");
console.log(`Test returned: ${result}`);

CleanUp();

console.log("===============");
