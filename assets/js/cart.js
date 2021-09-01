cartItems();
function cartItems() {

    let cart = JSON.parse(localStorage.getItem("cartElements"));

    //starting of the html code for table

    if (cart == null || cart == "") {

        document.querySelector(".cartData").innerHTML = `<a href='product.html'><p class="emptyCart">Cart is empty order something...</p></a>`;
        return;
    }
    let content = `
    <table class="contentTable">
    <caption>Cart-Table</caption>
    <thead>
    <tr>
        <th id="cartNo" class="leftCorner">S.no</th>
        <th id="cartProduct">Product</th>
        <th id="cartPrice">Price</th>
        <th  id="cartQuantity">Quantity</th>
        <th id="cartTotal">Total</th>
        <th class="rightCorner">Delete-Item</th>
         
    </tr>
    </thead>
    <tbody>
    `;


    console.log(cart);

    //end of table content
    var count = 1;
    let sum = 0;
    if (cart) {
        for (let items of cart) {
            let total = items.price * items.quantity;
            content = content + `
    <tr>
    <td>${count}</td>
    <td><a style="color:black;" href="productSpec.html">${items.productName}</a></td>
    <td>${items.price}</td>
    <td ><input id="${count - 1}" class="cartQuantityTable" type ="number" max="${items.totalQuantity}" value="${items.quantity}"></td>
    <td>${total}</td>
    <td><button class="deleteBtn" type="submit" onclick="deleteCartData(${count - 1})">delete</button></td>
</tr>`;

            sum = sum + total;
            count++;
        }
    }
    let end = `
            <tr>
            <td></td>
            <td colspan="1" class="totalRow" >Total Amount</td>
            <td></td>
            <td></td>
            <td colspan="1" style="font-size:18px;">₹${sum}</td>
            </tr>
            
            
            </tbody>
            </table>
            <div class="align">
            <a href="product.html"><button class="continueBtn">continue shopping</button></a>
            <button class="orderBtn" type="button" onClick="cartCheck()">order now</button>
            
            </div>
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

        toastr.info("","can't order when cart is empty",{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });
        setTimeout(function(){

            window.location.href = "product.html";
        },1000)


    }
    else {
        window.location.href = "ordernow.html";
    }
}

// adding product to cart
function toCart(id, name, imageUrl, price, description,totalQuantity,rev) {

    let loginCheck = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!loginCheck) {
        toastr.warning("","Need to login first",{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });
        return
    }
    if(totalQuantity<=0){
        toastr.info("","No stock",{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });
        
        return;
    }
    
        
    
    else {
        let cartItemsStr = localStorage.getItem("cartElements");
        let cartProducts = cartItemsStr != null ? JSON.parse(cartItemsStr) : [];
        let quantity = 1;

        // If item already exist, update the quantity
        let index = cartProducts.findIndex(obj => obj.id == id);
        console.log(index);
        if (index != -1) {
            let cartObj = cartProducts[index];
            console.log(cartObj);
            if(cartObj.quantity<totalQuantity){
            cartObj.quantity++;
            cartProducts[index] = cartObj;}
            
        }
        else {
            // if item not exist, add new item to cart
            let cartObj = { id: id, productName: name, price: price, imageUrl: imageUrl, description: description, quantity: quantity,totalQuantity:totalQuantity,rev:rev };
            console.table(cartObj);
            cartProducts.push(cartObj);
        }
        localStorage.setItem("cartElements", JSON.stringify(cartProducts));

        toastr.success("","product added to cart successfully",{
            timeOut:1000,
            positionClass:"toast-top-center",
            preventDuplicates:true
        });
    }

}
// updation in cart


document.body.addEventListener('focusout', update);
function update(e) {


    let id = e.target.id;
    let cartElements = JSON.parse(localStorage.getItem("cartElements"))
    if(e.target.value<=cartElements[id].totalQuantity){
    cartElements[id].quantity = parseInt(e.target.value);
    localStorage.setItem("cartElements", JSON.stringify(cartElements))
    // e.target.value=e.target.value
    }
    else{
        
        toastr.info("",`Stock has only ${cartElements[id].totalQuantity} items`,{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });

        setTimeout(function(){
        e.target.value=cartElements[id].totalQuantity
        },1000)
    }
}