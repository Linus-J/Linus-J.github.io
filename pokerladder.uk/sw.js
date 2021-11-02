"use strict";

const CACHE_NAME = 'pokerladder.uk-1600170532526';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/contact-us","/rankings","/downloads","/privacy-policy"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/4524c1974583bbdd/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/bb0ceed970ad9782/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/5af8685f221cefdf/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/a686a28498779792/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/6cfd2ee91abfb071/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-GB","//img1.wsimg.com/blobby/go/gpub/79fb68164481d54f/script.js","//img1.wsimg.com/blobby/go/gpub/8828666089615103/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/1a345f78ae3b64b/script.js","//img1.wsimg.com/blobby/go/gpub/319422a9e575f393/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.67.8.js","//img1.wsimg.com/blobby/go/gpub/6dffa3ce802662b0/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/4065f39544385145/script.js","//img1.wsimg.com/blobby/go/gpub/5ee8908070700024/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/eff4dee73008007/script.js","//img1.wsimg.com/blobby/go/gpub/371c18f3a9e22f67/script.js","//img1.wsimg.com/blobby/go/gpub/616c590b3856982a/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/ab0fa19fbd93d3a9/script.js","//img1.wsimg.com/blobby/go/gpub/46e1d7900bc2a322/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/20e53c2349c59144/script.js","//fonts.googleapis.com/css?family=Fjalla+One:400&display=swap","//fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i&display=swap","//fonts.googleapis.com/css?family=Source+Sans+Pro:600,900&display=swap","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/6110644a4473c7c/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/c36721de060fbde/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/e0d80dcc1c2eac1/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/e047bd36c0ef3b0f/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/97e2919d8afd9f47/script.js","//img1.wsimg.com/blobby/go/gpub/8426b58d3df5fc10/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/519eb38a48c9f6c2/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/56b461fd92826775/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/ea6527961d931821/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/513e6881cad455b9/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/7ae22b93deba1864/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/1530cbfd71840def/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/58ac38a7f2690d1e/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/d1f2309592cda8df/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/55396999fc531ae2/script.js","//img1.wsimg.com/blobby/go/gpub/8efb217b41946ba0/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/8b1e1302af95ae27/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/584c8e481b88dbbb/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/95f0deb73a3bdeae/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/424e431fc2d7d161/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/c70f303be6b4bf2f/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/3e9ec11ab4e4fef/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/3046d59870013345/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/92cc6733c9469b43/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/a5d29d76e33bb857/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/35ea5d24c461adaf/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/ad84b2c70a697cd8/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/a1a9820d939f7131/styles.css","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/f89183cf69921d04/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/c64b4a926e603dd7/script.js","//img1.wsimg.com/blobby/go/79791148-6c18-45bf-b9ce-f15cb6b4310f/gpub/16f4811209e833f1/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://79791148-6c18-45bf-b9ce-f15cb6b4310f.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect","https://calendar.apps.dev-secureserver.net","https://calendar.apps.test-secureserver.net","https://calendar.apps.secureserver.net"]');
const networkOnlyUrlsRegex = JSON.parse('["pokerladder.uk/m/api/.*","pokerladder.uk(?:/.*)?/ola/services/.*","pokerladder.uk/ola/meetings/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/79791148-6c18-45bf-b9ce-f15cb6b4310f/feed/post/","https://blog.apps.secureserver.net/v1/website/79791148-6c18-45bf-b9ce-f15cb6b4310f/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["pokerladder.uk(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function (event) {
  // eslint-disable-next-line no-console
  console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources());
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    if (!networkResponse.ok) {
      return networkResponse;
    }

    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        networkResponse.ok && cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);