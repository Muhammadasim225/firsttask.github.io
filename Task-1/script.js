const carouselInner = document.querySelector('.carousel-inner');
let index = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    if (direction === -1) {
        index--;
        if (index < 0) {
            index = totalItems - 1;
        }
    } else {
        index++;
        if (index >= totalItems) {
            index = 0;
        }
    }

    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}
