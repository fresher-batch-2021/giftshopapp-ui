
function cartItems() {

    let cartItems = JSON.parse(localStorage.getItem("cartElements"));
    
    //starting of the html code for table
    
if(cartItems==null||cartItems==""){
    
    document.querySelector(".cartData").innerHTML = `<p>cart is empty order something </p>`;
    return
}
    let content = `<table>
<caption>cart table</caption>
<tr>
    <th id="cartNo">s.no</th>
    <th id="cartProduct">product</th>
    <th id="cartPrice">price</th>
    <th  id="cartQuantity" >quantity</th>
    <th id="cartTotal">Totasl</th>
</tr>`;


    console.log(cartItems);

    //end of table content
    var count = 1;
    let sum = 0;
    if (cartItems) {
        for (let items of cartItems) {
            let total = items.price * items.quantity;
            content = content + `
    <tr>
    <td>${count}</td>
    <td><a href="productSpec.html">${items.productName}</a></td>
    <td>${items.price}</td>
    <td contenteditable="true">${items.quantity}</td>
    <td>${total}</td>
    <td><button type="submit" onclick="deleteCartData(${count - 1})">delete</button></td>
</tr>`;

            sum = sum + total;
            count++;
        }
    }
    let end = `
<tr>
<td></td>
<td rowspan="5" class="totalRow" >total</td>


<td rowspan="5">${sum}</td></tr>

</table>

<button type="button" onClick="cartCheck()">orderNow</button>
<p><a href="product.html">continue shopping</a></p>
`;
    localStorage.setItem("totalAmount", sum);
    content = content + end;
    document.querySelector(".cartData").innerHTML = content;//pasting the html data at .cartData class
}

// deleting elements in cart
function deleteCartData(index) {
    var temp = JSON.parse(localStorage.getItem("cartElements"));

    if (temp[index].quantity > 1) {

        temp[index].quantity--;
    }
    else {

        temp.splice(index, 1);
    }
    console.log(temp[index]);
    localStorage.setItem("cartElements", JSON.stringify(temp));
    cartItems();
}

function cartCheck() {
    let cartItem = JSON.parse(localStorage.getItem("cartElements"));
    if (cartItem == null || cartItem == "") {
        alert("cant order when cart is empty ");
        window.location.href = "product.html";
    }
    else {
        window.location.href = "ordernow.html";
    }
}

// adding product to cart
function toCart(id, name, imageUrl, price, description) {
  
    let loginCheck=JSON.parse(localStorage.getItem("isLoggedIn"));
    if(!loginCheck){
        alert("need to login first")
    }
    else{
    let cartItemsStr = localStorage.getItem("cartElements");
    let cartItems = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
    let quantity = 1;

    // If item already exist, update the quantity
    let index = cartItems.findIndex(cartItems => cartItems.id == id);
    console.log(index);
    if (index != -1) {
        let cartObj = cartItems[index];
        console.log(cartObj);
        cartObj.quantity++;
        cartItems[index] = cartObj;
    }
    else {
        // if item not exist, add new item to cart
        let cartObj = { id: id, productName: name, price: price, imageUrl: imageUrl, description: description, quantity: quantity };
        console.log(cartObj);
        cartItems.push(cartObj);
    }
    localStorage.setItem("cartElements", JSON.stringify(cartItems));
    window.location.href = "cart.html";}
    
}

cartItems();