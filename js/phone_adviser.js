const phone_name = $('#phone_adviser_name');
const phone_title = $('#phone_adviser_title');
const phone_avatar = $('#phone_adviser_avatar');

function change(index) {
    phone_name.text(advisers[index].name);
    phone_title.text(advisers[index].title);
    phone_avatar.attr('src', advisers[index].pic);
}

function initialData() {
    change(0);
}

initialData();
