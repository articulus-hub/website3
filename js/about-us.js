const investorCarousel = document.querySelector('.investor-container');
var carouselWidth = investorCarousel.offsetWidth;

window.addEventListener("resize",() => {
    carouselWidth = investorCarousel.offsetWidth;
})

// const leftChevron = document.querySelector(".left-chevron");
// const rightChevron = document.querySelector(".right-chevron");


leftChevron.addEventListener('click',() => {
    investorCarousel.scrollLeft -= carouselWidth - 100;
})

rightChevron.addEventListener('click',() => {
    investorCarousel.scrollLeft += carouselWidth - 100;
})

