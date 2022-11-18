/*------Task 29 ------
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
let favourite_fruits = ['apples','oranges','bananas'];

if (favourite_fruits.includes('apples')) {
    console.log("You really like apples.");
};

if (favourite_fruits.includes('oranges')) {
    console.log('You really like oranges');
};

if (favourite_fruits.includes('bananas')) {
    console.log('You really like bananas');
};

if (favourite_fruits.includes('watermelon')) {
    console.log('You really like watermelons');
};

if(favourite_fruits.includes('pomegranate')) {
    console.log('You really like pomegranate');
};
