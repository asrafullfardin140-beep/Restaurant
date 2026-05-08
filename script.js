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

    // --- Date input: set min to today + populate time slots dynamically ---
    const dateInput = document.getElementById('booking-date');
    const timeSelect = document.getElementById('booking-time');

    if (dateInput && timeSelect) {
        // Prevent past dates
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;

        dateInput.addEventListener('change', function() {
            if (!this.value) return;

            // Use UTC to avoid timezone day-shift bug
            const parts = this.value.split('-');
            const selectedDate = new Date(Date.UTC(parts[0], parts[1]-1, parts[2]));
            const day = selectedDate.getUTCDay(); // 0=Sun, 1=Mon ... 6=Sat

            timeSelect.innerHTML = '<option value="" disabled selected>Select Time</option>';
            let times = [];

            if (day === 0) {
                // Sunday: 14:00 – 22:00
                for (let h = 14; h <= 21; h++) {
                    times.push(`${String(h).padStart(2,'0')}:00`);
                    times.push(`${String(h).padStart(2,'0')}:30`);
                }
                times.push('22:00');
            } else if (day === 6) {
                // Saturday: 17:00 – 22:45
                for (let h = 17; h <= 22; h++) {
                    times.push(`${String(h).padStart(2,'0')}:00`);
                    if (h < 22) times.push(`${String(h).padStart(2,'0')}:30`);
                }
                times.push('22:45');
            } else {
                // Mon–Fri: 17:00 – 22:45
                for (let h = 17; h <= 22; h++) {
                    times.push(`${String(h).padStart(2,'0')}:00`);
                    if (h < 22) times.push(`${String(h).padStart(2,'0')}:30`);
                }
                times.push('22:45');
            }

            times.forEach(t => {
                const opt = document.createElement('option');
                opt.value = t;
                opt.textContent = t;
                timeSelect.appendChild(opt);
            });
        });
    }

    // Modal Logic — declared FIRST so form handler can reference it
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

        window.addEventListener('click', (e) => {
            if (e.target === modal || e.target === modalOverlay) {
                modal.classList.remove('show');
            }
        });
    }

    // Handle form submission — sends real WhatsApp message to restaurant
    const form = document.getElementById('premium-booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const date     = document.getElementById('booking-date')?.value || '';
            const time     = document.getElementById('booking-time')?.value || '';
            const guests   = document.getElementById('booking-guests')?.value || '';
            const name     = form.querySelector('input[type="text"]')?.value || '';
            const phone    = form.querySelector('input[type="tel"]')?.value || '';
            const email    = form.querySelector('input[type="email"]')?.value || '';
            const message  = form.querySelector('textarea')?.value || '';

            // Validate time was selected
            if (!time) {
                alert('Please select a date first to see available times.');
                return;
            }

            submitBtn.innerHTML = 'SENDING...';
            submitBtn.disabled = true;

            // Build WhatsApp message to the restaurant
            const waText = encodeURIComponent(
                `🍽️ *New Table Reservation — Bambu Restaurant*\n\n` +
                `👤 Name: ${name}\n` +
                `📅 Date: ${date}\n` +
                `🕐 Time: ${time}\n` +
                `👥 Guests: ${guests}\n` +
                `📞 Phone: ${phone}\n` +
                `📧 Email: ${email}\n` +
                `💬 Notes: ${message || 'None'}`
            );

            const waNumber = '35361217661'; // Restaurant number without +
            const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

            setTimeout(() => {
                window.open(waUrl, '_blank');
                submitBtn.innerHTML = 'Confirm Reservation';
                submitBtn.disabled = false;
                form.reset();
                // Reset time dropdown
                const timeSelect = document.getElementById('booking-time');
                if (timeSelect) timeSelect.innerHTML = '<option value="" disabled selected>Select a Date First</option>';
                modal.classList.remove('show');
            }, 500);
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

    // ===== MENU VIEWER MODAL =====
    const menuModal = document.getElementById('menu-modal');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const menuPrevBtn = document.getElementById('menu-prev');
    const menuNextBtn = document.getElementById('menu-next');
    const menuCurrentPageEl = document.getElementById('menu-current-page');
    const menuPages = document.querySelectorAll('.menu-page');
    const menuDots = document.querySelectorAll('.menu-thumb-dot');
    let currentMenuPage = 1;
    const totalMenuPages = 10;

    function openMenuModal() {
        menuModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        goToMenuPage(1);
    }

    function closeMenuModal() {
        menuModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function goToMenuPage(page) {
        currentMenuPage = page;
        // Update pages
        menuPages.forEach(p => p.classList.remove('active'));
        const target = document.querySelector(`.menu-page[data-page="${page}"]`);
        if (target) target.classList.add('active');
        // Update counter
        if (menuCurrentPageEl) menuCurrentPageEl.textContent = page;
        // Update dots
        menuDots.forEach(d => {
            d.classList.toggle('active', parseInt(d.dataset.page) === page);
        });
        // Update buttons
        if (menuPrevBtn) menuPrevBtn.disabled = page === 1;
        if (menuNextBtn) menuNextBtn.disabled = page === totalMenuPages;
    }

    // Open triggers
    const openMenuBtnDesktop = document.getElementById('open-menu-btn');
    const openMenuBtnMobile = document.getElementById('open-menu-mobile');
    if (openMenuBtnDesktop) openMenuBtnDesktop.addEventListener('click', (e) => { e.preventDefault(); openMenuModal(); });
    if (openMenuBtnMobile) openMenuBtnMobile.addEventListener('click', (e) => { e.preventDefault(); openMenuModal(); });

    // Close triggers
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenuModal);
    if (menuModal) {
        document.querySelector('.menu-modal-overlay')?.addEventListener('click', closeMenuModal);
    }

    // Prev / Next
    if (menuPrevBtn) menuPrevBtn.addEventListener('click', () => { if (currentMenuPage > 1) goToMenuPage(currentMenuPage - 1); });
    if (menuNextBtn) menuNextBtn.addEventListener('click', () => { if (currentMenuPage < totalMenuPages) goToMenuPage(currentMenuPage + 1); });

    // Dot navigation
    menuDots.forEach(dot => {
        dot.addEventListener('click', () => goToMenuPage(parseInt(dot.dataset.page)));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!menuModal?.classList.contains('show')) return;
        if (e.key === 'ArrowRight' && currentMenuPage < totalMenuPages) goToMenuPage(currentMenuPage + 1);
        if (e.key === 'ArrowLeft' && currentMenuPage > 1) goToMenuPage(currentMenuPage - 1);
        if (e.key === 'Escape') closeMenuModal();
    });
});
