!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(6),e.exports=t(1)},function(e,n,t){var r=t(2);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(3)(!1)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  background-color: #343d46;\n  overflow-x: hidden;\n  font-family: 'Open Sans', sans-serif;\n}\n\na:visited {\n  color: #000;\n}\n\n.search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 0;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.search-input {\n  width: 50%;\n  height: 30px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  padding: 0 10px;\n}\n\n.search-input:active,\n.search-submit:active,\n.search-input:focus,\n.search-submit:focus {\n  outline: none;\n}\n\n.search-submit {\n  width: 50px;\n  height: 30px;\n  border: none;\n  background-color: transparent;\n}\n\n.search-submit:hover {\n  cursor: pointer;\n}\n\n.fa-search {\n  color: #fff;\n  font-size: 20px;\n}\n\n.image {\n  margin-bottom: 5px;\n  margin-top: 10px;\n}\n\n.title {\n  display: block;\n  width: 100%;\n  min-height: 80px;\n  font-size: 17px;\n  font-weight: bold;\n  padding: 0 10px;\n  color: #000;\n  text-decoration: none;\n}\n\n.date,\n.author,\n.views {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-bottom: 5px;\n  font-size: 16px;\n}\n\n.fa-user,\n.fa-calendar-alt,\n.fa-eye {\n  position: absolute;\n  left: 20px;\n  top: 2px;\n  color: grey;\n}\n\n.fa-eye {\n  left: 19px;\n}\n\n.description {\n  font-style: italic;\n  height: 77px;\n  margin: 7px 5px 12px 5px;\n  padding: 0 10px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  font-size: 14px;\n}\n\n.page {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 25px;\n  height: 25px;\n  margin: 0 5px;\n  background-color: #cb3131;\n  color: #fff;\n  text-align: center;\n  padding-top: 4px;\n  border-radius: 50%;\n  font-size: 13px;\n}\n\n.first-page,\n.prev,\n.next {\n  display: none;\n  width: 25px;\n  height: 25px;\n  margin: 0 5px;\n  padding: 5px 10px;\n  border-radius: 50%;\n  background-color: #fff;\n  border: none;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n\n.first-page:focus,\n.prev:focus,\n.next:focus {\n  outline: none;\n  background-color: #fff;\n}\n\n.first-page:hover,\n.prev:hover,\n.next:hover {\n  background-color: #d16161;\n  cursor: pointer;\n}\n\n.wrapper {\n  width: 100%;\n  overflow: hidden;\n}\n\n.wrapper:hover {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\na:hover {\n  cursor: pointer;\n  color: #343d46;\n  color: #2b205a;\n}\n\n.container {\n  --n: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin-top: 10px;\n  width: 25%;\n  width: calc(var(--n)*25%);\n  padding: 6px;\n  -webkit-transform: translate(calc(var(--i, 0)/var(--n)*-400%));\n          transform: translate(calc(var(--i, 0)/var(--n)*-400%));\n}\n\n.slider-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 25vw;\n  padding: 6px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: calc(100%/var(--n));\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  text-align: center;\n}\n\n.slider-item-container {\n  width: 90%;\n  height: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  background-color: #fff;\n  position: relative;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.slider-item-container:hover {\n  -webkit-transform: translate(-5px, 5px);\n          transform: translate(-5px, 5px);\n}\n\n.controls {\n  display: none;\n  margin-bottom: 5px;\n  margin-top: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n@media (max-width: 1400px) {\n  .container {\n    width: 33.3%;\n    width: calc(var(--n)*33.3%);\n    margin-top: 0;\n    -webkit-transform: translate(calc(var(--i, 0)/var(--n)*-300%));\n            transform: translate(calc(var(--i, 0)/var(--n)*-300%));\n  }\n  .controls {\n    margin-top: 5px;\n  }\n  .image {\n    margin-top: 5px;\n  }\n}\n\n@media (max-width: 1000px) {\n  .container {\n    width: 50%;\n    width: calc(var(--n)*50%);\n    -webkit-transform: translate(calc(var(--i, 0)/var(--n)*-200%));\n            transform: translate(calc(var(--i, 0)/var(--n)*-200%));\n  }\n  .slider-item-container {\n    width: 75%;\n  }\n  .slider-item-container:hover {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@media (max-width: 850px) {\n  .slider-item-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 700px) {\n  .container {\n    width: 100%;\n    width: calc(var(--n)*100%);\n    -webkit-transform: translate(calc(var(--i, 0)/var(--n)*-100%));\n            transform: translate(calc(var(--i, 0)/var(--n)*-100%));\n  }\n  .slider-item-container {\n    width: 66%;\n  }\n}\n\n@media (max-width: 500px) {\n  .slider-item-container {\n    width: 90%;\n  }\n}\n\n@media (max-width: 360px) {\n  .slider-item-container {\n    width: 96%;\n  }\n  .fa-user,\n  .fa-calendar-alt {\n    left: 8px;\n  }\n  .fa-eye {\n    left: 7px;\n  }\n}\n\n@media (max-width: 315px) {\n  .fa-user {\n    font-size: 0;\n  }\n  .author {\n    text-decoration: underline;\n  }\n}",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(a).concat([i]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},function(e,n,t){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),l=null,c=0,d=[],p=t(5);function u(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(b(r.parts[o],n))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o],n));a[r.id]={id:r.id,refs:1,parts:s}}}}function f(e,n){for(var t=[],r={},i=0;i<e.length;i++){var a=e[i],o=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,t);t.insertBefore(n,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function y(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return v(n,e.attrs),m(e,n),n}function v(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,i,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var o=c++;t=l||(l=y(n)),r=w.bind(null,t,o,!1),i=w.bind(null,t,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(n,e.attrs),m(e,n),n}(n),r=function(e,n,t){var r=t.css,i=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||a)&&(r=p(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=y(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return u(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var o=t[i];(s=a[o.id]).refs--,r.push(s)}e&&u(f(e,n),n);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var x,g=(x=[],function(e,n){return x[e]=n,x.filter(Boolean).join("\n")});function w(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){"use strict";t.r(n);const r={value:0},i={value:""},a={value:0};let o;function s(e){const n=document.querySelector(".container");n.appendChild(function(e){const n=document.createDocumentFragment();return e.forEach(e=>{const t=document.createElement("li"),r=document.createElement("div"),i=document.createElement("img"),a=document.createElement("a"),o=document.createElement("span"),s=document.createElement("span"),l=document.createElement("span"),c=document.createElement("span"),d=document.createElement("span"),p=document.createElement("span"),u=document.createElement("p");t.classList.add("slider-item"),r.classList.add("slider-item-container"),i.classList.add("image"),a.classList.add("title"),o.classList.add("author"),s.classList.add("fa-user"),s.classList.add("fas"),l.classList.add("date"),c.classList.add("fa-calendar-alt"),c.classList.add("far"),d.classList.add("views"),p.classList.add("fa-eye"),p.classList.add("far"),u.classList.add("description"),i.src=e.snippet.thumbnails.medium.url,l.innerHTML=e.snippet.publishedAt.slice(0,10),d.innerHTML=e.statistics.viewCount,a.href=`https://www.youtube.com/watch?v=${e.id}`,a.target="_blank",document.querySelector(".controls").style.display="flex",a.innerHTML=e.snippet.title.length>65?`${e.snippet.title.slice(0,62)}...`:e.snippet.title,o.innerHTML=e.snippet.channelTitle.length>28?`${e.snippet.channelTitle.slice(0,25)}...`:e.snippet.channelTitle,u.innerHTML=e.snippet.description.length>165?`${e.snippet.description.slice(0,162)}...`:e.snippet.description,r.appendChild(i),r.appendChild(a),r.appendChild(o),o.appendChild(s),r.appendChild(l),l.appendChild(c),r.appendChild(d),d.appendChild(p),r.appendChild(u),t.appendChild(r),n.appendChild(t)}),n}(e)),a.value=n.children.length,n.style.setProperty("--n",a.value)}function l(){o=i.value;let e,n=[];const t=document.querySelector(".search-input").value;""===o?(document.querySelector(".container").innerHTML="",document.querySelector(".page").innerHTML="1",document.querySelector(".container").style.setProperty("--i",0),r.value=0,document.querySelector(".first-page").style.display="none",document.querySelector(".prev").style.display="none",document.querySelector(".controls").style.display="none",e=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBvTjWm6ht2BLrruFxXfEy8-js2dUV5Nss&type=video&part=snippet&maxResults=16&q=${t}`):e=`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBvTjWm6ht2BLrruFxXfEy8-js2dUV5Nss&type=video&part=snippet&maxResults=16&q=${t}&pageToken=${o}`,fetch(e).then(e=>e.json()).then(e=>(n=e.items.slice(),i.value=e.nextPageToken,n)).then(e=>{const n=function(e){let n="";return e.forEach(e=>{n+=`${e.id.videoId},`}),n.slice(0,-1)}(e);return fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBvTjWm6ht2BLrruFxXfEy8-js2dUV5Nss&id=${n}&part=snippet,statistics`)}).then(e=>e.json()).then(e=>{s(n=e.items.slice()),o=i.value}),document.querySelector(".page").style.display="inline-block",document.querySelector(".next").style.display="inline-block"}let c,d,p,u,f=null,m=!1,h=null;const y=30,v={"ease-out":(e,n=2)=>1-(1-e)**n};function b(e=0){const n=document.querySelector(".container"),t=document.querySelector(".page");if(n.style.setProperty("--i",c+(d-c)*v["ease-out"](e/u)),t.innerHTML=Math.ceil(+n.style.getPropertyValue("--i")+1)||r.value+1,e===u)return cancelAnimationFrame(h),void(h=null);const i=e+1;h=requestAnimationFrame(b.bind(this,i))}function x(e){return e.changedTouches?e.changedTouches[0]:e}function g(e){f=x(e).clientX,m=!0}function w(e){if(e.preventDefault(),m){const n=+((x(e).clientX-f)/p).toFixed(2);document.querySelector(".container").style.setProperty("--i",r.value-n)}}function L(e){if(m){const n=x(e).clientX-f,t=Math.sign(n);let i=+(t*n/p).toFixed(2);c=r.value-t*i,(r.value>0||t<0)&&(r.value<a.value-1||t>0)&&i>.2&&(r.value-=t,i=1-i),d=r.value,u=Math.round(i*y),b(),f=null,m=!1}const n=document.querySelector(".page"),t=document.querySelector(".prev"),i=document.querySelector(".first-page");"2"===n.innerHTML&&(t.style.display="inline-block"),"3"===n.innerHTML&&(i.style.display="inline-block"),"1"===n.innerHTML&&(t.style.display="none"),"2"===n.innerHTML&&(i.style.display="none"),+n.innerHTML%4==0&&l()}function k(){p=window.innerWidth}!function(){const e=document.createElement("main"),n=document.createElement("ul"),t=document.createElement("header"),r=document.createElement("div"),i=document.createElement("input"),a=document.createElement("button"),o=document.createElement("i"),s=document.createElement("button"),l=document.createElement("button"),c=document.createElement("button"),d=document.createElement("span"),p=document.createElement("div"),u=document.createElement("link");u.type="text/css",u.rel="stylesheet",u.href="https://use.fontawesome.com/releases/v5.8.2/css/all.css",u.integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",u.crossOrigin="anonymous",e.classList.add("wrapper"),n.classList.add("container"),t.classList.add("header"),r.classList.add("search"),i.classList.add("search-input"),i.setAttribute("placeholder","Search"),a.classList.add("search-submit"),o.classList.add("fa-search"),o.classList.add("fas"),s.classList.add("first-page"),l.classList.add("prev"),d.classList.add("page"),c.classList.add("next"),p.classList.add("controls"),d.innerHTML="1",s.style.display="none",l.style.display="none",document.body.appendChild(t),t.appendChild(r),r.appendChild(i),r.appendChild(a),a.appendChild(o),a.appendChild(u),document.body.appendChild(e),e.appendChild(n),document.body.appendChild(p),p.appendChild(s),p.appendChild(l),p.appendChild(d),p.appendChild(c)}(),k();const E=document.querySelector(".container"),S=document.querySelector(".page"),T=document.querySelector(".prev"),M=document.querySelector(".next"),C=document.querySelector(".first-page"),j=document.querySelector(".search-submit"),q=document.querySelector(".search-input");S.innerHTML=Math.ceil(+E.style.getPropertyValue("--i")+1)||1,E.style.setProperty("--n",a.value),j.addEventListener("click",()=>{i.value="",l()}),q.addEventListener("keydown",e=>{13===e.keyCode&&(i.value="",l())}),window.addEventListener("resize",k,!1),E.addEventListener("mousedown",g,!1),E.addEventListener("touchstart",g,!1),E.addEventListener("mousemove",w,!1),E.addEventListener("touchmove",w,!1),E.addEventListener("mouseup",L,!1),E.addEventListener("touchend",L,!1),T.addEventListener("click",()=>{1!==S.innerHTML&&(E.style.setProperty("--i",r.value-1),r.value-=1,S.innerHTML=r.value+1),"1"===S.innerHTML&&(T.style.display="none"),"2"===S.innerHTML&&(C.style.display="none")}),M.addEventListener("click",()=>{E.style.setProperty("--i",r.value+1),r.value+=1,S.innerHTML=r.value+1,"2"===S.innerHTML&&(T.style.display="inline-block"),"3"===S.innerHTML&&(C.style.display="inline-block"),+S.innerHTML%4==0&&l()}),E.addEventListener("mouseup",e=>{e.button<5&&(E.style.setProperty("--i",r.value),S.innerHTML=r.value+1)}),C.addEventListener("click",()=>{C.style.display="none",T.style.display="none",E.style.setProperty("--i",0),S.innerHTML=1,r.value=0})}]);
//# sourceMappingURL=bundle.js.map