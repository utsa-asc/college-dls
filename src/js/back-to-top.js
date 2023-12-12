$(document).ready(function () {
    // BEGIN: BACK TO TOP LINK
    if($("#top-link")){
        $("#top-link").show().hide();
        // COMMENT: ADDS SCROLL FUNCTIONALITY TO #top-link ELEMENTS BACK TO TOP BUTTON/LINK
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
            $("#top-link").fadeIn();
            } else {
            $("#top-link").fadeOut();
            }
        });
        $("#top-link").click(function () {
            $("html, body").animate(
            {
                scrollTop: 0,
            },
            0
            );
            return false;
        });
    }
    // END: BACK TO TOP LINK
});