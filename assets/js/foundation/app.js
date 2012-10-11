;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar({breakPoint: 900}) : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

  $('input, textarea').placeholder();

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

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
    
$('.explore-feature').orbit({pauseOnHover: false, directionalNav: false, bullets: true, fluid: '16x9'});
//   console.log("explore slider initialized");

//User-status
$('a[href="#action-register"]').click(function(){
  $('body').removeClass('logged-out').addClass('logged-in');
});
$('a[href="#action-sign-out"]').click(function(){
  $('body').removeClass('logged-in').addClass('logged-out');
});

//Modals
//Import Modals
$.get('assets/mustache/modals.mustache', function(template) {
  var html = Mustache.to_html(template);
  $('body').append(html);
});
