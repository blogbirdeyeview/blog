if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const r=e=>s(e,n),f={module:{uri:n},exports:c,require:r};i[n]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(d(...e),c)))}}define(["./workbox-8bb8c46f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"birdeyeview"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8d00ff138eebaea95c5eede03b133e74"},{url:"archives/index.html",revision:"a433096f59009919dd70c56e48992f28"},{url:"assets/css/stylesheet.1389930c12bc08d2fe681a01a42a22c77bd43ab7f26dc683faf36607848731b5.css",revision:"704603c8165dc2f683b00a571dc0fdfc"},{url:"assets/js/highlight.f413e19d0714851f6474e7ee9632408e58ac146fbdbe62747134bea2fa3415e0.js",revision:"e3a5012498e7b490e356d22cb7035b6d"},{url:"assets/js/search.fc4d3d259dc135ab09b5eda7510566d64eb9fe1769e5f728f1b0a7e2a992b39e.js",revision:"a02ea9c4720f7853292e12aa14c4ccc0"},{url:"bootstrap.css",revision:"0614b4d06ff500e6b246e0347c5fc3e7"},{url:"bootstrap.min.css",revision:"ff4f48f7e642c28bc50cdfd0f986c418"},{url:"categories/index.html",revision:"a11c643353a1c3af98c8c7b5fda22dad"},{url:"categories/trip/index.html",revision:"1707b159d25ac2a3d1b82e857c1fc47d"},{url:"categories/trip/page/1/index.html",revision:"5a7daf8d0af1c5cffb22d883a179c2d9"},{url:"categories/trip/page/2/index.html",revision:"42785772a0b22750ad56f730c0cc028b"},{url:"country/index.html",revision:"f907a450b9425525deec76f924c9191e"},{url:"index.html",revision:"dbc1411d4baaf386d62313158c99f00e"},{url:"page/1/index.html",revision:"af4e4933fc8d3c779baf3560d3cf95e8"},{url:"page/2/index.html",revision:"a603423f68128b30e2e79b459576282b"},{url:"posts/chile/index.html",revision:"c350d98de22b0c09c81fedc9ec31894c"},{url:"posts/chile/santiago/index.html",revision:"69a864f69019b903c645e5018ee061d7"},{url:"posts/chile/valparaiso/index.html",revision:"1f241edbc584250bedc13cdba7623e69"},{url:"posts/chile/vicunna/index.html",revision:"441176df6a3d87db8793404507f79765"},{url:"posts/denmark/copenhagen/index.html",revision:"df66be1842047b77c76e20ac7b0732fc"},{url:"posts/denmark/index.html",revision:"9b0bb02422ab9e061edd4f03c4023409"},{url:"posts/england/index.html",revision:"3253b8d00c7bb558613b957f9f2b65ab"},{url:"posts/england/london/index.html",revision:"45aca21688084386f99a326cb5fae70e"},{url:"posts/france/index.html",revision:"9c52ebe0a9f5bc5c80782a05dc9e5b03"},{url:"posts/france/paris/index.html",revision:"c93873ec2afb2fe3f0c96c147495b55d"},{url:"posts/france/strasbourg/index.html",revision:"54699373f38d5ae33385d0faf2d8a85a"},{url:"posts/index.html",revision:"1a31935362ed20496168e7010d8a9faa"},{url:"posts/norway/index.html",revision:"6cf65d34dbc621512ad0f983633d2ae6"},{url:"posts/norway/tromso/index.html",revision:"645575e0ec1ce4e7ecc821d9d62f3e2b"},{url:"posts/page/1/index.html",revision:"2a12083041d90b22878f45fc680a9345"},{url:"posts/page/2/index.html",revision:"383ebeb954c576b1505f3c80ae19f569"},{url:"posts/spain/granada/index.html",revision:"7e883d6d3f52f26615f39aea8e4ff4c8"},{url:"posts/spain/index.html",revision:"a65e236dc8678c8e26b3274d1a0463ec"},{url:"posts/spain/madrid/index.html",revision:"4a7a954afb909f63d785dcab1e2d481f"},{url:"posts/spain/salamanca/index.html",revision:"16c96a4a9bb4689c30649b7d0583649d"},{url:"posts/usa/index.html",revision:"c7fb1d3e66981addf235eef4e8abd535"},{url:"posts/usa/sandiego/index.html",revision:"d1c51f0f74047e778355bd9dbadf97ff"},{url:"search/index.html",revision:"c98f5b70f2091fc9a6aecaa1e556fb0c"},{url:"stylespregosystem.css",revision:"5b184d61743f93c0530c78d4d9891bbe"},{url:"tags/chile/index.html",revision:"e40a4f1da8f5be82fd51539bf7f3eec0"},{url:"tags/chile/page/1/index.html",revision:"a5f7c0932b072e9364e32e4335e7317e"},{url:"tags/denmark/index.html",revision:"34102e7c8b0a8bd1f4c8ac008b8ba82f"},{url:"tags/denmark/page/1/index.html",revision:"4b1dd3b0b3ec86f9aad80e02b5be8f8a"},{url:"tags/england/index.html",revision:"95ec0e321f0a657bb6d8238e83e76600"},{url:"tags/england/page/1/index.html",revision:"a9e8f170c89eefefb64a9c7b59ce2ce8"},{url:"tags/france/index.html",revision:"3db93c3c12b01db82ed5c0202f1fca13"},{url:"tags/france/page/1/index.html",revision:"5b89db5325ad0ebf8b4438fe01ba3a08"},{url:"tags/index.html",revision:"df08dffb1f11efb729100122151e1509"},{url:"tags/norway/index.html",revision:"ff8abc1c2672374830f47e9ae373de3a"},{url:"tags/norway/page/1/index.html",revision:"5fd6239628dd52cb47f10bf9d5a888a2"},{url:"tags/spain/index.html",revision:"72394c37dd39e2a6d61e30fbd1ccc4c3"},{url:"tags/spain/page/1/index.html",revision:"2dd5728dcf88f3e1f477c60bd3f39646"},{url:"tags/usa/index.html",revision:"4ce45e823575c146977dde1b718ebb3e"},{url:"tags/usa/page/1/index.html",revision:"ee8c2e24035316b547e2673b31977a40"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/404.html"))),e.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new e.CacheFirst,"GET"),e.registerRoute(/\.(?:json|xml)$/,new e.NetworkOnly,"GET")}));
//# sourceMappingURL=sw.js.map