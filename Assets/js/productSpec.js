// product spec page

function productSpec(){
    // var Id = localStorage.getItem("productSpec");  
    //to get data from url
    
    const param = new URLSearchParams(window.location.search.substr(1));
    var Id =parseInt(param.get("id"));
    alert(Id);
    var url =`https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products/${Id}`;//getting a specific data set
    axios.get(url).then(res =>{
        console.log(res.data.image_url);
        let datas =res.data;
        alert((datas.image_url));
        let content =
        `<img src="Assets/Images/${datas.image_url}" alt="">
        <p>${datas.name}</p>
        <br>
        <p>${datas.price}</p>
        <br>
        <p>${datas.description}</p>
        <button onsubmit="toCart(${datas})">add to cart</button>
        `;
        document.querySelector(".productSpec").innerHTML=content;   
            toCart(datas);
    }).catch(err =>{
        alert(err.data);
    });

    
    
}


// adding product to cart
function toCart(datas){
    
    
    let cartItemsStr=localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
    cartItems.push({Id:datas.id,name:datas.name,price:datas.price,image_url:datas.image_url,description:datas.description, qty:1});
    localStorage.setItem("cartElements",JSON.stringify(cartItems));
  
    window.location.href="cart.html";
}
