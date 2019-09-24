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
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "b1c002f17103b5550e046831b70939d1"
  },
  {
    "url": "logo192.png",
    "revision": "581fa1d82b7152e685510b51d48edd3e"
  },
  {
    "url": "logo512.png",
    "revision": "260d57586012b0ed1ae78accc0bf7083"
  },
  {
    "url": "precache-manifest.ad1fd6f4c8828e11ae8bb50050c5392d.js",
    "revision": "ad1fd6f4c8828e11ae8bb50050c5392d"
  },
  {
    "url": "service-worker.js",
    "revision": "c9ab970e34ba7b479cb0afb13766d606"
  },
  {
    "url": "static/css/main.1417bbf5.chunk.css",
    "revision": "fca8b8db133fa3b69c5a6aae1f375fc9"
  },
  {
    "url": "static/js/2.970f7559.chunk.js",
    "revision": "a8b1c350c270cfc7e113a18d11f2ac20"
  },
  {
    "url": "static/js/main.cd0ed8a3.chunk.js",
    "revision": "19dbe6d16e4e1bc6d350c1b29ef497fb"
  },
  {
    "url": "static/js/runtime-main.6e4dad28.js",
    "revision": "41492f97c2223308f627142fa6ef2af2"
  }
]);

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