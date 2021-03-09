let age;
const max = 55;

if (0 < max && 16 > max) {
    age = 'Макс ребёнок';
} else if (17 < max && 60 > max) {
    age = 'Макс взрослый';
} else if (61 < max && 100 > max) {
    age = 'Макс пенсионер';
}

console.log(age)
