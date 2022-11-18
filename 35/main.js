/*------Task 35 ------
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
let animals = ["Horse", "Cow", "Goat"];
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]}`);
  if (animals[i] === "Horse") {
    console.log("Horse runs fast.");
  } else if (animals[i] === "Cow") {
    console.log(`${animals[i]} gives milk`);
  } else if (animals[i] === "Goat") {
    console.log(`${animals[i]} gives less milk`);
  }
}
console.log("All these animals have four legs in common");
