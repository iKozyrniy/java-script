let input;
let total = 0;

do {
    input = prompt('Введите число');
    const number = Number(input);

    if (input === null) {
        break
}      
    
    if (Number.isNaN(number)) {
        alert('Было написано не число, попробуйте снова');
        continue;
}
    
    total += number;
    console.log(number);
} while (true);

alert(`Сумма чисел ${total}`);