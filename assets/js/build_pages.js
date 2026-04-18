const fs = require('fs');

const indexHtml = fs.readFileSync('online-shopping-system/index.html', 'utf-8');
let headerEnd = indexHtml.indexOf('</header>') + '</header>'.length;
let footerStart = indexHtml.indexOf('<footer>');

let header = indexHtml.substring(0, headerEnd);
let footer = indexHtml.substring(footerStart);

// Update header to add theme toggle and links
header = header.replace(
  '<div class="header-user-actions">',
  `<div class="header-user-actions">
          <button class="action-btn theme-toggle-btn" id="theme-toggle-btn" aria-label="Toggle Dark Mode">
            <ion-icon name="moon-outline"></ion-icon>
          </button>`
);
header = header.replace(
  '<button class="action-btn">\n            <ion-icon name="person-outline"></ion-icon>\n          </button>',
  '<a href="login.html" class="action-btn">\n            <ion-icon name="person-outline"></ion-icon>\n          </a>'
);
header = header.replace(
  '<button class="action-btn">\n            <ion-icon name="bag-handle-outline"></ion-icon>\n            <span class="count">0</span>\n          </button>',
  '<a href="cart.html" class="action-btn">\n            <ion-icon name="bag-handle-outline"></ion-icon>\n            <span class="count">0</span>\n          </a>'
);


const productsHtml = fs.readFileSync('online-shopping-system/products.html', 'utf-8');
const mainStart = productsHtml.indexOf('<main>');
const mainEnd = productsHtml.indexOf('</main>') + '</main>'.length;
const productsMain = productsHtml.substring(mainStart, mainEnd);

// update index.html
fs.writeFileSync('online-shopping-system/index.html', header + '\n\n' + productsMain + '\n\n' + footer);

// cart.html
const cartMain = `
<main>
  <div class="container page-animation" style="padding: 40px 15px; min-height: 50vh;">
    <h2 class="title" style="margin-bottom: 30px;">Shopping Cart</h2>
    <div class="cart-container" style="display: flex; gap: 30px; flex-wrap: wrap;">
      <div class="cart-items theme-card" style="flex: 1; min-width: 300px; padding: 30px; border-radius: var(--border-radius-md); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
        <div style="display: flex; align-items: center; gap: 20px; border-bottom: 1px solid var(--cultured); padding-bottom: 20px; margin-bottom: 20px;">
           <img src="./assets/images/products/1.jpg" alt="product" width="80" style="border-radius: var(--border-radius-sm);">
           <div style="flex: 1;">
             <h4 style="color: var(--eerie-black); margin-bottom: 5px;">Baby Fabric Shoes</h4>
             <p style="color: var(--salmon-pink); font-weight: bold;">$12.00</p>
           </div>
           <input type="number" value="1" min="1" class="email-field" style="width: 60px; margin-bottom: 0; padding: 5px;">
           <button style="color: var(--bittersweet); font-size: 20px;"><ion-icon name="trash-outline"></ion-icon></button>
        </div>
        <a href="index.html" class="banner-btn" style="display: inline-block;">Continue Shopping</a>
      </div>
      <div class="cart-summary theme-card" style="width: 350px; padding: 30px; border-radius: var(--border-radius-md); box-shadow: 0 5px 15px rgba(0,0,0,0.05); height: max-content;">
        <h3 style="margin-bottom: 20px; color: var(--eerie-black);">Order Summary</h3>
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; color: var(--sonic-silver);"><p>Subtotal</p><p>$12.00</p></div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 15px; color: var(--sonic-silver);"><p>Shipping</p><p>$5.00</p></div>
        <hr style="border-top: 1px solid var(--cultured); margin: 20px 0;">
        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: var(--fs-3); color: var(--eerie-black);"><p>Total</p><p>$17.00</p></div>
        <a href="checkout.html" class="btn-newsletter" style="display: block; text-align: center; margin-top: 25px; width: 100%;">Proceed to Checkout</a>
      </div>
    </div>
  </div>
</main>
`;
fs.writeFileSync('online-shopping-system/cart.html', header + '\n\n' + cartMain + '\n\n' + footer);

