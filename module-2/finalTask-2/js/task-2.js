
const calculateEngravingPrice = function (message, pricePerWord) {
  let array = message.split(" ");
  let sum = pricePerWord * array.length;

  for (let index = 0; index < array.length; index += 1) {
    console.log(`Ваша сума вышла на ${sum}`);
  }
  return `Количество слов - ${array.length}`;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
