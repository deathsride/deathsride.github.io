/* global $ */

/* eslint-env jquery */

const IMAGE_NAMES = [
    'image_1',
    'image_2',
    'image_3',
    'image_4'
];

const TEXT_NAMES = [
    'copy-1',
    'copy-2',
    'copy-3',
    'copy-4'
];

var expandScreen = function(event, selectedImageName) {
    event.stopPropagation();

    const selectedDiv = document.getElementsByClassName(selectedImageName);
    const isFullScreen = selectedDiv[0].style.width === "100%"

    for (const textName of TEXT_NAMES) {
        const pTag = document.getElementsByClassName(textName)[0];
        pTag.style.visibility = isFullScreen ? "visible" : "hidden";
    }

    for (const imageName of IMAGE_NAMES) {
        if (selectedImageName == imageName) {
            selectedDiv[0].style.width = isFullScreen ? "25%" : "100%";
        } else {
            const otherDiv = document.getElementsByClassName(imageName)[0];
            otherDiv.style.width = isFullScreen ? "25%" : "0%";
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
