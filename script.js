document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(27, 14, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const productModal = document.getElementById('productDetail');
    if (productModal) {
        productModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            
            const title = button.getAttribute('data-bs-title');
            const price = button.getAttribute('data-bs-price');
            const image = button.getAttribute('data-bs-image');
            const desc = button.getAttribute('data-bs-desc');

            const modalTitle = productModal.querySelector('.modal-product-title');
            const modalImage = productModal.querySelector('.modal-image-container img');
            const modalPrice = productModal.querySelector('.modal-price-minimal');
            const modalDesc = productModal.querySelector('.modal-product-desc');

            if (modalTitle) modalTitle.textContent = title;
            if (modalImage) modalImage.src = image;
            if (modalPrice) modalPrice.textContent = price;
            if (modalDesc) modalDesc.textContent = desc;
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
            this.reset();
        });
    }
});
