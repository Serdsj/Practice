'use strict'
const vasya = { name: "Vasya", surname: "Pupkin", id: 1 };
const petya = { name: "Petya", surname: "Ivanov", id: 2 };
const masha = { name: "Masha", surname: "Berger", id: 3 };

const users = [vasya, petya, masha];

const usersMaped = users.map ( function (item) {
   return item = [
        { fullName: "Вася Пупкин", id: 1 },
        { fullName: "Петя Иванов", id: 2 },
        { fullName: "Маша Петрова", id: 3 }
      ]
});

console.log (usersMaped[0].id)
console.log (usersMaped[0].fullName)