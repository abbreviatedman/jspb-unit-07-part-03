// Lesson 07.03 - find and findIndex - FINAL

// **find() method**

// The **find()** method serves a narrowly specific role: it finds the first
// item in an array that meets a condition, and it returns that item, _only_. It
// does not look for any more items that meet the condition.

// - If NO item that satisfies the condition is found, the **find()** method
//   returns **undefined**.

// First, let's emulate the "find" algorithm using a for loop.

// 1. Given this **digits** array, let's define a function with a for loop that
// iterates over an array:

let digits = [30, 54, 72, 89, 110, 137, 189];

// const findFirstOdd = function (array) {
//   for (let i = 0; i < array.length; i++) {}
// };

// 2. Each time through the loop, pass the current item to an if-statement that
// uses the modulus operator to see if the current number, **digits[i]**,
// divided by 2 yields a remainder of 1:

// const findFirstOdd = function (nums) {
//   for (let i = 0; i < array.length; i++) {
//     if (nums[i] % 2 === 1) {
//     }
//   }
// };

// 3. If the condition returns true, the number is odd, so return the odd
// number. This is especially important if there is a long array with lots of
// numbers yet to check. We are only finding the first odd number, so there is
// no point in checking the rest of the array:

// const findFirstOdd = function (nums) {
//   for (let i = 0; i < array.length; i++) {
//     if (nums[i] % 2 === 1) {
//       return nums[i];
//     }
//   }
// };

// 4. If no odd number was ever found, return **undefined**. This must be done
// only _after_ the loop ends and all items in the array have been checked:

// const findFirstOdd = function (nums) {
//   for (let i = 0; i < array.length; i++) {
//     if (nums[i] % 2 === 1) {
//       return nums[i];
//     }
//   }

//   return undefined;
// };

// 5. However, while we wanted to demonstrate what **find** does when it fails
// to find the item, we don't actually need to explicitly return **undefined**.
// This is because when a JavaScript function doesn't return anything,
// **undefined** is returned. So take that **return** statement back out.

const findFirstOdd = function (nums) {
  for (let i = 0; i < array.length; i++) {
    if (nums[i] % 2 === 1) {
      return nums[i];
    }
  }
};

let firstOddNumber = findFirstOdd(digits);
console.log(firstOddNumber);

// 6. Change the array values so that there are no odd numbers, to make sure
// that the **find()** method returns **undefined**.

// **find() method instead of for loop**

// Now let's use the **find()** method to hunt for the first odd number.

// 7. Call the **find()** method on the **digits** array. Since the method
// returns a value, set the call equal to a variable to store the return value:

// let foundItem = digits.find();

// 8. Add the callback function as an anonymous function declaration.

// const foundItem = digits.find(function (num) {
//   return num % 2 === 1;
// });

// 9. Since this function only has one statement, the return, it's particularly
// well-suited for conversion to an arrow function. And since it only has one
// line, omit the function curly braces:

let foundItem = digits.find((num) => num % 2 == 1);
console.log(foundItem);

// **array callback functions use loops under the hood**

// As we can see, the **find()** method is much more concise than a loop with
// if-statement. But it is important to understand the process terms of a loop,
// because the array callback functions -- **map()**, **filter()**, **forEach**,
// **find()**, **findLast()**, **findIndex()**, **findLastIndex()**-- actually
// use loops "under the hood".

// **findIndex()**

// To return the position of the first instance of a target value, use
// **findIndex()** rather than **find()**.

// 10. Use **findIndex()** to find the position of the first odd number in the
// digits array:

let foundIndex = digits.findIndex((num) => num % 2 == 1);
console.log(foundIndex);

// 11. Make sure that the **findIndex()** method returns **-1** by changing the
// **digits** array values so that there are no odd numbers.

// 12. Let's look at another example. Use **find** to find the first string
// that's 5 characters long in the following array:

const fruits = [
  "Orange",
  "Apple",
  "Mango",
  "Apple",
  "Banana",
  "Mango",
  "Apple",
];

const first5CharacterString = fruits.find((fruit) => fruit.length === 5);

console.log(first5CharacterString); //> 'Apple'

// 13. Use **findIndex** to find the position of the first fruit string that
// ends in "o":

const firstEndsWithOFruit = fruits.find(
  (fruit) => fruit[fruit.length - 1] === "o"
);
