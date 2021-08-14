//order now page
let valid = true;
//to place user detail on ordernow page
document.querySelector("#orderPageName").value=JSON.parse(localStorage.getItem("LOGGED_IN_USER")).name;

let oderingProducts=JSON.parse(localStorage.getItem("cartElements"));
        function ordernow() {
            alert("he;lo");
            event.preventDefault();
            
            

            const name = document.querySelector("#orderPageName").value;
            const phonenumber = document.querySelector("#phonenumber").value;
            const address = document.querySelector("#orderPageAddress").value;
            const payment = document.querySelector("#orderPagePayment").value;

            let usrobj = {
                applicationName: "giftshop",
                totalAmount: 3500,
                orderedDate: "2021-08-13T16:56:33.000Z",
                status: "ORDERED",
                address: "no.2 chennai",
                comments: null,
                createdDate: "2021-08-13T22:26:32.000Z",
                modifiedDate: "2021-08-13T22:26:32.000Z",
                deliveredDate: null,
                cancelledDate: null
            };

            if (name == null || name == "" || name.trim() == "") {
                alert("name is no good");
            }
            else {
                console.log(usrobj);
                alert("ypur order is placed");
                window.location.href = "product.html";
            }
        }