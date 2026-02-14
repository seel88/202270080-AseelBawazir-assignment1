document.addEventListener('DOMContentLoaded', () => {
    // 1. Time-of-day Greeting
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let text = (hour < 12) ? "Good Morning" : (hour < 18) ? "Good Afternoon" : "Good Evening";
    
    if (greetingEl) {
        greetingEl.textContent = `${text}, I'm Aseel Bawazir`;
    }

    // 2. Dark/Light Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // 3. Form feedback
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thanks for your message! (Form is a placeholder)");
            form.reset();
        });
    }
});