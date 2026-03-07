document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. WhatsApp Redirection Logic
    // ==========================================
    const whatsappNumber = "918249706818";
    
    const talkMessage = encodeURIComponent("Hi, I want to talk with you regarding nutrition.");

    const nutritionistBtns = document.querySelectorAll('.nutritionist-btn');
    nutritionistBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${talkMessage}`, '_blank');
        });
    });

    const chatButtons = document.querySelectorAll('.btn-chat');
    chatButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`https://wa.me/${whatsappNumber}?text=${talkMessage}`, '_blank');
        });
    });

    // ==========================================
    // 2. Shop Now Buttons Logic
    // ==========================================
    const shopButtons = document.querySelectorAll('.btn-shop-now');
    
    shopButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cardContent = e.target.closest('.card-content');
            if (cardContent) {
                const productName = cardContent.querySelector('h4').innerText;
            }
            
            // e.preventDefault(); 
        });
    });

    // ==========================================
    // 3. Global Video Play Logic 
    // Applies to both Feedback Reels AND small Recipe videos!
    // ==========================================
    const videoCards = document.querySelectorAll('.reel-video-card, .ritual-video-box');
    
    videoCards.forEach(card => {
        const video = card.querySelector('video');
        // This selects either the big or small play overlay
        const overlay = card.querySelector('.play-overlay, .play-overlay-sm');
        
        if(video && overlay) {
            // When user clicks the play button overlay
            overlay.addEventListener('click', () => {
                video.play();
                overlay.style.display = 'none'; // Hide the play button
                video.setAttribute('controls', 'controls'); // Show native video controls
            });
            
            // If the user manually pauses the video, bring the play button back
            video.addEventListener('pause', () => {
                overlay.style.display = 'flex';
                video.removeAttribute('controls');
            });
        }
    });

});