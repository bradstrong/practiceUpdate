// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
//window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
//(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
//(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// @codekit-append "js/foundation/jquery.js"
// @codekit-append "js/foundation/jquery.foundation.accordion.js"
// @codekit-append "js/foundation/jquery.foundation.alerts.js"
// @codekit-append "js/foundation/jquery.foundation.buttons.js"
// @codekit-append "js/foundation/jquery.foundation.forms.js"
// @codekit-append "js/foundation/jquery.foundation.mediaQueryToggle.js"
// @codekit-append "js/foundation/jquery.foundation.navigation.js"
// @codekit-append "js/foundation/jquery.foundation.orbit.js"
// @codekit-append "js/foundation/jquery.foundation.reveal.js"
// @codekit-append "js/foundation/jquery.foundation.tabs.js"
// @codekit-append "js/foundation/jquery.foundation.tooltips.js"
// @codekit-append "js/foundation/jquery.foundation.topbar.js"
// @codekit-append "js/foundation/jquery.placeholder.js"
// @codekit-append "js/foundation/jquery.offcanvas.js"