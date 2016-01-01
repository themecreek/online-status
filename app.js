jQuery(document).ready(function($){
    
    if (!window.addEventListener || !window.localStorage || !window.requestAnimationFrame)
    return;
    var options = INSTALL_OPTIONS;
    
  function setOptions(opts) {
    options = opts;

    render();
    
  }
// detect internet connection is on or not and display notice, do a better custom version then the one used on rainbow , using http://stackoverflow.com/questions/29802403/how-to-check-if-the-user-is-online-using-javascript-or-any-library
    $("body").append("<div class='onlinestate'> </div>");
   var $onlinestate = $('.onlinestate');
   var $body = $('body');
   // change this below to false if you want it to ONLY show up when you lose internet connection
   if (options.enable === true) {
        var appear = true;
      } else if (options.enable === false) var appear = false;
   
   // ********************
   $(".onlinestate").hide("fast"); 
  
   
   var checkOnlineState = function() {
   if (appear === false) { $(".onlinestate").hide("fast");   $(".off .onlinestate").show("fast"); } else if (appear === true) $(".onlinestate").show("fast"); $(".off .onlinestate").show("fast");
     function onLine() {
       console.log("online");
       $body.removeClass('off').addClass('on');
			 $onlinestate.text('Online');
     }

     function offLine() {
       console.log("offline");
       $body.removeClass('on').addClass('off');
			 $onlinestate.text('Offline');
     }
     var i = new Image();
     i.onload = onLine;
     i.onerror = offLine;
     i.src = 'http://www.google-analytics.com/__utm.gif';
     // fetch text and insert as title
    var title = $(".onlinestate").text();
    $(".onlinestate").attr("title", title);  
    };
   
    var refreshId = setInterval(checkOnlineState, 10000);
    checkOnlineState();   
        // We keep track of the last element to allow us to restore the removed element
    // when we do live updating of the preview.  Details:
    // https://eager.io/developer/docs/install-json/preview#dealing-with-element-fields
    
 
  // This is used by the preview to enable live updating of the app while previewing.
  // See the preview.handlers section of the install.json file to see where it's used.

      window.onlinestatus = {
    setOptions: setOptions
  };
 });   


 

  

  



