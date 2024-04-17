import { assertEqualArray } from "./test-framework.js";
import { addItem } from "./index.js";

//Arrange
let basket = [];
let item = "bagel";
let expected, actual;

//Act
expected = ["bagel"];
basket = addItem(basket, item);

//Assert
let result = assertEqualArray(expected, basket);

//Report
console.log("Item is added to basket: ");
console.log(`Test returned: ${result}`);