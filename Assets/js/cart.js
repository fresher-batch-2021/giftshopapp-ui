function cartItems(){
let cartItems=JSON.parse(localStorage.getItem("cartElements"));//parsing to json object
//starting of the html code for table
let content =`<table>
<caption>cart table</caption>
<tr>
    <th id="cartNo">s.no</th>
    <th id="cartProduct">product</th>
    <th id="cartPrice">price</th>
    <th id="cartQuantity">quantity</th>
</tr>`;

let end =`</table>`;//end of table content
var count=1;
alert(cartItems.length);
for(let items of cartItems){
    
    content=content+`
    <tr>
    <td>${count}</td>
    <td><a href="productSpec.html">${items.Name}</a></td>
    <td>${items.Price}</td>
    <td>${items.Qty}</td>
    <td><button type="submit" onclick="deleteCartData(${count})">delete</button></td>
</tr>`;
count++;
}
content=content+end;

document.querySelector(".cartData").innerHTML=content;//pasting the html data at .cartData class
}

// deleting elements in cart
function deleteCartData(index){
var arr=JSON.parse(localStorage.getItem("cartElements"));
arr.splice(index-1,1);
console.log(arr[index-1]);
localStorage.setItem("cartElements",JSON.stringify(arr));
cartItems();
}
cartItems();