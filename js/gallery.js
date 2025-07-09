function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src));
    });

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', closeLightbox);
    }
});
