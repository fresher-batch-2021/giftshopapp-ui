

function register() {
    event.preventDefault();

    const name = document.querySelector("#registerName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;
    const confirmPassword = document.querySelector("#registerConfirm").value;


    bussinessValidation(email)
        .then(res => {
            console.table(res.data.docs);
            let data = res.data.docs;
            
            if (data != "") {
                alert("email already exist enter different email")
                window.location.href="register.html"
            }

    if (name == "" || name == null || name.trim() == "") {
        alert("invalid not valid");
    }
    else if (password.length < 8) {
        alert("password is less than 8 characters");
    }
    else
        if (password != confirmPassword) {
            alert("password doesnot match");
        }
        else {
            // backend
            let registerObj = {
                "name": name,
                "email": email,
                "password": password,
                "role": "USER"
            };

            crud.addData(registerObj, "giftshop_user").then(res => {
                alert("registration successful");
                window.location.href = "login.html";
            }).catch(err => {
                console.log(err.response.data);
                alert("Registration failed");
            });
        }
            

        }).catch(err => {
            console.log(err.response.data)
        });



    
}