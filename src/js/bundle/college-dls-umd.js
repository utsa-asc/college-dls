
import $ from 'jquery'
window.jQuery = window.$ = $
// console.log('$');
// console.dir($);
// console.log('jquery');
// console.dir(jquery);
// console.log('jQuery');
// console.dir(jQuery);

import * as magnific from 'magnific-popup';
import * as Popper from '@popperjs/core/dist/umd/popper';
import Glide from '@glidejs/glide';
import TomSelect from '../../../node_modules/tom-select/dist/js/tom-select.base';

// import Alert from '../../node_modules/bootstrap/js/src/alert';
import Button from '../../../node_modules/bootstrap/js/src/button';
import Carousel from '../../../node_modules/bootstrap/js/src/carousel';
import Collapse from '../../../node_modules/bootstrap/js/src/collapse';
import Dropdown from '../../../node_modules/bootstrap/js/src/dropdown';
import Modal from '../../../node_modules/bootstrap/js/src/modal';
import Offcanvas from '../../../node_modules/bootstrap/js/src/offcanvas';
import Popover from '../../../node_modules/bootstrap/js/src/popover';
import ScrollSpy from '../../../node_modules/bootstrap/js/src/scrollspy';
import Tab from '../../../node_modules/bootstrap/js/src/tab';
import Toast from '../../../node_modules/bootstrap/js/src/toast';
import Tooltip from '../../../node_modules/bootstrap/js/src/tooltip';
import '@justinribeiro/lite-youtube'; 
import '@slightlyoff/lite-vimeo';

// Build metadata injected during build process
window.BUILD_INFO = {
    hash: '__BUILD_HASH__',
    branch: '__BUILD_BRANCH__',
    date: '__BUILD_DATE__',
    timestamp: '__BUILD_TIMESTAMP__'
};

window.showBuildInfo = () => {
    const css = getComputedStyle(document.documentElement);
    const js = window.BUILD_INFO;

    console.group('🔧 Build Information');
    console.log('📍 Git Hash:', js?.hash || css.getPropertyValue('--build-hash').trim());
    console.log('🌿 Branch:', js?.branch || css.getPropertyValue('--build-branch').trim());
    console.log('📅 Build Date:', js?.date || css.getPropertyValue('--build-date').trim());
    console.log('⏰ Timestamp:', js?.timestamp || css.getPropertyValue('--build-timestamp').trim());

    if (js?.date) {
        const buildDate = new Date(js.date);
        console.log('diff: ' + (Date.now() - js?.timestamp));
        const age = Math.round((Date.now() - js?.timestamp) / 1000 );
        console.log(`🕐 Build Age: ${age} secs ago`);
    }
    console.groupEnd();
}

export default {
    // Alert,
    Button,
    Carousel,
    Collapse,
    Dropdown,
    Modal,
    Offcanvas,
    Popover,
    ScrollSpy,
    Tab,
    Toast,
    Popper,
    Tooltip,
    showBuildInfo
}

const getPreferredTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = theme => {
    if (theme === 'auto') {
        document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }
}

