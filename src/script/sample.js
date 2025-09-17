const jsMiniProfile = document.querySelectorAll(".js-mini-profile");
const jsUserName = document.querySelectorAll(".js-username");

const jsOverlay = document.getElementById("js-overlay");

const bgImage = [
  "../../assets/image/background-image-one.jpg",
  "../../assets/image/background-image-two.jpg",
  "../../assets/image/background-image-three.jpg",
  "../../assets/image/background-image-four.jpg",
];
jsMiniProfile.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    jsOverlay.style.backgroundImage = `url(${bgImage[index]})`;
    jsOverlay.classList.add("opacity-100");

    jsUserName[index].classList.add("opacity-100");
  });
  item.addEventListener("mouseleave", () => {
    jsOverlay.classList.remove("opacity-100");
    jsUserName[index].classList.remove("opacity-100");
    jsUserName[index].classList.add("opacity-0");
  });
});

jsMiniProfile.forEach((item, index) => {
  item.addEventListener("DOMContentLoaded", () => {
    item.classList.remove("opacity-100");
  });
});
