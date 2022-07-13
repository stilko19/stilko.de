if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/%3Crepository-name%3E/sw.js', {
    scope: '/%3Crepository-name%3E/'
  }).then(function(registration) {
    window.$sw = registration
  }).catch(function(error) {
    console.error('Service worker registration failed:', error)
  })
} else {
  console.warn('Service workers are not supported.')
}
