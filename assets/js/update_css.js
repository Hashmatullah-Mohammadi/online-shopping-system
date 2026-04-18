const fs = require('fs');

let styleCss = fs.readFileSync('online-shopping-system/assets/css/style.css', 'utf-8');

const newSectionsCss = `
/* -----------------------------------*\
  #NEW SECTIONS CSS (Index Page)
\*----------------------------------- */

.section-padding {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: var(--eerie-black);
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 15px;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--salmon-pink);
}
[data-theme="dark"] .section-title { color: var(--text); }

/* Services Section */
.services-section { background: var(--cultured); padding: 40px 0; margin-bottom: 40px; }
[data-theme="dark"] .services-section { background: var(--card); }
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.service-card { display: flex; align-items: center; gap: 15px; padding: 20px; border-radius: var(--border-radius-md); }
.service-icon { font-size: 40px; color: var(--salmon-pink); }
.service-title { font-size: 1.1rem; color: var(--eerie-black); margin-bottom: 5px; }
.service-desc { font-size: 0.9rem; color: var(--sonic-silver); }

/* Categories Section */
.categories-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
.category-card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; border-radius: var(--border-radius-md); text-align: center; }
.category-img { width: 60px; height: 60px; margin-bottom: 15px; }
.category-name { font-size: 1.2rem; color: var(--eerie-black); font-weight: 600; }

/* Products Grid (Featured & Trending) */
.products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
.product-card { border-radius: var(--border-radius-md); overflow: hidden; display: flex; flex-direction: column; position: relative;}
.product-img-box { position: relative; width: 100%; aspect-ratio: 1/1; overflow: hidden; background: var(--cultured); }
.product-img { width: 100%; height: 100%; object-fit: cover; }
.product-badge { position: absolute; top: 15px; left: 15px; background: var(--ocean-green); color: white; padding: 4px 10px; font-size: 0.8rem; border-radius: var(--border-radius-sm); font-weight: bold; z-index: 2; }
.product-actions { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; gap: 10px; opacity: 0; transition: all 0.3s ease; }
.product-card:hover .product-actions { opacity: 1; }
.product-actions .action-btn { background: white; color: var(--eerie-black); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;}
.product-actions .action-btn:hover { background: var(--salmon-pink); color: white; }
.product-content { padding: 20px; flex: 1; display: flex; flex-direction: column; }
.product-category { color: var(--salmon-pink); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 5px; font-weight: 600; }
.product-title { color: var(--eerie-black); font-size: 1.1rem; margin-bottom: 10px; font-weight: 500; }
.product-rating { display: flex; gap: 5px; color: var(--sandy-brown); font-size: 14px; margin-bottom: 10px; }
.product-price-box { display: flex; align-items: center; gap: 10px; margin-bottom: 15px; }
.product-price { font-size: 1.3rem; font-weight: bold; color: var(--eerie-black); }
.product-old-price { color: var(--spanish-gray); font-size: 0.9rem; }
.add-to-cart-btn { margin-top: auto; width: 100%; padding: 10px; border: 1px solid var(--salmon-pink); color: var(--salmon-pink); border-radius: var(--border-radius-sm); font-weight: 600; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 5px; }
.add-to-cart-btn:hover { background: var(--salmon-pink); color: white; }
[data-theme="dark"] .add-to-cart-btn { color: white; border-color: var(--border); background: var(--border); }
[data-theme="dark"] .add-to-cart-btn:hover { background: var(--salmon-pink); border-color: var(--salmon-pink); }

/* Special Offer Banner */
.offer-banner { padding: 80px 20px; border-radius: var(--border-radius-md); text-align: center; color: white; }
.offer-subtitle { font-size: 1.2rem; margin-bottom: 10px; font-weight: 600; color: var(--salmon-pink); text-transform: uppercase; }
.offer-title { font-size: 2.5rem; margin-bottom: 30px; font-weight: bold; }
.countdown { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.time-box { background: rgba(255,255,255,0.2); backdrop-filter: blur(5px); padding: 15px 20px; border-radius: var(--border-radius-sm); min-width: 80px; }
.time-box h3 { font-size: 2rem; margin-bottom: 5px; color: white; }
.time-box p { font-size: 0.9rem; text-transform: uppercase; color: white; }

/* About Section */
.about-grid { display: flex; flex-wrap: wrap; align-items: center; gap: 40px; padding: 40px; border-radius: var(--border-radius-md); }
.about-img-box { flex: 1; min-width: 300px; }
.about-content { flex: 1; min-width: 300px; }
.about-text { color: var(--sonic-silver); line-height: 1.8; margin-bottom: 20px; font-size: 1.05rem; }
.about-list li { display: flex; align-items: center; gap: 10px; color: var(--eerie-black); font-weight: 500; margin-bottom: 15px; }
.about-list ion-icon { color: var(--ocean-green); font-size: 24px; }
[data-theme="dark"] .about-list li { color: var(--text); }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.testimonial-card { padding: 30px; border-radius: var(--border-radius-md); position: relative; }
.quote-icon { position: absolute; top: 20px; right: 30px; opacity: 0.1; width: 50px; }
.testimonial-text { font-style: italic; color: var(--sonic-silver); line-height: 1.8; margin-bottom: 20px; position: relative; z-index: 1; }
.customer-info { display: flex; align-items: center; gap: 15px; }
.customer-img { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
.customer-name { color: var(--eerie-black); font-weight: 600; }
.customer-role { color: var(--salmon-pink); font-size: 0.85rem; }

/* Gallery */
.gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
.gallery-item { position: relative; border-radius: var(--border-radius-md); overflow: hidden; aspect-ratio: 1/1; }
.gallery-item img { width: 100%; height: 100%; object-fit: cover; }
.gallery-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; opacity: 0; transition: all 0.3s ease; }
.gallery-overlay ion-icon { color: white; font-size: 40px; transform: scale(0.5); transition: all 0.3s ease; }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-item:hover .gallery-overlay ion-icon { transform: scale(1); }

/* Newsletter */
.newsletter-box { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 30px; padding: 40px; border-radius: var(--border-radius-md); }
.newsletter-content { flex: 1; min-width: 300px; }
.newsletter-title { font-size: 1.8rem; color: var(--eerie-black); margin-bottom: 10px; }
.newsletter-desc { color: var(--sonic-silver); }
.newsletter-form { flex: 1; min-width: 300px; display: flex; gap: 10px; }

@media (max-width: 768px) {
  .section-title { font-size: 1.5rem; }
  .offer-title { font-size: 1.8rem; }
  .newsletter-form { flex-direction: column; }
  .newsletter-form .btn-newsletter { width: 100%; }
}
`;

if (!styleCss.includes('/* -----------------------------------*\\')) {
  fs.writeFileSync('online-shopping-system/assets/css/style.css', styleCss + '\n' + newSectionsCss);
}

console.log('CSS for new sections appended successfully.');
