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
                        "password":password,
                        "role": "USER"
                    };


                    crud.addData(registerObj,"gift_user");//adding data to server

                }
            }