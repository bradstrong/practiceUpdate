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

//MUSTACHE CALLS
//ONLY NECESSARY FOR LOCAL FRONT-END DEV

//TODO: make async
//NOTE: http://stackoverflow.com/questions/1531693/ajax-async-false-request-is-still-firing-asynchronously

//TODO: Load all
//NOTE: http://stackoverflow.com/questions/11675702/nested-partials-in-mustache-and-loading-partials-from-external-file
// // json1.js
// var user = {
//     fname: 'joe',
//     lname: 'blogs',
// }
// // json2.js
// var translations = {
//     someword: 'its translation'
// }

//NOTE: use local storage for tempaltes: https://github.com/jarednova/jquery-total-storage

// $.get('test.mustache', function(templates) {
//     var json = $.extend(user, translations),
//         one = $(templates).filter('#tpl-one').html(),
//         three = $(templates).filter('#tpl-three').html(),
//         two = $(templates).filter('#tpl-two').html(),
//         partials = {
//             "tplThree": three,
//             "tplTwo": two
//         };

//     var html = Mustache.to_html(one, json, partials);
//     $('#mustacheContainer').html(html);
// }, "html");
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

  var dataPath = "content/json/";
  var templatePath = "assets/mustache/";
  var targetElem = "";
  var htmlMethod = "html";
  var mustacheList = [
  ["feed","feed-item",".stream-container", "append"],
  ["recent","module-recent",".recent", "html"],
  ["user-topic","user-topic",".user-topic", "html"],
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
  var curData;
  var curTemplate;
  var curTarget;
  var curMethod;
  var mustacheLength = mustacheList.length;
  console.log("mustacheLength is equal to " + mustacheLength);
  for(var i=0; i<mustacheLength; i++){
    var curSet = mustacheList[i];
    console.log(i);
    console.log(curSet);
    console.log("curSet Length is equal to " +curSet.length);
    if(curSet.length === 4){//build templates with json data
      curData = dataPath + curSet[0] + ".json";
      curTemplate = templatePath + curSet[1]+ ".mustache";
      curTarget = curSet[2];
      curMethod = curSet[3];
      console.log(curTarget.length);
        $.getJSON(curData, function(data) {
      		$.get(curTemplate, function(template) {
      	    var html = Mustache.to_html(template, data);
      	    console.log(html);
      	    if(curMethod === "html"){
        	    $(curTarget).html(html);
      	    } else if(curMethod === "append"){
        	    $(curTarget).append(html);
      	    }
      		});
      	});
        console.log("Data: " + curData + ", Template: " + curTemplate + ", Target: " + curTarget);
    } else if(curSet.length === 3){//build templates with no json data
      curTemplate = templatePath + curSet[0]+ ".mustache";
      curTarget = curSet[1];
      curMethod = curSet[2];
    		$.get(curTemplate, function(template) {
    	    var html = Mustache.to_html(template);
    	    console.log(html);
    	    if(curMethod === "html"){
      	    $(curTarget).html(html);
    	    } else if(curMethod === "append"){
      	    $(curTarget).append(html);
    	    }
    		});
        console.log("Template: " + curTemplate + ", Target: " + curTarget);
    }
  }
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
/*   $('.top-level-nest a').preventDefault(); */
  var menuParentHeight;

  $('.top-level-nest ul ul').prepend('<li><a href="#" class="back-button button small">back</a></li>');
  $('.top-level-nest ul:first').addClass('menu-parent');
  menuParentHeight = $('.menu-parent').height();
  $('.top-level-nest ul:first a').not('.all-topics').click(function() {
  $('.current-child a').not('.back-button').not('current').click(function(){
    $('.current-child .current').removeClass('current');
    $(this).toggleClass('current');
  });
  $(this).siblings('ul:first').addClass('current-child');
    $('.current-child .topic-all a').addClass('current');
    var curChildHeight = $(this).siblings('ul:first').height();
    $('.top-level-nest').height(curChildHeight);
    $('.menu-parent').addClass('tier-two');
    }
  );

/*   $('.top-level-nest ul ul a').click(function() {}); */
  $('a.back-button').click(function(){
    $('.top-level-nest').height(menuParentHeight);
    $('.current-child').removeClass('current-child');
    $('.menu-parent').removeClass('tier-two');
  });

};
menuInit();
