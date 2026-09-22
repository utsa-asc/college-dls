// Navbar Toggle
$(document).ready(function(){
$('.navbar-toggler').click(function(){
$(this).toggleClass('toggle-active');
});
});

// Play/pause Toggle

$(document).ready(function(){
$('.video-Controls .play-pause-btn').on('click',function(){
if($(this).attr('data-click') == 1) {
$(this).attr('data-click', 0)
$(this).html('Play Video <span class="play-icon"><i class="fal fa-play-circle"></i></span>')
$('#video')[0].pause();
} else {
$(this).attr('data-click', 1)
$(this).html('Pause Video <span class="pause-icon"><i class="fal fa-pause"></i></span>')
$('#video')[0].play();
} 
});
});
$(document).ready(function(){
$('#header.main-header .navbar-toggler-icon').click(function(){
$('body').addClass('nav-slide');
});
$('#header.main-header .navbar-toggler-close-icon').click(function(){
    $('body').removeClass('nav-slide');
});
});

// Sidebar Toggle
$(document).ready(function(){
$('.sidebar-toggler').click(function(){
$(this).parents('.typography-pages-sec').toggleClass('active');
});
});
$(document).ready(function(){
  $('.card-link').click(function(){
  $(this).parent().toggleClass('active');
  });
  });
$(document).ready(function(){
$('.toggle-span').click(function(){
$(this).parent().toggleClass('activate');
});
});

// Dropdown Menu Toggle

$(document).ready(function(){
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show');
    });
    return false;
  });
});

// Skip button

$(document).ready(function(){
$('.Skip-btn').focus(function(){
$(this).parent().addClass('active');
});
$('.Skip-btn').on('blur', function(){
  $(this).parent().removeClass('active');
}).on('focus', function(){
  $(this).parent().addClass('active');
})
});
$(document).ready(function(){
  $(".Skip-btn").click(function(){
    $("html").scrollTop(200);
  });
});

// Navbar Sticky

$(document).ready(function(){
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 300) {
      $(".sticky-header").addClass("active", 1000);
  }else{
    $(".sticky-header").removeClass("active", 1000);
  }
});
});
$(document).ready(function(){
$('.search-btn').click(function(){
$(this).parents('body').toggleClass('search-bar-active');
});
});

// Carousel Slide Numbers Js
$(document).ready(function(){
var totalItems = $('.item').length;
  var currentIndex = $('div.item.active').index() + 1;

  var down_index;
  $('.num').html(''+currentIndex+'/'+totalItems+'');

      $(".carousel-control-next").click(function(){
      currentIndex_active = $('div.item.active').index() + 2;
      if (totalItems >= currentIndex_active)
      {
          down_index= $('div.item.active').index() + 2;
          $('.num').html(''+currentIndex_active+'/'+totalItems+'');
      }
  });

      $(".carousel-control-prev").click(function(){
          down_index=down_index-1;
      if (down_index >= 1 )
      {
          $('.num').html(''+down_index+'/'+totalItems+'');
      }
  });
  $('#playButton').click(function () {
    $('#hero-slider').carousel('cycle');
});
$('#pauseButton').click(function () {
    $('#hero-slider').carousel('pause');
});
// select box js
var $disabledResults = $(".js-example-disabled-results");
if ($disabledResults.length) {
  $disabledResults.select2(); 
}
});

// Escape Key Js
$(document).ready(function () {
  $('body').keydown(function(e){
      if(e.keyCode == 27) {
        $('#accordion .card-header').removeClass('active');$('#accordion .card>div').removeClass('show');$('#accordion .card>div').removeClass('open');$('#accordion .card>div').removeClass('active');$('body').removeClass('search-bar-active');$('.navbar-collapse').removeClass('show');$('.navbar-toggler').removeClass('toggle-active');$('.category-list-wrapper .collapse').removeClass('show');$('.category-list-wrapper>ul>li').removeClass('activate');
      }
  });
});
// Code Snippet Js
function copyText(element) {
  var $copyText = document.getElementById(element).innerText;
  var button = document.getElementById(element + '-button');
  navigator.clipboard.writeText($copyText).then(function() {
    var originalText = button.innerText;
    button.innerText = 'Copied!';
    setTimeout(function(){
      button.innerText = originalText;
      }, 750);
  }, function() {
    button.style.cssText = "background-color: var(--red);";
    button.innerText = 'Error';
  });
}
//End Code Snippet Js


