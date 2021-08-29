
function loginPage() {
    document.getElementById('loginBtn').disabled=true;
    event.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    
switch(true){
    case email.trim()=="":{alert("email can't be full of spaces");}
    case (password.trim() == ""):{alert("password cab't be empty");}

    default :{
        
        crud.login(email,password)

        .then(res => {
            let data = res.data.docs[0];
            console.log(data)
            if (data == undefined||data.length == 0) {
                alert("Invalid credentials");
            }
            else {
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(data));
                alert("login succesful");
                document.getElementById('#loginBtn').disabled=false;
    
                window.location.href = "index.html";
            }
        }).catch(err => {
            if (err.response.data.errorMessage) {
                console.log(err.response.data.errorMessage);
            }
            alert("login failed");
            window.location.href = "login.html";
        });
    }
}}