const fs = require('fs');

let indexHtml = fs.readFileSync('online-shopping-system/index.html', 'utf-8');

// 1. Add "About Us" link to navigation menus
indexHtml = indexHtml.replace(
  /<a href="#" class="menu-title" data-i18n="header_home">Home<\/a>\s*<\/li>/g,
  '<a href="index.html" class="menu-title" data-i18n="header_home">Home</a>\n          </li>\n          <li class="menu-category">\n            <a href="about.html" class="menu-title">About Us</a>\n          </li>'
);
indexHtml = indexHtml.replace(
  /<a href="#" class="menu-title" data-i18n="mobile_home">Home<\/a>\s*<\/li>/g,
  '<a href="index.html" class="menu-title" data-i18n="mobile_home">Home</a>\n        </li>\n        <li class="menu-category">\n          <a href="about.html" class="menu-title">About Us</a>\n        </li>'
);

// Extract updated Header and Footer
const headerEnd = indexHtml.indexOf('</header>') + '</header>'.length;
const footerStart = indexHtml.indexOf('<footer>');
const header = indexHtml.substring(0, headerEnd);
const footer = indexHtml.substring(footerStart);

// 2. Replace old banner with new Hero Slider
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

const bannerRegex = /<div class="banner">[\s\S]*?<!--\s*- CATEGORY\s*-->/i;
const newIndexHtml = indexHtml.replace(bannerRegex, newHeroHtml + '\n\n    <!--\n      - CATEGORY\n    -->');
fs.writeFileSync('online-shopping-system/index.html', newIndexHtml);


// 3. Build About Us Page
const aboutMain = `
    <main>
      <div class="container page-animation" style="padding: 60px 15px; min-height: 70vh;">
        <!-- About Hero -->
        <div class="theme-card" style="position: relative; text-align: center; padding: 100px 20px; border-radius: var(--border-radius-md); margin-bottom: 60px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('./assets/images/cta-banner.jpg') center/cover; z-index: 1;"></div>
          <div style="position: relative; z-index: 2;">
            <h1 style="font-size: 3.5rem; margin-bottom: 20px; color: #fff; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">About Alma</h1>
            <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto; color: #ddd; line-height: 1.8;">Discover our journey, our passion for fashion, and the values that drive us to bring you the best online shopping experience.</p>
          </div>
        </div>

        <!-- Our History -->
        <div style="display: flex; flex-wrap: wrap; gap: 50px; margin-bottom: 80px; align-items: center;">
          <div style="flex: 1; min-width: 300px; position: relative;">
            <img src="./assets/images/blog-1.jpg" alt="Our History" style="width: 100%; border-radius: var(--border-radius-md); box-shadow: 0 15px 40px rgba(0,0,0,0.15); transition: transform 0.3s ease;" class="product-hover-anim">
          </div>
          <div style="flex: 1; min-width: 300px;">
            <h2 class="title" style="margin-bottom: 25px; border: none; padding: 0; font-size: 2.2rem; color: var(--eerie-black);">Our History</h2>
            <p style="color: var(--sonic-silver); line-height: 1.8; margin-bottom: 20px; font-size: 1.05rem;">Founded in 2010, Alma started as a small boutique with a big dream: to make high-quality fashion accessible to everyone. Over the past decade, we've grown into a global online retailer, serving millions of happy customers worldwide.</p>
            <p style="color: var(--sonic-silver); line-height: 1.8; font-size: 1.05rem;">We believe that shopping should be an experience, not a chore. That's why we carefully curate our collections, ensuring that every piece reflects the latest trends while maintaining timeless elegance and superior comfort. From a small team of three, we are now a family of over 500 fashion enthusiasts dedicated to your style.</p>
          </div>
        </div>

        <!-- Our Values -->
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 class="title" style="display: inline-block; border-bottom: 2px solid var(--salmon-pink); padding-bottom: 10px; font-size: 2.2rem;">Our Core Values</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-bottom: 80px;">
          <div class="theme-card" style="padding: 40px 30px; text-align: center; border-radius: var(--border-radius-md);">
            <div style="background: var(--cultured); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;">
              <ion-icon name="diamond-outline" style="font-size: 40px; color: var(--salmon-pink);"></ion-icon>
            </div>
            <h3 style="font-size: var(--fs-3); margin-bottom: 15px; color: var(--eerie-black);">Quality First</h3>
            <p style="color: var(--sonic-silver); font-size: var(--fs-6); line-height: 1.6;">We never compromise on quality. Every product is rigorously tested to ensure it meets our high standards before it reaches your hands.</p>
          </div>
          <div class="theme-card" style="padding: 40px 30px; text-align: center; border-radius: var(--border-radius-md);">
            <div style="background: var(--cultured); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;">
              <ion-icon name="leaf-outline" style="font-size: 40px; color: var(--salmon-pink);"></ion-icon>
            </div>
            <h3 style="font-size: var(--fs-3); margin-bottom: 15px; color: var(--eerie-black);">Sustainability</h3>
            <p style="color: var(--sonic-silver); font-size: var(--fs-6); line-height: 1.6;">We are committed to eco-friendly practices, from sourcing sustainable materials to reducing our carbon footprint in packaging and delivery.</p>
          </div>
          <div class="theme-card" style="padding: 40px 30px; text-align: center; border-radius: var(--border-radius-md);">
            <div style="background: var(--cultured); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px;">
              <ion-icon name="heart-outline" style="font-size: 40px; color: var(--salmon-pink);"></ion-icon>
            </div>
            <h3 style="font-size: var(--fs-3); margin-bottom: 15px; color: var(--eerie-black);">Customer Love</h3>
            <p style="color: var(--sonic-silver); font-size: var(--fs-6); line-height: 1.6;">Our customers are at the heart of everything we do. We strive to provide exceptional service, 24/7 support, and a seamless shopping journey.</p>
          </div>
        </div>
      </div>
    </main>
`;
fs.writeFileSync('online-shopping-system/about.html', header + '\n\n' + aboutMain + '\n\n' + footer);

