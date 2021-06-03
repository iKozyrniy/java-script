const user = {};

user.userName = "Sasha";
user.age = 13;

user.showUserName = function () {
  console.log(this.userName);
};

user.updateAge = function () {
  console.log(this.age = this.age + 1);
};

user.showUserName();
user.updateAge();