// checkout.html
const checkoutMain = `
<main>
  <div class="container page-animation" style="padding: 40px 15px; min-height: 50vh;">
    <h2 class="title" style="text-align: center; margin-bottom: 30px;">Checkout</h2>
    <form class="theme-card" style="padding: 40px; border-radius: var(--border-radius-md); box-shadow: 0 5px 20px rgba(0,0,0,0.05); max-width: 800px; margin: 0 auto;">
      <h3 style="margin-bottom: 25px; color: var(--eerie-black);">Billing Details</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
        <input type="text" class="email-field" placeholder="First Name" required style="margin-bottom: 0;">
        <input type="text" class="email-field" placeholder="Last Name" required style="margin-bottom: 0;">
      </div>
      <input type="email" class="email-field" placeholder="Email Address" required style="margin-bottom: 20px;">
      <input type="text" class="email-field" placeholder="Street Address" required style="margin-bottom: 20px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
        <input type="text" class="email-field" placeholder="City" required style="margin-bottom: 0;">
        <input type="text" class="email-field" placeholder="Zip Code" required style="margin-bottom: 0;">
      </div>
      <h3 style="margin-bottom: 25px; color: var(--eerie-black);">Payment Information</h3>
      <input type="text" class="email-field" placeholder="Card Number" required style="margin-bottom: 20px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
        <input type="text" class="email-field" placeholder="MM/YY" required style="margin-bottom: 0;">
        <input type="text" class="email-field" placeholder="CVC" required style="margin-bottom: 0;">
      </div>
      <button type="submit" class="btn-newsletter" style="width: 100%; font-size: var(--fs-5); padding: 15px;">Place Order</button>
    </form>
  </div>
</main>
`;
fs.writeFileSync('online-shopping-system/checkout.html', header + '\n\n' + checkoutMain + '\n\n' + footer);

// product-details.html
const productMain = `
<main>
  <div class="container page-animation" style="padding: 40px 15px; min-height: 50vh;">
    <div class="theme-card" style="display: flex; flex-wrap: wrap; gap: 40px; padding: 40px; border-radius: var(--border-radius-md); box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
      <div style="flex: 1; min-width: 300px; display: flex; justify-content: center; align-items: center; background: var(--cultured); border-radius: var(--border-radius-md); padding: 20px;">
        <img src="./assets/images/products/1.jpg" alt="Product Image" style="width: 100%; max-width: 400px; border-radius: var(--border-radius-md); mix-blend-mode: multiply;" class="product-hover-anim">
      </div>
      <div style="flex: 1; min-width: 300px;">
        <p style="color: var(--salmon-pink); font-weight: 600; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 1px;">Footwear</p>
        <h2 style="font-size: var(--fs-1); margin-bottom: 15px; color: var(--eerie-black);">Baby Fabric Shoes</h2>
        <div style="display: flex; gap: 10px; margin-bottom: 20px; color: var(--sandy-brown); font-size: 18px;">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-half"></ion-icon>
          <span style="color: var(--sonic-silver); font-size: var(--fs-7);">(4.5)</span>
        </div>
        <p style="font-size: 2rem; font-weight: bold; color: var(--eerie-black); margin-bottom: 25px;">$12.00 <del style="color: var(--spanish-gray); font-size: var(--fs-4); font-weight: normal; margin-left: 10px;">$15.00</del></p>
        <p style="color: var(--sonic-silver); line-height: 1.8; margin-bottom: 30px;">These comfortable baby fabric shoes are designed for everyday wear. Made with high-quality, breathable materials to keep your baby's feet warm and cozy while taking their first steps.</p>
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px;">
          <input type="number" class="email-field" value="1" min="1" style="width: 80px; margin-bottom: 0; padding: 12px; font-size: 16px; text-align: center;">
          <button class="btn-newsletter" style="padding: 12px 30px; font-size: var(--fs-6); display: flex; align-items: center; gap: 10px;"><ion-icon name="cart-outline" style="font-size: 20px;"></ion-icon> Add to Cart</button>
        </div>
        <hr style="border-top: 1px solid var(--cultured); margin: 20px 0;">
        <p style="color: var(--sonic-silver); margin-bottom: 10px;"><strong>Category:</strong> Shoes, Baby</p>
        <p style="color: var(--sonic-silver);"><strong>Tags:</strong> Fabric, Winter, Comfortable</p>
      </div>
    </div>
  </div>
</main>
`;
fs.writeFileSync('online-shopping-system/product-details.html', header + '\n\n' + productMain + '\n\n' + footer);

