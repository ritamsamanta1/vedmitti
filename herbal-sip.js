document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. WhatsApp Redirection Logic (Header)
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

    // ==========================================
    // 2. Order Now Buttons (Dynamic Product Grab)
    // ==========================================
    const orderButtons = document.querySelectorAll('.order-now-btn');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.variant-card');
            const productTitle = card.querySelector('.product-title').innerText;
            const orderMessage = encodeURIComponent(`Hi, is "${productTitle}" available to order right now?`);
            window.open(`https://wa.me/${whatsappNumber}?text=${orderMessage}`, '_blank');
        });
    });

    // ==========================================
    // 3. Tab Switching Logic (Now reads from HTML)
    // ==========================================
    const variantCards = document.querySelectorAll('.variant-card');

    variantCards.forEach(card => {
        const pills = card.querySelectorAll('.acc-pill');
        const panels = card.querySelectorAll('.acc-panel');

        pills.forEach((pill, index) => {
            pill.addEventListener('click', () => {
                
                // If the pill is already active, don't do anything
                if (pill.classList.contains('active')) return;

                // Step 1: Turn off all pills and reset icons to '+'
                pills.forEach(p => {
                    p.classList.remove('active');
                    const icon = p.querySelector('.acc-icon');
                    if (icon.innerText.includes('-')) {
                        icon.innerText = icon.innerText.replace('-', '+');
                    }
                });

                // Step 2: Hide all text panels
                panels.forEach(panel => {
                    panel.classList.remove('active');
                });

                // Step 3: Turn ON the clicked pill and change icon to '-'
                pill.classList.add('active');
                const clickedIcon = pill.querySelector('.acc-icon');
                clickedIcon.innerText = clickedIcon.innerText.replace('+', '-');

                // Step 4: Show the matching text panel (by index)
                panels[index].classList.add('active');
            });
        });
    });

});