self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('shadowscript').then(function(cache) {
return cache.addAll([
'./',
'./index.html',
'./index.html?homescreen=1',
'./?homescreen=1',
'../css/master.css',
'../js/master.js',
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