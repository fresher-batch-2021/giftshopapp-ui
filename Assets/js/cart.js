function cartItems(){
    
let cartItems=JSON.parse(localStorage.getItem("cartElements"));
//starting of the html code for table

let content =`<table>
<caption>cart table</caption>
<tr>
    <th id="cartNo">s.no</th>
    <th id="cartProduct">product</th>
    <th id="cartPrice">price</th>
    <th id="cartQuantity">quantity</th>
    <th id="cartTotal">Total</th>
</tr>`;


//end of table content
var count=1;
let  sum=0;
for(let items of cartItems){
    let total=items.Price*items.Qty;
    content=content+`
    <tr>
    <td>${count}</td>
    <td><a href="productSpec.html">${items.Name}</a></td>
    <td>${items.Price}</td>
    <td>${items.Qty}</td>
    <td>${total}</td>
    <td><button type="submit" onclick="deleteCartData(${count})">delete</button></td>
</tr>`;
sum=sum+total;
count++;
}
let end =`
<tr>

<td></td>
<td></td>
<td></td>
<td></td>
<td>${sum}</td></tr>
</table>`;
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