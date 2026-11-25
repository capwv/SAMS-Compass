/* SAMS Compass moved to SAMS Hub. This worker unregisters itself, clears old
   caches, and sends open tabs to the new site so stale cached pages disappear. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) { return Promise.all(ks.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.registration.unregister(); })
      .then(function () { return clients.matchAll({ type: 'window' }); })
      .then(function (cs) { cs.forEach(function (c) { c.navigate('https://capwv.github.io/SAMS-Hub/'); }); })
  );
});
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
