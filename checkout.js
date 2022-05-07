document.querySelector("form").addEventListener("submit", chekFun);
  
var userData = JSON.parse(localStorage.getItem("user"))||[]
function chekFun() {
  event.preventDefault();

  var userObj = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#pass").value,
    userName: document.querySelector("#user").value,
    useradd: document.querySelector("#adrs").value,
    number: document.querySelector("#num").value,
  };
  //console.log(userObj);
  userData.push(userObj);
  //console.log(userData)
  localStorage.setItem("user",JSON.stringify(userData))
  window.location.href="payment.html"

}