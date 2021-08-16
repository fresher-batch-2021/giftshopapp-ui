
function loginPage() {
    alert("login");
    event.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    
switch(true){
    case email.trim()=="":{alert("email can't be full of spaces"); break;}
    case (password.trim() == ""):{alert("password cab't be empty"); break;}

    default :{
        

        //sending data to server
        

        const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
        const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
        // one space after Basic
        const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);
        const url = "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_user/_find";//registration url

        const requestData = 
        {
            "selector":{
            "email": email,
            "password": password
        },
        "fields":["id","rev","name","email","role"]
        };
        console.log(requestData);//for our verification

        axios.post(url,requestData,{headers:{Authorization:basicAuth}}).then(res=>{
            

            let data=res.data.docs;
                       if(data.length==0){
                           alert("Invalid credentials");
                       }
                       else{
                           const user= data[0];
                           localStorage.setItem("LOGGED_IN_USER",JSON.stringify(data));
                           localStorage.setItem("IsLoggedIn",true);                           
                           alert("login succesful");
                           window.location.href="index.html";
                       }

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