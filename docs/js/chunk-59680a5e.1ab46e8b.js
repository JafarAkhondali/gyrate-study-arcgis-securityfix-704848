(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59680a5e"],{"01f2":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i}));var n=r("38a4");const i=(()=>{if(!("document"in globalThis))return()=>null;const e=document.createElement("canvas"),t=e.getContext("2d"),r=512;return e.height=r,e.width=1,r=>{t.clearRect(0,0,1,e.height);const n=t.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:t}of r.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${t[3]})`);return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}})();function s(e,t,r,n){const{blurRadius:i,fieldOffset:s,field:a}=t,o=new Float64Array(r*n),h=c(i),l=Math.round(3*i);let f,d=Number.NEGATIVE_INFINITY;const x=u(a,s),p=new Set;for(const c of e){const e=c.getCursor();for(;e.next();){const t=e.getObjectId();if(p.has(t))continue;p.add(t);const i=e.readLegacyPointGeometry(),s=128;if(i.x<-s||i.x>=r+s||i.y<-s||i.y>n+s)continue;const a=+x(e),c=Math.round(i.x)-l,u=Math.round(i.y)-l,g=Math.max(0,c),y=Math.max(0,u),m=Math.min(n,Math.round(i.y)+l),b=Math.min(r,Math.round(i.x)+l);for(let e=y;e<m;e++){const t=h[e-u];for(let n=g;n<b;n++){const i=h[n-c];f=o[e*r+n]+=t*i*a,f>d&&(d=f)}}}}return{matrix:o.buffer,max:d}}function a(e,t,r,n,i,s){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);const a=e.getImageData(0,0,t,t);r&&n&&a.data.set(new Uint8ClampedArray(o(t,r,n,i,s))),e.putImageData(a,0,0)}function o(e,t,r,i,s){const a=new Uint32Array(e*e),o="buffer"in t?t:new Float64Array(t),c="buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer),u=c.length/(s-i);for(let h=0;h<o.length;h++){const e=o[h],t=Math.floor((e-i)*u);a[h]=c[Object(n["f"])(t,0,c.length-1)]}return a.buffer}function c(e){const t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1);for(let i=0;i<=n.length;i++)n[i]=Math.exp(-((i-t)**2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}function u(e,t){return null!=e?"string"==typeof t?t=>-1*+t.readAttribute(e):r=>+r.readAttribute(e)+t:e=>1}},"5ef2":function(e,t,r){"use strict";function n(){return new Float32Array(4)}function i(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function s(e,t,r,n){const i=new Float32Array(4);return i[0]=e,i[1]=t,i[2]=r,i[3]=n,i}function a(e,t){return new Float32Array(e,t,4)}function o(){return n()}function c(){return s(1,1,1,1)}function u(){return s(1,0,0,0)}function h(){return s(0,1,0,0)}function l(){return s(0,0,1,0)}function f(){return s(0,0,0,1)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s}));const d=o(),x=c(),p=u(),g=h(),y=l(),m=f();Object.freeze({__proto__:null,create:n,clone:i,fromValues:s,createView:a,zeros:o,ones:c,unitX:u,unitY:h,unitZ:l,unitW:f,ZEROS:d,ONES:x,UNIT_X:p,UNIT_Y:g,UNIT_Z:y,UNIT_W:m})},6722:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("c120"),i=r("c84e"),s=r("9a02"),a=r("6f75"),o=r("ec5e");const c=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class u extends s["a"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(c),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,r=super.createRenderParams(e);return r.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,r.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),r}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o["a"]],drawPhase:i["c"].DEBUG|i["c"].MAP|i["c"].HIGHLIGHT,target:()=>this.getStencilTarget()})),Object(n["a"])("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a["a"]],drawPhase:i["c"].DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const r=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,r)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}},"894c":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("b2b2");class i{constructor(e,t,r){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=r}get width(){return Object(n["l"])(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(n["l"])(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(Object(n["k"])(t))return;const r=this.filter({pixelBlock:t});if(Object(n["k"])(r.pixelBlock))return;const i=r.pixelBlock.getAsRGBA(),s=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);s.data.set(i),e.putImageData(s,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(n["k"])(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},"8e77":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r("a4ee"),i=(r("e92d"),r("cea0"),r("b50f"),r("c120"),r("2dd4"),r("d386")),s=r("01f2"),a=r("e80c"),o=r("e314");class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){Object(s["b"])(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}let u=class extends o["a"]{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new a["a"](e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:r}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=r,this._gradient=Object(s["c"])(e.toJSON()),this.tiles.forEach(e=>{const n=e.bitmap.source;n&&(n.minPixelIntensity=t,n.maxPixelIntensity=r,n.gradient=this._gradient,e.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const r=e.intensityInfo,{minPixelIntensity:n,maxPixelIntensity:i}=this._intensityInfo,s=t.bitmap.source||new c;s.intensities=r&&r.matrix||null,s.minPixelIntensity=n,s.maxPixelIntensity=i,s.gradient=this._gradient,t.bitmap.source=s,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};u=Object(n["a"])([Object(i["a"])("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],u);const h=u},9812:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n,i,s,a={exports:{}};n=a,i=function(){function e(e,r,i){i=i||2;var s,a,o,u,h,l,f,d=r&&r.length,x=d?r[0]*i:e.length,p=t(e,0,x,i,!0),g=[];if(!p||p.next===p.prev)return g;if(d&&(p=c(e,r,p,i)),e.length>80*i){s=o=e[0],a=u=e[1];for(var y=i;y<x;y+=i)(h=e[y])<s&&(s=h),(l=e[y+1])<a&&(a=l),h>o&&(o=h),l>u&&(u=l);f=0!==(f=Math.max(o-s,u-a))?1/f:0}return n(p,g,i,s,a,f),g}function t(e,t,r,n,i){var s,a;if(i===U(e,t,r,n)>0)for(s=t;s<r;s+=n)a=P(s,e[s],e[s+1],a);else for(s=r-n;s>=t;s-=n)a=P(s,e[s],e[s+1],a);if(a&&_(a,a.next)){var o=a.next;k(a),a=o}return a}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!_(n,n.next)&&0!==v(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(k(n),(n=t=i)===n.next)break;r=!0}}while(r||n!==t);return t}function n(e,t,c,u,h,l,f){if(e){!f&&l&&x(e,u,h,l);for(var d,p,g=e;e.prev!==e.next;)if(d=e.prev,p=e.next,l?s(e,u,h,l):i(e))t.push(d.i/c),t.push(e.i/c),t.push(p.i/c),k(e),e=p.next,g=p.next;else if((e=p)===g){f?1===f?n(e=a(r(e),t,c),t,c,u,h,l,2):2===f&&o(e,t,c,u,h,l):n(r(e),t,c,u,h,l,1);break}}}function i(e){var t=e.prev,r=e,n=e.next;if(v(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(m(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&v(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function s(e,t,r,n){var i=e.prev,s=e,a=e.next;if(v(i,s,a)>=0)return!1;for(var o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,c=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,u=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,h=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,l=g(o,c,t,r,n),f=g(u,h,t,r,n),d=e.prevZ,x=e.nextZ;d&&d.z>=l&&x&&x.z<=f;){if(d!==e.prev&&d!==e.next&&m(i.x,i.y,s.x,s.y,a.x,a.y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,x!==e.prev&&x!==e.next&&m(i.x,i.y,s.x,s.y,a.x,a.y,x.x,x.y)&&v(x.prev,x,x.next)>=0)return!1;x=x.nextZ}for(;d&&d.z>=l;){if(d!==e.prev&&d!==e.next&&m(i.x,i.y,s.x,s.y,a.x,a.y,d.x,d.y)&&v(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;x&&x.z<=f;){if(x!==e.prev&&x!==e.next&&m(i.x,i.y,s.x,s.y,a.x,a.y,x.x,x.y)&&v(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a(e,t,n){var i=e;do{var s=i.prev,a=i.next.next;!_(s,a)&&w(s,i,i.next,a)&&j(s,a)&&j(a,s)&&(t.push(s.i/n),t.push(i.i/n),t.push(a.i/n),k(i),k(i.next),i=e=a),i=i.next}while(i!==e);return r(i)}function o(e,t,i,s,a,o){var c=e;do{for(var u=c.next.next;u!==c.prev;){if(c.i!==u.i&&b(c,u)){var h=M(c,u);return c=r(c,c.next),h=r(h,h.next),n(c,t,i,s,a,o),void n(h,t,i,s,a,o)}u=u.next}c=c.next}while(c!==e)}function c(e,n,i,s){var a,o,c,h=[];for(a=0,o=n.length;a<o;a++)(c=t(e,n[a]*s,a<o-1?n[a+1]*s:e.length,s,!1))===c.next&&(c.steiner=!0),h.push(y(c));for(h.sort(u),a=0;a<h.length;a++)i=r(i=l(h[a],i),i.next);return i}function u(e,t){return e.x-t.x}function h(e){if(e.next.prev===e)return e;let t=e;for(;;){const r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function l(e,t){var n=f(e,t);if(!n)return t;var i=M(n,e),s=r(n,n.next);let a=h(i);return r(a,a.next),s=h(s),h(t===n?s:t)}function f(e,t){var r,n=t,i=e.x,s=e.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a){if(a=o,o===i){if(s===n.y)return n;if(s===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===a)return r;var c,u=r,h=r.x,l=r.y,f=1/0;n=r;do{i>=n.x&&n.x>=h&&i!==n.x&&m(s<l?i:a,s,h,l,s<l?a:i,s,n.x,n.y)&&(c=Math.abs(s-n.y)/(i-n.x),j(n,e)&&(c<f||c===f&&(n.x>r.x||n.x===r.x&&d(r,n)))&&(r=n,f=c)),n=n.next}while(n!==u);return r}function d(e,t){return v(e.prev,e,t.prev)<0&&v(t.next,e,e.next)<0}function x(e,t,r,n){var i=e;do{if(null===i.z&&(i.z=g(i.x,i.y,t,r,n)),i.prev.next!==i||i.next.prev!==i)return i.prev.next=i,i.next.prev=i,x(e,t,r,n);i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,p(i)}function p(e){var t,r,n,i,s,a,o,c,u=1;do{for(r=e,e=null,s=null,a=0;r;){for(a++,n=r,o=0,t=0;t<u&&(o++,n=n.nextZ);t++);for(c=u;o>0||c>0&&n;)0!==o&&(0===c||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:e=i,i.prevZ=s,s=i;r=n}s.nextZ=null,u*=2}while(a>1);return e}function g(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function y(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function m(e,t,r,n,i,s,a,o){return(i-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(r-a)*(t-o)>=0&&(r-a)*(s-o)-(i-a)*(n-o)>=0}function b(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!I(e,t)&&(j(e,t)&&j(t,e)&&T(e,t)&&(v(e.prev,e,t.prev)||v(e,t.prev,t))||_(e,t)&&v(e.prev,e,e.next)>0&&v(t.prev,t,t.next)>0)}function v(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function _(e,t){return e.x===t.x&&e.y===t.y}function w(e,t,r,n){var i=R(v(e,t,r)),s=R(v(e,t,n)),a=R(v(r,n,e)),o=R(v(r,n,t));return i!==s&&a!==o||!(0!==i||!O(e,r,t))||!(0!==s||!O(e,n,t))||!(0!==a||!O(r,e,n))||!(0!==o||!O(r,t,n))}function O(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function R(e){return e>0?1:e<0?-1:0}function I(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&w(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function j(e,t){return v(e.prev,e,e.next)<0?v(e,t,e.next)>=0&&v(e,e.prev,t)>=0:v(e,t,e.prev)<0||v(e,e.next,t)<0}function T(e,t){var r=e,n=!1,i=(e.x+t.x)/2,s=(e.y+t.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}function M(e,t){var r=new A(e.i,e.x,e.y),n=new A(t.i,t.x,t.y),i=e.next,s=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function P(e,t,r,n){var i=new A(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function k(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function A(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function U(e,t,r,n){for(var i=0,s=t,a=r-n;s<r;s+=n)i+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return i}return e.deviation=function(e,t,r,n){var i=t&&t.length,s=i?t[0]*r:e.length,a=Math.abs(U(e,0,s,r));if(i)for(var o=0,c=t.length;o<c;o++){var u=t[o]*r,h=o<c-1?t[o+1]*r:e.length;a-=Math.abs(U(e,u,h,r))}var l=0;for(o=0;o<n.length;o+=3){var f=n[o]*r,d=n[o+1]*r,x=n[o+2]*r;l+=Math.abs((e[f]-e[x])*(e[d+1]-e[f+1])-(e[f]-e[d])*(e[x+1]-e[f+1]))}return 0===a&&0===l?0:Math.abs((l-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var s=0;s<e[i].length;s++)for(var a=0;a<t;a++)r.vertices.push(e[i][s][a]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},e},void 0!==(s=i())&&(n.exports=s);const o=a.exports},"9a02":function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));r("c120");var n=r("b2b2"),i=r("8c71"),s=r("3b1a"),a=r("00c0"),o=r("ce50"),c=r("e92d"),u=r("7c4b"),h=r("9812"),l=r("3349"),f=r("02f1"),d=r("6655"),x=r("8152"),p=r("d114"),g=r("7ce4");const y=c["a"].getLogger("esri.views.2d.engine.webgl.Mesh2D"),m=e=>{switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new o["a"]("Cannot get DataType of array")}},b=(e,t,r,n)=>{let i=0;for(let s=1;s<r;s++){const r=e[2*(t+s-1)],n=e[2*(t+s-1)+1];i+=(e[2*(t+s)]-r)*(e[2*(t+s)+1]+n)}return n?i>0:i<0},v=({coords:e,lengths:t},r)=>{const n=[];for(let i=0,s=0;i<t.length;s+=t[i],i+=1){const a=s,o=[];for(;i<t.length-1&&b(e,s+t[i],t[i+1],r);i+=1,s+=t[i])o.push(s+t[i]-a);const c=e.slice(2*a,2*(s+t[i])),u=Object(h["a"])(c,o,2);for(const e of u)n.push(e+a)}return n};class _{constructor(e,t,r,n=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=r,this.isMapSpace=n}static fromRect({x:e,y:t,width:r,height:n}){const i=e,s=t,a=i+r,o=s+n;return _.fromScreenExtent({xmin:i,ymin:s,xmax:a,ymax:o})}static fromPath(e){const t=Object(d["f"])(new x["a"],e.path,!1,!1),r=t.coords,n=new Uint32Array(v(t,!0)),i=new Uint32Array(r.length/2);for(let s=0;s<i.length;s++)i[s]=Object(p["a"])(Math.floor(r[2*s]),Math.floor(r[2*s+1]));return new _({geometry:i},n,4)}static fromGeometry(e,t){const r=t.geometry.type;switch(r){case"polygon":return _.fromPolygon(e,t.geometry);case"extent":return _.fromMapExtent(e,t.geometry);default:return y.error(new o["a"]("mapview-bad-type","Unable to create a mesh from type "+r,t)),_.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const r=Object(d["g"])(new x["a"],t,!1,!1),n=r.coords,i=new Uint32Array(v(r,!1)),s=new Uint32Array(n.length/2),a=Object(f["b"])(),o=Object(f["b"])();for(let c=0;c<s.length;c++)Object(l["s"])(a,n[2*c],n[2*c+1]),e.toScreen(o,a),s[c]=Object(p["a"])(Math.floor(o[0]),Math.floor(o[1]));return new _({geometry:s},i,4,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:r,ymax:n}){const i={geometry:new Uint32Array([Object(p["a"])(e,r),Object(p["a"])(t,r),Object(p["a"])(e,n),Object(p["a"])(e,n),Object(p["a"])(t,r),Object(p["a"])(t,n)])},s=new Uint32Array([0,1,2,3,4,5]);return new _(i,s,4)}static fromMapExtent(e,t){const[r,n]=e.toScreen([0,0],[t.xmin,t.ymin]),[i,s]=e.toScreen([0,0],[t.xmax,t.ymax]),a={geometry:new Uint32Array([Object(p["a"])(r,n),Object(p["a"])(i,n),Object(p["a"])(r,s),Object(p["a"])(r,s),Object(p["a"])(i,n),Object(p["a"])(i,s)])},o=new Uint32Array([0,1,2,3,4,5]);return new _(a,o,4)}destroy(){Object(n["l"])(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)Object(n["l"])(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return m(this.indices)}getIndexBuffer(e,t=35044){return this._cache.indexBuffer||(this._cache.indexBuffer=g["a"].createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=35044){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((r,n)=>({...r,[n]:g["a"].createVertex(e,t,this.vertices[n])}),{})),this._cache.vertexBuffers}}var w=r("0fa6");const O=c["a"].getLogger("esri.views.2d.engine.webgl.ClippingInfo"),R=e=>parseFloat(e)/100;class I extends u["a"]{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new I(e,t)}_destroyGL(){Object(n["l"])(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(n["l"])(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,r,i){const[s,a]=t.size;if("geometry"!==this._clip.type&&this._lastWidth===s&&this._lastHeight===a||(this._lastWidth=s,this._lastHeight=a,this._destroyGL()),Object(n["k"])(this._cache.vao)){const n=this._createMesh(t,this._clip),s=n.getIndexBuffer(e),a=n.getVertexBuffers(e);this._cache.mesh=n,this._cache.vao=new w["a"](e,r,i,a,s)}return this._cache.vao}_createTransforms(){return{dvs:Object(i["b"])()}}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[r,n]=e.size,i="string"==typeof t.left?R(t.left)*r:t.left,s="string"==typeof t.right?R(t.right)*r:t.right,a="string"==typeof t.top?R(t.top)*n:t.top,o="string"==typeof t.bottom?R(t.bottom)*n:t.bottom,c=i,u=a;return{x:c,y:u,width:Math.max(r-s-c,0),height:Math.max(n-o-u,0)}}_createMesh(e,t){switch(t.type){case"rect":return _.fromRect(this._createScreenRect(e,t));case"path":return _.fromPath(t);case"geometry":return _.fromGeometry(e,t);default:return O.error(new o["a"]("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),_.fromRect({x:0,y:0,width:1,height:1})}}}var j=r("c84e");class T extends a["a"]{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}_createTransforms(){return{dvs:Object(i["b"])()}}doRender(e){const t=this.createRenderParams(e),{painter:r,globalOpacity:n,profiler:i,drawPhase:s}=t,a=s===j["c"].LABEL||s===j["c"].HIGHLIGHT?1:n*this.computedOpacity;i.recordContainerStart(this.name),r.beforeRenderLayer(t,this._clippingInfos?255:0,a),this.updateTransforms(e.state),this.renderChildren(t),r.compositeLayer(t,a),i.recordContainerEnd()}renderChildren(e){Object(n["k"])(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const r of this.children)r.beforeRender(e);for(const r of this._renderPasses)try{r.render(e)}catch(t){}for(const r of this.children)r.afterRender(e)}createRenderParams(e){return e.requireFBO=this.requiresDedicatedFBO,e}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[s["a"].clip],target:()=>this._clippingInfos,drawPhase:j["c"].MAP|j["c"].LABEL|j["c"].LABEL_ALPHA|j["c"].DEBUG|j["c"].HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(Object(n["l"])(this._clippingInfos)&&(this._clippingInfos.forEach(e=>e.destroy()),this._clippingInfos=null),!this.stage)return;const e=this._clips;Object(n["l"])(e)&&e.length&&(this._clippingInfos=e.items.map(e=>I.fromClipArea(this.stage,e))),this.requestRender()}}},beba:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return h})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return x})),r.d(t,"k",(function(){return d}));r("d267");var n=r("a1ff");function i(e,t,r="nearest",i=!1){var s;const a=!(i&&"u8"===t.pixelType),o=a?5126:5121,c=null==t.pixels||0===t.pixels.length?null:a?t.getAsRGBAFloat():t.getAsRGBA(),u=null==(s=e.capabilities.textureFloat)?void 0:s.textureFloatLinear,h={width:t.width,height:t.height,target:3553,pixelFormat:6408,internalFormat:"webgl2"===e.webglVersion&&a?34836:6408,samplingMode:!u||"bilinear"!==r&&"cubic"!==r?9728:9729,dataType:o,wrapMode:33071,flipped:!1};return new n["a"](e,h,c)}function s(e,t){const r=4*t.size[0],i=t.size[1],s={width:r,height:i,target:3553,pixelFormat:6408,internalFormat:"webgl2"===e.webglVersion?34836:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},a=new Float32Array(r*i*4);let o=0;for(let n=0;n<t.coefficients.length;n++)a[o++]=t.coefficients[n],n%3==2&&(a[o++]=1);return new n["a"](e,s,a)}function a(e,t){const r={width:t.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1};return new n["a"](e,r,t)}function o(e,t,r,n=1,i=!0,s=!1){return{u_flipY:i,u_isFloatTexture:s,u_applyTransform:!!e,u_opacity:n,u_transformSpacing:e?e.spacing:null,u_transformGridSize:e?e.size:null,u_targetImageSize:t,u_srcImageSize:r}}function c(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:null}}function u(e,t){return{u_scale:e,u_offset:t}}function h(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function l(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function f(e,t){const r=e.gl,n=t.glName,i=r.getProgramParameter(n,r.ACTIVE_UNIFORMS),s=new Map;let a;for(let o=0;o<i;o++)a=r.getActiveUniform(n,o),a&&s.set(a.name,{location:r.getUniformLocation(n,a.name),info:a});return s}function d(e,t,r){Object.keys(r).forEach(n=>{const i=t.get(n)||t.get(n+"[0]");i&&p(e,n,r[n],i)})}function x(e,t,r,n){r.length===n.length&&(n.some(e=>null==e)||r.some(e=>null==e)||r.forEach((r,i)=>{t.setUniform1i(r,i),e.bindTexture(n[i],i)}))}function p(e,t,r,n){if(null===n||null==r)return!1;const{info:i}=n;switch(i.type){case 5126:i.size>1?e.setUniform1fv(t,r):e.setUniform1f(t,r);break;case 35664:e.setUniform2fv(t,r);break;case 35665:e.setUniform3fv(t,r);break;case 35666:e.setUniform4fv(t,r);break;case 35675:e.setUniformMatrix3fv(t,r);break;case 35676:e.setUniformMatrix4fv(t,r);break;case 5124:i.size>1?e.setUniform1iv(t,r):e.setUniform1i(t,r);break;case 35670:e.setUniform1i(t,r?1:0);break;case 35667:case 35671:e.setUniform2iv(t,r);break;case 35668:case 35672:e.setUniform3iv(t,r);break;case 35669:case 35673:e.setUniform4iv(t,r);break;default:return!1}return!0}},c73a:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r("b2b2"),i=r("1c92"),s=r("8c71"),a=r("738e"),o=r("7c4b"),c=r("894c"),u=r("a1ff");function h(e){return e&&"render"in e}function l(e){return e&&!("render"in e)}function f(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function d(e,t,r){const n={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&r&&(n.width=t,n.height=r),new u["a"](e,n)}class x extends o["a"]{constructor(e=null,t,r=!0){super(),this.requestRenderOnSourceChangedEnabled=r,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(s["b"])()}}setTransform(e){const t=Object(i["b"])(this.transforms.dvs),[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),s=this.resolution/this.pixelRatio/e.resolution,o=s*this.width,c=s*this.height,u=Math.PI*this.rotation/180;Object(i["c"])(t,t,Object(a["b"])(r,n)),Object(i["c"])(t,t,Object(a["b"])(o/2,c/2)),Object(i["m"])(t,t,-u),Object(i["c"])(t,t,Object(a["b"])(-o/2,-c/2)),Object(i["j"])(t,t,Object(a["b"])(o,c)),Object(i["k"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));const r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),h(r))if(r instanceof c["a"]){const e=r.getRenderedRasterPixels();this._texture.setData(Object(n["l"])(e)?e.renderedRasterPixels:null)}else this._texture.setData(f(r));else l(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},db21:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return a}));const n=!0,i=32,s=1.5,a=200},e314:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("a4ee"),i=r("9096"),s=r("59b2"),a=(r("b50f"),r("c120"),r("cea0"),r("d386"));let o=class extends i["a"]{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",()=>this.notifyChange("updating")),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach(t=>{e=e&&t.isReady}),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(n["a"])([Object(s["b"])()],o.prototype,"layer",void 0),Object(n["a"])([Object(s["b"])()],o.prototype,"layerView",void 0),Object(n["a"])([Object(s["b"])()],o.prototype,"tileInfoView",void 0),Object(n["a"])([Object(s["b"])()],o.prototype,"updating",null),o=Object(n["a"])([Object(a["a"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);const c=o},e4b1:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("1c92"),i=r("7c4b"),s=r("ae54");class a extends i["a"]{constructor(e,t,r,n,i,a=n,o=i){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new s["a"](e),this.x=t,this.y=r,this.width=n,this.height=i,this.rangeX=a,this.rangeY=o}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e,t){const r=t/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[s,a]=e.toScreenNoRotation([0,0],[this.x,this.y]),o=this.width/this.rangeX*r,c=this.height/this.rangeY*r;Object(n["n"])(i,o,0,0,0,c,0,s,a,1),Object(n["k"])(this.transforms.dvs,e.displayViewMat3,i)}}},e80c:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("9180"),i=r("8c71"),s=r("c73a"),a=r("e4b1");class o extends a["a"]{constructor(e,t,r,n,i,a=null){super(e,t,r,n,i),this.bitmap=new s["a"](a,"standard",!1),this.bitmap.coordScale=[n,i],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:Object(i["b"])(),tileMat3:Object(i["b"])()}}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var c=r("3b1a"),u=r("c84e"),h=r("6722");class l extends h["a"]{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(n["m"])(),e),[r,i]=this._tileInfoView.tileInfo.size;return new o(e,t[0],t[3],r,i)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[c["a"].bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:u["c"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===u["c"].MAP&&super.doRender(e)}}}}]);