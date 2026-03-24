document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        const carouselImages = document.querySelectorAll('.carousel-slide img');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        let counter = 0;
        const size = carouselImages.length > 0 ? carouselImages[0].clientWidth : 0;

        const updateCarousel = () => {
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };

        nextBtn.addEventListener('click', () => {
            if (counter >= carouselImages.length - 1) {
                counter = 0; // Loop to the first image
            } else {
                counter++;
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) {
                counter = carouselImages.length - 1; // Loop to the last image
            } else {
                counter--;
            }
            updateCarousel();
        });

        // Optional: Resize handling
        window.addEventListener('resize', () => {
            const newSize = carouselImages.length > 0 ? carouselImages[0].clientWidth : 0;
            if (newSize > 0) {
                const size = newSize;
                updateCarousel();
            }
        });
    }
});
