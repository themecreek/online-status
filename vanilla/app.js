(function(){
 // use the files inside vanilla folder for using this app without Eager.io 
 // change below to TRUE To show it or FALSE to hide the online status until you've lost connection. 
  var appear, onstatus;
  appear = true;
  onstatus = document.createElement('eager-online-status-app-status-indicator');
  document.body.appendChild(onstatus);
  onstatus.setAttribute('is-online', 'true');
  var render = function() {
    if (appear === true) {
      onstatus.setAttribute('show-when-online', '');
    } else {
      onstatus.removeAttribute('show-when-online');
    }
  };
  render();
  var checkOnlineStatus = function() {
    var img = new Image();
    img.onload = function() {
      onstatus.setAttribute('is-online', '');
    };
    img.onerror = function() {
      onstatus.removeAttribute('is-online');
    };
    img.src = '//www.google-analytics.com/__utm.gif';
  };
  checkOnlineStatus();
  setInterval(checkOnlineStatus, 10 * 1000);
})();
