document.getElementById("infoButton").addEventListener("click", function() {
    alert("Добро пожаловать в ЦИАМ! Мы рады, что вы с нами. Здесть вы можете узнать много чего нового и полезного");
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

 
function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = index * -100; // Определяем смещение по ширине слайда
    slidesContainer.style.transform = `translateX(${offset}%)`; // Переход к текущему слайду
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Увеличиваем индекс и зацикливаем
    if (currentSlide === 3) { 
         currentSlide = 2;}
    showSlide(currentSlide);
}


setInterval(nextSlide, 3000); // 3 сек слайда
