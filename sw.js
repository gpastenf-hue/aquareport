/* Service worker de ActivSludge Pro: permite abrir la app sin conexión.
   Al publicar una versión nueva, cambiar el nombre de la caché. */
var CACHE='activsludge-v2';
var ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js'];

self.addEventListener('install',function(e){
e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});

self.addEventListener('activate',function(e){
e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.map(function(k){if(k!==CACHE)return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});

/* La página se pide primero a la red (para recibir actualizaciones) y, si no
   hay conexión, se sirve desde la caché. El resto se sirve desde la caché. */
self.addEventListener('fetch',function(e){
if(e.request.method!=='GET')return;
if(e.request.mode==='navigate'){
e.respondWith(fetch(e.request).then(function(r){var cp=r.clone();caches.open(CACHE).then(function(c){c.put('./index.html',cp);});return r;}).catch(function(){return caches.match('./index.html');}));
return;}
e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));
});
