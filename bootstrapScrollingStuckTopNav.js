(function($) {

  $.fn.bootstrapScrollingStuckTopNav = function(options) {
    var navbar_element = this;
    var target_id;
    var target_offset;
    var header_height;
    var navbar_height;

    var settings = $.extend({
      scrollSpeed: 500
    }, options );

    function initOffsets(){
      header_height = parseInt($(navbar_element).prev().outerHeight());
      navbar_height = parseInt($(navbar_element).outerHeight());
    }

    function scrolling(){
      if($(window).scrollTop() >= header_height){
        $(navbar_element).prev().css('visibility', 'hidden');
        if($(navbar_element).hasClass('navbar-fixed-top'))
          $(navbar_element).removeClass('navbar-fixed-top');

        $(navbar_element).addClass('navbar-fixed-top');
        $('body').css('padding-top', navbar_height+'px');
      }else{
        $(navbar_element).prev().css('visibility', 'visible');
        if($(navbar_element).hasClass('navbar-fixed-top'))
          $(navbar_element).removeClass('navbar-fixed-top');
        $('body').css('padding-top', '0');
      }
    }

    $(navbar_element).find('a').on('click', function(event){
      event.preventDefault();
      $(this).blur();
      target_id = $(this).prop('href').split(/.*#/);

      $('html, body').animate({
        scrollTop: $('#'+target_id[1]).offset().top-navbar_height
      }, settings.scrollSpeed);
    });

    $(window).on('load', initOffsets).on('resize', initOffsets);

    $(window).on('resize', scrolling).on('scroll', scrolling);

    return this;
  };

}(jQuery));
