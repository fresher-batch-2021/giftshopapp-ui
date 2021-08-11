let cartItems =[{cartno:1,cartProduct:"actiocomin",cartPrice:200,cartQuantity:1},{cartno:3,cartProduct:"doreamon",cartPrice:100,cartQuantity:3},{cartno:4,cartProduct:"quanthumRobot",cartPrice:500,cartQuantity:2}];
// let cartItems=localStorage.getItem("cartElements");
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

for(let items of cartItems){
    content=content+`
    <tr>
    <td>${items.cartno}</td>
    <td><a href="productSpec.html">${items.cartProduct}</a></td>
    <td>${items.cartPrice}</td>
    <td>${items.cartQuantity}</td>
    <td><a href="">delete</a></td>
</tr>`
}
content=content+end;

document.querySelector(".cartData").innerHTML=content;//pasting the html data at .cartData class