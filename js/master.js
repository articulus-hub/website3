var body = document.body,
    html = document.documentElement;
var documentHeight = 0;
window.addEventListener("load",() => {
  documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
});

var windowHeight = window.innerHeight;

const teamCarousel = document.querySelector('.team');

var carouselWidth = teamCarousel?.offsetWidth;

window.addEventListener("resize",() => {
  documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
  windowHeight = window.innerHeight;
  carouselWidth = teamCarousel.offsetWidth;
  console.log("carousel width", carouselWidth);
})

const features = document.querySelectorAll(".product-features .info");
const quotes = document.querySelectorAll('.quote-container');
console.log(features);

document.addEventListener("scroll", () => {
    features.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if(rect.top < windowHeight){
            item.classList.add("active");
        }
        else{
            item.classList.remove("active");
        }
    });
    quotes.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if(rect.top < windowHeight){
            item.classList.add("active");
        }
        else{
            item.classList.remove("active");
        }
    })
})

const leftChevron = document.querySelector(".left-chevron");
const rightChevron = document.querySelector(".right-chevron");

leftChevron?.addEventListener('click',() => {
    if(carouselWidth > 500){
        teamCarousel.scrollLeft -= carouselWidth - 100;
    }
    else{
        teamCarousel.scrollLeft -= carouselWidth-15;
    }
    
})

rightChevron?.addEventListener('click',() => {
    if(carouselWidth > 500){
        teamCarousel.scrollLeft += carouselWidth - 100;
    }
    else{
        teamCarousel.scrollLeft += carouselWidth-15;
    }
    
})

const sentences = ["The Future of Surgical Robotics","Surgeon and Robot Amalgamation","Affordability, Portability and Safety"];

let count = 0;
let index = 0;

let currentSentence = '';
let currentLetter = '';

const sleep = (delay) => {
    return new Promise(resolve => setTimeout(resolve,delay));
} 

const typeWrite = async() => {
    if(count == sentences.length){
        count = 0;
    }
    currentSentence = sentences[count];
    currentLetter = currentSentence.slice(0,++index);
    document.querySelector('#typing').textContent = currentLetter;
    if(index == currentSentence.length){
        await sleep(1500);
        while(index > 0){
            currentLetter = currentLetter.slice(0,--index);
            document.querySelector('#typing').textContent = currentLetter;
            await sleep(30);
        };
        count++;
        index = 0;
        await sleep(500);
    }
    setTimeout(typeWrite,Math.random()*100+30)
}
typeWrite();

const scrollTopButton = document.querySelector('.scroll-top-button');
scrollTopButton?.addEventListener('click',()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

const displayScrollButton = (position) => {
    if(position>=250){
      scrollTopButton.classList.add("active");
    }
    else{
      scrollTopButton.classList.remove("active");
    }
  }

  var scrollButtonTimerId;

const throttleDisplayScrollButton = (func,position,delay) => {
  if (scrollButtonTimerId){
    return;
  }
  scrollButtonTimerId = setTimeout(() => {
    func(position);
    scrollButtonTimerId = undefined;
  },delay);
}

window.addEventListener('scroll',() => {
    position = window.pageYOffset;
    throttleDisplayScrollButton(displayScrollButton,position,100);
});

const burger = document.querySelector('.burger');
const menuSection = document.querySelector('.menu-section');
const menuLinks = document.querySelectorAll('.menu-section li');

const navSlide = () => {
    burger.addEventListener('click',()=>{
      menuSection.classList.toggle('active');
      menuLinks.forEach((link,index) => {
        if(link.style.animation){
          link.style.animation = ``;
        }
        else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.4}s`;
        }
      });
      burger.classList.toggle('toggle');
    });
  }
  navSlide();




