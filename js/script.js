function replaceName() {
  let username = prompt("Selamat datang, isikan nama anda", "");
  document.getElementById("username").innerHTML = username;
}

replaceName();

// Ini script projects autoslide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function validateForm() {
  const fullname = document.forms["message-form"]["name"].value;
  const birthdate = document.forms["message-form"]["dob"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["message"].value;

  setSenderUI(fullname, birthdate, gender, messages);

  return false;
}

function setSenderUI(fullname, birthdate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = fullname;
  document.getElementById("sender-dob").innerHTML = birthdate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
