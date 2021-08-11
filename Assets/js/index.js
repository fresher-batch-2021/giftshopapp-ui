




// image slider java script start

var slideIndex = 0;

    let slideData = ["Assets/Images/bc1.jpg", "Assets/Images/bc2.jpg", "Assets/Images/bc3.jpg"];//to add images in slideshow
    
function addSliderImages() {
    
    const slider = document.querySelector('.slideshow_container');//to place the html code in container

    for (let slide of slideData) {
        let slideDiv = document.createElement('div');
        slideDiv.setAttribute('class', 'mySlides fade');

        slideDiv.innerHTML = `<img class="imgSlide" src="${slide}"/>`;

        slider.appendChild(slideDiv);
    }
}
//below code is move the slideshow images
function showSlides() {

    slideIndex++;
    //    alert("showSlides"  + slideIndex);

    let mySlidesDiv = document.querySelectorAll('.mySlides');
    // Don't display images while loading
    mySlidesDiv.forEach(divObj => {
        divObj.style.display = "none";
    });

    //reset to 1st image
    if (slideIndex > mySlidesDiv.length) {
        slideIndex = 1
    }//to reset the slider

    //display one image at at time
    mySlidesDiv[slideIndex - 1].style.display = "block";//displaying the image

    setTimeout(showSlides, 1650); // Change image every 1.65 seconds  
}
//calling functions
addSliderImages();
showSlides();
