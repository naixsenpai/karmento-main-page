const name = $('#adviser__chosen__name');
const title = $('#adviser__chosen__title');
const category = $('#adviser__chosen__category');
// const avatar = $('#adviser__chosen__img');
const list = $('#adviser__list');
const advisers = [];

list.children().map((__, element) => {
    advisers.push({
        name: element.dataset.name,
        title: element.dataset.title,
        category: element.dataset.category.split(','),
        pic: element.currentSrc,
    })
});


function change(index) {
    name.text(advisers[index].name);
    title.text(advisers[index].title);
    advisers[index].category.forEach(element => {
        category.append(`<p>${element}</p>`);
    })
}

function changeListOrder() {
    const element = list.children()[0];
    list.children()[0].remove();
    list.append(element);
}

function clearCategory() {
    category.empty();
}

function initialData() {
    change(0);
}

initialData();

var current = 1;

const automaticChange = setInterval(function() {
    clearCategory();
    change(current);
    changeListOrder();
    current = current + 1;
    if (current == advisers.length) {
        current = 0;
    }
}, 3500);