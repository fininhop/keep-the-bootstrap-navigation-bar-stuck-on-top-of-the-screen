# Keep the bootstrap navigation bar stuck on top of the screen
While using bootstrap, this jQuery plugin will kep the bootstrap navigation bar stuck on top of the screen while you are scrolling.

## Default scroll speed 500

```
$.noConflict();
jQuery(document).ready(function(){
	jQuery('#fixed-top-nav').bootstrapScrollingStuckTopNav();
});
```

## Set your own scroll speed

```
$.noConflict();
jQuery(document).ready(function(){
  jQuery('#fixed-top-nav').bootstrapScrollingStuckTopNav({scrollSpeed: 1000});
});
```
