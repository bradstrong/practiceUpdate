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
  
(function siteInit(){
//'use strict';


//drawer interaction function
// .drawer .drawer-menu, .drawer-toggle > a
//TODO: correct transition animation
//TODO: setup options, so this can easily be applied to any element as a function
(function($) {
  $.fn.practiceupdateDrawer = function(options) {
  $('ul.drawer-menu').addClass('is-collapsed');
  //$('li.active > a, dd.active > a').append('<span class="active-item-indicator"><i class="icon-chevron-right"></i></span>');
  $('.drawer-toggle-button').click(function (){
    $('ul.drawer-menu').toggleClass('is-collapsed is-expanded');
    $('.drawer-toggle-button i').toggleClass('icon-angle-down icon-angle-up');
  });
  };
})(jQuery);

// A-B Testing function
//js keycodes a=65, b=66
if((window.location.host==='practiceupdate:8888') || (window.location.hostname === 'dev.practiceupdate.com')){
  $(window).keydown(function(event){
    var active = document.activeElement;
    if (event.which === 65 && active.type === undefined) {
      event.preventDefault();
      $('body').removeClass('experimental-b');
      $('body').toggleClass('experimental-a');
    } else if(event.which === 66 && active.type === undefined){
      event.preventDefault();
      $('body').removeClass('experimental-a');
      $('body').toggleClass('experimental-b');
    }
  })
};

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

$.get('test.mustache', function(templates) {
    var json = $.extend(user, translations),
        one = $(templates).filter('#tpl-one').html(),
        three = $(templates).filter('#tpl-three').html(),
        two = $(templates).filter('#tpl-two').html(),
        partials = {
            "tplThree": three,
            "tplTwo": two
        };

    var html = Mustache.to_html(one, json, partials);
    $('#mustacheContainer').html(html);
}, "html");
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

  /* Mustache - homepage user-console template */
  $.getJSON('content/json/user-console.json', function(data) {
    $.get('assets/mustache/user-console.mustache', function(template) {
      //alert('Load was performed.');
      var html = Mustache.to_html(template, data);
      $('.user-console').html(html);
      $('.user-console').practiceupdateDrawer();
      if($('body').hasClass('page-preferences')){
        $('.user-settings-menu').toggleClass('is-collapsed is-expanded');
        $('.user-settings-menu li:first').addClass('active');
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

//disable .disabled links
  $(document).ready(function() {
    $('.disabled a').click(function(e) {
      e.preventDefault();
    });
  });
