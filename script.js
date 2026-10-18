// ===== Horizontal Scroll Drag for Phrases =====
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.phrases-container');
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    // Auto-scroll hint animation
    setTimeout(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (maxScroll > 0) {
            container.scrollTo({ left: 150, behavior: 'smooth' });
            setTimeout(() => {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            }, 600);
        }
    }, 1500);
});

// ===== Intersection Observer for fade-in animations =====
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate(0, 0)';
            }
        });
    }, observerOptions);

    // Observe info points
    document.querySelectorAll('.info-point').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(0, 30px)';
        el.style.transition = `all 0.6s ease ${i * 0.15}s`;
        observer.observe(el);
    });

    // Observe step cards
    document.querySelectorAll('.step-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(0, 30px)';
        el.style.transition = `all 0.6s ease ${i * 0.15}s`;
        observer.observe(el);
    });

    // Observe info boxes
    document.querySelectorAll('.info-box').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(0, 30px)';
        el.style.transition = `all 0.6s ease ${i * 0.2}s`;
        observer.observe(el);
    });

    // Observe table rows
    document.querySelectorAll('.lua-table tbody tr').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(-20px, 0)';
        el.style.transition = `all 0.5s ease ${i * 0.1}s`;
        observer.observe(el);
    });

    // Observe tip items
    document.querySelectorAll('.tip-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(-15px, 0)';
        el.style.transition = `all 0.4s ease ${i * 0.05}s`;
        observer.observe(el);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(0, 20px)';
        el.style.transition = `all 0.5s ease ${i * 0.08}s`;
        observer.observe(el);
    });

    // Observe team cards and skill badges
    document.querySelectorAll('.team-card, .skill-badge').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(0, 25px)';
        el.style.transition = `all 0.5s ease ${i * 0.1}s`;
        observer.observe(el);
    });

    // Observe FAQ items
    document.querySelectorAll('.faq-item').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translate(0, 15px)';
        el.style.transition = `all 0.4s ease ${i * 0.06}s`;
        observer.observe(el);
    });
});

// ===== Countdown Timer =====
document.addEventListener('DOMContentLoaded', function () {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;

    // Set event date to 30 days from now (placeholder — update to real date)
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);
    eventDate.setHours(11, 0, 0, 0);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate.getTime() - now;

        if (distance < 0) {
            document.getElementById('cd-days').textContent = '00';
            document.getElementById('cd-hours').textContent = '00';
            document.getElementById('cd-mins').textContent = '00';
            document.getElementById('cd-secs').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
        document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
        document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
