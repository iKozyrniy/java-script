do {
    name = prompt('Введите имя персонажа')
    if (name.length > 6) {
        break;
    }
        console.log('Ваш герой: ', name);

} while (name.length < 6)
