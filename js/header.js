const header = $('.header');
const sticky = header.offset().top;

function appearHeader() {
    if (window.pageYOffset > sticky + 200) {
        header.addClass('sticky')
    } else {
        header.removeClass('sticky')
    }
}

window.onscroll = function() {
    appearHeader()
}