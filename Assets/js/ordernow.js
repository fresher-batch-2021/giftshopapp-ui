
let valid = true;
//to place user detail on ordernow page

// console.log(JSON.parse(localStorage.getItem("LOGGED_IN_USER")).name);
// document.querySelector("#orderPageName").value = JSON.parse(localStorage.getItem("LOGGED_IN_USER")).name;

// let oderingProducts = JSON.parse(localStorage.getItem("cartElements"));


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
        alert("phonenumber should be 10 numbers");
        return;
    }
    let products = JSON.parse(localStorage.getItem("cartElements"));

    let orderObj = {
        name: name,
        address: address,
        phonenumber: phoneNumber,
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

    let orderDetail = crud.addData(orderObj, "giftshop_orders");

    orderDetail.then(res => {
        // productReport
        
        
        console.log(res.data);
        localStorage.removeItem("cartElements");
        localStorage.removeItem("totalAmount", null);
        alert("your order has been plcaed successfully");
        window.location.href = "product.html";
    }).catch(err => {
        alert("an error has occured");
        console.log(err.response.data);
    });
}
// adding days to delvier
function addDays(date, days) {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

