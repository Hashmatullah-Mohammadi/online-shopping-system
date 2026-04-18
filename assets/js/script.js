'use strict';

// translations 
let currentLang = "en";

async function loadLanguage(lang) {
  const response = await fetch(`./lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
   if (translations[key]) {
      // If it's an input -> change placeholder
      if (el.placeholder !== undefined) {
        el.placeholder = translations[key];
      } else {
        el.textContent = translations[key];
      }
    }
  });

  // Professional RTL management
  const rtlLanguages = ["fa", "ps"];
  document.documentElement.dir = rtlLanguages.includes(lang) ? "rtl" : "ltr";

  // Page language (for SEO and standards)
  document.documentElement.lang = lang;

  // Save language
  localStorage.setItem("lang", lang);
}

// When page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  loadLanguage(savedLang);
});

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}





// Theme Toggle
const themeBtn = document.getElementById('theme-toggle-btn');
if (themeBtn) {
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  themeBtn.innerHTML = currentTheme === 'dark' ? '<ion-icon name="sunny-outline"></ion-icon>' : '<ion-icon name="moon-outline"></ion-icon>';

  themeBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      theme = 'light';
      themeBtn.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    } else {
      theme = 'dark';
      themeBtn.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
}


// Hero Slider Logic
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.getElementById('hero-prev');
const heroNext = document.getElementById('hero-next');
let currentSlide = 0;
let slideInterval;

if (heroSlides.length > 0) {
  const showSlide = (index) => {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroSlides[index].classList.add('active');
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
  };

  if(heroNext) {
    heroNext.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if(heroPrev) {
    heroPrev.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 5000);
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  startInterval();
}


// Countdown Timer Logic
const countdown = () => {
  const countDate = new Date("Dec 31, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minsEl = document.getElementById("mins");
  const secsEl = document.getElementById("secs");

  if (daysEl) daysEl.innerText = textDay < 10 ? "0" + textDay : textDay;
  if (hoursEl) hoursEl.innerText = textHour < 10 ? "0" + textHour : textHour;
  if (minsEl) minsEl.innerText = textMinute < 10 ? "0" + textMinute : textMinute;
  if (secsEl) secsEl.innerText = textSecond < 10 ? "0" + textSecond : textSecond;
};

if (document.getElementById("days")) {
  setInterval(countdown, 1000);
}


// NEW DESIGN LOGIC
// Hero Slider
let currentSlideNew = 0;
const slidesNew = document.querySelectorAll('.slide');
const dotsContainerNew = document.getElementById('dots');

function createDotsNew() {
    if (!dotsContainerNew) return;
    slidesNew.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlideNew(index));
        dotsContainerNew.appendChild(dot);
    });
}

function updateSlidesNew() {
    slidesNew.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlideNew) slide.classList.add('active');
    });
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideNew);
    });
}

function changeSlideNew(direction) {
    if (slidesNew.length === 0) return;
    currentSlideNew = (currentSlideNew + direction + slidesNew.length) % slidesNew.length;
    updateSlidesNew();
}

function goToSlideNew(index) {
    currentSlideNew = index;
    updateSlidesNew();
}

if (slidesNew.length > 0) {
    createDotsNew();
    // Auto slide
    setInterval(() => {
        changeSlideNew(1);
    }, 5000);
}

// Countdown Timer
function startCountdownNew() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    function update() {
        const now = new Date();
        const diff = targetDate - now;
        const daysEl = document.getElementById('days');
        if (!daysEl) return;
        
        if (diff <= 0) {
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) countdownEl.innerHTML = "<div>🎉 Offer Expired! 🎉</div>";
            return;
        }
        
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
        if (hEl) hEl.textContent = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
        if (mEl) mEl.textContent = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
        if (sEl) sEl.textContent = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}

if (document.getElementById('countdown')) {
    startCountdownNew();
}

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => alert('✨ Item added to cart! ✨'));
});
