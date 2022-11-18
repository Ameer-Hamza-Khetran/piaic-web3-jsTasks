/*------Task 42 ------
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
let magicianNames = ["Mehroz", "Ahmed", "furqan"];

function make_great(namesGreat) {
  for (let i = 0; i < magicianNames.length; i++) {
    namesGreat[i] = `${namesGreat[i]}Great`;
  }
}
make_great(magicianNames);

function show_magicians(names) {
  console.log(names[0]);
  console.log(names[1]);
  console.log(names[2]);
}

show_magicians(magicianNames);
