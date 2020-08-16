function changeBackground(element){
  let body = document.querySelector("body");
  body.style.backgroundColor = element.value;
}

function validateForm(element){
  let firstName = document.forms["form"]["firstName"].value;
  let lastName = document.forms["form"]["lastName"].value;

  document.getElementById('displayName').innerHTML = `Full Name: ${firstName} ${lastName}`

  if (firstName == null || firstName == ""){
    alert("Fill forms")
  }
}
