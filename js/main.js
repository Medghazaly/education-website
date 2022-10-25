let navBar = document.querySelector(".header .navbar");

// For Testing

// let links = document.querySelectorAll(".header .link");
// let linkActive = document.querySelectorAll(".header .links-active");

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     linkActive.forEach((li) => {
//       li.classList.toggle("active");
//     });
//   });
// });

document.getElementById("menu-btn").onclick = () => {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};
