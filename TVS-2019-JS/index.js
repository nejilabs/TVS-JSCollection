const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(element){
  element.preventDefault();

  if (nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(()=> msg.remove(),1000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);

    msg.classList.add('error');
    msg.innerHTML = 'Success';
    setTimeout(()=> msg.remove(),1000);

    nameInput.value = '';
    emailInput.value = '';
  }
}

// const items = document.querySelectorAll('.item');
//
// items.forEach((item) => console.log(item));
//
// const ul = document.querySelector('.items');
// // ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
//
// document.querySelector('.items').children[1].innerText = 'Brad';
// document.querySelector('.items').children[0].innerHTML = '<h1>Hello</h1>';
//
// document.querySelector('.btn').style.background="red";
// document.querySelector('.btn').addEventListener('mouseout', (element) => {
//   element.preventDefault();
//   console.log("click");
//   console.log(element);
//   document.querySelector('body').classList.add('bg-dark');
// })


// //Single Element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'))
//
// //Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const person = [
//   {
//     id: 1,
//     name: "A",
//     isComplete: true
//   },
//   {
//     id: 2,
//     name: "B",
//     isComplete: false
//   },
//   {
//     id: 3,
//     name: "C",
//     isComplete: true
//   },
// ];
//
// // OTHER WAYS TO DISPLAY DATA
// // FOR var OF something SYNTAX:
// for (let each_data of person){
//   console.log(each_data.name);
// }
//
// // something.forEach(function(var){something}) SYNTAX
// person.forEach(function(each_data){
//   console.log(each_data.name);
// });
//
// // Arrow function method SYNTAX
// person.forEach((each_data) => console.log(each_data.name));
//
// //MAP
// const each_name = person.map(function(each_data){
//   console.log(each_name);
// });
//
// //FILTER
// const completed_people = person.filter(function(each_data){
//   return each_data.isComplete === true;
// }).map(function(each_data){
//   console.log(each_data.name);
// });
//
// --------------------
// // CONSTRUCTOR FUNCTION EXAMPLE OOP
// function Person(firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = () => this.dob.getFullYear();
//
//   this.getFullName = () => `${this.firstName} ${this.lastName}`;
// }
// const person1 = new Person("John", "Doe", '3-6-2020');
//
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// // --------------------
// // CLASS EXAMPLE OOP
// class Person{
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//     getBirthYear(){return this.dob.getFullYear()};
//
//     getFullName(){return `${this.firstName} ${this.lastName}`};
// }
// const person1 = new Person("John", "Doe", '3-6-2020');
//
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// // --------------------

class Student{
  constructor(message, nickname, firstName, lastName){
    this.message = message;
    this.nickname = nickname
    this.firstName = firstName;
    this.lastName = lastName;
  }

    getMessage(){return `${this.message} - ${this.nickname} (${this.firstName} ${this.lastName})`};
}

const nelly = new Student("Hi, pls add me to the grp! thx fam", "nelly", "Nelson Jr.", "Alba");

console.log(nelly.getMessage());
