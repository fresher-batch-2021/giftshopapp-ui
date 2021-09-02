
function productSpec() {
    

    // getting datas from url of the page
    const param = new URLSearchParams(window.location.search.substr(1));
    let urlId = param.get("id");
    

    crud.findDataById("giftshop_products", urlId).then(res => {
        let value = res.data;
        console.log(value)
        const id = value._id;
        const name = value.name;
        const imageUrl = value.imageUrl;
        const price = value.price;
        const description = value.description;
        const quantity =value.quantity;
        const rev = value._rev;

        let content =
            `<img src="assets/Images/${imageUrl}" alt="">
        <p>${name}</p>
        <br>
        <p>${price}</p>
        <br>
        <p>${description}</p>
        <button onclick="toCart('${id}','${name}','${imageUrl}',${price},'${description}',${quantity},'${rev}')">add to cart</button>
        `;
        document.querySelector(".productSpec").innerHTML = content;
        
    }).catch(err => {

        
        alert("failed on getting data");
        console.log(err.resposnse.data);
        
    });
          
}
productSpec();