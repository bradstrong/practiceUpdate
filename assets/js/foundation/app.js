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
   $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
   $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
   $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
   $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

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
;(function() {
    var config = {
      kitId: 'zwv8ekz',
      scriptTimeout: 3000
    };
    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s);
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

//dev build - use to read url params to mimick states
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

// read known url parameters
// var recipParam = GetURLParameter('recip');
// var userParam = GetURLParameter('user');
// var statusParam = GetURLParameter('status');

//if recip=mike, make crazy happen
// if(recipParam==='mike'){
//   $('.page-content').on('hover', 'a', function(){
//     $(this).parent().hide('fast');
//   });
// }

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
//TODO: return success when all templates have been successfully built
  var dataPath = "content/json/";
  var templatePath = "assets/mustache/";
  var mustacheList = [
  ["module-update-carousel",".stream-container", "append"],
  ["module-update-carousel",".explore-sections", "prepend"],
  ["module-editors-picks",".stream-container", "append"],
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
  ["page-footer", ".site-footer", "html"],
  ["suggested-topics", "module-suggested-topics", ".suggested-topics", "html"]
  ];

  $.each(mustacheList, function(i, v){
    if(v.length===4){
      $.getJSON(dataPath+v[0]+".json", function(data) {
      		$.get(templatePath+v[1]+".mustache", function(template) {
      	    var html = Mustache.to_html(template, data);
      	    if(v[3] === "html"){
        	    $(v[2]).html(html);
      	    } else if(v[3] === "append"){
        	    // $(v[2]).append(html);
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
function hyphenateString(str){
  //trim trailing and leading whitespace, replace remaining spaces with hyphens
  return str.replace(/^\s+|\s+$/g,'').replace(/\s+/g, '-').toLowerCase();
}

  function marketingMenu(targetNav){
    $(targetNav).children().slideToggle();
  }

function menuInit() {
/*   $.fn.practiceupdatePanel           ? $doc.practiceupdatePanel() : null; */
/*   $('.top-level-nest a').preventDefault(); */
  var menuParentHeight;
  var initActiveTitle = $('.all-topics').text();
  $('.current-filter-banner').text(initActiveTitle);
  $('.top-level-nest ul ul').prepend('<li><a href="#" class="back-button button small"><i class="icon-chevron-left"></i> back</a></li>');
  $('.top-level-nest ul:first').addClass('menu-parent');
  menuParentHeight = $('.menu-parent').height();
  $('.top-level-nest ul:first a').not('.all-topics').click(function() {
  var justClicked = $(this);
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

////////////////////////////////////////////////////////////////////////////////////////
// topic nav
////////////////////////////////////////////////////////////////////////////////////////

function topicNavInit() {
/*   $.fn.practiceupdatePanel           ? $doc.practiceupdatePanel() : null; */
/*   $('.top-level-nest a').preventDefault(); */
  var childIndicator = '<i class="icon-chevron-right child-indicator"></i>';
  var topicNavBackButton = '<li><a href="#" class="back-button button small"><i class="icon-chevron-left"></i> back</a></li>';
  var menuParentHeight;
  var navHeaderHeight = $('.topic-nav .nav-header').height();
  var initActiveTitle = $('.all-topics').text();
  var curTopicAll = $('.current-child .topic-all a').text();

  var transitionActive = function(){
    $('.stream-container').animate({opacity: 0}, 50, function() {
      $('.current-filter-banner').text(curActiveTitle);
      $('.stream-container').animate({opacity: 1}, 150)
    });
  };

  $('.current-filter-banner').text(initActiveTitle);

  // determine whether this list contains more than one channel
  if($('.topic-nav .channel-list').hasClass('multi-channel')){
    menuParentHeight = $('.topic-nav .channel-list').height();

    $('.topic-nav .channel-list .channel-all>a').toggleClass('current');
    $('.topic-nav .channel-list .channel>a').append(childIndicator);
    $('.topic-nav .channel-list .aat-list').prepend(topicNavBackButton);
    $('.topic-nav .channel-list li.channel>a').on("click", function(event){
      $('.channel-list').addClass('tier-two');
      $(this).closest('.channel').toggleClass('current-channel');
      var curChildHeight = $(this).siblings('.aat-list').height();
      $('.topic-nav-inner').height(curChildHeight);
    });
    $('.topic-nav .channel-list a.back-button').on("click", function(event){
/*       $('.current-filter-banner').text('All items'); */
      $('.topic-nav-inner').height(menuParentHeight);
      $('.current-channel').removeClass('current-channel');
      $('.channel-list').removeClass('tier-two');
    });
    $('.topic-nav .channel-list .aat-list a').not('.back-button').on("click", function(event){
      $('.channel-list .current').toggleClass('current');
      $(this).toggleClass('current');
    });
  } else {// user only subscribes to single-channel
    $('.topic-nav .channel-list .channel>a, .channel-list .channel-all>a').on("click", function(event){
      $('.channel-list .current').toggleClass('current');
      $(this).toggleClass('current');
    });
  }

};
topicNavInit();

function puScrollSpy(){
  //data-pu-iid

	$(document).on('scrollSpy:enter','.stream-item', function() {
		console.log('enter:', $(this).attr('data-pu-iid'));
	});

	$(document).on('scrollSpy:enter','.stream-item', function() {
		console.log('exit:', $(this).attr('data-pu-iid'));
	});

  $.scrollSpy($(document));
}

// collapse additional authors in single-item-view
$('#et-al-trigger').on('click', function(){
  $('#et-al-content').fadeToggle( "slow", "swing" );
  $('#et-al-trigger').fadeToggle( "fast", "swing" );
});
//events list xml http://www.globaleventslist.elsevier.com/rss.aspx?filterYears=2013&disciplineIds=68&specialtyIds=247
//jquery parse xml http://api.jquery.com/jQuery.parseXML/


/*-- Smooth scroll url fragment links --*/
(function ( $ ) {
  $.fn.puSmoothScroll = function(options) {
    var $this   = $(this);
    var href    = $this.attr('href');
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) ;//strip for ie7

    // This is the easiest way to have default options.
    var options = $.extend({
        // These are the defaults.
        duration: 500,
        targetOffset: $('.page-header').height()
    }, options );
    if ($target.length) {
      $('html,body').animate({
        scrollTop: $target.offset().top - options.targetOffset
      }, options.duration);
      return false;
    }
  };
  $(document).on('click', '[data-pu-toggle="scroll"]', function () {
    $(this).puSmoothScroll();
  });
}( jQuery ));
/*-- END Smooth scroll url fragment links --*/

$(document.body).on('click', '.content-header-content h2', function() {
/* 	$('.content-header-content').on('click', 'h2', function() { */
	$('.content-header-list').slideToggle("slow");
});

$(document.body).on('click', '.content-header-list a', function(e) {
	e.preventDefault();
	$curSubhead = $(this).html();
	$('.content-header-content .content-header-subtitle').html($curSubhead);
	$('.content-header-list').slideToggle("slow");
});

if( $('#reveal-ad').length ) {
	function loadAd() {
		$('#reveal-ad').reveal();
	}

	//setTimeout(loadAd, 5000)
	loadAd();
}
