const fs = require('fs');

let indexHtml = fs.readFileSync('online-shopping-system/index.html', 'utf-8');

const newHeroHtml = `
    <!--
      - HERO SLIDER
    -->
    <div class="hero-slider-container">
      <div class="hero-slider" id="hero-slider">
        <div class="hero-slide active">
          <img src="./assets/images/banner-1.jpg" alt="women's latest fashion sale" class="hero-bg">
          <div class="hero-content">
            <p class="hero-subtitle">Trending item</p>
            <h2 class="hero-title">Women's latest fashion sale</h2>
            <p class="hero-text">starting at &dollar; <b>20</b>.00</p>
            <a href="#" class="hero-btn">Shop now</a>
          </div>
        </div>
        <div class="hero-slide">
          <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" class="hero-bg">
          <div class="hero-content">
            <p class="hero-subtitle">Trending accessories</p>
            <h2 class="hero-title">Modern sunglasses</h2>
            <p class="hero-text">starting at &dollar; <b>15</b>.00</p>
            <a href="#" class="hero-btn">Shop now</a>
          </div>
        </div>
        <div class="hero-slide">
          <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" class="hero-bg">
          <div class="hero-content">
            <p class="hero-subtitle">Sale Offer</p>
            <h2 class="hero-title">New fashion summer sale</h2>
            <p class="hero-text">starting at &dollar; <b>29</b>.99</p>
            <a href="#" class="hero-btn">Shop now</a>
          </div>
        </div>
      </div>
      <button class="hero-slider-btn prev" id="hero-prev" aria-label="Previous Slide"><ion-icon name="chevron-back-outline"></ion-icon></button>
      <button class="hero-slider-btn next" id="hero-next" aria-label="Next Slide"><ion-icon name="chevron-forward-outline"></ion-icon></button>
    </div>
`;

// Replace old banner
const bannerRegex = /<div class="banner">[\s\S]*?<!--\s*- CATEGORY\s*-->/i;
indexHtml = indexHtml.replace(bannerRegex, newHeroHtml + '\n\n\n\n    <!--\n      - CATEGORY\n    -->');

fs.writeFileSync('online-shopping-system/index.html', indexHtml);
console.log('Hero slider added to index.html successfully.');
