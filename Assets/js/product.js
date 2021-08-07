
var images = [{ imageUrl: "add-user.png", name: "product1", price: "100" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }, { imageUrl: "gift.png", name: "product4", price: "400" }, { imageUrl: "doeramon.jpg", name: "product3", price: "300" }];
// displaying images 
        let content = "";
        var count = 0;
        for (let img of images) {

            content = content +
             `
            <div class="product">
                
                    <a href="productSpec.html"><img class="productImg" src="Assets/Images/${img.imageUrl}" id="productImg" alt=""></a>
                <p class="productName" id="productName">${img.name}</p>
                <p class="productPrice" id="productPrice" >${img.price}</p>
            </div>`;
            count = count + 1;
            if (count == 4) {
                content = content + `<br>`;
                count = 0;
            }
        }

        document.querySelector("#productContainer").innerHTML = content;