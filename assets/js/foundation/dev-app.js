(function devsiteInit(){

  // Register Alternate Typekit Kit
  (function() {
    var config = {
      kitId: 'ecr7wly',
      scriptTimeout: 3000
    };
    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
  })();

// A-B Testing function
//js keycodes a=65, b=66

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
  });

// Jira Issue Collector
/*
jQuery.ajax({
    url: "https://practiceupdate.atlassian.net/s/en_US-pdztjn-418945332/6030/31/1.3.4/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=38933578",
    type: "get",
    cache: true,
    dataType: "script"
});
*/
})();