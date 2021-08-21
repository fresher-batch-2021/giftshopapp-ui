 

  
  console.log(validator.isEmail('foo@bar.com'));
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
            else if(validator.isEmail(email)){
                alert("invalid email");
            }
            
            else if (password.length < 8) {
                alert("password is less than 8 characters");
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
                        "password":password,
                        "role": "USER"
                    };

                    crud.addData(registerObj,"giftshop_user").then(res=>{
                        alert("registration successful");
                        window.location.href="login.html";
                    }).catch(err=>{
                        console.log(err.response.data);
                        alert("Registration failed");
                    });
                }
            }