/*
* Team GigaWatt BITS Goa - Hero Slider
* Author: Team GigaWatt Web Development Team
* Version: 1.0
*/

// Hero Slider
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const btns = document.querySelectorAll('.navigation .btn');
    
    if (slides.length === 0 || btns.length === 0) return;

    let currentSlide = 0;
    const maxSlide = slides.length - 1;
    
    // Set initial active slide
    slides[0].classList.add('active');
    btns[0].classList.add('active');
    
    // Navigation dot click
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // Remove active class from all slides and btns
            slides.forEach(slide => slide.classList.remove('active'));
            btns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to current slide and btn
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            
            // Update current slide
            currentSlide = i;
        });
    });
    
    // Auto slider
    const autoSlide = () => {
        // Remove active class from current slide and btn
        slides[currentSlide].classList.remove('active');
        btns[currentSlide].classList.remove('active');
        
        // Increment current slide and check if we need to return to first slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new current slide and btn
        slides[currentSlide].classList.add('active');
        btns[currentSlide].classList.add('active');
    };
    
    // Set auto slider interval
    let slideInterval = setInterval(autoSlide, 5000);
    
    // Reset interval when manually changing slides
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });
});
