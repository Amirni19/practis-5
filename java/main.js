'use strict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  alert(sum);

let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      },
    sum() {
        return this.a + this.b;
      },
    mul() {
        return this.a * this.b;
      }
};
calculator.read();
alert( calculator.sum());
alert( calculator.mul());

function extractCurrencyValue(str) {
    return +str.slice(1);
  }
  alert( extractCurrencyValue('$120'));

  
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert( names );

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let age = {age: 27}
let age1 = {age: 67}
let age2 = {age: 36}
let ages = [age, age1, age2];
alert(getAverageAge(ages));
