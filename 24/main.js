/*------Task 24 ------
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

/*--------Test for equality & inequality with strings------- */

let name1 = "Hamza";

console.log("name1 === 'hamza'. I predict false");
console.log(name1 === 'hamza');

console.log("name1 === 'Hamza'. I predict true");
console.log(name1 === 'Hamza');

console.log("name1 !==  'Hamza'. I predict false");
console.log(name1 !== 'Hamza');

console.log("name1 !== 'hamza'. I predict true");
console.log(name1 !== 'hamza');

/*--------Tests using the lower case function------- */

let Name = "HAMZA";

console.log("Name.tolowercase() === 'hamza'. I predict true");
console.log(Name.toLowerCase() === 'hamza');

console.log("Name.tolowercase() === 'HAMZA'. I predict false");
console.log(Name.toLowerCase() === 'HAMZA');

/*--------------Numerical tests involving--------------
*----equality and inequality, 
*----greater than and less than, 
*----greater than or equal to, 
*----and less than or equal to----------*/

let x = 5;
let y = '5';

console.log("x == y I predict true");
console.log(x == y);

console.log("x === y I predict false");
console.log(x === y);

console.log("x !== y I predict true");
console.log(x !== y);

console.log("x != y I predict false");
console.log(x != y);

let m = 4;
let n = 9;

console.log("m > n I predict false");
console.log(m > n);

console.log("n > m I predict true");
console.log(n > m);

console.log("m < n I predict true");
console.log(m < n);

console.log("n < m I predict false");
console.log(n < m);

console.log("m >= n I predict false");
console.log(m >= n);

console.log("n >= m I predict true");
console.log(n >= m);

console.log("m <= n I predict true");
console.log(m <= n);

console.log("n <= m I predict false");
console.log(n <= m);

/*--------Tests using "and" and "or" operators------- */

console.log("m < n && m <= n I predict true");
console.log(m < n && m <= n );

console.log("n < m && n <= m I predict false");
console.log(n < m && n <= m ); 

console.log("m > n || m <= n I predict true");
console.log(m < n && m <= n );

console.log("n < m || n = m I predict false");
console.log(n < m && n <= m ); 

/*--------Test whether an item is in a array------- */

let fruits = ['apples','oranges','bananas','watermelons'];

console.log(fruits.includes('apples'));
console.log(fruits.includes('pomegranates'));
console.log(fruits.includes('bananas'));
console.log(fruits.includes("peach"));

/*--------Test whether an item is not in a array------- */

console.log(!fruits.includes('apples'));
console.log(!fruits.includes('pomegranates'));
console.log(!fruits.includes('mangoes'));