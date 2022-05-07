document.querySelector("form").addEventListener("submit", loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userCreds"));

function loginFun() {
  event.preventDefault();
  var enteredEmail = document.querySelector("#email").value;
  var enteredPass = document.querySelector("#pass").value;

   var flag=false;
  for (var i = 0; i < regdUsers.length; i++) {
    console.log(regdUsers[i]);
    if (
      regdUsers[i].email == enteredEmail &&
      regdUsers[i].password == enteredPass
    ) {
      alert("login success");
      window.location.href = "index.html";
      flag=true
      break;
    }
   } 
   if(flag==false){
      alert("login failed");
    }
  
}