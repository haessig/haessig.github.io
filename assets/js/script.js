// assets/js/script.js

// ============================================
// BUTTON LOGIC (nur wenn Element existiert)
// ============================================
const button = document.getElementById("helloButton");
const message = document.getElementById("message");

if (button && message) {
    button.addEventListener("click", () => {
        message.textContent = "👋 Hello! Nice to meet you.";
    });
}

// ============================================
// CV TIMELINE (nur auf CV-Seiten)
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const thread = document.querySelector('.timeline-thread');
    const sections = document.querySelectorAll('.cv-section');

    if (!thread || sections.length === 0) return;

    console.log(`✓ CV: ${sections.length} Sections gefunden`);

    // Thread-Update mit requestAnimationFrame (Performance!)
    let ticking = false;
    function updateThread() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (docHeight <= 0) return;

        const adjustedScroll = Math.max(0, scrollTop - 100);
        const scrollPercent = adjustedScroll / docHeight;
        const maxThreadHeight = window.innerHeight * 1.5;
        
        thread.style.height = `${Math.min(scrollPercent * maxThreadHeight, maxThreadHeight)}px`;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateThread);
            ticking = true;
        }
    }, { passive: true });

    // Initial aufrufen
    updateThread();

    // Observer für Sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '-80px 0px 0px 0px'
    });

    sections.forEach(section => observer.observe(section));
});