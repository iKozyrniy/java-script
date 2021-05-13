const user = {};

user.userName = ('Sasha');
user.age = 13;

user.showUserName = function() {
    return (this.userName);
};

user.updateAge = function() {
    return this.age = this.age + 1;
};

console.log(user.showUserName())
console.log(user.updateAge());

