const categoryElement = $('#overlay__categories');
const categoryElements = $('#overlay__categoriess');

for (var i = 1; i < categoryElement.children().length; i++) {
    categoryElement.children().eq(i).css(
        {
            transform: 'translateX(' + i * 115 * -1 + 'px)',
            opacity: 0,
            animation: 'animation--manycategories 900ms ease-in-out forwards, animation--manycategories--opacity 900ms ease-in-out ' + i * 100 + 'ms forwards',
        }
    )
}


categoryElements.flickity({
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false
});