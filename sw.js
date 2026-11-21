// Seekarte Service Worker: App offline verfügbar machen und Kartenkacheln speichern.
const APP_CACHE = 'seekarte-app-v3';
const TILE_CACHE = 'seekarte-tiles';
const APP_FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'leaflet/leaflet.js', 'leaflet/leaflet.css',
  'leaflet/images/layers.png', 'leaflet/images/layers-2x.png',
  'icon-180.png', 'icon-192.png', 'icon-512.png'
];
const TILE_PATTERN = /(\/\d+\/\d+\/\d+(@2x)?\.(png|jpe?g|webp)|\/tile\/\d+\/\d+\/\d+)(\?.*)?$/i;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('seekarte-app-') && k !== APP_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Kartenkacheln: erst Speicher, dann Netz (und dabei speichern)
  if (url.origin !== location.origin && TILE_PATTERN.test(url.pathname + url.search)) {
    e.respondWith(
      caches.open(TILE_CACHE).then(async cache => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok || res.type === 'opaque') cache.put(req, res.clone()).catch(() => {});
        return res;
      })
    );
    return;
  }

  // App-Dateien: erst Netz (damit Updates ankommen), ohne Netz aus dem Speicher
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(res => {
        if (res.ok) caches.open(APP_CACHE).then(c => c.put(req, res.clone()));
        return res;
      }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
  }
});
