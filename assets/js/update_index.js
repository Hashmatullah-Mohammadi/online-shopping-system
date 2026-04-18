const fs = require('fs');

let indexHtml = fs.readFileSync('online-shopping-system/index.html', 'utf-8');

const headerEnd = indexHtml.indexOf('</header>') + '</header>'.length;
const footerStart = indexHtml.indexOf('<footer>');

const header = indexHtml.substring(0, headerEnd);
const footer = indexHtml.substring(footerStart);

const mainContent = `
  <main>
    <!-- 2. HERO SECTION -->
    <section class="hero-slider-container page-animation">
      <div class="hero-slider" id="hero-slider">
        <div class="hero-slide active">
          <img src="./assets/images/banner-1.jpg" alt="New Collection 2026" class="hero-bg">
          <div class="hero-content">
            <p class="hero-subtitle">Trending Item</p>
            <h2 class="hero-title">New Collection 2026</h2>
            <p class="hero-text">Discover the latest trends starting at &dollar;<b>20</b>.00</p>
            <a href="products.html" class="hero-btn">Shop Now</a>
          </div>
        </div>
        <div class="hero-slide">
          <img src="./assets/images/banner-2.jpg" alt="Modern Sunglasses" class="hero-bg">
          <div class="hero-content">
            <p class="hero-subtitle">Accessories</p>
            <h2 class="hero-title">Modern Sunglasses</h2>
            <p class="hero-text">Elevate your style starting at &dollar;<b>15</b>.00</p>
            <a href="products.html" class="hero-btn">Shop Now</a>
          </div>
        </div>
      </div>
      <button class="hero-slider-btn prev" id="hero-prev" aria-label="Previous Slide"><ion-icon name="chevron-back-outline"></ion-icon></button>
      <button class="hero-slider-btn next" id="hero-next" aria-label="Next Slide"><ion-icon name="chevron-forward-outline"></ion-icon></button>
    </section>

    <!-- 9. SERVICES / FEATURES -->
    <section class="services-section page-animation" style="animation-delay: 0.2s;">
      <div class="container">
        <div class="services-grid">
          <div class="service-card theme-card">
            <div class="service-icon"><ion-icon name="boat-outline"></ion-icon></div>
            <div class="service-content">
              <h3 class="service-title">Free Shipping</h3>
              <p class="service-desc">Orders over $50</p>
            </div>
          </div>
          <div class="service-card theme-card">
            <div class="service-icon"><ion-icon name="rocket-outline"></ion-icon></div>
            <div class="service-content">
              <h3 class="service-title">Fast Delivery</h3>
              <p class="service-desc">24/7 delivery services</p>
            </div>
          </div>
          <div class="service-card theme-card">
            <div class="service-icon"><ion-icon name="arrow-undo-outline"></ion-icon></div>
            <div class="service-content">
              <h3 class="service-title">Easy Returns</h3>
              <p class="service-desc">14-day return policy</p>
            </div>
          </div>
          <div class="service-card theme-card">
            <div class="service-icon"><ion-icon name="shield-checkmark-outline"></ion-icon></div>
            <div class="service-content">
              <h3 class="service-title">Secure Payment</h3>
              <p class="service-desc">100% secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. CATEGORIES SECTION -->
    <section class="categories-section section-padding page-animation" style="animation-delay: 0.3s;">
      <div class="container">
        <h2 class="section-title">Shop by Category</h2>
        <div class="categories-grid">
          <a href="products.html" class="category-card theme-card product-hover-anim">
            <img src="./assets/images/icons/coat.svg" alt="Men" class="category-img">
            <h3 class="category-name">Men's Fashion</h3>
          </a>
          <a href="products.html" class="category-card theme-card product-hover-anim">
            <img src="./assets/images/icons/dress.svg" alt="Women" class="category-img">
            <h3 class="category-name">Women's Fashion</h3>
          </a>
          <a href="products.html" class="category-card theme-card product-hover-anim">
            <img src="./assets/images/icons/shoes.svg" alt="Shoes" class="category-img">
            <h3 class="category-name">Footwear</h3>
          </a>
          <a href="products.html" class="category-card theme-card product-hover-anim">
            <img src="./assets/images/icons/watch.svg" alt="Electronics" class="category-img">
            <h3 class="category-name">Accessories</h3>
          </a>
        </div>
      </div>
    </section>

    <!-- 4. FEATURED PRODUCTS -->
    <section class="featured-products section-padding page-animation" style="animation-delay: 0.4s;">
      <div class="container">
        <h2 class="section-title">Featured Products</h2>
        <div class="products-grid">
          <!-- Product 1 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <img src="./assets/images/products/jacket-1.jpg" alt="Winter Leather Jacket" class="product-img product-hover-anim">
              <div class="product-actions">
                <button class="action-btn"><ion-icon name="heart-outline"></ion-icon></button>
                <button class="action-btn"><ion-icon name="eye-outline"></ion-icon></button>
              </div>
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Men's Fashion</a>
              <a href="product-details.html"><h3 class="product-title">Winter Leather Jacket</h3></a>
              <div class="product-rating">
                <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half-outline"></ion-icon>
              </div>
              <div class="product-price-box">
                <p class="product-price">$48.00</p>
                <del class="product-old-price">$75.00</del>
              </div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
          <!-- Product 2 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <img src="./assets/images/products/shoe-2.jpg" alt="Casual Running Shoes" class="product-img product-hover-anim">
              <div class="product-actions">
                <button class="action-btn"><ion-icon name="heart-outline"></ion-icon></button>
                <button class="action-btn"><ion-icon name="eye-outline"></ion-icon></button>
              </div>
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Footwear</a>
              <a href="product-details.html"><h3 class="product-title">Casual Running Shoes</h3></a>
              <div class="product-rating">
                <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon>
              </div>
              <div class="product-price-box">
                <p class="product-price">$35.00</p>
              </div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
          <!-- Product 3 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <img src="./assets/images/products/watch-1.jpg" alt="Smart Watch" class="product-img product-hover-anim">
              <div class="product-actions">
                <button class="action-btn"><ion-icon name="heart-outline"></ion-icon></button>
                <button class="action-btn"><ion-icon name="eye-outline"></ion-icon></button>
              </div>
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Accessories</a>
              <a href="product-details.html"><h3 class="product-title">Premium Smart Watch</h3></a>
              <div class="product-rating">
                <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-outline"></ion-icon>
              </div>
              <div class="product-price-box">
                <p class="product-price">$120.00</p>
                <del class="product-old-price">$150.00</del>
              </div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
          <!-- Product 4 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <img src="./assets/images/products/clothes-2.jpg" alt="Women's Floral Dress" class="product-img product-hover-anim">
              <div class="product-actions">
                <button class="action-btn"><ion-icon name="heart-outline"></ion-icon></button>
                <button class="action-btn"><ion-icon name="eye-outline"></ion-icon></button>
              </div>
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Women's Fashion</a>
              <a href="product-details.html"><h3 class="product-title">Women's Floral Dress</h3></a>
              <div class="product-rating">
                <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half-outline"></ion-icon>
              </div>
              <div class="product-price-box">
                <p class="product-price">$55.00</p>
              </div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. SPECIAL OFFERS / DISCOUNTS -->
    <section class="special-offer section-padding page-animation" style="animation-delay: 0.5s;">
      <div class="container">
        <div class="offer-banner" style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('./assets/images/cta-banner.jpg') center/cover;">
          <div class="offer-content">
            <p class="offer-subtitle">Limited Time Offer</p>
            <h2 class="offer-title">Get 50% OFF on Summer Collection</h2>
            <div class="countdown">
              <div class="time-box"><h3>05</h3><p>Days</p></div>
              <div class="time-box"><h3>12</h3><p>Hours</p></div>
              <div class="time-box"><h3>45</h3><p>Mins</p></div>
              <div class="time-box"><h3>30</h3><p>Secs</p></div>
            </div>
            <a href="products.html" class="hero-btn" style="margin-top: 20px;">Claim Discount</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. TRENDING / NEW ARRIVALS -->
    <section class="trending-section section-padding page-animation" style="animation-delay: 0.6s;">
      <div class="container">
        <h2 class="section-title">Trending Now</h2>
        <div class="products-grid">
          <!-- Trending 1 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <span class="product-badge">New</span>
              <img src="./assets/images/products/perfume.jpg" alt="Luxury Perfume" class="product-img product-hover-anim">
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Cosmetics</a>
              <a href="product-details.html"><h3 class="product-title">Luxury Flower Perfume</h3></a>
              <div class="product-price-box"><p class="product-price">$45.00</p></div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
          <!-- Trending 2 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <span class="product-badge" style="background: var(--bittersweet);">Hot</span>
              <img src="./assets/images/products/jewellery-1.jpg" alt="Gold Earrings" class="product-img product-hover-anim">
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Jewelry</a>
              <a href="product-details.html"><h3 class="product-title">Rose Gold Earrings</h3></a>
              <div class="product-price-box"><p class="product-price">$89.00</p></div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
          <!-- Trending 3 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <img src="./assets/images/products/sports-1.jpg" alt="Sports Shoes" class="product-img product-hover-anim">
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Footwear</a>
              <a href="product-details.html"><h3 class="product-title">Athletic Sports Shoes</h3></a>
              <div class="product-price-box"><p class="product-price">$60.00</p></div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
          <!-- Trending 4 -->
          <div class="product-card theme-card">
            <div class="product-img-box">
              <img src="./assets/images/products/clothes-4.jpg" alt="Summer Skirt" class="product-img product-hover-anim">
            </div>
            <div class="product-content">
              <a href="product-details.html" class="product-category">Women's Fashion</a>
              <a href="product-details.html"><h3 class="product-title">Floral Summer Skirt</h3></a>
              <div class="product-price-box"><p class="product-price">$28.00</p></div>
              <button class="add-to-cart-btn"><ion-icon name="bag-add-outline"></ion-icon> Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. ABOUT SECTION (Short) -->
    <section class="about-section section-padding page-animation" style="animation-delay: 0.7s;">
      <div class="container">
        <div class="about-grid theme-card">
          <div class="about-img-box">
            <img src="./assets/images/blog-1.jpg" alt="About Us" class="product-hover-anim" style="width: 100%; border-radius: var(--border-radius-md);">
          </div>
          <div class="about-content">
            <h2 class="section-title" style="text-align: left; margin-bottom: 20px; border: none;">Who We Are</h2>
            <p class="about-text">Welcome to Alma! We are a premium online shopping destination dedicated to providing you with the highest quality fashion, footwear, electronics, and accessories. Our mission is to make style accessible and shopping effortless.</p>
            <ul class="about-list">
              <li><ion-icon name="checkmark-circle-outline"></ion-icon> Premium Quality Products</li>
              <li><ion-icon name="checkmark-circle-outline"></ion-icon> Fast & Secure Delivery</li>
              <li><ion-icon name="checkmark-circle-outline"></ion-icon> 24/7 Dedicated Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. TESTIMONIALS -->
    <section class="testimonials-section section-padding page-animation" style="animation-delay: 0.8s;">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card theme-card">
            <img src="./assets/images/icons/quotes.svg" alt="quotes" class="quote-icon" width="30">
            <p class="testimonial-text">"I absolutely love the clothes I purchased! The quality is amazing, and the shipping was incredibly fast. Highly recommended!"</p>
            <div class="customer-info">
              <img src="./assets/images/testimonial-1.jpg" alt="Sarah Johnson" class="customer-img">
              <div>
                <h4 class="customer-name">Sarah Johnson</h4>
                <p class="customer-role">Verified Buyer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card theme-card">
            <img src="./assets/images/icons/quotes.svg" alt="quotes" class="quote-icon" width="30">
            <p class="testimonial-text">"Great customer service and fantastic products. The secure checkout process made me feel very safe. Will buy again!"</p>
            <div class="customer-info">
              <div style="width: 50px; height: 50px; background: var(--salmon-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">M</div>
              <div>
                <h4 class="customer-name">Michael Lee</h4>
                <p class="customer-role">Verified Buyer</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card theme-card">
            <img src="./assets/images/icons/quotes.svg" alt="quotes" class="quote-icon" width="30">
            <p class="testimonial-text">"The smart watch I bought works perfectly. It looks very premium and the battery life is great. Thank you Alma!"</p>
            <div class="customer-info">
              <div style="width: 50px; height: 50px; background: var(--ocean-green); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: bold;">E</div>
              <div>
                <h4 class="customer-name">Emma Davis</h4>
                <p class="customer-role">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. INSTAGRAM / GALLERY -->
    <section class="gallery-section section-padding page-animation" style="animation-delay: 0.9s;">
      <div class="container">
        <h2 class="section-title">Follow Us On Instagram</h2>
        <div class="gallery-grid">
          <a href="#" class="gallery-item product-hover-anim">
            <img src="./assets/images/blog-1.jpg" alt="Gallery">
            <div class="gallery-overlay"><ion-icon name="logo-instagram"></ion-icon></div>
          </a>
          <a href="#" class="gallery-item product-hover-anim">
            <img src="./assets/images/blog-2.jpg" alt="Gallery">
            <div class="gallery-overlay"><ion-icon name="logo-instagram"></ion-icon></div>
          </a>
          <a href="#" class="gallery-item product-hover-anim">
            <img src="./assets/images/blog-3.jpg" alt="Gallery">
            <div class="gallery-overlay"><ion-icon name="logo-instagram"></ion-icon></div>
          </a>
          <a href="#" class="gallery-item product-hover-anim">
            <img src="./assets/images/blog-4.jpg" alt="Gallery">
            <div class="gallery-overlay"><ion-icon name="logo-instagram"></ion-icon></div>
          </a>
        </div>
      </div>
    </section>

    <!-- 11. NEWSLETTER SECTION -->
    <section class="newsletter-section section-padding page-animation" style="animation-delay: 1.0s;">
      <div class="container">
        <div class="newsletter-box theme-card">
          <div class="newsletter-content">
            <h2 class="newsletter-title">Subscribe to our Newsletter</h2>
            <p class="newsletter-desc">Get the latest updates on new products and upcoming sales directly in your inbox.</p>
          </div>
          <form class="newsletter-form">
            <input type="email" class="email-field" placeholder="Your Email Address" required style="margin-bottom: 0;">
            <button type="submit" class="btn-newsletter" style="margin: 0; white-space: nowrap;">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </main>
`;

fs.writeFileSync('online-shopping-system/index.html', header + '\n' + mainContent + '\n' + footer);
console.log('Index HTML structure updated.');
