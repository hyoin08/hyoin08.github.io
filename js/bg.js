const images = [
  "Berlin.jpg",
  "Greece.jpg",
  "Greece2.jpg",
  "Greece3.jpg",
  "London.jpg",
  "London2.jpg",
  "Rome.jpg",
  "Seoul.jpg",
  "Turkey.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
