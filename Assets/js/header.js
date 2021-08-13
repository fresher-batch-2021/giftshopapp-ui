
//linking the header file
$("#header").load("header.html");
function logout(){
if(localStorage.getItem("isLoggedIn")){
        localStorage.setItem("userData",null);
        alert("logout succesfull");
        
    }
    else{
     alert("no account is currently logged in");
     window.location.href="login.html";       
    }
}
