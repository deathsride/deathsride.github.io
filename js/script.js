/* global $ */

/* eslint-env jquery */

$('document').ready(function() { 
    $(".arrow-1").click(function() { 
        $('header').addClass('.fullscreen-1'); 
        $('header').removeClass('.image-1'); 
        $('header').removeClass('.image-2'); 
        $('header').removeClass('.image-3'); 
        $('header').removeClass('.image-4'); 
    }); 
}); 