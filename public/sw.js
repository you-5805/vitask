if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aINsCi8_I0RTBNds4UXXn/_buildManifest.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/aINsCi8_I0RTBNds4UXXn/_middlewareManifest.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/aINsCi8_I0RTBNds4UXXn/_ssgManifest.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/321-4560dae03b455561.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/674-aef2613f6fc56131.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/675-69abce8ee6e53914.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/main-ac2e80b86bbc5c80.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/_app-caceee2bc4937253.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/dashboard-d39390110f227134.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/index-b31716a48ceebec4.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/new-lecture-f7dcd483db4cf8e6.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/new-report-3d86aaea560b8e59.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/pages/privacy-95eaeb4badbf3aef.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/chunks/webpack-2392ddee38557cd3.js",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/_next/static/css/7be834ff9725a6a4.css",revision:"aINsCi8_I0RTBNds4UXXn"},{url:"/empty.png",revision:"4eb331ea9d0f306b387b3dd963a3511e"},{url:"/google-login.png",revision:"5bbde2ea9bdea9b5db4a71f9e03719ac"},{url:"/manifest.json",revision:"dc9199cc41922b5eae99e4e60cd0d183"},{url:"/top.png",revision:"f2bdcaf74537d140c0dbd809452f03cf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));