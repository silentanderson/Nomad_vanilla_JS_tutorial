const images = ["0.jpg", "1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;
bgImage.width = "960";
bgImage.height = "500";

document.body.appendChild(bgImage);