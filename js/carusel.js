const images = [
'img/round-box.jpg',
'img/squire-box.jpg',
'img/peacock.jpg'
];
let currentSlide = 0;
function showCurrentSlide() {
    const imageContainer = document.querySelector('.products-carusel .product-image');
    imageContainer.src = images[currentSlide];
}
function next() {
    currentSlide++;
    if (currentSlide > images.length - 1) currentSlide = 0;
    showCurrentSlide();
}
setInterval(next, 1000);
showCurrentSlide();
document.querySelector('products-carusel .next').addEventListener(click)
