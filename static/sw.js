importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6179a56.js",
    "revision": "603e1d851fbcb10a7418faeaf9a3b50a"
  },
  {
    "url": "/_nuxt/6475dd4.js",
    "revision": "30833412f315d0abd4263d80ad50f6cc"
  },
  {
    "url": "/_nuxt/92da059.js",
    "revision": "e6417e01813efd009b3546cfadf76ae5"
  },
  {
    "url": "/_nuxt/bbe34a8.js",
    "revision": "7db2d24d54581f46224312dfb79a5edb"
  },
  {
    "url": "/_nuxt/c003676.js",
    "revision": "b18a6f401c5d25f96e1a7b076f32e7fa"
  },
  {
    "url": "/_nuxt/ed839a1.js",
    "revision": "cb38e107c4be7c914eaa922b31d7c15c"
  }
], {
  "cacheId": "Stilko",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
