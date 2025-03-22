//Name : Mubassir Munim ID: 2220521




// Welcome message
function showWelcomeMessage() {
    alert("Welcome to Lake Coffee! Discover our premium coffee selection.");
}

// About message
function showAboutMessage() {
    alert("Lake Coffee was founded with a passion for exceptional coffee. Our journey began in 2025, and we've been serving coffee enthusiasts ever since.");
}




// Contact form
function submitForm() {
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
}
// Add product to cart
const addToCartButtons = document.querySelectorAll('.product-card .primary-btn');
if (addToCartButtons) {
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            alert(`${productName} has been added to your cart!`);
        });
    });
}