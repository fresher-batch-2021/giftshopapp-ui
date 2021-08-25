//linking the header file
$("#header").load("header.html");



// function isLoggedIn() {
//     let login = JSON.parse(localStorage.getItem("IsLoggedIn"));
//     let content = "";
//     if (login == null || login == undefined) { login = false; }
//     if (login) {
//         content = `
//         <a class="navlink" onClick="logout()">logout</a>
//         `;
//     }
//     else {
//         content = `
//         <a class="navlink" href="login.html">login</a>
//         <a class="navlink" href="Register.html">Register</a>
//         `;
//         localStorage.setItem("IsLoggedIn", false);
//     }
//     document.querySelector(".navlinks").innerHTML = content;
// }

// function logout() {
//     localStorage.clear();
//     window.location.href = "index.html";
// }

// function loginCheck() {
//     if (JSON.parse(localStorage.getItem("IsLoggedIn")) == false) {
//         alert("can't do that need to login first");
//         window.location.href = "login.html";
//         return false;
//     }
// }

// $("#footer").load("footer.html");