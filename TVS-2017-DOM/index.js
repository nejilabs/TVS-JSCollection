// //EXAMINE THE DOCUMENT OBJECT//
// console.dir(document);
//
// console.log(document.domain);
// console.log(document.URL);
//
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
//
// console.log(document.all);
// console.log(document.all[10]);
//
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
//
// document.title = 122;
// document.all[10].textContent = 'Hello';
//
// //GET ELEMENT BY ID //
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
//
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// //textContent doesnt pay attention to style unlike innerText.
//
// headerTitle.innerHTML = '<h1>Hello World</h1>';
//
// header.style.borderBottom = 'solid 3px #000';
//
// // GET ELEMENTS BY CLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
//
// console.log(items);
// console.log(items[1]);
//
// items[1].textContent = "Hello World";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";
//
// for(let i=0; i<items.length;i++){
//   items[i].style.backgroundColor = "#f4f4f4";
// }
//
// for(let each_item of items){
//     each_item.style.backgroundColor = "#f4f4f4";
// }
//
// let person = [1,2,3,4]
// for (let each_data of person){
//   console.log(each_data);
// }
//
// // GET ELEMENTS BY TAGNAME //
// let list_item = document.getElementsByTagName('li');
//
// console.log(items);
// console.log(items[1]);
//
// list_item[1].textContent = "Hello World";
// list_item[1].style.fontWeight = "bold";
// list_item[1].style.backgroundColor = "yellow";
//
// for(let i=0; i<list_item.length;i++){
//   list_item[i].style.backgroundColor = "#f4f4f4";
// }
//
// for (let each_item of items){
//   each_item.style.backgroundColor = "#f4f4f4";
// }
//
// //QUERY SELECTOR//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
//
// var input = document.querySelector('input');
// input.value = 'Hello World';
//
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SUBMIT';
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'brown';
//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
//
// // QUERY SELECTOR ALL //
// let titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';
//
// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)")
//
// for (let i=0; i < odd.length; i++){
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

////TRANSVERSING THE DOM//
// var itemList = document.querySelector('#items');
////parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

////parentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

////childNodes (includes other properties with the children)
// console.log(itemList.childNodes);

////children (just the el eements)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

////firstChild or lastChild
// console.log(itemList.firstChild);

////firstElementChild or lastElementChild
// console.log(itemList.firstElementChild);

////nextSibling or previousSibling
// console.log(itemList.nextSibling);

////nextElementSibling or previousElementSibling
// console.log(itemList.nextElementSibling);

//// createElement
// var newDiv = document.createElement('div');
//
// let container= document.querySelector('.container #main');
// let h1 = document.querySelector('.container h2');
//
// container.insertBefore(newDiv,h1);
//
// //INSERTING PROPERTIES
// newDiv.className = "hello"; //Add class
// newDiv.id = "hello1"; //add id
// newDiv.setAttribute('title','Hello Div'); //set attribute
// // Insert Text in div
// let newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText); //Add text to div
//
// console.log(newDiv);


//Event Listeners
// let button = document.getElementById('button');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);

// function buttonClick(e) {
//   console.log('Clicked');
//   document.getElementById('header-title').textContent = 'Changed';
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
//
//   let output = document.getElementById('output');
//   output.innerHTML = '<h1>' + e.target.id + '</h1>';
//   console.log(e.type); //displays the event
//
//   //Client is for the browser while the offset is for the element itself.
//   console.log(e.clientX);
//   console.log(e.clientY);
//
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

////Mouse Events
// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent); //just that event
// box.addEventListener('mouseover', runEvent); //including child elements
//
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove',runEvent);


// let itemInput = document.querySelector('input[type=text]');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent); //when use focused on element
// itemInput.addEventListener('blur',runEvent); //when not using the element itself

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('input',runEvent);

// let select = document.querySelector('select');
// select.addEventListener('change',runEvent);

// let form = document.querySelector('form');
// form.addEventListener('submit',runEvent);

// function runEvent(e){
  // e.preventDefault();
  // console.log(e.type);
  // output.innerHTML= '<h3>('+e.offsetX+','+e.offsetY+')</h3>';
  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
  // document.getElementById('output').innerHTML = "<h3>"+e.target.value+"</h3>"
// }

////TODO//
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

//Form Submit Event
form.addEventListener('submit',addItem);

function addItem(e){
  e.preventDefault();

  //Get Input value
  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  //Add Class
  li.className = 'list-group-item';
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Add Delete button
  let newdeleteBtn = document.createElement('button');
  newdeleteBtn.className = "btn btn-danger btn-sm float-right";
  newdeleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(newdeleteBtn);

  itemList.appendChild(li);
  console.log(e.target);
}

//delete event
itemList.addEventListener("click",removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    console.log('delete');
    if(confirm("Are you sure?")){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


////Filter function //
let filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);

function filterItems(e){
  //convert to lowercase
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');


  Array.from(items).forEach((item) =>{
    let itemName = item.firstChild.textContent;
    itemName.toLowerCase().indexOf(text) != -1 ? item.style.display = 'block' : item.style.display = 'none';
    
  });
}
