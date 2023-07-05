
/*=========================*/
/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.

  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.

  Space: O(1) constant.

  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersOrdered2 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(numbers = []) {
    //for loop - iterate through the array, swapping at this value
    for (let i = 0; i < numbers.length; i++) {
        //temp value to remember indez to swap at
        let temp = i;
        //iterate through array to find lower/lowest number
        for (let j = i; j < numbers.length; j++) {
            //if number is lower than first balue at temp, change temp index
            if (numbers[j] < numbers[temp]) temp = j;
        }
        //swap elements
        //if temp is not at position i, sawp values
        if (temp !== i){
            let swap = numbers[temp];
            numbers[temp] = numbers[i];
            numbers[i] = swap;
        }
    }
    //return sorted array
    return numbers;
}
console.log(`selectionSort(numbersRandomOrder): ${selectionSort(numbersRandomOrder)}`);
console.log('===============\n');
console.log(`selectionSort(numbersRandomOrder): ${selectionSort(numbersReversed)}`);
console.log('===============\n');
console.log(`selectionSort(numbersRandomOrder): ${selectionSort(numbersOrdered)}`);
console.log('===============\n');
console.log(`selectionSort(numbersRandomOrder): ${selectionSort(numbersOrdered2)}`);




// For loop
// Nested for loop

// Find the minimum

//Temp variable to swap

console.log('===============\n');
console.log('===============\n');


/*****************************************************************************/
console.log('Alt Solution Below:');
//! Teacher's walk-through solution:

function selectionSort2(numbers = []) {
    //iterate through entire array
    for (let i = 0; i < numbers.length; i++) {
        const selectedNumber = numbers[i]
        //set min variables
        let indexOfMin = i
        let currentMin = numbers[indexOfMin]
        //finds the minimum variable
        for (let j = i+1; j < numbers.length; j++) {
            let jNumber = numbers[j]
            if (jNumber < currentMin) {
                indexOfMin = j 
                currentMin = numbers[j]
            }
        }
        //determine if we need to swap
        if (currentMin < selectedNumber) {
            let temp = selectedNumber;
            numbers[i] = currentMin;
            numbers[indexOfMin] = temp;
        }
        return numbers
    }
}
console.log(`selectionSort2(numbersRandomOrder): ${selectionSort2(numbersRandomOrder)}`);
console.log('===============\n');
console.log(`selectionSort2(numbersRandomOrder): ${selectionSort2(numbersReversed)}`);
console.log('===============\n');
console.log(`selectionSort2(numbersRandomOrder): ${selectionSort2(numbersOrdered)}`);
console.log('===============\n');
console.log(`selectionSort2(numbersRandomOrder): ${selectionSort2(numbersOrdered2)}`);





