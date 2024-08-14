//  A=P(1+(r/n))^nt
// Where:
// A = amount
// P = principal
// r = rate of interest
// n = number of times interest is compounded per year
// t = time (in years)

let P = parseFloat(prompt("Enter Principal:"));
console.log('Principal:', P);

let R = parseFloat(prompt("Enter Rate of Interest:")) / 100;
console.log('Rate of Interest:', R);

let n = parseInt(prompt("Enter number of times interest is compounded per year:"));
console.log('Number of times interest is compounded per year:', n);

let T = parseFloat(prompt("Enter time (in years):"));
console.log('Time:', T);

console.log("Calculating .......");

let A = P * (1 + (R / n)) ** (n * T);
console.log("Your Total Amount after ", T, " years: ", A);

let CI = A - P;
console.log("Compound interest :", CI);