// 4. Update other files with the new header (so they have the "About Us" link)
const filesToUpdate = ['cart.html', 'checkout.html', 'product-details.html', 'login.html', 'register.html', 'products.html'];
for (const file of filesToUpdate) {
  if (fs.existsSync('online-shopping-system/' + file)) {
    let content = fs.readFileSync('online-shopping-system/' + file, 'utf-8');
    const hEnd = content.indexOf('</header>') + '</header>'.length;
    if (hEnd > '</header>'.length) {
      content = header + content.substring(hEnd);
      fs.writeFileSync('online-shopping-system/' + file, content);
    }
  }
}

// 5. Update CSS
let styleCss = fs.readFileSync('online-shopping-system/assets/css/style.css', 'utf-8');
const sliderCss = `
/* Hero Slider Styles */
.hero-slider-container {
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 500px;
  overflow: hidden;
  margin-bottom: 60px;
}
.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}
.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
  z-index: 0;
}
.hero-slide.active {
  opacity: 1;
  z-index: 1;
}
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
  z-index: -1;
  transform: scale(1.05);
  transition: transform 6s ease;
}
.hero-slide.active .hero-bg {
  transform: scale(1);
}
.hero-content {
  background: hsla(0, 0%, 100%, 0.85);
  padding: 40px;
  border-radius: var(--border-radius-md);
  max-width: 500px;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.6s ease 0.4s;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
.hero-slide.active .hero-content {
  transform: translateY(0);
  opacity: 1;
}
[data-theme="dark"] .hero-content {
  background: hsla(0, 0%, 10%, 0.85);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.hero-subtitle {
  color: var(--salmon-pink);
  font-size: var(--fs-6);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.hero-title {
  color: var(--eerie-black);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 15px;
}
[data-theme="dark"] .hero-title {
  color: var(--text);
}
.hero-text {
  font-size: var(--fs-5);
  color: var(--sonic-silver);
  margin-bottom: 25px;
}
.hero-btn {
  background: var(--salmon-pink);
  color: var(--white) !important;
  padding: 12px 30px;
  border-radius: var(--border-radius-sm);
  font-weight: var(--weight-600);
  text-transform: uppercase;
  display: inline-block;
  transition: background 0.3s ease;
}
.hero-btn:hover {
  background: var(--eerie-black);
}
[data-theme="dark"] .hero-btn:hover {
  background: var(--border);
}
.hero-slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--white);
  color: var(--eerie-black);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}
.hero-slider-btn:hover {
  background: var(--salmon-pink);
  color: var(--white);
}
.hero-slider-btn.prev { left: 20px; }
.hero-slider-btn.next { right: 20px; }
[data-theme="dark"] .hero-slider-btn {
  background: var(--card);
  color: var(--text);
}
@media (max-width: 768px) {
  .hero-slider-container { height: 50vh; min-height: 400px; }
  .hero-slide { padding: 0 5%; }
  .hero-content { padding: 25px; }
  .hero-title { font-size: 1.8rem; }
}
`;

if (!styleCss.includes('/* Hero Slider Styles */')) {
  fs.writeFileSync('online-shopping-system/assets/css/style.css', styleCss + '\n' + sliderCss);
}

// 6. Update JS
let scriptJs = fs.readFileSync('online-shopping-system/assets/js/script.js', 'utf-8');
const sliderJs = `
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
`;

if (!scriptJs.includes('// Hero Slider Logic')) {
  fs.writeFileSync('online-shopping-system/assets/js/script.js', scriptJs + '\n' + sliderJs);
}

console.log('Hero slider and About Us page built successfully.');
