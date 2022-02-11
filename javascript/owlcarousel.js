const owlCarouselWrapper = document.querySelector('.owl-card-wrapper');
const owlSingleCards = document.querySelectorAll('.owl-card');

let index = 0;

window.addEventListener('load', () => {

    owlCarouselWrapper.style.transition = `all 0.3s ease`;
    owlCarouselWrapper.style.transform = `translateX(-${(owlSingleCards[index].clientWidth * index) + (owlSingleCards[index].clientWidth * 2)}px)`;

    setInterval(() => {
        if (index > owlSingleCards.length - 3) return
        index++
        checkIndex()
        owlCarouselWrapper.style.transition = `all 0.3s ease`;
        owlCarouselWrapper.style.transform = `translateX(-${(owlSingleCards[index].clientWidth * index) + (owlSingleCards[index].clientWidth * 2)}px)`;
    }, 3000);

    function checkIndex() {
        owlCarouselWrapper.addEventListener('transitionend', () => {

            if (owlSingleCards[index].id === 'lastImg') {
                owlCarouselWrapper.style.transition = `none`;
                index = 0
                owlCarouselWrapper.style.transform = `translateX(-${(owlSingleCards[index].clientWidth * index) + (owlSingleCards[index].clientWidth * 2)}px`;

            }
        });
    }
})