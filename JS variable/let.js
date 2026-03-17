//[push():add to end
let foodItems = ["Pizza", "Burger", "Pasta"];
foodItems.push("Sushi");
console.log(foodItems); // Output: ["Pizza", "Burger", "Pasta", "Sushi"]
//[pop():remove from end
let foodItems2 = ["Pizza", "Burger", "Pasta"];
console.log(foodItems2); // Output: "Pasta"
let deletedItem = foodItems2.pop();
console.log(deletedItem); // Output: ["Pizza", "Burger"]
//splice():add/remove items at specific index
let foodItems3 = ["Pizza", "Burger", "Pasta"];
// Add "Sushi" at index 1
foodItems3.splice(1, 0, "Sushi");
console.log(foodItems3); // Output: ["Pizza", "Sushi", "Burger", "Pasta"]
//example
let arr = [1, 2, 3, 4, 5];
arr.splice(2,3,11,10);
console.log(arr); // Output: [1, 2, 11, 10, 5