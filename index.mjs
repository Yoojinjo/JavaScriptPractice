// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

const isDivFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(isDivFive);

const IsFirstGreaterThanLast = n1 > n4;
console.log(IsFirstGreaterThanLast);

let a = ((n2 - n1) * n3) % n4;
console.log(a);

// All numbers under 25
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isUnder25);

// PART 2
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
const FuelFiftyFive = 1500 / 30;
const FuelSixty = 1500 / 28;
const FuelSeventyFive = 1500 / 23;
console.log(`Gallons of gas required for 55mph: ${FuelFiftyFive}.`);
console.log(`Gallons of gas required for 60mph: ${FuelSixty}.`);
console.log(`Gallons of gas required for 75mph: ${FuelSeventyFive}.`);

// Will your budget be enough to cover the fuel expense?
const FuelFiftyFiveCost = FuelFiftyFive*3
const FuelSixtyCost = FuelSixty*3
const FuelSeventyFiveCost = FuelSeventyFive*3

console.log(`Budget enough to cover the fuel expense 55mph? ${FuelFiftyFiveCost<175}`)
console.log(`Budget enough to cover the fuel expense 60mph? ${FuelSixtyCost<175}`)
console.log(`Budget enough to cover the fuel expense 75mph? ${FuelSeventyFiveCost<175}`)

// How long will the trip take, in hours?
const TripTimeFiftyFive = 1500/55
const TripTimeSixty = 1500/60
const TripTimeSeventyFive = 1500/75

console.log(`The trip time of 55mph is ${TripTimeFiftyFive} hours.`)
console.log(`The trip time of 60mph is ${TripTimeSixty} hours.`)
console.log(`The trip time of 75mph is ${TripTimeSeventyFive} hours.`)