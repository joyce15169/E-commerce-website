let slideIndex = 0;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("singleSlide");

        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        
        slides[slideIndex].style.display = "flex";
    }

    function plusSlides(a) {
        slideIndex += a;

        let slides = document.getElementsByClassName("singleSlide");

        
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        }

        
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        showSlides();
    }

    //4.5秒換一張圖
    setInterval(function () {
        plusSlides(1);
    }, 4500);

    showSlides();