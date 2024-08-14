// Ex Array:- [4, 8, 2, 11, 6, 7, 10]
// Maximum number: 11
// Sum of all elements: 48
// Count of odd numbers: 2

function Max(arr) {
    let maxNumber = -Infinity; // Initialize with a very small number

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;

};

function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum;
};

function odd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count += 1;
        }

    }
    return count;

}


let array1 = [4, 8, 2, 11, 6, 7, 10];
console.log("Array1:- ", array1)
console.log("Maximun Number:", Max(array1));
console.log("Sum of all the elements: ", sum(array1));
console.log("Count of Odd Numbers:", odd(array1));


console.log('...');
console.log('...');
console.log('...');

let array2 = [12, 2, 34, 45, 67, 89, 56, 34, 56,];
console.log("Array2:- ", array2)
console.log("Maximun Number:", Max(array2));
console.log("Sum of all the elements: ", sum(array2));
console.log("Count of Odd Numbers:", odd(array2)); 