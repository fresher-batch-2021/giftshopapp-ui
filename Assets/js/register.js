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

                console.log(registerObj); //for printing in console 
// =============================
const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
// one space after Basic
const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);
const url = "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_user";//registration url
// =============================
console.log(basicAuth);
              axios.post(url, registerObj,{headers:{'Authorization':basicAuth}}).then(res => {

                        console.log(res);//printing in console // for user purpose
                        alert("Registration is succesful");
                        window.location.href = "login.html";
                    }).catch(err =>{
                        console.error(err.response.data);
                        alert("Unable to register");
                    });

                }
            }