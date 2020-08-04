const sidenav = $('#sidenav');
const sidenav_list = $('#sidenav__nav');
const button = $('#sidenav__opener');

let isOpen = false;

function open() {
    sidenav.addClass('sidenav__blurBackground__animation');
    sidenav_list.addClass('sidenav__opacity');
    sidenav.css({
        'height': '100%'
    });
    isOpen = true;
}

function close() {
    sidenav.removeClass('sidenav__blurBackground__animation');
    sidenav_list.removeClass('sidenav__opacity');
    sidenav.css({
        'height': '0',
        'backdrop-filter': 'blur(0)'
    });
    isOpen = false;
}

function toggle() {
    switch (isOpen) {
        case true:
            close();
            break;
        case false:
            open();
            break;
        default:
            break;
    }
}
 
button.click(function() {
    toggle();
});

sidenav.click(function() {
    close();
});