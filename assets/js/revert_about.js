const fs = require('fs');

const filesToUpdate = ['index.html', 'cart.html', 'checkout.html', 'product-details.html', 'login.html', 'register.html', 'products.html'];

// Remove "About Us" link from all headers
for (const file of filesToUpdate) {
  if (fs.existsSync('online-shopping-system/' + file)) {
    let content = fs.readFileSync('online-shopping-system/' + file, 'utf-8');
    
    // Remove desktop link
    content = content.replace(
      /<li class="menu-category">\s*<a href="about.html" class="menu-title">About Us<\/a>\s*<\/li>/g,
      ''
    );
    
    fs.writeFileSync('online-shopping-system/' + file, content);
  }
}

// Optionally delete the about.html file since it's no longer needed
if (fs.existsSync('online-shopping-system/about.html')) {
  fs.unlinkSync('online-shopping-system/about.html');
}

console.log('Removed About Us links and page.');
