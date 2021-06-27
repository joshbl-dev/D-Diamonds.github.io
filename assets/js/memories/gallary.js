export class Gallary {
    static files = ["89DB3976-97AC-4063-B9D5-FCA74D7170EC.jpeg",
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
        "IMG_2849.JPG",
        "IMG_2861.JPG",
        "IMG_2873.JPG",
        "IMG_2874.JPG",
        "IMG_2875.JPG",
        "IMG_3031.JPG",
        "IMG_3021.JPG",
        "lp_image.JPEG",
        "lp_image-1.JPEG",
        "lp_image-2.JPEG",
        "lp_image-3.JPEG",
        "lp_image-4.JPEG",
    ];

    static create() {
        Gallary.shuffle(Gallary.files)
        const gallery = document.querySelector('#gallery');
        Gallary.files.forEach(function (file) {
            gallery.insertAdjacentHTML("beforeend", "<div class=\"gallery-item\">\n" +
                "        <div class=\"content\"><img src=\"assets/images/Memories/" + file + "?t=" + new Date().getTime() + "\" alt=\"Missing memory\"></div>\n" +
                "    </div>")
        });

        gallery.querySelectorAll('img').forEach(function (item) {
            item.classList.add('minimize');
            if (item.complete) {
                console.log(item.src);
            } else {
                item.addEventListener('load', function () {
                    const gap = Gallary.getVal(gallery, 'grid-row-gap');
                    const gitem = item.parentElement.parentElement;
                    gitem.style.gridRowEnd = "span " + Math.ceil((Gallary.getHeight(gitem) + gap) / (Gallary.getVal(gallery, 'grid-auto-rows') + gap));
                    item.classList.remove('minimize');
                });
            }
        });

        window.addEventListener('resize', Gallary.resizeAll);

        gallery.querySelectorAll('.gallery-item').forEach(function (item) {
            item.addEventListener('click', function () {
                item.classList.toggle('full');
            });
        });
    }

    static shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    static getVal(elem, style) {
        return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    }

    static getHeight(item) {
        return item.querySelector('.content').getBoundingClientRect().height;
    };

    static resizeAll() {
        const gap = Gallary.getVal(gallery, 'grid-row-gap');
        gallery.querySelectorAll('.gallery-item').forEach(function (item) {
            item.style.gridRowEnd = "span " + Math.ceil((Gallary.getHeight(item) + gap) / (Gallary.getVal(gallery, 'grid-auto-rows') + gap));
        });
    };

    static getHTML() {
        return "<div class=\"gallery\" id=\"gallery\">\n" +
            "</div>";
    }
}