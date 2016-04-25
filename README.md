# Maintain stuck the bootstrap navigation bar at the top of the screen
If you're using bootstrap. This jQuery plugin, keeps the bootstrap navigation bar, sticked on the top of the screen, when it's scrolling.

# Usage
$.noConflict();
jQuery(document).ready(function(){
	jQuery('#fixed-top-nav').bootstrapScrollingStuckTopNav();
  //jQuery('#fixed-top-nav').bootstrapScrollingStuckTopNav({scrollSpeed: 500});
});
