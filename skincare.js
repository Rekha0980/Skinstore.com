var data= [
    {
      imgUrl:
        "https://static.thcdn.com/images/small/webp/productimg/480/480/11061839-6984294066643043.jpg",
      name: "Erno Laszlo White Marble Radiance Emulsion (28.35g)",
      price: "100.00",
    
    },
    {
      imgUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/12902718-2404915030483047.jpg",
      name: "Revision Skincare C+ Correcting Complex 30 1 fl. oz.",
      price: "135.00",
      
    },
    {
      imgUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/12915716-1804871846655444.jpg",
      name: "DHC Salicylic Acne Wash 4 fl.oz",
      price: "165.00",
      
    },
    {
      imgUrl:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/12595873-1394858829143575.jpg",
      name: "ESPA (Retail) Optimal Skin Pro-Moisturiser 55ml",
      price: "51.00",
    
    },
    {
    imgUrl:"https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11802717-6634593427007835.jpg",
    name:"BABOR CALMING RX Soothing Cream Rich",
    price:"85.00"
    },
    {
      imgUrl:"https://static.thcdn.com/images/xsmall/webp//productimg/original/11289072-3954876993308378.jpg",
      name:"PCA SKIN Collagen Hydrator",
      price:"53",
    },
    {
      imgUrl:"https://static.thcdn.com/images/xsmall/webp//productimg/original/12194048-1614871869209939.jpg",
      name:"Embryolisse Lait Crème Concentré 2.54 fl. oz",
      price:"28",
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