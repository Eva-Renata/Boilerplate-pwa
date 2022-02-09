const CACHE_NAME = 'my-site-cache';

const urlsToCache = [
    './',
    './index.css',
    'assets/images/icons/icon512.png',
    './index.html', 
    './info.html'
];

//cache kører en gang når jeg installerer appen

self.addEventListener('install', function(event) {
    //perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)

        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener('fetch', function(e){
    //console.log('intercept req:' + e.request.url);

    //caching strategies goes here
})