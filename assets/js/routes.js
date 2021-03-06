const routes = [
    { path: 'index.html' },
    { path: 'product.html' },
    { path: 'productSpec.html' },
    { path: 'cart.html', roles: ["USER","ADMIN"] },
    { path: 'about.html' },
    { path: 'login.html' },
    { path: 'register.html' },
    {path : 'order.html',roles :["USER","ADMIN"]},    
    { path: 'ordernow.html',roles: ["USER","ADMIN"]}
];
// =====

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
// ======
function checkAccess(pageName, role) {
    // alert("page",pageName)
    // alert(role)
    console.log("pageName",pageName)
    console.log("role",role)
    let allowed = false;
    
    for (let route of routes) {
        
        if (route.path == pageName) {
            
            if (!route.roles) {
                allowed = true;
                break;
            }
            else if (route.roles.includes(role)) {
                allowed = true
                break;
            }
        }
    }
    return allowed;
}

(function() {
    console.log("Routes initializing")
    
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    
    console.log(role)
    let allowedAccess = checkAccess(pathName, role);

   

    if (!allowedAccess) {

        window.location.href = "login.html?alert=you not authorized ";
    }
})();