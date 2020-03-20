/* global $ */

/* eslint-env jquery */

const IMAGE_NAMES = [
    'image_1',
    'image_2',
    'image_3',
    'image_4'
];

var expandScreen = function(event, selectedImageName) {
    event.stopPropagation();
    const selectedDiv = document.getElementsByClassName(selectedImageName);
    for (const imageName of IMAGE_NAMES) {
        if (selectedImageName == imageName) {
            const width = selectedDiv[0].style.width;
            selectedDiv[0].style.width = width === "100%" ? "25%" : "100%";
        } else {
            const otherDiv = document.getElementsByClassName(imageName)[0];
            otherDiv.style.width = otherDiv.style.width === "0%" ? "25%" : "0%";
        }
    }
};

$('document').ready(function() {
    $(".arrow-1").click(function() {
        $('header').addClass('.fullscreen-1');
        $('header').removeClass('.image-1');
        $('header').removeClass('.image-2');
        $('header').removeClass('.image-3');
        $('header').removeClass('.image-4');
    });
});
