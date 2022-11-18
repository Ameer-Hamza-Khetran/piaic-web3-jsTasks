/*------Task 45 ------
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
let error1 = (arg) => {
  throw new Error(`Please enter a valid ${arg} name `);
};

function carInfo(
  manufacturer = error1("manufacturer"),
  model = error1("model"),
  para = {}
) {
  const car = {
    manufacturer: `${manufacturer}`,
    model: `${model}`,
  };
  Object.assign(car, para);
  return console.log(car);
}

carInfo("Honda", "Vezel", {
  color: "olive green",
  engine: "1500cc",
});

// carInfo(undefined, undefined, {});

// carInfo();
