const sidenav = $('#sidenav');
const button = $('#sidenav__opener');

let isOpen = false;

function open() {
    sidenav.css({
        'width': '100%'
    });
    isOpen = true;
}

function close() {
    sidenav.css({
        'width': '0'
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