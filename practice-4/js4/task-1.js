const age = prompt('Введите число');
let sentence;

if (age > 54 && age < 100) {
    sentence = 'Число попадает в диапазон';
} else {
    sentence = 'Число не попадает в диапазон';
};

console.log(sentence);
