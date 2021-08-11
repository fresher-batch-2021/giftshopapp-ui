// getting data from server
function product() {
    
    var count = 0;
    const url = "https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products";//url to get all element from server
    axios.get(url).then(res => {

        console.log(res.data);//to printing in console
        var images = res.data;
        let content = "";
        for (let img of images) {
            
            content = content + `<div class="product" id="${img.id}">
            <form action="cart.html">
            <a href="ProductSpec.html?id=${img.id}">
            <img class="productImg" src="Assets/Images/${img.image_url}"  id="productImg" alt="">    
            </a>
            <p class="productName" id="productName">${img.name}</p>
            <p class="productPrice" id="productPrice" >${img.price}</p>
            <p>${img.id}</p>
            <button type="submit" onClick="toCart(${img.id},'${img.name}','${img.image_url}','${img.price}','${img.description}')">add to cart</button>
            </form>
            </div>`;
            //for printing only 4 elements in a row
            count = count + 1;
            if (count == 4) {
            content = content + `<br>`;
            count = 0;
            }
        }
        document.querySelector("#productContainer").innerHTML = content;
    })
}
// sending data in html url "ProductSpec.html?id=${img.id}"


//----------------------------------------for storing data in local machine-------------------------------
product();