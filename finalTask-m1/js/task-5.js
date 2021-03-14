const country = prompt('Введите страну');

switch (country.toLowerCase()) {
    case 'китай':
      alert ('Доставка в ' + country.toLowerCase() + 'стоит 100 кредитов');
      break;

    case 'чили':
      alert ('Доставка в ' + country.toLowerCase() + ' стоит 250 кредитов');
      break;

    case 'австралия':
      alert ('Доставка в ' + country.toLowerCase() + ' стоит 170 кредитов');
      break;

    case 'индия':
      alert ('Доставка в ' + country.toLowerCase() + ' стоит 80 кредитов');
      break;

    case 'ямайка':
      alert ('Доставка в ' + country.toLowerCase() + ' стоит 120 кредитов');
      break;

    default:
      alert ('В вашей стране доставка недоступна');
}