const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

const randomNumber = Math.floor(Math.random() * images.length);

const backImage = document.querySelector("#main");

//backImage.style.width = "200px";
//backImage.style.height = "200px";
//backImage.style.backgroundImage = `url(img/${images[randomNumber]})`;
backImage.style.background = `linear-gradient(rgba(0, 0, 0, 0.30), rgba(0, 0, 0, 0.30)), url(img/${images[randomNumber]})`;
backImage.style.backgroundSize = "cover";
