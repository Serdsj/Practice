'use strict'
const vasya = { name: "Vasya", surname: "Pupkin", id: 1 };
const petya = { name: "Petya", surname: "Ivanov", id: 2 };
const masha = { name: "Masha", surname: "Berger", id: 3 };

const users = [vasya, petya, masha];

let usersMapped = users.map(function (item) {
  const name = name.item;
  const surname = surname.item;
  const id = id.item;
  const fullName = fullName.item;
  const massiv = [];
  for (let i = 0; i < massiv.length; i++) {
    const save = [i];
    if (save === name && save === surname) {
      return (massiv = [(fullName = ` ${name} ${surname} `), id]);
    }
  }
});

console.log(usersMapped[0].fullName);
console.log(usersMapped[0].id);