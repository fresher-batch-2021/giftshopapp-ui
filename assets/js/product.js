let products=[];
function product() {
    //sending data to server
        crud.getDataByType("products").then(res =>{
            // console.log(res.data.docs)
            // let data=res.data.docs;
            //  products=data.map(obj=>obj.doc);
            products=res.data.docs;
            console.log(products);
            displayProduct();
    
    }).catch(err=>{
        console.log(err.response.data);
    });
    
}

/**
 * 
 * @param {*} e event
 * function is used call a function on presing enter 
 */
function enter(e){
    if(e.keyCode===13){
  search()
  }
}


function search(){
  let searchValue=document.getElementById('searchBox').value
    // alert(searchValue)
    if(searchValue==''){
        product()
        return
    }
    products=products.filter(obj=>obj.name.toLowerCase().indexOf(searchValue.toLowerCase())!=-1)
    console.table(products)
    displayProduct();
}



function displayProduct(){
    let count=0;
    let content = "";
    for (let productItem of products) {
        
        content = content + `
        <div class="product" id="${productItem._id}">
            <a href="productSpec.html?id=${productItem._id}">
            <figure>
            <img class="productImg" src="assets/Images/${productItem.imageUrl}"  id="productImg" alt=""> 
            <figcaption>${productItem.name}</figcaption>
            </figure>
            </a>
            <p class="productQuantity" >${productItem.quantity}</p>
            <p class="productPrice" id="productPrice" >₹${productItem.price}</p>
                <button class="addCartBtn" type="submit"onclick="toCart('${productItem._id}','${productItem.name}','${productItem.imageUrl}','${productItem.price}','${productItem.description}',${productItem.quantity},'${productItem._rev}')">Add to cart</button>
        </div>`;
        //for printing only 4 elements in a row
        count = count + 1;
        if (count == 4) {
        content = content + `<br>`;
        count = 0;
        }
    }
    document.querySelector("#productContainer").innerHTML = content;
}
//----------------------------------------for storing data in local machine-------------------------------
product();