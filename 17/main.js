/*------Task 17 ------
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

/*-----Program of excercise 16----Start---- */
let guests = ["Humais", "Mehroz","Hassan", "Hamza"];
let message = "You are invited for dinner on Monday.";
guests.splice(3,1,"Waqas"); //Replacing name & adding another
console.log("Hey "+guests[0]+", "+message);
console.log("Hey "+guests[1]+", "+message);
console.log("Hey "+guests[2]+", "+message);
console.log("Hey "+guests[3]+", "+message);
console.log("I would like to inform that more space has been arranged for dinner,\nSo, more people could be invited.");
guests.splice(0,0,"Saqib");// Added one new guest to the beginning of the array.
guests.push("Sohaib");//Added one new guest to end of the list.
guests.splice(3,0,"Ali") //Adding one new guest to the middle of the array.
console.log("Hey "+guests[0]+", "+message);
console.log("Hey "+guests[1]+", "+message);
console.log("Hey "+guests[2]+", "+message);
console.log("Hey "+guests[3]+", "+message);
console.log("Hey "+guests[4]+", "+message);
console.log("Hey "+guests[5]+", "+message);
console.log("Hey "+guests[6]+", "+message);
/*-----Program of excercise 16----End---- */

console.log("Unfortunately, larger space cannot be arranged. Now only two people could be invited to dinner.");

let message2 = "I am relly soory, you are not invited for the dinner anymore.";

console.log("Hey "+guests.pop()+", "+message2);
console.log("Hey "+guests.pop()+", "+message2);
console.log("Hey "+guests.pop()+", "+message2);
console.log("Hey "+guests.pop()+", "+message2);
console.log("Hey "+guests.pop()+", "+message2);

/*---Message of invitation to the remaining two people---- */
console.log("Hey "+guests[0]+", "+message);
console.log("Hey "+guests[1]+", "+message);

/*-----Removing the remaining last two persons from the list---- */
guests.pop();
guests.pop();

console.log(guests); //Empty List