(function ($) {
    "use strict"; 

/*Okay Here We go*/
$(document).ready(function(){
    $(".mi").click(function(){
        $("#repeatText").fadeIn();

    });
});


    window.sr = ScrollReveal();
    sr.reveal('.midicon', {
        duration: 500,
        scale: 0.1,
        distance: '0px'
    }, 200);

    sr.reveal('.contIcon', {
        duration: 500,
        scale: 0.1,
        distance: '0px'
    }, 200);
    




})(jQuery); // End of use strict
