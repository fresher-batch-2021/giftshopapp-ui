// product spec page
//-----------------------------------------------------------And this full page-------------------------
function productSpec(){
    var Id= localStorage.getItem("productSpec");    
    // alert("showing id in product specific page");
    // alert(Id);
    
    const url =(`https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products/${Id}}`);
    axios.get(url).then(res =>{
        console.log(res.data.image_url);
        let datas =res.data;
        // alert(datas.image_url);
        let content =`
        <img src="Assets/Images/${datas.image_url}" alt="">
        <p>${datas.name}</p>
        <br>
        <p>${datas.price}</p>
        <br>
        <p>product description......</p>
        <form onsubmit="tocart()">
            <button type="submit">add to cart</button>
        </form>`;
        document.querySelector(".productSpec").innerHTML=content;
        
        
    
    });
// alert(datas.image_url);
    var reset =0;
    localStorage.setItem("productSpec",reset);
}