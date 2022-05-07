document.querySelector("form").addEventListener("submit", chekFun);
  
  
function chekFun() {
  event.preventDefault();

  var userObj = {
    card: document.querySelector("#card").value,
    userName: document.querySelector("#name").value,
    sel: document.querySelector("#sel1").value,
    number: document.querySelector("#num").value,
  };

  //console.log(userObj);
  //cardData.push(userObj);
  if(userObj.number.length<3 ){
      alert("wrong CVV")

  }
 
  else if(userObj.card.length<16){
      alert("wrong card number")
  }
  else if(userObj.number.length==3 && userObj.card.length==16){
      window.location.href="order.html"

  }
  //console.log(userData)
  
  //window.location.href="payment.html"

}