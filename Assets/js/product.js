// getting data from server
function product() {
    
    let count = 0;

    //sending data to server
        crud.getData("giftshop_products").then(res =>{
            let data=res.data.rows;
            let products=data.map(obj=>obj.doc);
            console.log(products);
        
    
        let content = "";
        for (let productItem of products) {
            
            content = content + `<div class="product" id="${productItem._id}">
            <form action="cart.html">
            <a href="productSpec.html?id=${productItem._id}">
            <figure>
            <img class="productImg" src="Assets/Images/${productItem.imageUrl}"  id="productImg" alt=""> 
            <figcaption>${productItem.name}</figcaption>
            </figure>
            </a>
           
            <p class="productPrice" id="productPrice" >${productItem.price}</p>
            
            <button type="submit" onclick="toCart('${productItem._id}','${productItem.name}','${productItem.imageUrl}','${productItem.price}','${productItem.description}')">add to cart</button>
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
    }).catch(err=>{
        console.log(err.response.data);
    });

    
}
// sending data in html url "ProductSpec.html?id=${img.id}"


//----------------------------------------for storing data in local machine-------------------------------
product();