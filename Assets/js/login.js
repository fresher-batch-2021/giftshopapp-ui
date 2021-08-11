function login() {
    event.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    
switch(true){
    case email =="":{alert("email can't be empty");break;}
    case email.trim()=="":{alert("email can't be full of spaces"); break;}
    case (password.trim() == ""):{alert("password cab't be empty"); break;}

    default :{
        const loginobj = {    
        "email": email,
        "password": password 
       };

        //sending data to server
        const url = "https://product-mock-api.herokuapp.com/giftshopapp/api/v1/auth/login";
        console.log(loginobj);//for our verification

        axios.post(url,loginobj).then(res=>{
            

            //to stay loged in
            // localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));

            alert("login succesful");
            window.location.href="index.html";
        }).catch(err=>{
                console.log(err.response.data);
                if (err.response.data.errorMessage){
                    alert(err.response.data.errorMessage);
                }
                else{
                alert("login failed");
                }
        });
    }
}}