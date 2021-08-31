

let usrData=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));

crud.findOrders(usrData.email).then(res=>{
    // console.log(res.data)
    console.log(usrData.email)
    let orders=res.data.docs
    console.log(orders)
    let content =`
    <table class="contentTable">
    <thead>
        <tr>
            <th class="leftCorner">s.no</th>
            <th>products</th>
            <th>totalAmount</th>
            <th>status</th>
            <th class="rightCorner">change status</th>
        </tr>
    </thead>
    <tbody>
    `;
   
    let count=1;
    for(let order of orders){
        

        let table=`
        <table class="innerTable">
        <thead>
            <tr >
                <th class="leftCorner">product</th>
                <th>price</th>
                <th class="rightCorner">quantity</th>
            </tr>
        </thead>
        <tbody>
        `;
        content+=`
        <tr>
        <td>${count}</td>
        <td>
        `;
        // console.log("yesh",order.products)
        for(let product of order.products){
            table+=`
            <tr>
            <td>
            <img class="tableImage" src="assets/Images/${product.imageUrl}">
            </td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            </tr>
            `;
        }
        content+=table+`
        </tbody></table>
        `;
        content+=`
        <td class="orderDetails">₹${order.totalAmount}</td>
        <td class="orderDetails">${order.status}</td>
        <td><button class="deleteBtn" onclick="updateStatus('${order._id}')" type="button">cancel </button></td>
        </tr>
        `;
        count++;
    }
    content+=`
    </tbody></table>
    `;
    document.querySelector(".myOrders").innerHTML=content;
    

    
}).catch(err=>{
    console.log(err.resposne)
})

function updateStatus(id){

    
    crud.findDataById('giftshop_orders',id).then(res=>{
        
        let orderObj=res.data;
        orderObj.status="CANCELED";
        console.table(orderObj)

        let updateObj={
            database:'giftshop_orders',
            updateData:orderObj
        }
        
        crud.updateData(updateObj).then(resposne=>{
            console.log(resposne.data)
            alert("updated");
            window.location.reload();
        }).catch(err=>{
            alert("updation failed");
            console.log(err.resposne.data)
        })
    });
}
