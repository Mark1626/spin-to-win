if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise(async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()})),i.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},i=(i,n)=>{Promise.all(i.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(i)};self.define=(i,s,r)=>{n[i]||(n[i]=Promise.resolve().then(()=>{let n={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map(i=>{switch(i){case"exports":return n;case"module":return c;default:return e(i)}})).then(e=>{const i=r(...e);return n.default||(n.default=i),n})}))}}define("./service-worker.js",["./workbox-dce9cbc5"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/spin-to-win/favicon.ico",revision:"eb590a68037689e229f6ec68679daf3c"},{url:"/spin-to-win/index.html",revision:"9fe4aefb96117848e00e1504a44704dc"},{url:"/spin-to-win/logo.png",revision:"dcfa31a6a88c0f85a653726b0909450c"},{url:"/spin-to-win/logo192.png",revision:"3760d918c2a8801e6ff63b44857ecfe7"},{url:"/spin-to-win/logo512.png",revision:"8baf770db4d205f5c906f54a8498ed72"},{url:"/spin-to-win/manifest.json",revision:"b2ccee33acd62a310e4546c1ec11f494"},{url:"/spin-to-win/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"/spin-to-win/static/js/2.4404c29e.chunk.js",revision:"cda2a53cdc6b1133536fcfbe7ce32b70"},{url:"/spin-to-win/static/js/2.4404c29e.chunk.js.LICENSE.txt",revision:"216e537bacc64f9dbaabd26649a9ab95"},{url:"/spin-to-win/static/js/main.f4bdb5a3.chunk.js",revision:"dd779966dfe345c303d3e21472385be8"},{url:"/spin-to-win/static/js/runtime-main.cc15c827.js",revision:"6aeec1861ad29e0b070faa5c212fcc51"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/spin-to-win/index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]}))}));
