/*------Task 15 ------
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

/*---------Program from Excercise 14-------Start------ */
let guests = ["Humais", "Mehroz","Hassan", "Hamza"];
let message = "You are invited for dinner on Monday.";
console.log("Hey "+guests[0]+", "+message);
console.log("Hey "+guests[1]+", "+message);
console.log("Hey "+guests[2]+", "+message);
console.log("Hey "+guests[3]+", "+message);
/*---------Program from Excercise 14-------End------ */

let busyPerson = "Unfortunately, Hamza would not be able to make it to the dinner.\n";

let message2 = "So the new list of persons along with their invitations is as follows:";

console.log(busyPerson+message2);

guests.splice(3,1,"Waqas"); //Replacing name & adding another

/*-----Second set of invitation messages, one for each person----- */
console.log("Hey "+guests[0]+", "+message);
console.log("Hey "+guests[1]+", "+message);
console.log("Hey "+guests[2]+", "+message);
console.log("Hey "+guests[3]+", "+message);