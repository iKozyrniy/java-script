const calculator = {
  a: prompt("Введите число a"),
  b: prompt("Введите число b"),
  sum() {
    const sum = Number(this.a) + Number(this.b);
    return sum;
  },
  mult() {
    const x = Number(this.a) * Number(this.b);
    return x;
  }
};

console.log(calculator.sum());
console.log(calculator.mult());
