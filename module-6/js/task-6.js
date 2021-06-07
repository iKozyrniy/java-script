import users from './users.js';

const getUsersWithAge = (users, min, max) => {
    const filterAge = users.filter((user) => min <= user.age && user.age <= max);
    return filterAge;
  };
  
  console.log(getUsersWithAge(users, 20, 30)); 
  
  console.log(getUsersWithAge(users, 30, 40));
 