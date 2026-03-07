document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. WhatsApp Redirection Logic
    // ==========================================
    const whatsappNumber = "918249706818";
    const talkMessage = encodeURIComponent("Hi, I want to talk with you regarding nutrition.");

    // "Talk to a Nutritionist" Buttons (Header)
    const nutritionistBtns = document.querySelectorAll('.nutritionist-btn');
    nutritionistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${talkMessage}`, '_blank');
        });
    });

    // ==========================================
    // 2. Order Now Buttons (Sends specific product message)
    // ==========================================
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Get the specific product name from the data-product attribute we added in the HTML
            const productTitle = e.target.getAttribute('data-product');
            
            // Format the message with quotes and the question mark
            const orderMessage = encodeURIComponent(`"${productTitle}" is available now ?`);
            
            // Open WhatsApp with the pre-filled message
            window.open(`https://wa.me/${whatsappNumber}?text=${orderMessage}`, '_blank');
        });
    });

});