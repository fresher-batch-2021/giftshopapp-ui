
//linking the header file
$("#header").load("header.html");
function isLoggedIn(){
    let content="";
    let login=JSON.parse(localStorage.getItem("IsLoggedIn"));
    if(login==null||login==undefined){login=false;}
    
    if(login){
        content=`
        <a class="navlink" onClick="logout()">logout</a>
        
        `;

    }
    else{
        content=`
        <a class="navlink" href="login.html">login</a>
        <a class="navlink" href="Register.html">Register</a>
        `;
        localStorage.setItem("IsLoggedIn",false);
    }
    document.querySelector(".navlinks").innerHTML=content;
}
function logout(){
    
    localStorage.setItem("IsLoggedIn",false);
    window.location.href="index.html";
}

