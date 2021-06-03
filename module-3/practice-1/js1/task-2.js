const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const values = Object.values(salaries);

let total = 0;

for (const value of values) {
  total += value;
}

console.log(total);