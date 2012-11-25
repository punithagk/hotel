(function ($) {
Drupal.behaviors.actionTBHotel = {
  attach: function (context) {
    $(".change-skin-button").click(function() {
      parts = this.href.split("/");
      style = parts[parts.length - 1];
        $.cookie("nucleus_skin", style, {path: '/'});
        window.location.reload();
      return false;
      });
    $('body.front #main-content > .grid-inner, body.front #sidebar-first-wrapper > .grid-inner, body.front #sidebar-second-wrapper > .grid-inner').nucleusMatchHeight();
    $('.btn-btt').click(function(){
      scrollTo(0, 0);
    });
  }
};
})(jQuery);


jQuery.fn.nucleusMatchHeight = function (maxHeight) {
	var height		= 0;
	if(maxHeight == undefined) {
		maxHeight = 0;
	}
	this.each(function () {
		height		= jQuery(this).outerHeight();
		maxHeight	= (height > maxHeight) ? height : maxHeight;
	});

	return this.each(function () {
		var t			= jQuery(this);
		var minHeight	= maxHeight - (t.outerHeight() - t.height());
		t.css('min-height', minHeight + 'px');
	});
};
