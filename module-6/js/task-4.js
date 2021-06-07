import users from './users.js';

const getInactiveUsers = (users) => {
    const InactiveUsers = users.filter(user => !user.isActive);
    return InactiveUsers;
  };
  
  console.log(getInactiveUsers(users));