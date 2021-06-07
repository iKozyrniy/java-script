import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    return users.filter(
      user => user.friends.indexOf(friendName) !== -1).map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker'));
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); 