const name = $('#adviser__chosen__name');
const title = $('#adviser__chosen__title');
const avatar = $('#adviser__chosen__img');
const list = $('#adviser__list');
const advisers = [];

list.children().map((__, element) => {
    advisers.push({
        name: element.dataset.name,
        title: element.dataset.title,
        category: element.dataset.category,
        pic: element.currentSrc,
    })
});

list.niceScroll();
// $('body').niceScroll();

function change(index) {
    name.text(advisers[index].name);
    title.text(advisers[index].title);
    avatar.attr('src', advisers[index].pic);
}

function initialData() {
    change(0);
}

initialData();

var current = 1;

const automaticChange = setInterval(function() {
    change(current);
    current = current + 1;
    if (current == advisers.length) {
        current = 0;
    }
}, 3000);