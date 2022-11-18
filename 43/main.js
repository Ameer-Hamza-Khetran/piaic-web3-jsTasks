/*------Task 43 ------
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
let magicianNames = ["Mehroz", "Ahmed", "furqan"];

function make_great(namesGreat) {
  for (let i = 0; i < magicianNames.length; i++) {
    namesGreat[i] = `${namesGreat[i]}Great`;
  }
  return (seperateArray = magicianNamesCopy);
}

let magicianNamesCopy = Array.from(magicianNames);

make_great(magicianNamesCopy);

function show_magicians(names) {
  console.log(names[0]);
  console.log(names[1]);
  console.log(names[2]);
}

show_magicians(magicianNames);

show_magicians(seperateArray);
