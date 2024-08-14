// Q1 - Square each element of an array using map and arrow function
/*
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log("Numbers are :-", numbers);
console.log("Square of numbers are ", squaredNumbers);
*/

// Q2 - Function to return student's grade using ternary operators
/*
function getGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}
console.log(getGrade(85)); 
*/

// Q3 - Object representing a car, function to change year, and object destructuring
/*
let car = {
    companyName: 'Toyota',
    model: 'Camry',
    year: 2020
};

function changeCarYear(newYear) {
    car.year = newYear;
}

changeCarYear(2023);
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);
*/

// Q4 - Filter function to create a new array containing only the prime numbers
/*
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);
*/

// Q5 - Use cases of map, filter, and reduce
/*
// map: Transforms each element in an array. Example: Squaring numbers in an array.
// filter: Creates a new array with elements that pass a test. Example: Filtering prime numbers from an array.
// reduce: Reduces an array to a single value. Example: Summing all numbers in an array.
*/

// Q6 - Asynchronous function using async-await to fetch data from an API
/*
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
*/

// Q7 - Nested object and optional chaining to access a phone number
/*
let person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    contact: {
        phone: '123-456-7890',
        email: 'john@example.com'
    }
};

console.log(person.contact?.phone);
console.log(person.contact?.fax); 
*/

