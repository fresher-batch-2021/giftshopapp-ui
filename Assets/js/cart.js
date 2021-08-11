
// let cartItems=localStorage.getItem("cartElements");
console.log(localStorage.getItem("cartElements"));
let cartItems =[{name:"actiocomin",price:200,Qty:1},{name:"doreamon",price:100,Qty:3},{name:"quanthumRobot",price:500,Qty:2}];

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
for(let items of cartItems){
    
    content=content+`
    <tr>
    <td>${count}</td>
    <td><a href="productSpec.html">${items.name}</a></td>
    <td>${items.price}</td>
    <td>${items.Qty}</td>
    <td><a href="">delete</a></td>
</tr>`
count++;
}
content=content+end;

document.querySelector(".cartData").innerHTML=content;//pasting the html data at .cartData class