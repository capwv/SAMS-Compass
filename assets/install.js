/* SAMS Compass - PWA install button + service worker registration */
(function () {
  'use strict';

  var btn = document.getElementById('installBtn');
  var iosHint = document.getElementById('iosInstallHint');
  var deferredPrompt = null;

  function isInstalled() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      window.navigator.standalone === true;
  }

  function isIOS() {
    var ua = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  if (btn && !isInstalled()) {
    if (isIOS()) {
      /* iOS has no beforeinstallprompt: the button shows how-to steps instead */
      btn.hidden = false;
      btn.addEventListener('click', function () {
        if (iosHint) iosHint.hidden = !iosHint.hidden;
      });
    } else {
      window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        btn.hidden = false;
      });
      btn.addEventListener('click', function () {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function (choice) {
          if (choice.outcome === 'accepted') btn.hidden = true;
          deferredPrompt = null;
        });
      });
    }
    window.addEventListener('appinstalled', function () {
      btn.hidden = true;
      if (iosHint) iosHint.hidden = true;
    });
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* offline support optional */ });
    });
  }
})();
