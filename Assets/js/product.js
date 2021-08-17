// getting data from server
function product() {
    
    let count = 0;

    //sending data to server
        crud.getData("giftshop_products").then(res =>{
            let data=res.data.rows;
            let images=data.map(obj=>obj.doc);
            console.log(images);
        
    
        let content = "";
        for (let img of images) {
            
            content = content + `<div class="product" id="${img._id}">
            <form action="cart.html">
            <a href="ProductSpec.html?id=${img._id}">
            <figure>
            <img class="productImg" src="Assets/Images/${img.imageUrl}"  id="productImg" alt=""> 
            <figcaption>${img.name}</figcaption>
            </figure>
            </a>
           
            <p class="productPrice" id="productPrice" >${img.price}</p>
            <p>${img._id}</p>
            <button type="submit" onClick="toCart(${img._id},'${img.name}','${img.imageUrl}','${img.price}','${img.description}')">add to cart</button>
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