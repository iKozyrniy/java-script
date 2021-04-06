const user = {};

user.userName = ('Sasha');
user.age = 13;

user.showUserName = function() {
    console.log(userName);
};

user.updateAge = function() {
    user.age = user.age + 1;
};