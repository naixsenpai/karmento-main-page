const categories = $('#app__categories');
const subcategories = $('.subcategory');
const mobile = $('#app__mobile');

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
    if($(this).scrollTop() - 2000 >= $('#app__categories').position().top){
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

categories.on('mouseenter',function () {
    mobile.css({
        transform: 'translateY(-7rem) scale(0.9)'
    })
})

categories.on('mouseleave',function () {
    mobile.css({
        transform: 'translateY(0) scale(0.9)'
    })
})