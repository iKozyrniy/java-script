let place;
const lang = prompt('Какой язык?');

switch (lang) {
    case 'ua':
        place = 'Ukraine';
        break;

    case 'en':
        place = 'England';
        break;

    case 'ru':
        place = 'Russian';
        break;

    case 'fr':
        place = 'Janvier';
        break;

    default:
        console.log('Вы ввели некорректный язык')
}

console.log(place);

