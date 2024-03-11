var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var textInput = document.getElementById("message");
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
    ClearField(nameInput);
    ClearField(phoneInput);
    ClearField(emailInput);
    ClearField(textInput);
    feedbackContant.classList.remove("fullscreen");
  });

  feedbackSend.addEventListener("click", function () {
    if (validateForm()) {
      feedbackContant.classList.remove("fullscreen");
      ClearField(nameInput);
      ClearField(phoneInput);
      ClearField(emailInput);
      ClearField(textInput);
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

  textInput.addEventListener("focus", function () {
    removeError(textInput);
  });
});

function validateForm() {
  isNameValid = validateInput(nameInput);
  isPhoneValid = validateInput(phoneInput);
  isEmailValid = validateInput(emailInput)
  isTextValid = validateInput(textInput);

  return isNameValid && isPhoneValid && isEmailValid && isTextValid;
}

function validateInput(inputElement) {
  var value = inputElement.value.trim();
  isValid = true;

  if(!inputElement.checkValidity()){
    isValid = false;
    if (inputElement.id === "name") {
      inputElement.setCustomValidity("Invalid name (name with out numbers)");
    }
    if (inputElement.type === "tel") {
      inputElement.setCustomValidity("Invalid phone number (+xxxxxxxxxxxx)");
    }
    if (inputElement.type === "email") {
      inputElement.setCustomValidity("Invalid email address (test@exmp.com)");
    }
  }

  if (value === "") {
    inputElement.value = "This field is required.";
    isValid = false;
  }

  if(!isValid){
    inputElement.classList.add("error");
    inputElement.style.color = "red";
    return false;
  }
  
  return true;
}

function removeError(inputElement) {
  inputElement.style.color = "";
  inputElement.style.borderСolor = "black";
  if (inputElement.classList.contains("error")) 
  {
    inputElement.classList.remove("error");
    inputElement.setCustomValidity("");
    if(inputElement.value === "This field is required.")
    inputElement.value = "";
  }
}

function ClearField(inputElement){
  inputElement.value = "";
  if (inputElement.classList.contains("error")) {
    inputElement.setCustomValidity("");
    inputElement.classList.remove("error");
    inputElement.style.color = "";
  }
}