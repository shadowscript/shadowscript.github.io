// Register service worker and files to be cached
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('shadowscript2').then(function(cache) {
return cache.addAll([
'./',
'./index.html',
'./index.html?homescreen=1',
'./?homescreen=1',
'../css/master.css',
'../css/semantic.min.css',
'../js/master.js',
'../js/semantic.min.js',
'../js/typed.js',
'../assets/images/binary.jpg',
'../assets/images/binaryred.jpg'
]);
})
);
});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});


// Delete old service workers
self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['shadowscript2'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});