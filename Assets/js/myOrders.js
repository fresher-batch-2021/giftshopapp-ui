
function listOrder(){
let usrData=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
alert(usrData.email)
crud.findOrders(usrData.email).then(res=>{
    // console.log(res.data)
    console.log(usrData.email)
    let orders=res.data.docs
    console.log(orders)
    let content =`
    <table>
    <thead>
        <tr>
            <th>s.no</th>
            <th>products</th>
            <th>totalAmount</th>
            <th>status</th>
            <th>change status</th>
        </tr>
    </thead>
    <tbody>
    `;
   
    let count=1;
    for(let order of orders){

        let table=`
        <table>
        <thead>
            <tr>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
            </tr>
        </thead>
        <tbody>
        `;
        content+=`
        <tr>
        <td>${count}</td>
        <td>
        `;
        console.log("yesh",order.products)
        for(let product of order.products){
            table+=`
            <tr>
            <td>
            <img class="tableImage" src="Assets/Images/${product.imageUrl}">
            </td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            </tr>
            `;
        }
        content+=table+`
        </tbody></table>
        `;
        content+=`
        <td>${order.totalAmount}</td>
        <td>${order.status}</td>
        <td><button  onclick="updateStatus(${order})" type="button">cancel </button></td>
        </tr>
        `;
        count++;
    }
    content+=`
    </tbody></table>
    `;
    document.querySelector(".myOrders").innerHTML=content;
    

    
});
}

function updateStatus(orderDetails){
    console.table(orderDetails)
    
    alert(orderDetails._id)
    alert('hello')
    orderDetails.status="CANCELLED";
    let orderObj={
        database:"giftshop_orders",
        updateData:orderDetails
    }
    crud.updateData(orderObj).then(res=>{
        console.log("order cancelled");
        window.location.reload();
    }).catch(err=>{
        console.log('process failed')
        console.log(err.resposne);
        alert("processed failed");
    });

}
listOrder();