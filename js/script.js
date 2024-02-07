document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderImage = document.querySelector('.slider-image');

    const images = ['img/slide1.jpg', 'img/slide2.jpg'];
    let currentImageIndex = 0;
    let timer;

    function showImage(index, direction) {
        sliderImage.style.animation = 'fadeIn 0.5s forwards';
        sliderImage.src = images[index];
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex, 'next');
        restartTimer();
    }

    function autoChangeImage() {
        timer = setTimeout(function () {
            showNextImage();
        }, 4000);
    }

    function restartTimer() {
        clearTimeout(timer);
        autoChangeImage();
    }

    prevBtn.addEventListener('click', function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex, 'prev');
        restartTimer();
    });

    nextBtn.addEventListener('click', function () {
        showNextImage();
        restartTimer();
    });

    sliderImage.addEventListener('animationend', function () {
        sliderImage.style.animation = '';
    });

    autoChangeImage();
});