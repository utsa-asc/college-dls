$(".form-check-input").on("click", function(e) {
  var targetEle = e.currentTarget;
  //   targetEle.checked=!targetEle.checked;
  var catsChecked = 0;
  $('.form-check-input').each(function (idx) {
      if (this.checked) {
          catsChecked = catsChecked + 1;
      }
  });
  
  var defaultBox = $('.default')
  if (catsChecked > 0) {
      $('.default').removeClass("show")
  } else {
      $('.default').addClass("show")
  }
  var scrollTargetClass = $("#" + targetEle.id).data("target");
  setTimeout( function() {
    scrollToSection(scrollTargetClass);
  }, 400);
});
  
  function scrollToSection(scrollTargetClass) {
    console.log("computed offset: " + $(scrollTargetClass).offset().top)
    $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTargetClass).offset().top
      }, 800);
  }