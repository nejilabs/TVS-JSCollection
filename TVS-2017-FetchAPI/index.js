////GET TXT DATA//
document.getElementById('getText').addEventListener('click',getText);

// function getText(){
//   fetch('sample.txt')
//   .then(function(res){
//     return res.text();
//   })
//   .then(function(data){
//     console.log(data);
//   });
// }

function getText(){
  fetch('sample.txt')
  .then((res)=>res.text())
  .then((data)=>{
    document.getElementById('output').innerHTML = data;
  })
  .catch((error) => console.log(error));
  ;
}


////GET JSON DATA//
document.getElementById('getUsers').addEventListener('click',getUsers);
function getUsers(){
  fetch('users.json')
  .then((res)=>res.json())
  .then((data)=>{
    let output = '<h2>Users</h2>';
    data.forEach((user)=>{
      output += `
        <ul>
          <li>ID: ${user.id} </li>
          <li>Name: ${user.name} </li>
          <li>Email: ${user.email} </li>
        </ul>
      `
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch((error)=> console.log(error));
}

////GET API DATA//
document.getElementById('getPosts').addEventListener('click',getPosts);
function getPosts(e){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res)=>res.json())
  .then((data)=>{
    let output = '<h2>API DATA</h2>';
    data.forEach((post)=>{
      output += `
      <div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
      `
    });
    document.getElementById('output').innerHTML = output;
  })
}

////ADD POST//
document.getElementById('addPost').addEventListener('submit',addPost);
function addPost(e){
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers:{
      'Accept':'application/json,text/plain,*/*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({title:title,body:body})
  })
  .then((res)=>res.json())
  .then((data)=>console.log(data));
}