// login.html
const loginMain = `
<main>
  <div class="container page-animation" style="padding: 80px 15px; min-height: 60vh; display: flex; justify-content: center; align-items: center;">
    <form class="theme-card" style="padding: 40px; border-radius: var(--border-radius-md); box-shadow: 0 5px 20px rgba(0,0,0,0.05); width: 100%; max-width: 450px; text-align: center;">
      <div style="margin-bottom: 30px;">
        <ion-icon name="person-circle-outline" style="font-size: 60px; color: var(--salmon-pink); margin: 0 auto;"></ion-icon>
        <h2 style="font-size: var(--fs-2); margin-top: 10px; color: var(--eerie-black);">Welcome Back</h2>
      </div>
      <input type="email" class="email-field" placeholder="Email Address" required style="margin-bottom: 20px; padding: 12px;">
      <input type="password" class="email-field" placeholder="Password" required style="margin-bottom: 25px; padding: 12px;">
      <button type="submit" class="btn-newsletter" style="width: 100%; margin-bottom: 20px; padding: 12px; font-size: 16px;">Sign In</button>
      <p style="color: var(--sonic-silver);">Don't have an account? <a href="register.html" style="color: var(--salmon-pink); font-weight: 600;">Register here</a></p>
    </form>
  </div>
</main>
`;
fs.writeFileSync('online-shopping-system/login.html', header + '\n\n' + loginMain + '\n\n' + footer);

// register.html
const registerMain = `
<main>
  <div class="container page-animation" style="padding: 80px 15px; min-height: 60vh; display: flex; justify-content: center; align-items: center;">
    <form class="theme-card" style="padding: 40px; border-radius: var(--border-radius-md); box-shadow: 0 5px 20px rgba(0,0,0,0.05); width: 100%; max-width: 450px; text-align: center;">
      <div style="margin-bottom: 30px;">
        <ion-icon name="person-add-outline" style="font-size: 60px; color: var(--salmon-pink); margin: 0 auto;"></ion-icon>
        <h2 style="font-size: var(--fs-2); margin-top: 10px; color: var(--eerie-black);">Create Account</h2>
      </div>
      <input type="text" class="email-field" placeholder="Full Name" required style="margin-bottom: 20px; padding: 12px;">
      <input type="email" class="email-field" placeholder="Email Address" required style="margin-bottom: 20px; padding: 12px;">
      <input type="password" class="email-field" placeholder="Password" required style="margin-bottom: 20px; padding: 12px;">
      <input type="password" class="email-field" placeholder="Confirm Password" required style="margin-bottom: 25px; padding: 12px;">
      <button type="submit" class="btn-newsletter" style="width: 100%; margin-bottom: 20px; padding: 12px; font-size: 16px;">Sign Up</button>
      <p style="color: var(--sonic-silver);">Already have an account? <a href="login.html" style="color: var(--salmon-pink); font-weight: 600;">Login here</a></p>
    </form>
  </div>
</main>
`;
fs.writeFileSync('online-shopping-system/register.html', header + '\n\n' + registerMain + '\n\n' + footer);

console.log('Pages built successfully.');