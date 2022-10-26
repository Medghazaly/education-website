let navBar = document.querySelector(".header .navbar");

document.getElementById("menu-btn").onclick = () => {
  navBar.classList.toggle("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
};

let mainVid = document.querySelector(".main-video");

document.querySelectorAll(".course-3 .video video").forEach((vid) => {
  vid.onclick = () => {
    let src = vid.getAttribute("src");
    mainVid.classList.add("active");
    mainVid.querySelector("video").src = src;
  };
});

document.getElementById("close-vid").onclick = () => {
  mainVid.classList.remove("active");
};
