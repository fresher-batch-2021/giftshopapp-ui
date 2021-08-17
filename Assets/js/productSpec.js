// product spec page

function productSpec(){
    
    // getting datas from url of the page
    const param = new URLSearchParams(window.location.search.substr(1));
    let Id =param.get("id");
    

    crud.findData("giftshop_products",Id).then(res =>{
        let value =res.data;
    
        
        const id=value._id;
        const name=value.name;
        const img_url=value.imageUrl;
        const price=value.price;
        const description=value.description;

        
        let content =
        `<img src="Assets/Images/${img_url}" alt="">
        <p>${name}</p>
        <br>
        <p>${price}</p>
        <br>
        <p>${description}</p>
        <button onclick="toCart('${id}','${name}','${img_url}',${price},'${description}')">add to cart</button>
        `;
        
        document.querySelector(".productSpec").innerHTML=content;  

    }).catch(err=>{
        alert("failed on getting data");
        console.log(err.resposnse.data);
    });






    //getting a specific data set
    
        


    
    
}


// adding product to cart
function toCart(id,name,img_url,price,description){
   
    let x=loginCheck();
    if(x==false)return;
    
     
    let cartItemsStr=localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
    var qty=1;
    
    
    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems=>cartItems.id == id);
    console.log(index);
    if (index != -1){
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.qty++;
        cartItems[index] = cartObj;
 
    }
    else{
        // if item not exist, add new item to cart
    let cartObj = {id:id,productName:name,price:price,imageUrl:img_url,description:description,qty:qty};
    console.log(cartObj);
    cartItems.push(cartObj);
    }
    
    localStorage.setItem("cartElements",JSON.stringify(cartItems));
    window.location.href="cart.html";
}
