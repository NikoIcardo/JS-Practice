// Adding strings to numbers
let foo = 10 + '10'; 
console.log(foo);
//1010

// == operator
let y = 0.1 + 0.2;
console.log(y == 0.3); // false
// y = 0.30000000000000004
// JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
// Integers are accurate up to 15 digits 
// max decimals = 17

// Examine above in the following format
// not all decimal numbers are exactly representable in binary...https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
y = (0.1 * 10 + 0.2 * 10) / 10 ;
console.log(y == 0.3);

//Make the following syntax work 
//add(2,5) = 7 

const add = (a,b) => a + b;
console.log(add(2,5)); 

//make add(2)(5) work 
// return a function from the original function. 
const add2 = (a) => {
  const adder = (b) => {
    return a + b;
  }

  return adder; 
}

console.log(add2(2)(5)); 

// what returns from the following "i'm a lasagna hog".split("").reverse().join("");
// split splits on the specified character then returns an array with the split indices, reverse() reverses an array, join()  concatenates an array into a string in order and returns the string
console.log("i'm a lasagna hog".split("").reverse().join("")); 


//what is window.foo

console.log(window.foo || (window.foo = "bar")); 


