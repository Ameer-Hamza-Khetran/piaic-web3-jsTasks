/* ---------Task 3----------
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/
let personName = "amEEr Hamza khetran";

console.log(personName.toLowerCase(personName)); //Lowercase
console.log(personName.toUpperCase(personName)); //Uppercase

/*------ Titlecase conversion Function ------- */
let titlecaseStr = (function () {
  let strArr = [];
  const strSplit = personName.split(" ");
  for (const str of strSplit) {
    const str_lcase = str.toLowerCase();
    const titlecase = str_lcase.replace(
      str_lcase.charAt(0),
      str_lcase.charAt(0).toUpperCase()
    );
    strArr.push(titlecase);
  }
  let convertedStr = strArr.join(" ");
  return convertedStr;
})();

console.log(titlecaseStr); // Titlecase
