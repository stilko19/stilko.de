importScripts('/%3Crepository-name%3E/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([], {
  "cacheId": "Stilko",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/.*'), workbox.strategies.networkFirst({}), 'GET')
