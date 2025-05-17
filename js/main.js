/*
* Team GigaWatt BITS Goa - Main JavaScript
* Author: Team GigaWatt Web Development Team
* Version: 1.0
*/

// DOM Elements
const preloader = document.getElementById('preloader');
const progressValue = document.querySelector('.loader span');
const progressBar = document.querySelector('.progress-bar');
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');

// Preloader
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 1;
        if (progress > 100) progress = 100;
        
        progressValue.textContent = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            // Hide preloader after a slight delay
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 150);
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Testimonial slider
if (testimonialDots.length > 0) {
    const testimonials = document.querySelectorAll('.testimonial');
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots and testimonials
            testimonialDots.forEach(d => d.classList.remove('active'));
            testimonials.forEach(t => t.classList.remove('active'));
            
            // Add active class to current dot and testimonial
            dot.classList.add('active');
            testimonials[index].classList.add('active');
        });
    });
    
    // Auto-rotate testimonials
    let currentTestimonial = 0;
    setInterval(() => {
        testimonialDots.forEach(d => d.classList.remove('active'));
        testimonials.forEach(t => t.classList.remove('active'));
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        
        testimonialDots[currentTestimonial].classList.add('active');
        testimonials[currentTestimonial].classList.add('active');
    }, 5000);
}

// Animate on scroll (simple implementation)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
