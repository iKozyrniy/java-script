const ADMIN_PASSWORD = 'hello';
let message;

const password = prompt('Введите пароль');
switch (password) {
    case null:
        message = 'Скасовано користувачем!';
        break;

    case 'hello':
        message = 'Ласкаво просимо!';
        break;

    default:
        message = 'Доступ заборонений, невірний пароль!';
}

alert (message);
