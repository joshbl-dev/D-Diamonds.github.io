// image insertion
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const files = ["89DB3976-97AC-4063-B9D5-FCA74D7170EC.jpeg",
    "FullSizeRender.jpeg",
    "IMG_1269.JPEG",
    "IMG_1270.JPEG",
    "IMG_1930.JPG",
    "IMG_2094.JPEG",
    "IMG_2137.JPEG",
    "IMG_2149.JPEG",
    "IMG_2232.JPEG",
    "IMG_2249.JPEG",
    "IMG_2262.JPEG",
    "IMG_2350.JPG",
    "IMG_2385.JPG",
    "IMG_2577.JPG",
    "IMG_2599.JPG",
    "IMG_2612.PNG",
    "IMG_2614.JPG",
    "IMG_2620.JPG",
    "IMG_2636.JPG",
    "IMG_2640.JPG",
    "IMG_2641.JPG",
    "IMG_2691.JPG",
    "IMG_2692.JPG",
    "IMG_2693.JPG",
    "IMG_2697.PNG",
    "IMG_2698.PNG",
    "IMG_2699.PNG",
    "IMG_2755.JPEG",
    "IMG_2758.JPEG",
    "IMG_2761.JPEG",
    "IMG_2770.MP4",
    "IMG_2778.JPEG",
    "IMG_2784.JPEG",
    "IMG_2788.JPEG",
    "IMG_2792.JPG",
    "IMG_2799.png",
    "IMG_2805.JPG",
    "IMG_2807.JPEG",
    "IMG_2814.JPG",
    "IMG_2833.JPG",
    "IMG_2843.PNG",
    "IMG_2844.PNG",
    "IMG_2845.JPG",
    "IMG_8291.JPG",
    "IMG_8296.JPG",
    "IMG_8297.JPG",
    "IMG_2847.PNG",
    "IMG_2849.JPG"
];
shuffle(files)
const gallery = document.querySelector('#gallery');
files.forEach(function (file) {
    console.log(file)
    gallery.insertAdjacentHTML("beforeend", "<div class=\"gallery-item\">\n" +
        "        <div class=\"content\"><img src=\"assets/images/Memories/" + file + "\" alt=\"Missing memory\"></div>\n" +
        "    </div>")
});

// gallery setup
const getVal = function (elem, style) {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
const getHeight = function (item) {
    return item.querySelector('.content').getBoundingClientRect().height;
};
const resizeAll = function () {
    const gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        item.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (getVal(gallery, 'grid-auto-rows') + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('minimize');
    if (item.complete) {
        console.log(item.src);
    } else {
        item.addEventListener('load', function () {
            const gap = getVal(gallery, 'grid-row-gap');
            const gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (getVal(gallery, 'grid-auto-rows') + gap));
            item.classList.remove('minimize');
        });
    }
});

window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.toggle('full');
    });
});

// countdown
const countDownDate = new Date("Jul 24, 2021 10:14:00").getTime();

const countdown = setInterval(function () {

    const distance = countDownDate - new Date().getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Countdown: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "I'm here!";
    }
}, 1000);