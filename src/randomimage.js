const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];

const randomNumber = Math.floor(Math.random() * images.length);

const backImage = document.querySelector("#image");

console.dir(backImage);

backImage.style.width = "200px";
backImage.style.height = "200px";
backImage.style.backgroundImage = `url(img/${images[randomNumber]})`;
