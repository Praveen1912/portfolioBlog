
window.alert("Hello friends, some section of the website are not working that includes contact section");
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*slider*/
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(n) {
    index += n;
    if (index > slide.length - 1) {
        index = 0;
    }
    if (index < 0) {
        index = slide.length - 1;
    }
    slides.style.transform = `translateX(${-index * 105}%)`;
}

next.addEventListener('click', () => showSlide(1));
prev.addEventListener('click', () => showSlide(-1));

setInterval(() => showSlide(1), 8000); // Auto-slide every 8 seconds

/*passing message*/
const message = "🚀I try to post atleast one article every week in blog and thank you for visiting 🎉";
document.getElementById("scrollingText").textContent = message;


