const phone_name = $('#phone_adviser_name');
const phone_title = $('#phone_adviser_title');
const phone_avatar = $('#phone_adviser_avatar');

function phone_change(index) {
    phone_name.text(advisers[index].name);
    phone_title.text(advisers[index].title);
    phone_avatar.attr('src', advisers[index].pic);
}

function phone_initialData() {
    phone_change(0);
}

phone_initialData();

var phone_current = 1;

const phone_automaticChange = setInterval(function() {
    phone_change(phone_current);
    phone_current = phone_current + 1;
    if (phone_current == advisers.length) {
        phone_current = 0;
    }
}, 3000);