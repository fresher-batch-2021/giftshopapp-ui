//order now page
let valid = true;
//to place user detail on ordernow page

console.log(JSON.parse(localStorage.getItem("LOGGED_IN_USER")).name);
document.querySelector("#orderPageName").value=JSON.parse(localStorage.getItem("LOGGED_IN_USER")).name;

let oderingProducts=JSON.parse(localStorage.getItem("cartElements"));

alert("jkdf")
        function orderNow() {
            alert("hello");
            let today=new Date();
            
            let delivereyDate=addDays(today,10);            
            let totalAmount=localStorage.getItem("totalAmount");
            event.preventDefault();
            
            

            const name = document.querySelector("#orderPageName").value;
            const phonenumber = document.querySelector("#orderPagePhoneNumber").value;
            const address = document.querySelector("#orderPageAddress").value;
            const payment = document.querySelector("#orderPagePayment").value;
            if(phonenumber.length!=10){
                alert("phonenumber should be 10 numbers");
                return;
            }
            let products=JSON.parse(localStorage.getItem("cartElements"));
            let productDetail={
                customerName:name,
                customerNumber:phonenumber,
                customerAddress:address,
                payment:payment,
                products:products
            }
            console.log(productDetail);
            let orderObj = {
                applicationName: "giftshop",
                totalAmount: totalAmount,
                orderedDate:today,
                status: "ORDERED",
                address: address,
                comments: JSON.stringify(productDetail),
                createdDate: today,
                modifiedDate: "2021-08-13T22:26:32.000Z",
                deliveredDate: delivereyDate,
                cancelledDate: null
            };
            console.log(orderObj);

                console.log(orderObj);
                const url="https://product-mock-api.herokuapp.com/orderapp/api/v1/orders?applicationName=giftshop";              
              alert("hi");
                axios.post(url,orderObj).then(res=>{
                    let data=res.data;
                    console.log(data);
                    alert("order has been placed succefully");
                    localStorage.removeItem("cartElements");
                    window.location.href="product.html";
                }).catch(err=>{
                    alert("can't placed the order");
                });
                
            }
        

            // adding days to delvier
            function addDays(date, days) {
                const copy = new Date(Number(date))
                copy.setDate(date.getDate() + days)
                return copy
              }
              
            