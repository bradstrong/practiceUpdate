 ;(function ($, window, undefined) {
/*--
//
//PracticeUpdate Scripts
//
 --*/
 /*-- TypeKit--*/
(function() {
    var config = {
      kitId: 'zwv8ekz',
      scriptTimeout: 3000
    };
    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
  })();
  
(function siteInit(){

  //user console menu
 $(document).ready(function() {
  console.log('toggle menu');
  $('ul.user-settings-menu').addClass('is-collapsed');
  $('ul.user-settings-menu li:first').addClass('active');
  $('li.active a').append('<span class="active-item-indicator"><i class="icon-angle-right"></i></span>');
  $('.edit-user-settings').click(function (){
    $('.user-settings-menu').toggleClass('is-collapsed is-expanded');
  });
});
  // A-B Testing function
  //a=65, b=66
  $(window).keydown(function(event){
    var active = document.activeElement;
    console.log(active.type);
  if (event.which == 65 && active.type==undefined) {
    event.preventDefault();
    $('body').removeClass('experimental-b');
    $('body').toggleClass('experimental-a');
  } else if(event.which == 66 & active.type==undefined){
    event.preventDefault();
    $('body').removeClass('experimental-a');
    $('body').toggleClass('experimental-b');
  }
});

    /*-- Mustache - Top-bar --*/  
     $.getJSON('content/json/top-bar.json', function(data) {
      $.get('assets/mustache/top-bar.mustache', function(template) {
        //alert('Load was performed.');
        var html = Mustache.to_html(template, data);
        $('.page-header').html(html);
        //Disable "Learn" during beta phase -- Remove once Learn/CME goes live
        //$('.top-bar a.learn').attr('data-reveal-id', 'modal-feature-disabled');
		
		var b = $('body');
		if(b.hasClass('page-update')) {
			$('ul#main-nav .update').parent('li').addClass('active');
		}
		if(b.hasClass('page-explore')) {
			$('ul#main-nav .explore').parent('li').addClass('active');
		}
		if(b.hasClass('page-learn')) {
			$('ul#main-nav .learn').parent('li').addClass('active');
		}
      });
    });
    /* Mustache - homepage footer template */
    $.get('assets/mustache/page-footer.mustache', function(template) {
      //alert('Load was performed.');
      var html = Mustache.to_html(template);
      $('.page-footer').html(html);
    });
    /* Mustache - explore slider template */
    $('.explore-feature').orbit({pauseOnHover: false, directionalNav: false, bullets: true, fluid: '16x9'});
    //   console.log("explore slider initialized");
    /*-- Modals --*/
    //Import Modals
    $.get('assets/mustache/modals.mustache', function(template) {
      var html = Mustache.to_html(template);
      $('body').append(html);
    });
	
	$.get('assets/mustache/modals-forgot-password.mustache', function(template) {
      var html = Mustache.to_html(template);
      $('body').append(html);
    });

    })();
/*--
//
//Begin Original Foundation Scripts
//
--*/
  'use strict';
  var $doc = $(document),
      Modernizr = window.Modernizr;
  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  };
/*--
//
//End Original Foundation Scripts
//
 --*/

  $(document).ready(function() {
    $('.disabled a').click(function(e) {
      e.preventDefault();
    });
  });
  
})(jQuery, this);
