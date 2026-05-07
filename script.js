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
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate network request
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'PROCESSING...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Reservation requested successfully! We will contact you shortly.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                form.reset();
            }, 1500);
        });
    }

    // Set minimum date for booking to today
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});
