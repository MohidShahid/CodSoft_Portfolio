const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Select all links with a hash (#) in the href attribute
const links = document.querySelectorAll('a[href*="#"]');

for (const link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyRXowRKgS9Cmvs_zrZysmyXqJK9l6B7_JYL0zi7UZKe93GtrrAGf0FEoaXTPxr3hLO/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg'); // Note the quotes around 'msg'

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = 'Message Sent Successfully';
      setTimeout(function() {
        msg.innerHTML = '';
      }, 3000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
