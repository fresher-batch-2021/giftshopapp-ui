// product spec page

function productSpec(){
    // var Id = localStorage.getItem("productSpec");  
    //to get data from url
    
    const param = new URLSearchParams(window.location.search.substr(1));
    var Id =parseInt(param.get("id"));
    // alert(Id);
    var url =`https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products/${Id}`;//getting a specific data set
    axios.get(url).then(res =>{
        // console.log(res.data.image_url);

        
        let productObj =res.data;
        // alert((productObj.image_url));
        const id=productObj.id;
        const name=productObj.name;
        const img_url=productObj.image_url;
        const price=productObj.price;
        const description=productObj.description;
        let obj={id,name,img_url,price,description};
        console.log(obj);
        let content =
        `<img src="Assets/Images/${img_url}" alt="">
        <p>${name}</p>
        <br>
        <p>${price}</p>
        <br>
        <p>${description}</p>
        <button onclick="toCart(${id},'${name}','${img_url}',${price},'${description}')">add to cart</button>
        `;
        // alert(productObj.name);
        document.querySelector(".productSpec").innerHTML=content;   
            // toCart(datas);
    }).catch(err =>{
        alert(err.data);
    });

    
    
}


// adding product to cart
function toCart(id,name,img_url,price,description){
   
    
    
    
    let cartItemsStr=localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
    var qty=1;
    

    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems=>cartItems.Id == id);
    // alert(index);
    console.log(index);
    if (index != -1){
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.Qty++;
        cartItems[index] = cartObj;
 
    }
    else{
        // if item not exist, add new item to cart
    let cartObj = {Id:id,Name:name,Price:price,Image_url:img_url,Description:description,Qty:qty};
    console.log(cartObj);
    cartItems.push(cartObj);
    }
    
    localStorage.setItem("cartElements",JSON.stringify(cartItems));
    window.location.href="cart.html";
}
