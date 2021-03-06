

//to place user detail on ordernow page

let userData=JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
document.querySelector("#orderPageName").value = userData.name;


function orderNow() {

    event.preventDefault();

    const name = document.querySelector("#orderPageName").value;
    const phoneNumber = document.querySelector("#orderPagePhoneNumber").value;
    const address = document.querySelector("#orderPageAddress").value;
    const payment = document.querySelector("#orderPagePayment").value;
    
    let today = new Date();
    let delivereyDate = addDays(today, 10);
    let totalAmount = localStorage.getItem("totalAmount");

    if (phoneNumber.length != 10) {
        toastr.warning("","phonenumber should be 10 numbers",{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });
        
        return;
    }
    let products = JSON.parse(localStorage.getItem("cartElements"));

    let orderObj = {
        name: name,
        email:userData.email,
        address: address,
        phonenumber: phoneNumber,
        type:"orders",
        products: products,
        payment: payment,
        totalAmount: totalAmount,
        status: "ORDERED",
        comments: "no comments",
        orderedDate: today,
        createdDate: today,
        modifiedDate: "2021-08-13T22:26:32.000Z",
        deliveredDate: delivereyDate,
        cancelledDate: null
    };
    console.log(orderObj);

    let orderDetail = crud.addData(orderObj, "giftshop");
    

  
    orderDetail.then(res => {
        
        for(let product of products){
            console.table(product)
            let productObj={
                _id:product.id,
                _rev:product.rev,
                name:product.productName,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: product.totalQuantity-product.quantity,
                description:product.description,
                type:"products"
            };
            console.table(productObj)
            console.log('id',productObj._id)
            console.log('rev',productObj._rev)
            let updateObj={
                database:'giftshop',
                updateData:productObj
            };
            crud.updateData(updateObj).then(res=>{

                console.log(res.data);
                localStorage.removeItem("cartElements");
                localStorage.removeItem("totalAmount", null);

                toastr.success("","your order has been placed successfully",{
                    timeOut:1000,
                    positionClass:'toast-top-center',
                    preventDuplicates:true
                })
                setTimeout(function(){
                    window.location.href = "product.html";
                },800)
                
            })

        }
        
    }).catch(err => {
        toastr.error("","an error has occured",{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });
        console.log(err.response.data);
    });
}
// adding days to delvier
function addDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

