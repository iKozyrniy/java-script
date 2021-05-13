const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const values = Object.values(salaries);

let sum = 0;

for (const value of values) {
    sum += value;
};

console.log(sum);