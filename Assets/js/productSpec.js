
function productSpec() {
    

    // getting datas from url of the page
    const param = new URLSearchParams(window.location.search.substr(1));
    let id = param.get("id");
    

    crud.findDataById("giftshop_products", id).then(res => {
        let value = res.data;
        console.log(value)
        const id = value._id;
        const name = value.name;
        const imageUrl = value.imageUrl;
        const price = value.price;
        const description = value.description;

        let content =
            `<img src="Assets/Images/${imageUrl}" alt="">
        <p>${name}</p>
        <br>
        <p>${price}</p>
        <br>
        <p>${description}</p>
        <button onclick="toCart('${id}','${name}','${imageUrl}',${price},'${description}')">add to cart</button>
        `;
        document.querySelector(".productSpec").innerHTML = content;
        
    }).catch(err => {
        alert("failed on getting data");
        console.log(err.resposnse.data);
        
    });
          
}


// // adding product to cart
// function toCart(id, name, imageUrl, price, description) {
  
//     let cartItemsStr = localStorage.getItem("cartElements");
//     let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
//     let quantity = 1;

//     // If item already exist, update the quantity
//     let index = cartItems.findIndex(cartItems => cartItems.id == id);
//     console.log(index);
//     if (index != -1) {
//         let cartObj = cartItems[index];
//         console.log(cartObj);
//         cartObj.quantity++;
//         cartItems[index] = cartObj;
//     }
//     else {
//         // if item not exist, add new item to cart
//         let cartObj = { id: id, productName: name, price: price, imageUrl: imageUrl, description: description, quantity: quantity };
//         console.log(cartObj);
//         cartItems.push(cartObj);
//     }
//     localStorage.setItem("cartElements", JSON.stringify(cartItems));
//     window.location.href = "cart.html";
// }
productSpec();