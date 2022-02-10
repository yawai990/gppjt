const btns = document.querySelectorAll('.btn-group button');
const carouselContainer = document.querySelector('.testimonial-card-group');
const carousels = document.querySelectorAll('.testimonial-card');

let ind = 0;

let timer = setInterval(() => {
    nextSlide()
    Slide()
}, 3000);

window.addEventListener('load', () => {
    Slide()
})

const Slide = () => {

    carousels.forEach((carousel, index) => {

        if (index === ind) {
            carousel.classList.add('active')
            carousel.classList.remove('next-slide');
            carousel.classList.remove('prev-slide');
            if (index > ind) {
                // carousels[index - ind].style.transition = 'none'
                carousels[index - ind].classList.add('next-slide')
                carousels[index - ind].classList.remove('prev-slide')
            }

            if (ind === carousels.length - 1) {
                carousels[index - ind].classList.add('next-slide');
                carousels[index - ind].classList.remove('prev-slide')
            }


        } else if (ind < index) {
            carousel.classList.remove('prev-slide');
            carousel.classList.remove('active');
            carousel.classList.add('next-slide')
        }
        else if (ind > index) {

            carousel.classList.remove('active');
            carousel.classList.add('prev-slide');
            carousel.classList.remove('next-slide');

        }
        if (ind === 0) {
            carousels[carousels.length - 1].classList.remove('next-slide');
            carousels[carousels.length - 1].classList.add('prev-slide')
        }
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.classList.contains('carousel-next-btn')) {
            nextSlide()
        } else {
            prevSlide()
        }

    })
    btn.addEventListener('mouseenter', () => {
        clearInterval(timer);
        btn.style.color = 'white';
        btn.style.backgroundColor = 'rgb(18, 133, 248)';
    })
    btn.addEventListener('mouseleave', () => {
        timer = setInterval(() => {
            nextSlide()
            Slide()
        }, 3000);
        btn.style.backgroundColor = 'transparent';
        btn.style.color = 'rgb(180, 180, 178)';
    })

});

const nextSlide = (e) => {

    ind++
    if (ind > carousels.length - 1) {
        ind = 0
        Slide()
    }
    Slide()
}

const prevSlide = () => {
    ind--
    if (ind < 0) {
        ind = carousels.length - 1
        Slide()
    }
    Slide()
}