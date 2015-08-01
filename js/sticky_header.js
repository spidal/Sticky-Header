// JavaScript Document

(function( $ ) {
 
    $.fn.stickyheader = function( options ) {
 
 		var id = this;
 
 		// Setup default options for header.
        var settings = $.extend({
            // These are the default settings.
            minimum_height: "40px",
            maximum_height: "100px",
			speed: 600
        }, options );
 
 		id.addClass("extended");
		id.css('height', settings.maximum_height);
		
		$(window).scroll(function(){
			if($(document).scrollTop() > 0)
			{
				if(id.hasClass("extended"))
				{
					id.addClass("reduced");
					id.removeClass("extended");
					id.stop().animate({
						height: settings.minimum_height
					}, settings.speed);
				}
			}
			else
			{
				if(id.hasClass("reduced"))
				{
					id.removeClass("reduced");
					id.addClass("extended");
					id.stop().animate({
						height: settings.maximum_height
					}, settings.speed);
				} 				
			}
      
		});
		
		
 
    };
	 
}( jQuery ));