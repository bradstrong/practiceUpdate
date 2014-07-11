/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=2e096dae5b3a0c74ea7c)
 * Config saved to config.json and https://gist.github.com/2e096dae5b3a0c74ea7c
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(o){"use strict";function t(t){t&&3===t.which||(o(n).remove(),o(d).each(function(){var r=e(o(this)),n={relatedTarget:this};r.hasClass("open")&&(r.trigger(t=o.Event("hide.bs.dropdown",n)),t.isDefaultPrevented()||r.removeClass("open").trigger("hidden.bs.dropdown",n))}))}function e(t){var e=t.attr("data-target");e||(e=t.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var r=e&&o(e);return r&&r.length?r:t.parent()}function r(t){return this.each(function(){var e=o(this),r=e.data("bs.dropdown");r||e.data("bs.dropdown",r=new i(this)),"string"==typeof t&&r[t].call(e)})}var n=".dropdown-backdrop",d='[data-toggle="dropdown"]',i=function(t){o(t).on("click.bs.dropdown",this.toggle)};i.VERSION="3.2.0",i.prototype.toggle=function(r){var n=o(this);if(!n.is(".disabled, :disabled")){var d=e(n),i=d.hasClass("open");if(t(),!i){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&o('<div class="dropdown-backdrop"/>').insertAfter(o(this)).on("click",t);var a={relatedTarget:this};if(d.trigger(r=o.Event("show.bs.dropdown",a)),r.isDefaultPrevented())return;n.trigger("focus"),d.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},i.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var r=o(this);if(t.preventDefault(),t.stopPropagation(),!r.is(".disabled, :disabled")){var n=e(r),i=n.hasClass("open");if(!i||i&&27==t.keyCode)return 27==t.which&&n.find(d).trigger("focus"),r.trigger("click");var a=" li:not(.divider):visible a",s=n.find('[role="menu"]'+a+', [role="listbox"]'+a);if(s.length){var p=s.index(s.filter(":focus"));38==t.keyCode&&p>0&&p--,40==t.keyCode&&p<s.length-1&&p++,~p||(p=0),s.eq(p).trigger("focus")}}}};var a=o.fn.dropdown;o.fn.dropdown=r,o.fn.dropdown.Constructor=i,o.fn.dropdown.noConflict=function(){return o.fn.dropdown=a,this},o(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",d,i.prototype.toggle).on("keydown.bs.dropdown.data-api",d+', [role="menu"], [role="listbox"]',i.prototype.keydown)}(jQuery);


var PU = PU || {};

PU.dropdown = (function ($) {
  return {
    init: function () {
			var parallax = $(".j-parallax"),
					speed = 1,
					active = $('span[data-active]').data('active');

			window.onscroll = function() {
				var yOffset = window.pageYOffset;
				parallax.css("background-position", "0px " + (yOffset / speed) + "px");
			}
						
			$(".j-parallax ul ul li a:contains('"+ active +"')").parent('li').replaceWith("<li class='active'>"+active+"</li>");		    
    }
	};
} (jQuery));

$(document).ready(function () {
  PU.dropdown.init();
});