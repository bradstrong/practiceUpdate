(function ($) {  

  $(function(){
    $(document).foundationAlerts();
    $(document).foundationButtons();
    $(document).foundationAccordion();
    $(document).foundationNavigation();
    $(document).foundationCustomForms();
    $(document).foundationMediaQueryViewer();
    $(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
    
    $(document).tooltips();
//    $('input, textarea').placeholder();
    
    // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
    // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
    // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
    // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
    // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
  });
  
})(jQuery);

 jQuery(document).ready(function ($) {

// function activePage(){
//   var curPage = $('body').attr('id');
//   //alert(curPage);
//   $('.top-bar .nav-bar li[class*=' + curPage + ']').addClass('active');
// };
  /* Use this js doc for all application specific JS */
/*-- Mustache - Top-bar --*/
  $.getJSON('content/json/top-bar.json', function(data) {
    $.get('assets/mustache/top-bar.mustache', function(template) {
      //alert('Load was performed.');
      var html = Mustache.to_html(template, data);
      $('.top-bar').html(html);
    });
  });

  /*-- Mustache - Main Search Panel --*/

    $.get('assets/mustache/main-search.mustache', function(template) {
      var html = Mustache.to_html(template);
      $('.main-search').html(html);
    });

  /* TABS --------------------------------- */
  /* Remove if you don't need :) */

  function activateTab($tab) {
    var $activeTab = $tab.closest('dl').find('dd.active'),
        contentLocation = $tab.children('a').attr("href") + 'Tab';

    // Strip off the current url that IE adds
    contentLocation = contentLocation.replace(/^.+#/, '#');

    //Make Tab Active
    $activeTab.removeClass('active');
    $tab.addClass('active');

    //Show Tab Content
    $(contentLocation).closest('.tabs-content').children('li').removeClass('active').hide();
    $(contentLocation).css('display', 'block').addClass('active');
  }

  $('dl.tabs dd a').on('click.fndtn', function (event) {
    activateTab($(this).parent('dd'));
  });

  if (window.location.hash) {
    activateTab($('a[href="' + window.location.hash + '"]').parent('dd'));
    $.foundation.customForms.appendCustomMarkup();
  }

  /* ALERT BOXES ------------ */
  $(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
    $(this).closest(".alert-box").fadeOut(function(event){
      $(this).remove();
    });
  });

  /* PLACEHOLDER FOR FORMS ------------- */
  /* Remove this and jquery.placeholder.min.js if you don't need :) */
  // $('input, textarea').placeholder();

  /* TOOLTIPS ------------ */
  $(this).tooltips();

  /* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
  //  $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
  //  $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
  //  $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
  //  $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});


  /* DROPDOWN NAV ------------- */

  var lockNavBar = false;
  /* Windows Phone, sadly, does not register touch events :( */
  if (Modernizr.touch || navigator.userAgent.match(/Windows Phone/i)) {
    $('.nav-bar a.flyout-toggle').on('click.fndtn touchstart.fndtn', function(e) {
      e.preventDefault();
      var flyout = $(this).siblings('.flyout').first();
      if (lockNavBar === false) {
        $('.nav-bar .flyout').not(flyout).slideUp(500);
        flyout.slideToggle(500, function(){
          lockNavBar = false;
        });
      }
      lockNavBar = true;
    });
    $('.nav-bar>li.has-flyout').addClass('is-touch');
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    });
  }

  /* FIX PAGE HEADER ON SCROLL ------------- */
    // fix sub nav on scroll
    // var $win = $(window), $nav = $('.page-header'), navTop = $('.page-header').length && $('.page-header').offset().top + 80, isFixed = 0;

    // function processScroll() {
    //   var i, scrollTop = $win.scrollTop();
    //   if (scrollTop >= navTop && !isFixed) {
    //     isFixed = 1;
    //     $nav.addClass('page-header-fixed');
    //   } else if (scrollTop <= navTop && isFixed) {
    //     isFixed = 0;
    //     $nav.removeClass('page-header-fixed');
    //   }
    // }// end processScroll
    // processScroll();

    // $win.on('scroll', processScroll);

  /* DISABLED BUTTONS ------------- */
  /* Gives elements with a class of 'disabled' a return: false; */

  /* SPLIT BUTTONS/DROPDOWNS */
  $('.button.dropdown > ul').addClass('no-hover');

  $('.button.dropdown').on('click.fndtn touchstart.fndtn', function (e) {
    e.stopPropagation();
  });
  $('.button.dropdown.split span').on('click.fndtn touchstart.fndtn', function (e) {
    e.preventDefault();
    $('.button.dropdown').not($(this).parent()).children('ul').removeClass('show-dropdown');
    $(this).siblings('ul').toggleClass('show-dropdown');
  });
  $('.button.dropdown').not('.split').on('click.fndtn touchstart.fndtn', function (e) {
    e.preventDefault();
    $('.button.dropdown').not(this).children('ul').removeClass('show-dropdown');
    $(this).children('ul').toggleClass('show-dropdown');
  });
  $('body, html').on('click.fndtn touchstart.fndtn', function () {
    $('.button.dropdown ul').removeClass('show-dropdown');
  });

  // Positioning the Flyout List
  var normalButtonHeight  = $('.button.dropdown:not(.large):not(.small):not(.tiny)').outerHeight() - 1,
      largeButtonHeight   = $('.button.large.dropdown').outerHeight() - 1,
      smallButtonHeight   = $('.button.small.dropdown').outerHeight() - 1,
      tinyButtonHeight    = $('.button.tiny.dropdown').outerHeight() - 1;

  $('.button.dropdown:not(.large):not(.small):not(.tiny) > ul').css('top', normalButtonHeight);
  $('.button.dropdown.large > ul').css('top', largeButtonHeight);
  $('.button.dropdown.small > ul').css('top', smallButtonHeight);
  $('.button.dropdown.tiny > ul').css('top', tinyButtonHeight);

  /* CUSTOM FORMS */
  $.foundation.customForms.appendCustomMarkup();
/*----------------------------------------------*/
/* TEMPLATE EXECUTIONS */


/*
    <!-- Mustache - homepage templates -->

    <!-- Mustache - homepage recommended template -->
    $.getJSON('../../content/json/recommended.json', function(data) {
        $.get('assets/mustache/recommended.mustache', function(template) {
            //alert('Load was performed.');
        var html = Mustache.to_html(template, data);
        $('.recommended').html(html);
        });

    });

    <!-- Mustache - homepage recommended template -->
    $.getJSON('../../content/json/recent.json', function(data) {
        $.get('assets/mustache/recent.mustache', function(template) {
            //alert('Load was performed.');
        var html = Mustache.to_html(template, data);
        $('.recent').html(html);
        });

    });

    <!-- Mustache - explore sections templates -->
    <!--

//  var jsonContent = ['../../content/json/explore_news.json'];
//  var mustacheTpl = ['assets/mustache/section.mustache'];
//  var partial = [];
//  var destination = [];
-->

<!-- Mustache - News -->
    $.getJSON('../../content/json/explore_news.json', function(data) {
        $.get('assets/mustache/section.mustache', function(template) {
            //alert('Load was performed.');
        var html = Mustache.to_html(template, data);
        $('.explore-sections').html(html);
        //alert('template applied.');
        });

    });

function buildFromTemplate(jsonContent, mustacheTpl, destination){
    this.jsonContent = jsonContent;
    this.mustacheTpl = mustacheTpl;
    //this.partial = partial;
    this.destination = destination;

    $.getJSON(this.jsonContent, function(data) {
        $.get('this.mustacheTpl, function(template) {
            //alert('Load was performed.');
        var html = Mustache.to_html(template, data);
        $(this.destination).append(html);
        //alert('template applied.');
        });
    });
}
//var exploreSection = new buildFromTemplate('../../content/json/explore_research.json', 'assets/mustache/section.mustache', '.explore-sections')
    <!-- Mustache - Journal Scans: Research -->
    //$.getJSON('../../content/json/explore_research.json', function(data) {
        //$.get('assets/mustache/section.mustache', function(template) {
            //alert('Load was performed.');
        //var html = Mustache.to_html(template, data);
        //$('.explore-sections').append(html);
        //alert('template applied.');
        //});

    //});

*/
   $('.explore-feature').orbit({pauseOnHover: false, directionalNav: false, bullets: true, fluid: '16x9'});
//   console.log("explore slider initialized");


});