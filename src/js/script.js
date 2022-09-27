// Navbar Toggle
$(document).ready(function () {
    $('.search-btn').click(function () {
        $(this).parents('#header').toggleClass('search-bar-active');
        if($('.search-bar-active').length>0){
            $("#q").focus();
        }
    });

    $('.navbar-toggler').click(function () {
        $(this).toggleClass('toggle-active');
    });

    $('.video-Controls .play-pause-btn').on('click', function () {
        if ($(this).attr('data-click') == 1) {
            $(this).attr('data-click', 0)
            $(this).html('Play Video <span class="play-icon"><i class="fal fa-play-circle"></i></span>')
            $('#video')[0].pause();
        } else {
            $(this).attr('data-click', 1)
            $(this).html('Pause Video <span class="pause-icon"><i class="fal fa-pause"></i></span>')
            $('#video')[0].play();
        }
    });

    $('#header.main-header .navbar-toggler-icon').click(function () {
        $('body').addClass('nav-slide');
    });
    $('#header.main-header .navbar-toggler-close-icon').click(function () {
        $('body').removeClass('nav-slide');
    });

    // Sidebar Toggle
    $('.sidebar-toggler').click(function () {
        $(this).parents('.typography-pages-sec').toggleClass('active');
    });

    $('.card-link').click(function () {
        $(this).parent().toggleClass('active');
    });

    $('.toggle-span').click(function () {
        $(this).parent().toggleClass('activate');
    });

    // Skip button
    $('.Skip-btn').focus(function () {
        $(this).parent().addClass('active');
    });
    $('.Skip-btn').on('blur', function () {
        $(this).parent().removeClass('active');
    }).on('focus', function () {
        $(this).parent().addClass('active');
    })

    // Navbar Sticky
    if(!$(".accordion-button").length>0){ //Check if page has accordions
        var lastScrollTop = $(window).scrollTop();
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll < lastScrollTop && scroll!=0 || $(".navbar-toggler").hasClass("toggle-active")) {
                $(".sticky-header").addClass("active");
            } else {
                $(".sticky-header").removeClass("active")
            }
            lastScrollTop = scroll;
        });
    }else{
        //Always show top nav when accordions are present
        $(".sticky-header").addClass("active");
    }

    //Adding loading="lazy" to iframes
    if($(".video iframe").length>0){
        $(".video iframe").prop('loading', 'lazy');
        //A11y updates
        $(".video iframe").prop('title', 'Video embed');
        $(".video iframe").append('Loading...');
    }

    // Carousel Slide Numbers Js
    var totalItems = $('.item').length;
    var currentIndex = $('div.item.active').index() + 1;

    var down_index;
    $('.num').html('' + currentIndex + '/' + totalItems + '');

    $(".carousel-control-next").click(function () {
        currentIndex_active = $('div.item.active').index() + 2;
        if (totalItems >= currentIndex_active) {
            down_index = $('div.item.active').index() + 2;
            $('.num').html('' + currentIndex_active + '/' + totalItems + '');
        }
    });

    $(".carousel-control-prev").click(function () {
        down_index = down_index - 1;
        if (down_index >= 1) {
            $('.num').html('' + down_index + '/' + totalItems + '');
        }
    });
    $('#playButton').click(function () {
        $('#homeCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#homeCarousel').carousel('pause');
    });
    // select box js
    var $disabledResults = $(".js-example-disabled-results");
    if ($disabledResults.length) {
        $disabledResults.select2();
    }

    // Escape Key Js

    $('body').keydown(function (e) {
        if (e.keyCode == 27) {
            $('#accordion .card-header').removeClass('active');
            $('#accordion .card>div').removeClass('show');
            $('#accordion .card>div').removeClass('open');
            $('#accordion .card>div').removeClass('active');
            $('body').removeClass('search-bar-active');
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').removeClass('toggle-active');
            $('.category-list-wrapper .collapse').removeClass('show');
            $('.category-list-wrapper>ul>li').removeClass('activate');
        }
    });

//BEGIN: YOUTUBE POPUP MAGNIFIC-POPUP
         /// COMMENT: INITIALIZES POPUP FOR VIDEOS WITH .popupYoutube CLASS
         if ($(".popupYoutube").length != 0) {
            $(".popupYoutube").magnificPopup({
               type: "iframe",
               mainClass: "mfp-fade",
               removalDelay: 160,
               preloader: false,
               fixedContentPos: false,
            });
         }
         //END: YOUTUBE POPUP MAGNIFIC-POPUP

         // YOUTUBE POPUP MAGNIFIC-POPUP
         if ($(".popupYoutube").length > 0) {
            $(".popupYoutube").magnificPopup({
               //disableOn: 700,
               type: "iframe",
               mainClass: "mfp-fade",
               removalDelay: 160,
               preloader: false,
               fixedContentPos: false,
            });
         }
         // END YOUTUBE POPUP

         // IMAGE GALLERY MAGNIFIC-POPUP
         if ($(".popup-gallery").length > 0) {
            $(".popup-gallery").magnificPopup({
               type: "image",
               gallery: {
               enabled: true,
               arrowMarkup:
                  '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
               tPrev: "Previous (Left arrow key)", // title for left button
               tNext: "Next (Right arrow key)", // title for right button
               },
               image: {
               titleSrc: function (item) {
                  return (
                     "<strong>" +
                     item.el.attr("title") +
                     "</strong><br>" +
                     item.el.attr("data-caption")
                  );
               },
               },
            });
         }
         // END IMAGE GALLERY MAGNIFIC-POPUP


});
// // Code Snippet Js
// function copyText(element) {
//     var $copyText = document.getElementById(element).innerText;
//     var button = document.getElementById(element + '-button');
//     navigator.clipboard.writeText($copyText).then(function () {
//         var originalText = button.innerText;
//         button.innerText = 'Copied!';
//         setTimeout(function () {
//             button.innerText = originalText;
//         }, 750);
//     }, function () {
//         button.style.cssText = "background-color: var(--red);";
//         button.innerText = 'Error';
//     });
// }
// //End Code Snippet Js