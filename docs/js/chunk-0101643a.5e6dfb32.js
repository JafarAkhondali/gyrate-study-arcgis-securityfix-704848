(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0101643a"],{"0218":function(t,n,e){"use strict";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
function i(t){return t.map(t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n}).join("-")}e.d(n,"a",(function(){return a}));const a=()=>i([2,1,1,1,3])},"418d":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("3105");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */function a(t,n,e){const a=r(t);return i["a"].isBrowser?new a(n,e):void 0}function r(t){return"intersection"===t?IntersectionObserver:"mutation"===t?MutationObserver:ResizeObserver}},4528:function(t,n,e){"use strict";e.r(n),e.d(n,"CalciteIcon",(function(){return a})),e.d(n,"defineCustomElement",(function(){return r}));var i=e("b154");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const a=i["a"],r=i["b"]},b154:function(t,n,e){"use strict";e.d(n,"a",(function(){return h})),e.d(n,"b",(function(){return d}));var i=e("3105"),a=e("d780"),r=e("418d");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const o={icon:"icon",flipRtl:"flip-rtl"},s={},c={},l={s:16,m:24,l:32};async function u({icon:t,scale:n}){const e=l[n],a=m(t),r="F"===a.charAt(a.length-1),o=r?a.substring(0,a.length-1):a,u=`${o}${e}${r?"F":""}`;if(s[u])return s[u];c[u]||(c[u]=fetch(Object(i["f"])(`./assets/calcite-icon/${u}.json`)).then(t=>t.json()).catch(()=>(console.error(`"${u}" is not a valid calcite-ui-icon name`),"")));const f=await c[u];return s[u]=f,f}function m(t){const n=!isNaN(Number(t.charAt(0))),e=t.split("-");return 1===e.length?n?"i"+t:t:e.map((t,e)=>0===e?n?"i"+t.toUpperCase():t:t.charAt(0).toUpperCase()+t.slice(1)).join("")}const f="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";let h=class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:n,pathData:e,scale:r,textLabel:s}=this,c=Object(a["c"])(t),u=l[r],m=!!s,f=[].concat(e||"");return Object(i["g"])(i["c"],{"aria-hidden":(!m).toString(),"aria-label":m?s:null,role:m?"img":null},Object(i["g"])("svg",{class:{[o.flipRtl]:"rtl"===c&&n,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${u} ${u}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},f.map(t=>"string"===typeof t?Object(i["g"])("path",{d:t}):Object(i["g"])("path",{d:t.d,opacity:"opacity"in t?t.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:n,visible:e}=this;i["a"].isBrowser&&t&&e&&(this.pathData=await u({icon:t,scale:n}))}waitUntilVisible(t){this.intersectionObserver=Object(r["a"])("intersection",n=>{n.forEach(n=>{n.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return f}};function d(){const t=["calcite-icon"];t.forEach(t=>{switch(t){case"calcite-icon":customElements.get(t)||customElements.define(t,h);break}})}h=Object(i["h"])(h,[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]),d()},d780:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return h})),e.d(n,"f",(function(){return p})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return f})),e.d(n,"i",(function(){return y}));e("0218");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */const i="calcite-theme-auto",a="calcite-theme-dark",r="calcite-theme-light",o={autoTheme:i,darkTheme:a,lightTheme:r,rtl:"calcite--rtl"},s={loading:"Loading"};function c(t){const n="dir",e=`[${n}]`,i=h(t,e);return i?i.getAttribute(n):"ltr"}function l(t,n,e){const i=`[${n}]`,a=t.closest(i);return a?a.getAttribute(n):e}function u(t){return t.getRootNode()}function m(t){return t.host||null}function f(t,n){function e(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const i=u(t),a=i.querySelector(n),r=m(i);return a||(r?e(r):null)}return e(t)}function h(t,n){function e(t){return t?t.closest(n)||e(m(u(t))):null}return e(t)}function d(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}async function p(t){if(t)return d(t)?t.setFocus():t.focus()}function b(t,n,e){const i=`[slot="${n}"]`;return(null===e||void 0===e?void 0:e.all)?w(t,i,e):g(t,i,e)}function w(t,n,e){let i=Array.from(t.querySelectorAll(n));i=e&&!1===e.direct?i:i.filter(n=>n.parentElement===t);const a=null===e||void 0===e?void 0:e.selector;return a?i.map(t=>Array.from(t.querySelectorAll(a))).reduce((t,n)=>[...t,...n],[]).filter(t=>!!t):i}function g(t,n,e){let i=t.querySelector(n);i=e&&!1===e.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null;const a=null===e||void 0===e?void 0:e.selector;return a?i.querySelector(a):i}function y(t,n,e){return"string"===typeof n&&""!==n?n:""===n?t[e]:void 0}}}]);