const phone_name = $('#phone_adviser_name');
const phone_title = $('#phone_adviser_title');
const phone_avatar = $('#phone_adviser_avatar');
const phone_category = $('#phone_adviser_category');

function phone_change(index) {
    phone_name.text(advisers[index].name);
    phone_title.text(advisers[index].title);
    phone_avatar.attr('src', advisers[index].pic);
    advisers[index].category.forEach(element => {
        phone_category.append(`<p>${element}</p>`);
    })
}

function phone_initialData() {
    phone_change(0);
}

function clearPhoneCategory() {
    phone_category.empty();
}

phone_initialData();

var phone_current = 1;

const phone_automaticChange = setInterval(function() {
    clearPhoneCategory();
    phone_change(phone_current);
    phone_current = phone_current + 1;
    if (phone_current == advisers.length) {
        phone_current = 0;
    }
}, 3500);