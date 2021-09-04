// auth gaurd error message display in login page not in unauthorized page
// continutiy in routes.js
const param = new URLSearchParams(window.location.search.substr(1));
let usrMsg = param.get("alert");

setTimeout(function(){
    if(usrMsg){
        toastr.info("",usrMsg,{
            timeOut:1000,
            positionClass:'toast-top-center',
            preventDuplicates:true
        });
        }
},800)

function loginPage() {
    event.preventDefault();
    document.getElementById('loginBtn').disabled = true;
    
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    switch (true) {
        case email.trim() == "": {
            toastr.warning("warning", "email can't be full of spaces", { timeOut: 1000 });
            document.getElementById('loginBtn').disabled = false;
            break;
        }
        case (password.trim() == ""): {
            toastr.warning("warning", "password can't be empty", { timeOut: 1000 });
            document.getElementById('loginBtn').disabled = false;
            break;
        }

        default: {

            crud.login(email, password)

                .then(res => {
                    console.log(res)
                    let data = res.data.docs[0];
                    console.log(data)
                    if (data == undefined || data.length == 0) {
                        toastr.warning("warning", "Invalid Credentials", {
                            // classPosition:'toast-top-center',
                            preventDuplicates:true,
                            timeOut: 2000
                        });
                        setTimeout(function () {
                            document.getElementById('loginBtn').disabled = false;
                        }, 1000)
                    }
                    else if(!data.userStatus){
                        console.log(data.userStatus)
                        toastr.warning("warning", "You have been blocked by the admin", {
                            // classPosition:'toast-top-center',
                            preventDuplicates:true,
                            timeOut: 1000
                        });
                        setTimeout(function () {
                            document.getElementById('loginBtn').disabled = false;
                        }, 1000)
                    }
                    else {

                        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));

                        toastr.success("sucess", "Login Succesful", {
                            iconClass: 'customer-info',
                            timeOut: 5000
                            // progressBar:true
                        });
                        setTimeout(function () {
                            document.getElementById('loginBtn').disabled = false;
                            window.location.href = "index.html";
                        }, 1000);


                    }
                }).catch(err => {
                    toastr.error("error", "Login Failed", {
                        timeOut: 1000
                    });
                    // timer 
                    setTimeout(function () {
                        document.getElementById('loginBtn').disabled = false;
                        if (err.response.data) {
                            console.log(err.response.data.errorMessage);
                        }
                        window.location.href = "login.html";
                    }, 1000);
                });
        }
    }
}