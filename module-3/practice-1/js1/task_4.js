const cafe = {
  name: 'Republic',
  width: 200,
  height: 300,
  personal: 5,
  hr: true,
};

const entries = Object.entries(cafe);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
};

console.log(Number(cafe.width) * Number(cafe.height));

