AOS.init({
    duration: 1200,
});

const navbar = document.querySelector('.navbar');
const scrollBtn = document.querySelector('.scroll-up');
const SCROLL_THRESHOLD = 60; // Threshold for sticky navbar

function handleScroll() {
    const scrollTop = window.scrollY;

    if (scrollTop > SCROLL_THRESHOLD) {
        makeNavbarSticky();
        showScrollButton();
    } else {
        removeStickyNavbar();
        hideScrollButton();
    }
}

function makeNavbarSticky() {
    navbar.classList.add('solid');
}

function removeStickyNavbar() {
    navbar.classList.remove('solid');
}

function showScrollButton() {
    scrollBtn.style.display = "block";
}

function hideScrollButton() {
    scrollBtn.style.display = "none";
}

// Throttle the scroll event using lodash's throttle function
const throttledScroll = _.throttle(handleScroll, 200); // Adjust the delay as needed

window.addEventListener('scroll', throttledScroll);


