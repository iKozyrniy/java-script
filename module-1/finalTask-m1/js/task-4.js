let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const how = prompt('Сколько дроидов вы хотите купить?');

switch(how) {
    case null:
        alert('Отменено пользователем');
        break;
};

if(true) {
    totalPrice = (pricePerDroid * how)
}

if (totalPrice > credits) {
    console.log('Недостаточно денег на счету!');
} else {
    credits = (credits - totalPrice);
    console.log('Вы купили ', how, ' дроидов, на счету осталось ', credits, ' кредитов')
}
