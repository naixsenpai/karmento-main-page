const newCount = $('#newCount');
let didItCount = false;

$(document).on('scroll', function() {
    if($(this).scrollTop() + 200 >= newCount.position().top){
        newCount.css({
            transform: 'translateY(0)'
        })
        if (!didItCount) {
            startCounting();
        }
    }
})

function startCounting () {
    didItCount = true;
    setTimeout(function() {
        $('.count__containers').each(function () {
            $(this).css({
                transform: 'scale(1)'
            })
        });
        $('.count__number').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        
        $('.count__icon').each(function () {
            $(this).css({
                opacity: 1
            })
        });
    }, 300)
}