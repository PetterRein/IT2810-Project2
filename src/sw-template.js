// Code form:
//https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#call_wzxhzdk7injectmanifestwzxhzdk8

if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 😬');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

    workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        new workbox.strategies.CacheFirst()
    );

} else {
    console.log('Workbox could not be loaded. No Offline support 😬');
  }
}