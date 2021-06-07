import users from './users.js';

const getUserWithEmail = (users, email) => {
    const user = users.find((user) => user.email === email);
    return user;
  };
  console.log(getUserWithEmail(users, "shereeanthony@kog.com")); 
  console.log(getUserWithEmail(users, "elmahead@omatom.com")); 