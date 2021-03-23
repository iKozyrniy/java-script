const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = function (allLogins, login) {
  if (login.length < 4 || login.length > 16) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов.");
    return allLogins;
  }

  if (allLogins.includes(login)) {
    console.log("Такой логин уже используется!");
    return allLogins;
  }

  if (addLogin) {
    allLogins.push(login);
    console.log("Логин успешно добавлен");
  }
  return allLogins;
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
