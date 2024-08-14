function isArmstrongNumber(num) {
    // Convert the number to a string to get each digit
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    // Iterate through each digit and compute the sum of its power of 3
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, 3);
    }

    // Check if the sum equals the original number
    return sum === num;
}

function sumOfDigits(num) {
    // Convert the number to a string to access each digit
    const numStr = num.toString();
    let sum = 0;

    // Iterate through each digit and compute the sum
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    return sum;
}

function getFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

let number = parseInt(prompt("Enter a number"));
console.log("Number:- ", number);
console.log(`The sum of its digits:`, sumOfDigits(number));

if (isArmstrongNumber(number)) {
    console.log('Is it an Armstrong number?  Yes');
} else {
    console.log("Is it an Armstrong number?  No");
}

if (number % 2 == 0) {
    console.log("Is it prime number? Yes");
}
else {
    console.log("Is it prime number? NO");
}

let factors = getFactors(number);
console.log(`Factors: ${factors}`);

// Ex - Number : - 153
// Sum of its digits: 9
// Is it an Armstrong number ? Yes
//  Is it a prime number? No
//  Factors: 1, 3, 17, 51, 153

