if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const f=e=>a(e,d),n={module:{uri:d},exports:s,require:f};i[d]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(r(...e),s)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/07/24/hello-world/index.html",revision:"1d3c6e9f4359b0c101a2367eeedd973f"},{url:"2022/07/24/My-first-blog/index.html",revision:"948f8e52dae38805ebb72d67e91e5f97"},{url:"about/index.html",revision:"98a79bdd4767985f5569cbed9db6b1c7"},{url:"archives/2022/07/index.html",revision:"0260d7257d0b6aa84676d87315aaa76e"},{url:"archives/2022/index.html",revision:"2f4c7949b355d694c9345df22330ca48"},{url:"archives/index.html",revision:"ef6dec36c7310ae04636a81778b86a86"},{url:"categories/index.html",revision:"69d23262a1afaa5cd89ee3fbb98ee318"},{url:"css/index.css",revision:"b115a5889e1820d1a0bd1a6a2eafc9b5"},{url:"css/test1.css",revision:"37adc38c680d3ce0afc68e5a36a85e64"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"9022beca985ac2919a65aa089f58eec9"},{url:"img/ava.png",revision:"a2699b2bdace3360d20c9f1706a7a3ce"},{url:"img/ava2.png",revision:"8c27c622ff690b8dbfd8a0f012c71f67"},{url:"img/ava3.png",revision:"92fc26b195c6a62d93f766c9018aa67c"},{url:"img/ava4.jpg",revision:"eb385ec8ba3853cda7357d7f55742930"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/img1.jpg",revision:"66c00d3f0ee7e9a6cd3cc342344aae16"},{url:"img/img2.jpg",revision:"a159e95df1b965f82b1efa5750eac745"},{url:"img/img3.jpg",revision:"1efbc0b38708d9c9a11a757641f1ebab"},{url:"img/img4.jpg",revision:"15151da2f155379c6097d4f50632c2f0"},{url:"img/img5.jpg",revision:"a6432bc5c54f2d50ef36903d95ec3fae"},{url:"img/img6.jpg",revision:"1ced2a2e1223d7e3ef5226d116d1935a"},{url:"img/img7.jpg",revision:"67786bcfd72487f7f53f617a2297529f"},{url:"img/img8.jpg",revision:"45f86ee448142c1f72fe2ebbcf2b9ed8"},{url:"img/img9.jpg",revision:"0514937f57c7244881eaf95797545d9d"},{url:"img/index.jpg",revision:"66c00d3f0ee7e9a6cd3cc342344aae16"},{url:"img/wechat.jpg",revision:"448fe4092be2475cee8c687956698a8a"},{url:"index.html",revision:"49c109e03d140de19015af8aeda2e3f4"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"5849d570445f796235e2b36e478cc73f"},{url:"messageboard/index.html",revision:"92943b5fd4291bcead7c24422e280642"},{url:"myself/index.html",revision:"8ac4e69ca42793e96a85082035e8880e"},{url:"tages/index.html",revision:"eac90bc2007819f73c94259c46900718"},{url:"tags/English/index.html",revision:"39b8e1cb1d4bcbfd1028b1d2801a52ba"},{url:"tags/index.html",revision:"f8f660b57d7c0a46ce821aedadef1b02"},{url:"timeline/index.html",revision:"934610a7a14cc14299cb6cc47ef61fb7"}],{})}));
//# sourceMappingURL=service-worker.js.map
