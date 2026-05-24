let currentImageIndex = 0;
const slides = document.querySelectorAll('#aboutSlideshow .slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentImageIndex = 0;
    if (index < 0) currentImageIndex = slides.length - 1;
    if (index >= 0 && index < slides.length) currentImageIndex = index;

    slides.forEach(slide => { slide.classList.remove('active'); });
    if (slides[currentImageIndex]) slides[currentImageIndex].classList.add('active');

    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === currentImageIndex);
    });
}

function changeSlide(direction) {
    showSlide(currentImageIndex + direction);
    resetAutoSlide();
}

function currentSlide(index) {
    showSlide(index);
    resetAutoSlide();
}

let autoSlideInterval = setInterval(() => { changeSlide(1); }, 5000);

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => { changeSlide(1); }, 5000);
}

const slideshowContainer = document.querySelector('#aboutSlideshow');
if (slideshowContainer) {
    const parentCard = slideshowContainer.parentElement;
    if (parentCard) {
        parentCard.addEventListener('mouseenter', () => { clearInterval(autoSlideInterval); });
        parentCard.addEventListener('mouseleave', () => { autoSlideInterval = setInterval(() => { changeSlide(1); }, 5000); });
    }
}

if (dots.length > 0) {
    dots[0].classList.add('active-dot');
}

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});