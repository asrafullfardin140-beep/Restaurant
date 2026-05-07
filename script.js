document.addEventListener('DOMContentLoaded', () => {
    // --- Typewriter Effect ---
    const typewriterEl = document.getElementById('typewriter-heading');
    if (typewriterEl) {
        const lines = [
            'Rooted in tradition',
            'Refined with elegance.',
            'Served with warmth'
        ];
        let lineIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentLine = lines[lineIndex];
            
            if (isDeleting) {
                typewriterEl.innerHTML = currentLine.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterEl.innerHTML = currentLine.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let speed = isDeleting ? 40 : 80;
            
            if (!isDeleting && charIndex === currentLine.length) {
                speed = 2000; // Wait 2s before erasing
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                lineIndex = (lineIndex + 1) % lines.length;
                speed = 500; // Wait 0.5s before typing next line
            }
            
            setTimeout(type, speed);
        }
        setTimeout(type, 800);
    }
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

    // Set minimum date and handle dynamic time slots
    const dateInput = document.getElementById('booking-date');
    const timeSelect = document.getElementById('booking-time');
    
    if (dateInput && timeSelect) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        
        dateInput.addEventListener('change', function() {
            if (!this.value) return;
            
            const selectedDate = new Date(this.value);
            const day = selectedDate.getDay(); // 0 = Sun, 1 = Mon...
            
            timeSelect.innerHTML = '<option value="" disabled selected>Select Time</option>';
            
            let times = [];
            if (day === 0) {
                // Sunday: 2PM - 10PM
                for(let h=14; h<=21; h++) {
                    times.push(`${h}:00`);
                    times.push(`${h}:30`);
                }
            } else if (day === 3) {
                // Wednesday: 5PM - 10PM
                for(let h=17; h<=21; h++) {
                    times.push(`${h}:00`);
                    times.push(`${h}:30`);
                }
            } else {
                // Mon, Tue, Thu, Fri, Sat: 5PM - 10:45PM
                for(let h=17; h<=22; h++) {
                    times.push(`${h}:00`);
                    times.push(`${h}:30`);
                }
            }
            
            times.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t;
                opt.textContent = t;
                timeSelect.appendChild(opt);
            });
        });
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

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-nav-menu');
    if(menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }
});
