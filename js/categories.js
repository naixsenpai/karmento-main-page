const categoryElement = $('#overlay__categories');

for (var i = 1; i < categoryElement.children().length; i++) {
    categoryElement.children().eq(i).css(
        {
            transform: 'translateX(' + i * 115 * -1 + 'px)',
            opacity: 0,
            animation: 'animation--manycategories 900ms ease-in-out forwards, animation--manycategories--opacity 900ms ease-in-out ' + i * 100 + 'ms forwards',
        }
    )
}

categoryElement.on('click', function(e){
    console.log(
        categoryElement.offset().top
    );

    if (e.pageX / categoryElement.width() >= 1.6) {
        console.log('right');
        categoryElement.animate({ scrollLeft: categoryElement.offset().top}, 3000)
    } 
    if (e.pageX / categoryElement.width() <= 1.2) {
        categoryElement.animate({ scrollLeft: categoryElement.offset().top * -1}, 3000)
        console.log('left');
    }
})

categoryElement.on('mouseenter', function(e){
    console.log(
        categoryElement.offset().top
    );

    if (e.pageX / categoryElement.width() >= 1.6) {
        console.log('right');
        categoryElement.animate({ scrollLeft: categoryElement.offset().top}, 3000)
    } 
    if (e.pageX / categoryElement.width() <= 1.2) {
        categoryElement.animate({ scrollLeft: categoryElement.offset().top * -1}, 3000)
        console.log('left');
    }
})