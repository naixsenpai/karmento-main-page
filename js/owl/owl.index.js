$('.owl-carousel').owlCarousel({
    items:1,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    stagePadding:30,
    smartSpeed:450
})

let count = 1;

const slider = setInterval(() => {
    if (count === $('.owl-stage').children().length) {
        count = 0;
    }

    $('.owl-stage').css({
        'left': count * 33.5 + 'rem'
    })
    count = count + 1;
}, 3000);