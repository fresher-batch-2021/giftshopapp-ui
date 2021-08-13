$("#header").load("header.html");

        function register() {
            event.preventDefault();
            
            const name = document.querySelector("#registerName").value;
            const email = document.querySelector("#registerEmail").value;
            const password = document.querySelector("#registerPassword").value;
            const confirm = document.querySelector("#registerConfirm").value;
            //if name is valid or not
            if (name == "" || name == null || name.trim() == "") {
                alert("invalid not valid");
            }
            
            else if (password.length < 8) {
                alert("password is less than 8charectors");
            }
            else 
                if (password != confirm) {
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

                console.log(registerObj); //for printing in console 

              const url = "https://product-mock-api.herokuapp.com/giftshopapp/api/v1/auth/register";//registration url
              axios.post(url, registerObj).then(res => {

                        console.log(res);//printing in console // for user purpose
                        alert("Registration is succesful");
                        window.location.href = "login.html";
                    }).catch(err => {
                        console.error(err);
                        alert("Unable to register");
                    });

                }
            }