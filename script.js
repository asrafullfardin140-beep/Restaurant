document.addEventListener('DOMContentLoaded', () => {
    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 8, 7, 0.95)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(10, 8, 7, 0.8) 0%, rgba(10, 8, 7, 0) 100%)';
        }
    });

    // Handle form submission
    const form = document.getElementById('premium-booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate network request
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'PROCESSING...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Reservation requested successfully! We will contact you shortly.');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                form.reset();
                if(modal) {
                    modal.classList.remove('show');
                }
            }, 1500);
        });
    }

    // Set minimum date for booking to today
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Modal Logic
    const modal = document.getElementById('booking-modal');
    const bookBtns = document.querySelectorAll('.btn-book');
    const closeBtn = document.querySelector('.close-modal');
    const modalOverlay = document.querySelector('.modal-overlay');

    if(modal && closeBtn) {
        bookBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('show');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Close when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target === modal || e.target === modalOverlay) {
                modal.classList.remove('show');
            }
        });
    }
});
