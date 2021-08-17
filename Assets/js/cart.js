
function cartItems(){
    let x=loginCheck();
    if(x==false)return;
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

alert(cartItems); 
console.log(cartItems);  

//end of table content
var count=1;
let  sum=0;
for(let items of cartItems){
    let total=items.price*items.qty;
    content=content+`
    <tr>
    <td>${count}</td>
    <td><a href="productSpec.html">${items.productName}</a></td>
    <td>${items.price}</td>
    <td>${items.qty}</td>
    <td>${total}</td>
    <td><button type="submit" onclick="deleteCartData(${count-1})">delete</button></td>
</tr>`;
alert("cart");
sum=sum+total;
count++;
}
let end =`
<tr>
<td></td>
<td rowspan="5" class="totalRow" >total</td>


<td rowspan="5">${sum}</td></tr>

</table>

<button type="button" onClick="cartCheck()">orderNow</button>
<p><a href="product.html">continue shopping</a></p>
`;
localStorage.setItem("totalAmount",sum);
content=content+end;
document.querySelector(".cartData").innerHTML=content;//pasting the html data at .cartData class
}

// deleting elements in cart
function deleteCartData(index){
var arr=JSON.parse(localStorage.getItem("cartElements"));

if(arr[index].qty>1){
    
    arr[index].qty--;
}
else{
    
    arr.splice(index,1);
}
console.log(arr[index]);
localStorage.setItem("cartElements",JSON.stringify(arr));
cartItems();
}

function cartCheck(){
    let cartItem=JSON.parse(localStorage.getItem("cartElements"));
    if(cartItem==null||cartItem==""){
        alert("cant order when cart is empty ");
        window.location.href="product.html";
    }
    else{
        window.location.href="ordernow.html";
    }
}
cartItems();