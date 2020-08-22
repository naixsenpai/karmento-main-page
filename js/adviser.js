const advisers = [
    {
        name: 'میلاد جعفری',
        pic: 'https://karmento.ir/upload/images/avatar/2020/31/300x300_564618-DDE1FDE6-6646-4B96-AE1D-8E7CC4AB78BC.jpg',
        title: 'مالیاتی'
    },
    {
        name: 'امید یحی پور',
        pic: 'https://karmento.ir/upload/images/avatar/2020/14/300x300_213778-900_265196300_388468IMG-20190130-WA0006.jpg',
        title: 'مالیاتی'
    },
    {
        name: 'محمد غیاثی',
        pic: 'https://karmento.ir/upload/images/profile/2019/19/300_790264IMG-20190512-WA0002~2.jpg',
        title: 'حسابداری'
    },
    {
        name: 'زهرا مومنی',
        pic: 'https://karmento.ir/upload/images/avatar/2020/14/300x300_92635-600_855567-20200221_134650.jpg',
        title: 'دیجیتال مارکتینگ'
    },
    {
        name: 'محمد غیاثی',
        pic: 'https://karmento.ir/upload/images/profile/2019/19/300_790264IMG-20190512-WA0002~2.jpg',
        title: 'حسابداری'
    },
    {
        name: 'زهرا مومنی',
        pic: 'https://karmento.ir/upload/images/avatar/2020/14/300x300_92635-600_855567-20200221_134650.jpg',
        title: 'دیجیتال مارکتینگ'
    },
    {
        name: 'محمد غیاثی',
        pic: 'https://karmento.ir/upload/images/profile/2019/19/300_790264IMG-20190512-WA0002~2.jpg',
        title: 'حسابداری'
    },
    {
        name: 'زهرا مومنی',
        pic: 'https://karmento.ir/upload/images/avatar/2020/14/300x300_92635-600_855567-20200221_134650.jpg',
        title: 'دیجیتال مارکتینگ'
    },
]

const name = $('#adviser__chosen__name');
const title = $('#adviser__chosen__title');
const avatar = $('#adviser__chosen__img');
const list = $('#adviser__list');

list.niceScroll();

advisers.forEach((el, index) => {
    list.append(
        `<img onclick="showAdviser(this)" src="${el.pic}" data-id="${index}" />`
    )
});

function change(index) {
    name.text(advisers[index].name);
    title.text(advisers[index].title);
    avatar.attr('src', advisers[index].pic);
}

function initialData() {
    change(0);
}

initialData();

function showAdviser(element) {
    const id = $(element).data('id');
    change(id);
    clearInterval(automaticChange);
}

var current = 1;

const automaticChange = setInterval(function() {
    change(current);
    current = current + 1;
    if (current == advisers.length) {
        current = 0;
    }
}, 3000);