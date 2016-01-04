(function(){
  var options = INSTALL_OPTIONS;

  var statusEl = document.createElement('eager-online-state-app-state-indicator');
  document.body.appendChild(statusEl);
  statusEl.setAttribute('is-online', 'true');

  var render = function() {
    if (options.showWhenOnline) {
      statusEl.setAttribute('show-when-online', '');
    } else {
      statusEl.removeAttribute('show-when-online');
    }
  };
  render();

  var checkOnlineStatus = function() {
    var img = new Image();
    img.onload = function() {
      statusEl.setAttribute('is-online', '');
    };
    img.onerror = function() {
      statusEl.removeAttribute('is-online');
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
