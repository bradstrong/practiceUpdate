// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
//window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
//(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
//(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

//Brad's update.html

	// <!-- Included JS Files -->
	// <script src="assets/js/libs/jquery.min.js"></script>
	// <script src="assets/js/foundation/jquery.reveal.js"></script>
	// <script src="assets/js/foundation/jquery.orbit-1.4.0.js"></script>
	// <script src="assets/js/foundation/jquery.customforms.js"></script>
	// <script src="assets/js/foundation/jquery.placeholder.min.js"></script>
	// <script src="assets/js/foundation/jquery.tooltips.js"></script>

	// <!-- <script src="javascripts/app.js"></script> -->
	// 	<script src="assets/js/app.js"></script>
	//   <script src="assets/js/foundation/jquery.offcanvas.js"></script>
	// 	<script src="assets/js/mustache.js"></script>


		//Foundation Index

	// 		<!-- Included JS Files (Uncompressed) -->
	// <script src="javascripts/foundation/jquery.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.accordion.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.alerts.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.buttons.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.forms.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.mediaQueryToggle.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.navigation.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.orbit.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.reveal.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.tabs.js"></script>
	
	// <script src="javascripts/foundation/jquery.foundation.tooltips.js"></script>
	
	// <script src="javascripts/foundation/jquery.placeholder.js"></script>
	
	

// (function ($) {  

// 	  $.getScript("foundation/jquery.foundation.accordion.js");
// 	  $.getScript("foundation/jquery.foundation.alerts.js");
// 	  $.getScript("foundation/jquery.foundation.buttons.js");
// 	  $.getScript("foundation/jquery.foundation.forms.js");
// 	  $.getScript("foundation/jquery.foundation.mediaQueryToggle.");
// 	  $.getScript("foundation/jquery.foundation.navigation.js");
// 	  $.getScript("foundation/jquery.foundation.orbit.js");
// 	  $.getScript("foundation/jquery.foundation.reveal.js");
// 	  $.getScript("foundation/jquery.foundation.tabs.js");
// 	  $.getScript("foundation/jquery.foundation.tooltips.js");
// 	  $.getScript("foundation/jquery.placeholder.js");

// 		$.getScript("foundation/jquery.offcanvas.js");
// 		$.getScript("mustache.js");
  
// })(jQuery);
(function ($) { 
	compileMustacheTemplates();
})(jQuery);