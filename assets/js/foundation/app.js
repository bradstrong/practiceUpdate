;(function ($, window, undefined) {
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
        // At load, if user hasn't scrolled more than 20px or so...
  			if( $(window).scrollTop() < 20 ) {
          window.scrollTo(0, 1);
        }
      }, 0);
    });
  }

})(jQuery, this);

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

/*-- Panel & Prompt - make dismissable --*/
;(function ($, window, undefined) {
  'use strict';

  $.fn.practiceupdatePanel = function (options) {
    var settings = $.extend({
      callback: $.noop
    }, options);

    $(document).on("click", ".panel a.close", function (e) {
      e.preventDefault();
      $(this).closest(".panel").fadeOut(function () {
        $(this).remove();
        settings.callback();
      });
    });

    $(document).on("click", ".prompt a.close", function (e) {
      e.preventDefault();
      $(this).closest(".prompt").fadeOut(function () {
        $(this).remove();
        settings.callback();
      });
    });

  };

})(jQuery, this);


/*-- END Panel --*/

/*-- PracticeUpdate Site Initialize --*/

;(function siteInit($, window, undefined) {
  'use strict';

  var $doc = $(document);

  $(document).ready(function() {
    $.fn.practiceupdatePanel           ? $doc.practiceupdatePanel() : null;
  });


//(function siteInit(){
//'use strict';

//drawer interaction function
// .drawer .drawer-menu, .drawer-toggle > a
//TODO: correct transition animation
//TODO: setup options, so this can easily be applied to any element as a function
;(function($) {
  $.fn.practiceupdateDrawer = function(options) {
    options = {};
  $('ul.drawer-menu').addClass('is-collapsed');
  //$('li.active > a, dd.active > a').append('<span class="active-item-indicator"><i class="icon-chevron-right"></i></span>');
  $('.drawer-toggle-button').click(function (){
    $('ul.drawer-menu').toggleClass('is-collapsed is-expanded');
    $('.drawer-toggle-button i').toggleClass('icon-angle-down icon-angle-up');
  });
  };
})(jQuery);

  /*-- Mustache - Top-bar --*/
   $.getJSON('content/json/top-bar.json', function(data) {
    $.get('assets/mustache/top-bar.mustache', function(template) {
      var html = Mustache.to_html(template, data);
      $('.page-header').html(html);
      $('.page-header').foundationTopBar();

      //on mustache callback - initialize off canvas func
      //from jquery.offcanvas.js
      // Watch for clicks to show the sidebar
      var $selector2 = $('#sidebarButton'),
      events = 'click.fndtn';
      if ($selector2.length > 0) {
        $('#sidebarButton').on(events, function (e) {
          e.preventDefault();
          $('body').toggleClass('active');
        });
      }

      var b = $('body');
      if(b.hasClass('page-update')) {
        $('#main-nav .update').parent('li').addClass('active');
      }
      if(b.hasClass('page-explore')) {
        $('#main-nav .explore').parent('li').addClass('active');
      }
      if(b.hasClass('page-learn')) {
        $('#main-nav .learn').parent('li').addClass('active');
      }
    });
  });

var waxMustache = function(){
//TODO: add support for partials
//TODO: check if target element exists before attempting to render
  var dataPath = "content/json/";
  var templatePath = "assets/mustache/";
  var mustacheList = [
  ["feed","feed-item",".stream-container", "append"],
  ["recent","module-recent",".recent", "html"],
  ["user-topic","user-topic",".user-topic", "html"],
  ["topic-spotlight","topic-spotlight",".topic-spotlight", "html"],
  ["cta-meet-experts",".cta.meet-experts", "html"],
  ["cta-bcf-01", "cta", ".bcf-01", "html"],
  ["user-console", "user-console", ".user-console", "html"],
  ["job-feed", "module-job-feed", ".job-feed", "html"],
  ["recent", "module-most-read", ".most-read", "html"],
  ["page-footer", ".page-footer", "html"],
  ["modals", "body", "append"],
  ["modals-forgot-password", "body", "append"],
  ["page-footer", ".site-footer", "html"]
  ];

  $.each(mustacheList, function(i, v){
    if(v.length===4){
      $.getJSON(dataPath+v[0]+".json", function(data) {
      		$.get(templatePath+v[1]+".mustache", function(template) {
      	    var html = Mustache.to_html(template, data);
      	    if(v[3] === "html"){
        	    $(v[2]).html(html);
      	    } else if(v[3] === "append"){
        	    $(v[2]).append(html);
      	    }
      		});
      	});
    } else {
      $.get(templatePath+v[0]+".mustache", function(template) {
  	    var html = Mustache.to_html(template);
  	    if(v[2] === "html"){
    	    $(v[1]).html(html);
  	    } else if(v[2] === "append"){
    	    $(v[1]).append(html);
  	    }
  		});
    }
  });
  menuInit();
  $('ul.drawer-menu').addClass('is-collapsed');
  //$('li.active > a, dd.active > a').append('<span class="active-item-indicator"><i class="icon-chevron-right"></i></span>');
  $('.drawer-toggle-button').click(function (){
    $('ul.drawer-menu').toggleClass('is-collapsed is-expanded');
    $('.drawer-toggle-button i').toggleClass('icon-angle-down icon-angle-up');
  });
};
waxMustache();
})(jQuery, this);

//disable .disabled links
  $(document).ready(function() {
    $('.disabled a').click(function(e) {
      e.preventDefault();
    });
  });

function menuInit() {
/*   $.fn.practiceupdatePanel           ? $doc.practiceupdatePanel() : null; */
/*   $('.top-level-nest a').preventDefault(); */
  var menuParentHeight;
  var initActiveTitle = $('.all-topics').text();
  $('.current-filter-banner').text(initActiveTitle);
  $('.top-level-nest ul ul').prepend('<li><a href="#" class="back-button button small">back</a></li>');
  $('.top-level-nest ul:first').addClass('menu-parent');
  menuParentHeight = $('.menu-parent').height();
  $('.top-level-nest ul:first a').not('.all-topics').click(function() {
  $('.current-child a').not('.back-button').not('current').click(function(){
    var curActiveTitle = $(this).text();
    $('.stream-container').animate({
      opacity: 0,
    }, 50, function() {
      $('.current-filter-banner').text(curActiveTitle);
      $('.stream-container').animate({
      opacity: 1,
    }, 150)
    });
    $('.top-level-nest ul .current').toggleClass('current');
    $(this).toggleClass('current');
  });
  $(this).siblings('ul:first').addClass('current-child');
    $('.current-child .topic-all a').addClass('current');
    var curTopicAll = $('.current-child .topic-all a').text();
$('.stream-container').animate({
      opacity: 0,
    }, 50, function() {
      $('.current-filter-banner').text(curTopicAll);
      $('.stream-container').animate({
      opacity: 1,
    }, 150)
    });

    var curChildHeight = $(this).siblings('ul:first').height();
    $('.top-level-nest').height(curChildHeight);
    $('.menu-parent').addClass('tier-two');
    }
  );

/*   $('.top-level-nest ul ul a').click(function() {}); */
  $('a.back-button').click(function(){
  $(this).siblings('a').removeClass('current');
    $('.stream-container').animate({
      opacity: 0,
    }, 50, function() {
      $('.current-filter-banner').text('All items');
      $('.stream-container').animate({
      opacity: 1,
    }, 150)
    });
    $('.top-level-nest').height(menuParentHeight);
    $('.current-child').removeClass('current-child');
    $('.menu-parent').removeClass('tier-two');
  });

};
