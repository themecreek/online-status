(function(){
  var options = INSTALL_OPTIONS;

  var statusEl = document.createElement('eager-online-status-app-status-indicator');
  document.body.appendChild(statusEl);
  statusEl.setAttribute('is-online', 'true');

  var render = function() {
    if (options.showWhenOnline) {
      statusEl.setAttribute('show-when-online', '');
    } else {
      statusEl.removeAttribute('show-when-online');
    }
    checkform = document.forms.length;
    var $checktrue;
     if (checkform >= 1) {   
    if (options.DisableSubmit) {
        checktrue = true;   
    } else {
        checktrue = false;
    }  
    }  
  };
  render();

  var checkOnlineStatus = function() {
    var img = new Image();
    img.onload = function() {
      statusEl.setAttribute('is-online', ''); 
      if (checktrue === true) {
      var submitButtons = document.querySelectorAll('input[type=submit], button'); for (var i=0; i < submitButtons.length; i++) submitButtons[i].disabled = false;
      }
    };
    img.onerror = function() {
      statusEl.removeAttribute('is-online'); 
      
      if (checktrue === true) {
      var submitButtons = document.querySelectorAll('input[type=submit], button'); for (var i=0; i < submitButtons.length; i++) submitButtons[i].disabled = true;
      }    
    };
    img.src = '//www.google-analytics.com/__utm.gif';
  };

  checkOnlineStatus();
  setInterval(checkOnlineStatus, 10 * 1000);

  INSTALL_SCOPE = {
      setOptions: function(opts) {
      options = opts;

      render();
      checkOnlineStatus();
    }
  };
})();
