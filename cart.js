var cartdata=JSON.parse(localStorage.getItem("cart"))
var total = cartdata.reduce(function (sum, elem) {
return sum +Number(elem.price);
}, 0);

var discount=30/100;
var after_discount= total-total*discount;
console.log(after_discount)
var length = cartdata.length;


document.querySelector("h2").innerText = ` You have ${length} items in cart and  total is Rs ${total}`;
document.querySelector("#discount").innerText="After masai30 discount30%, amount pay Rs"+ "  "+ after_discount;


cartdata.map(function (elem,index) {
var box = document.createElement("div");

var img = document.createElement("img");
img.src = elem.imgUrl
img.setAttribute("class","product")

var name = document.createElement("p");
name.textContent = elem.name;

var price = document.createElement("p");
price.innerText = elem.price;
price.setAttribute("id","pri")


var btn=document.createElement("button")
btn.innerText="Remove"
btn.setAttribute("class","re")
btn.addEventListener("click",function(){
removeitem(elem,index)  
 })
box.append(img, name, price,btn);

document.querySelector("#container").append(box);
});
//   function removeitem(){
//   (event.target.parentNode.remove())
//   }
function removeitem(elem,index){

cartdata.splice(index,1) 
localStorage.setItem("cart",JSON.stringify(cartdata))
window.location.reload()
}