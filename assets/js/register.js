function register() {
    
    document.getElementById('registerBtn').disabled = true;
    event.preventDefault();

    const name = document.querySelector("#registerName").value;
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;
    const confirmPassword = document.querySelector("#registerConfirm").value;





    if (password.length < 8) {

        toastr.warning("warning", "password must be atleast 8 characters ", {
            timeOut: 2500,
            positionClass: 'toast-top-center',
            preventDuplicates: true
        });
        setTimeout(function () {
            document.getElementById('registerBtn').disabled = false;
        }, 1000)


    } else if (password != confirmPassword) {
        toastr.warning("", "password doesnot match", {
            timeOut: 2500,
            positionClass: 'toast-top-center',
            preventDuplicates: true
        });
        setTimeout(function () {
            document.getElementById('registerBtn').disabled = false;
        }, 1000)
    } else {
        // object sending to backend
        let registerObj = {
            "name": name,
            "email": email,
            "password": password,
            "role": "USER"
        };

        bussinessValidation(email).then(res => {

            let data = res.data.docs[0];
            console.log(data)
            if (data!=undefined) {

                toastr.error("", "email already exist enter different email", {
                    timeOut: 1000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true
                });
                setTimeout(function () {
                    document.getElementById('registerBtn').disabled = false;
                }, 1000)
            } else {

                //regitering the data to backend
                crud.addData(registerObj, "giftshop_user").then(response => {

                    toastr.success("", "registration successful", {
                        timeOut: 800,
                        positionClass: 'toast-top-center',
                        preventDuplicates: true
                    });

                    setTimeout(function () {
                        document.getElementById('registerBtn').disabled = false;
                        window.location.href = "login.html";
                    }, 800);
                }).catch(err => {
                    console.log(err.response);
                    toastr.error("", "Registration failed", {
                        timeOut: 1500,
                        positionClass: 'toast-top-center',
                        preventDuplicates: true
                    });

                });
            }
        });



    }
}