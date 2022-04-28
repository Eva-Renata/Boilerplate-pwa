const CACHE_NAME = 'my-site-cache';

//hvad cacher vi
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

// self.addEventListener('fetch', function(e){
//     console.log('intercept req:' + e.request.url);

//     //caching strategies goes here
// })

//Stale while revalidate cache strategi implementeret
self.addEventListener('fetch', event => {
    event.respomdWith(
        caches.open('my-site-cache').then(cache => {
            return cache.match(event.request).then(response => {
                const fetchPromise = fetch(event.request)
                .then(networkResponse => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
                return response || fetchPromise;
            });
        }),
    );
});