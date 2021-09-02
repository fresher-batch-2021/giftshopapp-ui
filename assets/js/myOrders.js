

let usrData=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));

crud.findOrders(usrData.email).then(res=>{
   
    let orders=res.data.docs
    let content =`
    <table class="contentTable">
    <thead>
        <tr>
            <th class="leftCorner">S.no</th>
            <th>Products</th>
            <th>TotalAmount</th>
            <th>Status</th>
            <th class="rightCorner">Change status</th>
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
                <th class="leftCorner">Product</th>
                <th>price</th>
                <th class="rightCorner">Quantity</th>
            </tr>
        </thead>
        <tbody>
        `;
        content+=`
        <tr>
        <td>${count}</td>
        <td>
        `;
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
        <td>`;

        if(order.status =='ORDERED'){
        content+=`
        <button class="deleteBtn" onclick="cancelOrder('${order._id}')" type="button">cancel </button>`;
        }
        content+=`</td> </tr> `;

        count++;
    }
    content+=`
    </tbody></table>
    `;
    document.querySelector(".myOrders").innerHTML=content;
    

    
}).catch(err=>{
    console.log(err.resposne)
})

function cancelOrder(id){

    let cfm = confirm("Do you want to cancel ?");

    if(cfm){
    crud.findDataById('giftshop_orders',id).then(res=>{
        
        let orderObj=res.data;
        console.table   ('yes',orderObj)
        
        

        for(let userProduct of orderObj.products){
            // console.table(userProduct)

            crud.findDataById('giftshop_products',userProduct.id).then(res=>{
                let productInDb=res.data;
                // console.log(productInDb)
                productInDb.quantity=productInDb.quantity+userProduct.quantity;
                let updateObj={
                    database:'giftshop_products',
                    updateData:productInDb
                };
                crud.updateData(updateObj).then(res=>{
                    


                });
            })
        }


        orderObj.status="CANCELED";
        // console.table(orderObj)  

        let updateObj={
            database:'giftshop_orders',
            updateData:orderObj
        }
        
        crud.updateData(updateObj).then(ress=>{
            console.log(ress.data)

            alert("updated");
            // toastr.su
            window.location.reload();
        }).catch(err=>{
            alert("updation failed");
            console.log(err.ress.data)
        })

    

    });}    
}