$(document).ready(function () {

    // Navbar Toggle
    if ($(".glide").length != 0) {
        var facultyCount = parseInt(document.getElementById("facultyCount").value);
        facultyCount=Math.floor(Math.random() * facultyCount);
        new Glide('.glide', {
            type: 'carousel',
            startAt: facultyCount,
            perView: 4,
            autoplay: 3000,
            breakpoints: {
                768: {
                    perView: 2
                },
                576: {
                    perView: 1
                }
            }
        }).mount();
    }
  
    $('.search-btn').click(function () {
        $(this).parents('#header').toggleClass('search-bar-active');
        if ($('.search-bar-active').length > 0) {
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
            $('#banner-video video')[0].pause();
        } else {
            $(this).attr('data-click', 1)
            $(this).html('Pause Video <span class="pause-icon"><i class="fal fa-pause"></i></span>')
            $('#banner-video video')[0].play();
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
    if (!$(".accordion-button").length > 0) { //Check if page has accordions
        var lastScrollTop = $(window).scrollTop();
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll < lastScrollTop && scroll != 0 || $(".navbar-toggler").hasClass("toggle-active")) {
                $(".sticky-header").addClass("active");
            } else {
                $(".sticky-header").removeClass("active")
            }
            lastScrollTop = scroll;
        });

    } else {
        //Always show top nav when accordions are present
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 250) {
                $(".sticky-header").addClass("active");
            } else {
                $(".sticky-header").removeClass("active")
            }

        });
    }

    //Adding loading="lazy" to iframes
    if ($(".video iframe").length > 0) {
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

    const carouselElement = document.querySelector('#hero-slider');
    if (carouselElement != null) {
        const carousel = new Carousel(carouselElement, {
            interval: 12000,
            touch: true,
            hover: false,
            keyboard: true
        });
        carousel.cycle();

        carouselElement.addEventListener('slide.bs.carousel', event => {
            console.log("attempting to transition to next slide");
        });

        $(".carousel-control-next").on('click', function () {
            let currentIndex_active = $('div.item.active').index() + 2;
            if (totalItems >= currentIndex_active) {
                down_index = $('div.item.active').index() + 2;
                $('.num').html('' + currentIndex_active + '/' + totalItems + '');
            }
        });

        $(".carousel-control-prev").on('click', function () {
            down_index = down_index - 1;
            if (down_index >= 1) {
                $('.num').html('' + down_index + '/' + totalItems + '');
            }
        });

        // carousel controls
        $('#carousel-button .carousel-controls').on('click', function () {
            if ($(this).attr('data-click') == 1) {
                $(this).attr('data-click', 0)
                $(this).html('<button id="playButton" type="button" class="btn" aria-label="play" aria-label="Start automatic slide show"><i class="fas fa-play-circle" aria-hidden="true"></i></button>')
                console.log("attempting to pause carousel");
                carousel.pause();
            } else {
                $(this).attr('data-click', 1)
                $(this).html('<button id="pauseButton" type="button" class="btn" aria-label="pause" aria-label="Stop automatic slide show"><i class="fas fa-pause-circle" aria-hidden="true"></i></button>')
                console.log("attempting to restart carousel");
                carousel.cycle();
            }
        });
    }

    document.querySelectorAll('select').forEach((el)=>{
        let settings = {
            create: false,
            sortField: {
                field: "$order",
                field: "$score"
            }
        };
         new TomSelect(el,settings);
    });
    // select box js
    // var $disabledResults = $(".js-example-disabled-results");
    // if ($disabledResults.length) {
    //     $disabledResults.select2();
    // }

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
            allowHTMLInTemplate: true,
            gallery: {
                enabled: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
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

    //Start Directory Form info
    // Prevent Submit
    if(document.getElementById("form-search")){
        var preventFormSubmit = function(event) {
            event.preventDefault();
            
            const name = document.getElementById("search-directory").value;
            let queryString="?";
            
            if(name!==null){
                queryString=queryString + "name=" + name + "&";
            }
            
            const directory = document.getElementById("filter-discipline").value;
            
            if(directory){
                queryString=queryString + "directory=" + directory;
            }
            
            // console.log(queryString);
            window.location = document.getElementById("form-search").action + queryString;
            
        };
    
        // attach event listener for form submissions
        document.getElementById("form-search").addEventListener("submit", preventFormSubmit);
    }
    //End directory form     
});

// Reveal Search -- REBRAND
    document.addEventListener("keydown", function (event) {
        var searchElement = document.getElementById("global-searchbar");
        var close = document.getElementById("search-title");
        var searchToggle = document.getElementById("search");
        var searchButton = document.getElementById("search-button");
        var searchInput = document.getElementById("searchField");
        if (event.key === "Escape" && $(searchElement).hasClass("active")) {
            searchElement.classList.toggle("active");
            close.classList.toggle("close");
            searchToggle.classList.toggle("active");

            if ($(close).hasClass("close")) {
                $(close).text("Close Search");
            } else {
                //else
                $(close).text("Search");
            }

            if ($(searchElement).hasClass("active")) {
                $(searchButton).attr("tabindex", "0");
                $(searchInput).attr("tabindex", "0");
            } else {
                $(searchButton).attr("tabindex", "-1");
                $(searchInput).attr("tabindex", "-1");
            }
        }
    });

$(document).ready(function () {
    var searchButton = document.getElementById("search");
    $(searchButton).on("click", function (event) {
        event.preventDefault();
        var searchField = document.getElementById("global-searchbar");
        var searchInput = document.getElementById("searchField");
        var searchButton = document.getElementById("search-button");
        var searchToggle = document.getElementById("search");
        var close = document.getElementById("search-title");

        $(searchField).toggleClass("active");
        $(searchToggle).toggleClass("active");
        $(close).toggleClass("close");

        // $(searchInput).focus().attr("tabindex", "0");
        $(searchButton).attr("tabindex", "0");

        if ($(close).hasClass("close")) {
            $(close).text("Close Search");
        } else {
            //else
            $(close).text("Search");
        }

        // Focus on Search input when revealed
        if ($(searchField).hasClass("active")) {
            $(searchButton).attr("tabindex", "0");
            $(searchInput).attr("tabindex", "0");
        } else {
            $(searchButton).attr("tabindex", "-1");
            $(searchInput).attr("tabindex", "-1");
        }
    });
});

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
//
//End Code Snippet Js
