if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),l={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-42674def"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"2347ba84e184e4d124d51f0cb158cb81"},{url:"install.bundle.js",revision:"11b2a9574810d490c23614164d7f5eb7"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"2f607a22551693497615780fabd56bd6"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"sw.js",revision:"c82bb34596d7bb730ca3f56a65cc9f0f"}],{})}));
