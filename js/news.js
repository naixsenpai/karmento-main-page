const newsTitle = $('#newsTitle');
const newsBorder = $('#newsBorder');
const newsImage = $('#newsImage');
const getaway = $('#getaway');

$(document).on('scroll', function() {
    if($(this).scrollTop() + 700 >=$('#getaway').position().top){
        $('#getaway').css({
            animation: 'animation--getawayImageHodler 900ms ease-in-out forwards'
        });
        $('#newsTitle').css({
            animation: 'animation--newsTitle 900ms ease-in-out forwards'
        });
        $('#newsImage').css({
            animation: 'animation--newsImage 900ms ease-in-out forwards'
        });
        $('#newsBorder').css({
            animation: 'animation--newsContainer 900ms ease-in-out forwards'
        });
    }
})