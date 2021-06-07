import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
    const blueEye = users.filter((user) => user.eyeColor === color);
    return blueEye;
  };
  console.log(getUsersWithEyeColor(users, "blue"));
