const categories = $('#app__categories');
const subcategories = $('.subcategory');

subcategories.css({
    opacity: 0
})

for (var i = 0; i < categories.children().length; i++) {
    categories.children().eq(i).css(
        {
            transform: 'translateX(' + i * 115 + 'px)',
            opacity: 0,
        }
    )
}

$(document).on('scroll', function() {
    if($(this).scrollTop() - 1100 >= $('#app__categories').position().top){
        for (var i = 0; i < categories.children().length; i++) {
            categories.children().eq(i).css(
                {
                    animation: 'animation--manycategories 900ms ease-in-out forwards, animation--manycategories--opacity 900ms ease-in-out ' + i * 100 + 'ms forwards',
                }
            )
        }
        subcategories.css({
            animation: 'animation--manycategories--opacity 900ms ease-in-out 900ms forwards',
        })
    }
})