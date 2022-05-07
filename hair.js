var data= [
    {
      imgUrl:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12060782-4384866371746419.jpg",
      name: "Phyto Phytojoba Moisturizing Shampoo 8.45 fl. oz",
      price: "19.00",
    
    },
    {
      imgUrl:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11275667-9265829508647469.jpg",
      name: "White Hot Glorious Shampoo 200ml",
      price: "14.00",
      
    },
    {
      imgUrl:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12578809-1534871277522222.jpg",
      name: "VIRTUE Recovery Professional Shampoo & Conditioner Duo",
      price: "165.00",
      
    },
    {
      imgUrl:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/12507317-4244942065690333.jpg",
      name: "RAINCRY Regenerating Shampoo 8oz",
      price: "51.00",
    
    },
    {
    imgUrl:"https://static.thcdn.com/images/xsmall/webp//productimg/original/13525907-1604925963515371.jpg",
    name:"Alo Shine Shampoo 11.75ml",
    price:"85.00"
    },
    {
      imgUrl:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11289072-3954876993308378.jpg",
      name:"Grow Gorgeous Intense Duo",
      price:"33",
    },
    {
      imgUrl:"https://static.thcdn.com/images/xsmall/webp//productimg/original/12902306-1244904188292712.jpg",
      name:"Miriam Quevedo Platinum and Diamonds Luxurious Shampoo 250ml",
      price:"50",
    },
    {
      imgUrl:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11447219-3754944622577958.jpg",
      name:"Comfort Zone Remedy Defense Cream 1.01 fl. oz",
      price:"46",
    }
  ];
  var cartItem = JSON.parse(localStorage.getItem("cart"))||[];
  
    data.forEach(function (elem) {
      
      var div = document.createElement("div");

      var img = document.createElement("img");
      img.src = elem.imgUrl;
      img.setAttribute("class","photo")

      var name = document.createElement("p"); 
      name.innerText = elem.name;

     

      var price = document.createElement("p");
      price.innerText = elem.price;

      var button = document.createElement("button");
      button.innerText = "SHOP NOW";
      button.addEventListener("click", function () {
      addToCart(elem);
      });
     
      div.append(img, name, price,button);

      document.querySelector("#container").append(div);
    });
    function addToCart(elem) {
      alert("add to cart")
    cartItem.push(elem);
    localStorage.setItem("cart", JSON.stringify(cartItem));

  }