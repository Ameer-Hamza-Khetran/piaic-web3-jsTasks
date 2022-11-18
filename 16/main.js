/*------Task 16 ------
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

/*-----Program of Exercise 15------ Start ---- */
let guests = ["Humais", "Mehroz","Hassan", "Hamza"];
let message = "You are invited for dinner on Monday.";
guests.splice(3,1,"Waqas"); //Replacing name & adding another
console.log("Hey "+guests[0]+", "+message);
console.log("Hey "+guests[1]+", "+message);
console.log("Hey "+guests[2]+", "+message);
console.log("Hey "+guests[3]+", "+message);
/*-----Program of Exercise 15------ End ---- */

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