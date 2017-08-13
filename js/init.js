// # SIMPLE TOGGLE
// Use this to just toggle the class .active into .navbar

// ------------------------------------


$(document).ready(function () {
    //SideNav
    
    (function ($) {
        $.fn.sidenav = function () {

            var sidenav = this,
                $trigger = $(".js-sidenav");

            $trigger.click(toggle);

            function toggle() {
                sidenav.toggleClass("active");
            }
        }
    })

    (jQuery);

    $(function () {

        $(".sidenav").sidenav();
    });
    
    //Slider 
    
    $('.bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        captions: true,
        speed: 300,
        captions: true
    });


}); //END READY!!
