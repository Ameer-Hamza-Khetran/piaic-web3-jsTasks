/*------Task 30 ------
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let usernames = [
  "hamza",
  "humais",
  "hassan",
  "admin",
  "mehroz",
  "zeeshan",
  "ishtiaq",
];
let user = prompt("Enter your username ");
let userPresent = false;
let message = "Thank you for logging in again.";
let adminMessage = "Hello admin, would you like to see a status report ?";
for (let i = 0; i < usernames.length; i++) {
  let j = usernames[i];
  if (user === "admin" || user === j) {
    if (user === "admin") {
      console.log(adminMessage);
    } else {
      console.log(`Hello ${user}, ${message}`);
    }
    userPresent = true;
    break;
  }
}

if (!userPresent) {
  console.log("User not found");
}
