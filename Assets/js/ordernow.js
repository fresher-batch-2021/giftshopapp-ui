//order now page
let valid = true;
        function ordernow() {
            event.preventDefault();
            localStorage.setItem("userData",JSON.stringify(res.data));
            const name = document.querySelector("#OrderPageName").value;
            const phonenumber = document.querySelector("#phonenumber").value;
            const address = document.querySelector("#OrderPageAddress").value;
            const payment = document.querySelector("#orderPagePayment").value;

            let usrobj = {
                "name": name,
                "phonenumber": phonenumber,
                "address": address,
                "payment": payment
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