const images = [
'img/round-box.jpg',
'img/squire-box.jpg',
'img/peacock.jpg',
'img/happy-eggs.jpg'
];
let currentSlide = 0;
function showCurrentSlide {
    const imageContainer = document.querySelector('.producy-carusel .product-image');
    imagesContainer.src = images[currentSlide];
}
function next() {
    currentSlide++;
    if (currentSlide > images.lenth - 1) currentSlide = 0;
    showCurrentSlide();
}
setInterval(next, 1000);
showCurrentSlide();
document.querySelector('product-carusel. next').addEventListener(click)
