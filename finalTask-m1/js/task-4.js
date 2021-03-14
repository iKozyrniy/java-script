let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const how = prompt('Сколько дроидов вы хотите купить?');

if (true) {
    totalPrice = (pricePerDroid * how);
} else {
    console.log('Скасовано користувачем!');
}

if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
} else {
    credits = (credits - totalPrice);
    console.log('Вы купили ', how, ' дроидов, на счету осталось ', credits, ' кредитов')
}
