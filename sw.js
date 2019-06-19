// install service worker
self.addEventListener('install', evt => {
    console.log('[Service worker has been instaled]');
})

// activate service worker
self.addEventListener('activate', evt => {
    console.log('[Service worker has been activated]')
})

// fetch event
self.addEventListener('fetch', evt => {
    console.log('[Fetch event]', evt);
})