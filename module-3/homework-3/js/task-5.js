const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let result = [];
  for (const item of arr) {
    for (const i in item) {
      if (prop === i) {
        result.push(item[i]);
      }
    }
  }
  return result;
};

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity")); 

console.log(getAllPropValues(products, "category"));
