(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f504a9f"],{"008c":function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return F})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return M})),n.d(e,"e",(function(){return E})),n.d(e,"f",(function(){return N})),n.d(e,"g",(function(){return S}));var i=n("b2b2"),s=n("a9ab");const r=(t,e,n)=>[e,n],o=(t,e,n)=>[e,n,t[2]],a=(t,e,n)=>[e,n,t[2],t[3]];function l(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:Object(i["l"])(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function u({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function c({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function d(t,e,n){const i=[];let s,r,o,a;for(let l=0;l<n.length;l++){const d=n[l];l>0?(o=u(t,d[0]),a=c(t,d[1]),o===s&&a===r||(i.push(e(d,o-s,a-r)),s=o,r=a)):(s=u(t,d[0]),r=c(t,d[1]),i.push(e(d,s,r)))}return i.length>0?i:null}function h(t,e,n,i){return d(t,n?i?a:o:i?o:r,e)}function f(t,e,n,i){const s=[],l=n?i?a:o:i?o:r;for(let r=0;r<e.length;r++){const n=d(t,l,e[r]);n&&n.length>=3&&s.push(n)}return s.length?s:null}function m(t,e,n,i){const s=[],l=n?i?a:o:i?o:r;for(let r=0;r<e.length;r++){const n=d(t,l,e[r]);n&&n.length>=2&&s.push(n)}return s.length?s:null}function p({scale:t,translate:e},n){return n*t[0]+e[0]}function g({scale:t,translate:e},n){return e[1]-n*t[1]}function y(t,e,n){const i=new Array(n.length);if(!n.length)return i;const[s,r]=t.scale;let o=p(t,n[0][0]),a=g(t,n[0][1]);i[0]=e(n[0],o,a);for(let l=1;l<n.length;l++){const t=n[l];o+=t[0]*s,a-=t[1]*r,i[l]=e(t,o,a)}return i}function _(t,e,n){const i=new Array(n.length);for(let s=0;s<n.length;s++)i[s]=y(t,e,n[s]);return i}function x(t,e,n,i){return y(t,n?i?a:o:i?o:r,e)}function b(t,e,n,i){return _(t,n?i?a:o:i?o:r,e)}function I(t,e,n,i){return _(t,n?i?a:o:i?o:r,e)}function B(t,e,n,i,s){return e.xmin=u(t,n.xmin),e.ymin=c(t,n.ymin),e.xmax=u(t,n.xmax),e.ymax=c(t,n.ymax),e!==n&&(i&&(e.zmin=n.zmin,e.zmax=n.zmax),s&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}function w(t,e,n,i,s){return e.points=h(t,n.points,i,s),e}function F(t,e,n,i,s){return e.x=u(t,n.x),e.y=c(t,n.y),e!==n&&(i&&(e.z=n.z),s&&(e.m=n.m)),e}function j(t,e,n,i,s){const r=f(t,n.rings,i,s);return r?(e.rings=r,e):null}function O(t,e,n,i,s){const r=m(t,n.paths,i,s);return r?(e.paths=r,e):null}function v(t,e){return t&&e?Object(s["f"])(e)?F(t,{},e,!1,!1):Object(s["h"])(e)?O(t,{},e,!1,!1):Object(s["g"])(e)?j(t,{},e,!1,!1):Object(s["e"])(e)?w(t,{},e,!1,!1):Object(s["d"])(e)?B(t,{},e,!1,!1):null:null}function M(t,e,n,s,r){return Object(i["l"])(n)&&(e.points=x(t,n.points,s,r)),e}function E(t,e,n,s,r){return Object(i["k"])(n)||(e.x=p(t,n.x),e.y=g(t,n.y),e!==n&&(s&&(e.z=n.z),r&&(e.m=n.m))),e}function N(t,e,n,s,r){return Object(i["l"])(n)&&(e.rings=I(t,n.rings,s,r)),e}function S(t,e,n,s,r){return Object(i["l"])(n)&&(e.paths=b(t,n.paths,s,r)),e}},"04c4":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("c120"),s=n("ce76");const r=5e4,o={minX:0,minY:0,maxX:0,maxY:0};function a(t,e,n){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3],t.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s["a"](9,Object(i["a"])("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach((n,i)=>{t[e++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(t=>this._idByBounds.has(t))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),a(this._index,t,t=>e(this._idByBounds.get(t)))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>r&&this._loadIndex()))}}},"461f":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("d97e"),s=n("9392"),r=n("8152");const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new s["b"](e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid||(t.centroid=Object(i["a"])(new r["a"],t.geometry,e.hasZ,e.hasM)),t.centroid)}},6517:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("ce50"),s=n("ce6d"),r=n("e92d"),o=n("b2b2"),a=n("4261"),l=n("9180"),u=n("6655"),c=n("04c4"),d=n("461f");class h{constructor(t){this.geometryInfo=t,this._boundsStore=new c["a"],this._featuresById=new Map,this._markedIds=new Set,this.events=new s["a"],this.featureAdapter=d["a"]}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=Object(l["m"])(l["a"]);return this._featuresById.forEach(e=>{const n=this._boundsStore.get(e.objectId);n&&(t[0]=Math.min(n[0],t[0]),t[1]=Math.min(n[1],t[1]),t[2]=Math.max(n[2],t[2]),t[3]=Math.max(n[3],t[3]))}),t}get storeStatistics(){let t=0;return this._featuresById.forEach(e=>{Object(o["l"])(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&e(Object(a["s"])(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach(e=>t(e))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,t=>{e(this._featuresById.get(t))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))}),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r["a"].getLogger("esri.layers.graphics.data.FeatureStore").error(new i["a"]("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let s;if(this._markedIds.add(e),n?(t.displayId=n.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):Object(o["l"])(this.onFeatureAdd)&&this.onFeatureAdd(t),Object(o["k"])(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=Object(u["r"])(Object(o["l"])(s)?s:Object(l["m"])(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),Object(o["l"])(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){return Object(o["l"])(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},"88d1":function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return a}));var i=n("c120"),s=n("7ffa"),r=n("a94c"),o=n("8246");function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?o["c"]:"esriGeometryPolyline"===t?o["e"]:o["d"]}}}function l(t,e){if(Object(i["a"])("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let n=`this.${e} = null;`;for(const e in t)n+=`this${e.includes(".")?`["${e}"]`:"."+e} = ${JSON.stringify(t[e])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[e]:null,...t})}}function u(t={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s["a"])(t)}}]}function c(t,e){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:r["a"],queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},ce76:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("b50f"),s=n("b2b2"),r=n("8a44"),o=n("4637");class a{constructor(t=9,e){this.compareMinX=d,this.compareMinY=h,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),b.prune(),I.prune(),B.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this.toBBox;if(_(t,n))for(b.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;_(t,o)&&(n.leaf?e(r):y(t,o)?this._all(r,e):b.push(r))}n=b.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!_(t,e))return!1;for(b.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(_(t,r)){if(e.leaf||y(t,r))return!0;b.push(s)}}e=b.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new O([]),this}remove(t){if(!t)return this;let e,n=this.data,r=null,o=0,a=!1;const l=this.toBBox(t);for(B.clear(),w.clear();n||B.length>0;){var u;if(n||(n=Object(s["d"])(B.pop()),r=B.data[B.length-1],o=null!=(u=w.pop())?u:0,a=!0),n.leaf&&(e=Object(i["g"])(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),B.push(n),this._condense(B),this;a||n.leaf||!y(n,l)?r?(o++,n=r.children[o],a=!1):n=null:(B.push(n),w.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(I.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else I.pushArray(n.children);n=null!=(i=I.pop())?i:null}}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new O(t.slice(e,n+1));return l(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new v([]);o.height=i;const a=Math.ceil(s/r),u=a*Math.ceil(Math.sqrt(r));x(t,e,n,u,this.compareMinX);for(let l=e;l<=n;l+=u){const e=Math.min(l+u-1,n);x(t,l,e,a,this.compareMinY);for(let n=l;n<=e;n+=a){const s=Math.min(n+a-1,e);o.children.push(this._build(t,n,s,i-1))}}return l(o,this.toBBox),o}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=f(o),l=p(t,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this.toBBox,s=n?t:i(t);B.clear();const r=this._chooseSubtree(s,this.data,e,B);for(r.children.push(t),c(r,s);e>=0&&B.data[e].children.length>this._maxEntries;)this._split(B,e),e--;this._adjustParentBBoxes(s,B,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new O(o):new v(o);a.height=n.height,l(n,this.toBBox),l(a,this.toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this.data=new v([t,e]),this.data.height=t.height+1,l(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=u(t,0,o,this.toBBox),a=u(t,o,n,this.toBBox),l=g(e,a),c=f(e)+f(a);l<i?(i=l,r=o,s=c<s?c:s):l===i&&c<s&&(s=c,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:d,s=t.leaf?this.compareMinY:h;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this.toBBox,r=u(t,0,e,s),o=u(t,n-e,n,s);let a=m(r)+m(o);for(let l=e;l<n-e;l++){const e=t.children[l];c(r,t.leaf?s(e):e),a+=m(r)}for(let l=n-e-1;l>=e;l--){const e=t.children[l];c(o,t.leaf?s(e):e),a+=m(o)}return a}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)c(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice(Object(i["g"])(r,n,r.length,s.indexHint),1)}else this.clear();else l(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,e){u(t,0,t.children.length,e,t)}function u(t,e,n,i,s){s||(s=new O([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],c(s,t.leaf?i(r):r);return s}function c(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function d(t,e){return t.minX-e.minX}function h(t,e){return t.minY-e.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function y(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function _(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,i,r){const a=[e,n];for(;a.length;){const e=Object(s["d"])(a.pop()),n=Object(s["d"])(a.pop());if(e-n<=i)continue;const l=n+Math.ceil((e-n)/i/2)*i;Object(o["a"])(t,l,n,e,r),a.push(n,l,l,e)}}const b=new r["a"],I=new r["a"],B=new r["a"],w=new r["a"]({deallocator:void 0});class F{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class j extends F{constructor(){super(...arguments),this.height=1,this.indexHint=new i["a"]}}class O extends j{constructor(t){super(),this.children=t,this.leaf=!0}}class v extends j{constructor(t){super(),this.children=t,this.leaf=!1}}},d77e:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k})),n.d(e,"inferFieldType",(function(){return R})),n.d(e,"inferFields",(function(){return L})),n.d(e,"inferLocationInfo",(function(){return A}));n("e06a");var i=n("2eab"),s=n("ce50"),r=n("e92d"),o=n("7015"),a=n("f4cc"),l=n("e041"),u=n("8188"),c=n("d641"),d=n("7f83"),h=n("9786"),f=n("9392"),m=n("8152"),p=n("6517"),g=n("1ec3"),y=n("6411");const _=/^\s*"([\S\s]*)"\s*$/,x=/""/g,b="\n",I=[","," ",";","|","\t"];function*B(t,e,n){let i=0;for(;i<=t.length;){const s=t.indexOf(e,i),r=t.substring(i,s>-1?s:void 0);i+=r.length+e.length,n&&!r.trim()||(yield r)}}function w(t){const e=t.includes("\r\n")?"\r\n":b;return B(t,e,!0)}function F(t,e){return B(t,e,!1)}function j(t){const e=t.trim();let n=0,i="";for(const s of I){const t=e.split(s).length;t>n&&(n=t,i=s)}return""===i?null:i}function*O(t,e,n,i=(()=>Object.create(null))){let s="",r="",o=0,a=i(),l=0;t:for(const u of t){const t=F(u,n);for(const u of t)if(s+=r+u,r="",o+=v(u),o%2==0){if(o>0){const t=_.exec(s);if(!t){a=i(),l=0,s="",o=0;continue t}a[e[l]]=t[1].replace(x,'"'),l++}else a[e[l]]=s,l++;s="",o=0}else r=n;0===o?(yield a,a=i(),l=0):r=b}}function v(t){let e=0,n=0;for(n=t.indexOf('"',n);n>=0;)e++,n=t.indexOf('"',n+1);return e}var M=n("88d1"),E=n("80b7"),N=n("c1da"),S=n("5996");const T=Object(M["d"])("esriGeometryPoint"),Y=["csv"],X=[0,0];class C{constructor(t,e){this.x=t,this.y=e}}class k{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;null==(t=this._queryEngine)||t.destroy(),this._queryEngine=null}async load(t,e={}){var n;this.loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection(null==t||null==(n=t.parsingOptions)?void 0:n.spatialReference)]),s=q(i,t);this.locationInfo=s.locationInfo,this.delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const r=await this._createFeatures(i);if(this._queryEngine.featureStore.addMany(r),s.layerDefinition.extent=this._queryEngine.fullExtent,s.layerDefinition.timeInfo){const{start:t,end:e}=this._queryEngine.timeExtent;s.layerDefinition.timeInfo.timeExtent=[t,e]}return s}async applyEdits(){throw new s["a"]("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this.loadOptions.customParameters=t,null==(e=this._snapshotTask)||e.abort(),this._snapshotTask=Object(a["h"])(this._snapshotFeatures),this._snapshotTask.promise.then(t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)},t=>{this._queryEngine.featureStore.clear(),Object(a["m"])(t)||r["a"].getLogger("esri.layers.CSVLayer").error(new s["a"]("csv-layer:refresh","An error occurred during refresh",{error:t}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:n}=this.loadOptions;if(!e)throw new s["a"]("csv-layer:invalid-source","url not defined");const r=Object(l["K"])(e);return(await Object(i["default"])(r.path,{query:{...r.query,...n},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:n,extent:i,timeInfo:s}=t.layerDefinition,r=new p["a"]({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new y["a"]({fields:n,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:n}=this.locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:r}=this._queryEngine;let o=[];const a=[],l=s.fields.filter(t=>t.name!==i).map(t=>t.name);let p=0;const g=w(t);g.next();const y={};for(const u of s.fields)if("esriFieldTypeOID"!==u.type&&"esriFieldTypeGlobalID"!==u.type){const t=Object(N["o"])(u);void 0!==t&&(y[u.name]=t)}const _=O(g,l,this.delimiter,Object(M["b"])(y,i));for(const u of _){const t=this._parseCoordinateValue(u[e]),r=this._parseCoordinateValue(u[n]);if(null!=r&&null!=t&&!isNaN(t)&&!isNaN(r)){u[e]=t,u[n]=r;for(const t in u)if(t!==e&&t!==n)if(s.isDateField(t)){const e=new Date(u[t]);u[t]=z(e,u[t])?e.getTime():null}else if(s.isNumericField(t)){const e=Q(u[t]);isNaN(e)?u[t]=null:u[t]=e}u[i]=p,p++,o.push(new C(r,t)),a.push(u)}}if(!Object(d["d"])({wkid:4326},r))if(Object(d["p"])(r))for(const u of o)[u.x,u.y]=Object(h["c"])(u.x,u.y,X);else o=Object(u["r"])(c["a"],o,S["a"].WGS84,r,null);const x=[];for(let u=0;u<o.length;u++){const{x:t,y:e}=o[u],n=a[u];n[i]=u+1,x.push(new f["b"](new m["a"]([],[t,e]),n,null,n[i]))}return x}_parseCoordinateValue(t){if(null==t||""===t)return null;let e=Q(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await Object(g["a"])(d["b"],t)}catch{throw new s["a"]("csv-layer:projection-not-supported","Projection not supported")}}}function q(t,e){const n=e.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=w(t);let o=r.next().value;if(!o)throw new s["a"]("csv-layer:empty-csv","CSV is empty",{csv:t});if(o=o.trim(),!n.delimiter){const t=j(o);if(!t)throw new s["a"]("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=t}const a=o.split(i.delimiter).filter(t=>!!t),u=i.layerDefinition={name:Object(l["k"])(e.url,Y)||"csv",drawingInfo:T,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const t=A(a);if(!n.longitudeField&&!t.longitudeFieldName||!n.latitudeField&&!t.latitudeFieldName)throw new s["a"]("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||t.longitudeFieldName,latitudeFieldName:n.latitudeField||t.latitudeFieldName}}const c=L(r,i.delimiter,a,i.locationInfo);if(n.fields&&n.fields.length){const t=new Map;for(const e of n.fields)t.set(e.name.toLowerCase(),e);for(const e of c){const n=t.get(e.name.toLowerCase());if(n){const t=e.name;Object.assign(e,n),e.name=t}}}if(u.fields=c,!u.fields.some(t=>"esriFieldTypeOID"===t.type&&(u.objectIdField=t.name,!0))){const t={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=t.name,u.fields.unshift(t)}if(u.timeInfo){const t=new E["a"](u.fields),e=u.timeInfo;if(e.startTimeField){const n=t.get(e.startTimeField);n?(e.startTimeField=n.name,n.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const n=t.get(e.endTimeField);n?(e.endTimeField=n.name,n.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const n=t.get(e.trackIdField);e.trackIdField=n?n.name:null}e.startTimeField||e.endTimeField||(u.timeInfo=null)}return i}const D=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],P=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];function A(t){const e=t.map(t=>t.toLowerCase());return{longitudeFieldName:t[e.indexOf(P.find(t=>e.includes(t)))],latitudeFieldName:t[e.indexOf(D.find(t=>e.includes(t)))]}}function L(t,e,n,i){const s=[],r=O(t,n,e),o=[];for(const a of r){if(10===o.length)break;o.push(a)}for(const a of n)if(a===i.longitudeFieldName||a===i.latitudeFieldName)s.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const t=R(o.map(t=>t[a])),e={name:a,type:null,alias:a};switch(t){case"integer":e.type="esriFieldTypeInteger";break;case"double":e.type="esriFieldTypeDouble";break;case"date":e.type="esriFieldTypeDate",e.length=36;break;default:e.type="esriFieldTypeString",e.length=255}s.push(e)}return s}function R(t){if(!t.length)return"string";const e=/[^+-.,0-9]/;return t.map(t=>{let n=!1;if(""!==t){if(e.test(t))n=!0;else{let e=Q(t);if(!isNaN(e))return/[.,]/.test(t)||!Number.isInteger(e)||e>214783647||e<-214783648?"double":"integer";if(-1===t.indexOf("E"))n=!0;else{if(e=Number(t),!isNaN(e))return"double";if(-1===t.indexOf(","))n=!0;else{if(t=t.replace(",","."),e=Number(t),!isNaN(e))return"double";n=!0}}}return n?/^[-]?\d*[.,]?\d*$/.test(t)?"string":z(new Date(t),t)?"date":"string":"string"}}).reduce((t,e)=>void 0===t||t===e?e:"string"===t||"string"===e?"string":"double"===t||"double"===e?"double":void 0)}const G=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,V=Number.isNaN(new Date("technology 10").getTime());function z(t,e){if(!t||"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))return!1;let n=!0;if(!V&&/\d+\W*$/.test(e)){const t=e.match(/[a-zA-Z]{2,}/);if(t){let e=!1,i=0;for(;!e&&i<=t.length;)e=!G.test(t[i]),i++;n=!e}}return n}const Q=function(){const t=Object(o["a"])(),e=new RegExp("^"+t.regexp+"$"),n=new RegExp("["+t.group+"\\s\\xa0]","g"),i=t.factor;return function(s){const r=e.exec(s);if(t.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],t.factor*=-1}return o=o.replace(n,"").replace(t.decimal,"."),+o*t.factor}}()}}]);