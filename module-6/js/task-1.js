import users from './users.js';

const getUserNames = (users) => {
  const names = users.map((users) => users.name);
  return names;
};

console.log(getUserNames(users));