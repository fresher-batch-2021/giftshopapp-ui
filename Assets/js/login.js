
function loginPage() {
    
    event.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    
switch(true){
    case email.trim()=="":{alert("email can't be full of spaces"); break;}
    case (password.trim() == ""):{alert("password cab't be empty"); break;}

    default :{
       

        crud.login(email,password);
       
    }
}}