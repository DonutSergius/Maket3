document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderImage = document.querySelector('.slider-image');

    const images = ['img/slide1.jpg', 'img/slide2.jpg'];
    let currentImageIndex = 0;
    let timer;

    function showImage(index, direction) {
        sliderImage.style.animation = 'fadeOut 1s forwards';
    
        setTimeout(function () {
            sliderImage.style.animation = 'fadeIn 1s forwards';
            sliderImage.src = images[index];
        }, 700);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex, 'next');
        restartTimer();
    }

    function autoChangeImage() {
        timer = setTimeout(function () {
            sliderImage.style.animation = 'fadeOut 1s forwards';
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



var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
document.addEventListener("DOMContentLoaded", function () {
  var feedbackContant = document.querySelector(".feedback-contant");
  var feedbackButton = document.querySelector(".feedback-button");
  var feedbackEnd = document.querySelector(".feedback-end");
  var feedbackSend = document.querySelector(".feedback-send");

  feedbackButton.addEventListener("click", function () {
    setTimeout(function () {
        feedbackContant.style.animation = 'fadeIn 0.4s forwards';
        feedbackContant.classList.add("fullscreen");
    }, 100);
  });

  feedbackEnd.addEventListener("click", function () {
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    if (nameInput.classList.contains("error")) {
      nameInput.classList.remove("error");
      nameInput.style.color = "";
    }

    if (phoneInput.classList.contains("error")) {
      phoneInput.classList.remove("error");
      phoneInput.style.color = "";
    }

    if (emailInput.classList.contains("error")) {
      emailInput.classList.remove("error");
      emailInput.style.color = "";
    }
    feedbackContant.classList.remove("fullscreen");
  });

  feedbackSend.addEventListener("click", function () {
    if (validateForm()) {
      feedbackContant.classList.remove("fullscreen");
    }
  });

  nameInput.addEventListener("focus", function () {
    removeError(nameInput);
  });

  phoneInput.addEventListener("focus", function () {
    removeError(phoneInput);
  });

  emailInput.addEventListener("focus", function () {
    removeError(emailInput);
  });
});
function validateForm() {
  var isNameValid = validateInput(nameInput);
  var isPhoneValid = validateInput(phoneInput);
  var isEmailValid = validateInput(emailInput);

  return isNameValid && isPhoneValid && isEmailValid;
}

function validateInput(inputElement) {
  var value = inputElement.value.trim();

  if (value === "" || value === "This field is required.") {
    inputElement.classList.add("error");
    inputElement.style.color = "red";
    inputElement.value = "This field is required.";
    return false;
  } else {
    inputElement.classList.remove("error");
    inputElement.style.color = "";

    return true;
  }
}

function removeError(inputElement) {
  inputElement.classList.remove("error");
  inputElement.style.color = "";
}