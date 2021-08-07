       
       
       
       //linking the header file
         $("#header").load("header.html");
         
    
        // image slider java script start

        var slideIndex = 0;

        let slideData = ["Assets/Images/bc1.jpg", "Assets/Images/bc2.jpg", "Assets/Images/bc3.jpg"];

        function addSliderImages() {

            const slider = document.querySelector('.slideshow_container');//to place the html code in container

            for (let slide of slideData) {
                let slideDiv = document.createElement('div');
                slideDiv.setAttribute('class', 'mySlides fade');

                slideDiv.innerHTML = `<img class="imgSlide" src="${slide}"/>`;

                slider.appendChild(slideDiv);
            }
        }

        function showSlides() {

            slideIndex++;
            //    alert("showSlides"  + slideIndex);

            let mySlidesDiv = document.querySelectorAll('.mySlides');
            // Don't display images
            mySlidesDiv.forEach(divObj => {
                divObj.style.display = "none";
            });
            //reset to 1st image
            if (slideIndex > mySlidesDiv.length) {
                slideIndex = 1
            }

            //display one image at at time
            mySlidesDiv[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 1650); // Change image every 2 seconds  
        }
        addSliderImages();
        showSlides();
 