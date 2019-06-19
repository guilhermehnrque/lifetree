const static_cache_name = 'shell-cache';
const assets =[
    '/',
    'index.html',
    'src/js/app.js',
    'src/js/main_script.js',
    'src/css/main_style.css',
    'src/css/main_style2.css',
    'src/css/muda.png',
    'src/css/tree.jpg',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
];

// install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(static_cache_name).then(cache => {
            console.log('[Caching all shell assets]');
            cache.addAll(assets);
        })
    );
});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('[Service worker has been activated]')
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('[Fetch event]');
});