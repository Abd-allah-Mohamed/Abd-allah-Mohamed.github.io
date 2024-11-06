let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
      });

      document
        .querySelector('header nav a[href="' + id + '"]')
        .classList.add("active");
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      alert("Your message has been sent!");
      form.reset();
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  });
});
