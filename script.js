// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navlinks ul");
  const profile = document.querySelector(".profile");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    profile.classList.toggle("show");
    menuToggle.classList.toggle("open");
  });

  const navItems = document.querySelectorAll(".navlinks a");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector(".navlinks a.active").classList.remove("active");
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sub-hero a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active")); // Remove active class from all links
      this.classList.add("active"); // Add active class to the clicked link
    });
  });
});
let currentIndex = 0;
const clients = document.querySelectorAll('.our-clients');
const totalClients = clients.length;

function showNextClient() {
    clients[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalClients;
    clients[currentIndex].classList.add('active');
}

setInterval(showNextClient, 4000); // Change client every 10 seconds

window.onload = function() {
    clients[0].classList.add('active');
};

