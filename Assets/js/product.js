// getting data from server
function product(){
    const url =("https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products");
    axios.get(url).then(res =>{
        console.log(res.data);
        var images =res.data;
    
// var images = [{ imageUrl: "add-user.png", name: "product1", price: "100" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "gift.png", name: "product4", price: "400" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }];
// displaying images 
        let content = "";
        var count = 0;
        for (let img of images) {

            // content = content +
            //  `
            // <div class="product" id="${img.id}">
                
            //         <a href="productSpec.html"><img class="productImg" src="Assets/Images/${img.image_url}" id="productImg" alt=""></a>
            //     <p class="productName" id="productName">${img.name}</p>
            //     <p class="productPrice" id="productPrice" >${img.price}</p>

                
            // </div>`;
            content = content + `<div class="product" id="${img.id}">
            <form onsubmit="addToCart(${img.id})">
       <img class="productImg" src="Assets/Images/${img.image_url}" onClick=specOpen(${img.id}) id="productImg" alt="">    
    <p class="productName" id="productName">${img.name}</p>
    <p class="productPrice" id="productPrice" >${img.price}</p>
    <p>${img.id}</p>
    
    <button type="submit">add to cart</button>
</form>
</div>`;
            count = count + 1;
            if (count == 4) {
                content = content + `<br>`;
                count = 0;
            }
        }

        document.querySelector("#productContainer").innerHTML = content;
    })
}
// global variable id
let productId;
function specOpen(ids){
    
    // alert("im in addToCart");
    // alert(ids);

localStorage.setItem("productSpec",ids);
// alert("check");
window.location.href="productSpec.html";
// alert(id);
}




product();