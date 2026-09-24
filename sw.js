/* Minimal service worker: makes the app installable. It does NOT cache anything,
   so every GitHub push shows up immediately (no stale app.js). */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
