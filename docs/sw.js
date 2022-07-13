importScripts('/%3Crepository-name%3E/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/%3Crepository-name%3E/_nuxt/0246c68.js",
    "revision": "1503d8619de2d36241931abb05a3791f"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/03926ad.js",
    "revision": "0d689e797cd03d86cd5da8f4bc13b33a"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/4a6599c.js",
    "revision": "b933fa822514d1b40d38f840d0059664"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/633848f.js",
    "revision": "5997412e617a4f5be6c98e6f3d8560b6"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/6e68550.js",
    "revision": "4187f5ac505a6931bbc42645227d5106"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/6fc3f3c.js",
    "revision": "2ca46bb40f5db38a7e79d4998e580f62"
  }
], {
  "cacheId": "Stilko",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/.*'), workbox.strategies.networkFirst({}), 'GET')
