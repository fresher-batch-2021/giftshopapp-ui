// image slider java script start
function addSliderImages(){
    
    const slider = document.querySelector('.slideshow_container');

    for (let slide of slideData) {
        let slideDiv = document.createElement('div');
        slideDiv.setAttribute('class', 'mySlides fade');
        slideDiv.innerHTML = `<img class="imgSlide" src="${slide}"/>`;
        slider.appendChild(slideDiv);
    }
}
//below code is move the slideshow images

//to change image in slider change the data here 
let slideData = ["assets/Images/bc1.jpg", "assets/Images/bc2.jpg", "assets/Images/bc3.jpg"];
var slideIndex = 0;
function showSlides() {

    slideIndex++;

    let mySlidesDiv = document.querySelectorAll('.mySlides');
    // Don't display images while loading
    mySlidesDiv.forEach(divObj => {
        divObj.style.display = "none";
    })

    //reset to 1st image
    if (slideIndex > mySlidesDiv.length) {
        slideIndex = 1
    }
    
    mySlidesDiv[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1650); 
}
addSliderImages();
showSlides();
