"use strict";var workboxVersion="6.3.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"ChangLu's Blog"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"fce4daeb26ae08c6535c609c1d5b4171",url:"./2021/10/26/vientianeSky/1/index.html"},{revision:"079ca00b514d35bed72892917cd7be39",url:"./2021/11/01/computerNetwork/1/index.html"},{revision:"8065abf1dc71a717ff0d0bd7475941d2",url:"./2021/11/11/computerNetwork/1/index.html"},{revision:"5cdd2a950417c561c8e8c7bf2b63ad91",url:"./2021/11/22/vientianeSky/1/index.html"},{revision:"7f3431b549fc9060847e36bcba628950",url:"./2021/12/09/javaScript/1/index.html"},{revision:"c732aa3dc32035b033fb6369b62d189c",url:"./404.html"},{revision:"754adcbbb93fbb4693e29a0833f2688d",url:"./about/index.html"},{revision:"139cbdf10b10adb383016253d687ecbf",url:"./archives/2021/10/index.html"},{revision:"ae645f29be4d35b70888e9098f2f566c",url:"./archives/2021/11/index.html"},{revision:"785dae4c193f2e344d4652c4e321a6fb",url:"./archives/2021/12/index.html"},{revision:"1a6b5e19cc1274b06278d46782c66f58",url:"./archives/2021/index.html"},{revision:"dd52562ca2c9928523cbc97ce0ecd7f6",url:"./archives/index.html"},{revision:"af50f8a1147ee90d9b2887c9897e79c0",url:"./categories/computerNetwork/index.html"},{revision:"d4a14a5c0b249812e92e79d953b63271",url:"./categories/index.html"},{revision:"288d8f80da1c59a2db7f5e802e75d30d",url:"./categories/javaScript/index.html"},{revision:"82751b6ebca6b9da26303700ae52f11f",url:"./categories/vientianeSky/index.html"},{revision:"0049fd89d70c5cdf3ea5ebddd1ccbed1",url:"./css/color@1.0.1.css"},{revision:"c038b8649192e11247dcd0c5d423774a",url:"./css/custom@1.0.1.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"3c3714638b02a525ef574d235d7106f5",url:"./css/index.css"},{revision:"5059bfd539e3c1a612d79358b3450308",url:"./css/timepiece@1.0.0.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"d0cc8926d89f7480c16fa4966eea115d",url:"./img/siteicon/manifest.json"},{revision:"e660731785c75d8cafd79bae240b4a02",url:"./index.html"},{revision:"4bbe464dd928dc7958c3941d8ced25aa",url:"./js/color-thief.js"},{revision:"c2d6628801fd2dc0ea1739901cf5d99b",url:"./js/main.js"},{revision:"d36a279469bce7854189f9481d3d0860",url:"./js/search/algolia.js"},{revision:"4f79884e04a163f9348c3961cf84d50e",url:"./js/search/local-search.js"},{revision:"205986ac4cf7561aee17f187cfe7e72f",url:"./js/timepiece.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"c48b2ab3d7df38b080ba251e0b3ef8f4",url:"./link/index.html"},{revision:"adbd386ad24e5b7e151617dc0708ca3a",url:"./mmhouse/index.html"},{revision:"21fcf44ad284be3d063ce596eda93011",url:"./movies/index.html"},{revision:"7a188da587d0fba7414dbe184b8e58d7",url:"./music/index.html"},{revision:"2303f737a838010dd7113f570d778138",url:"./pwa/manifest.json"},{revision:"c2faaf3ddb265841884eb84f6aa3d562",url:"./strangeAndInterestingStory/index.html"},{revision:"67f46471604f61e2e2b85bd9ac542555",url:"./tags/blog/index.html"},{revision:"117e2e28014df6aa525b1494f9766545",url:"./tags/butterfly/index.html"},{revision:"c1f118fadaea82cad33e0b51b03f957e",url:"./tags/hexo/index.html"},{revision:"87a9514aa964660e5aaa61f4a53f33ce",url:"./tags/HTTP/index.html"},{revision:"f8a2605d48b95c39baa0cb370e4f7212",url:"./tags/index.html"},{revision:"ac5f569cfbc9fdffbd43c5452a61ed94",url:"./tags/networkProtocol/index.html"},{revision:"f7206f08f63a4ef8d084341592eb5e4d",url:"./tags/trisomy/index.html"},{revision:"2ff5f2b85746c9f65bb8286a5447cb5c",url:"./vientianeSky/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();