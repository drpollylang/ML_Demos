document.addEventListener("DOMContentLoaded", function () {
    // Show all top elements that are in view immediately
    document.querySelectorAll('.fade').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('visible');
    });

    // IntersectionObserver for cards and tech stack
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('card')) {
                    // Stagger each card
                    const index = Array.from(document.querySelectorAll('.card')).indexOf(entry.target);
                    setTimeout(() => entry.target.classList.add('visible'), index * 150);
                } else {
                    entry.target.classList.add('visible');
                }
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .tech-stack').forEach(el => observer.observe(el));
});