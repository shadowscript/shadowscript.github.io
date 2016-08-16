self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('airhorner').then(function(cache) {
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