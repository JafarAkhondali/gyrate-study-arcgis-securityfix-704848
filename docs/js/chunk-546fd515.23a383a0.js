(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-546fd515"],{"78ba":function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var a=i("b50f"),r=i("c649"),l=i("e92d"),n=i("b2b2"),s=i("f4cc"),o=i("dfa0");const c=l["a"].getLogger("esri.core.workers.WorkerHandle");class h{constructor(e,t,i,a={}){this._mainMethod=t,this._listeners=[],this._promise=Object(o["b"])(e,{...a,schedule:i}).then(e=>{if(void 0===this._thread){this._thread=e,this._promise=null,a.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()}),this._promise.catch(t=>c.error(`Failed to initialize ${e} worker: ${t}`))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),Object(r["c"])(()=>{i.removed=!0,Object(a["j"])(this._listeners,i),this._thread&&Object(n["l"])(i.threadHandle)&&i.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:a,signal:i})}return this._promise?this._promise.then(()=>(Object(s["w"])(i),this.invokeMethod(e,t,i))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}},9651:function(e,t,i){"use strict";i.d(t,"a",(function(){return T}));var a,r=i("a4ee"),l=i("2eab"),n=i("fc29"),s=i("ce50"),o=i("9096"),c=i("e92d"),h=i("c24e"),p=i("8a44"),u=i("f4cc"),d=i("5815"),b=i("e041"),m=i("3795"),v=i("59b2"),f=i("b50f"),y=(i("c120"),i("1a3e")),O=i("d386"),j=i("7ffa");class w{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%8,r=i>>3,l=this._tileAvailabilityBitSet;return r<0||r>l.length?"unknown":l[r]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,i=this.location.height;let a=!0,r=!0;const l=Math.ceil(t*i/8),n=new Uint8Array(l);let s=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(r=!1,n[s]|=1<<t):a=!1,7===t&&++s}r?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,t){const i=e.service.request||l["default"],{row:a,col:r,width:n,height:o}=e,c={query:{f:"json"}};return t=t?{...c,...t}:c,i(_(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:r,width:n,height:o},valid:!0,data:Object(f["c"])(n*o,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==a||e.location.left!==r||e.location.width!==n||e.location.height!==o))throw new s["a"]("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:r,width:n,height:o}});return w.fromJSON(e)})}static fromJSON(e){w.validateJSON(e);const t=new w;return t.location=Object.freeze(Object(j["a"])(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new s["a"]("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new s["a"]("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new s["a"]("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new s["a"]("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new s["a"]("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function g(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function _(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const i=e.service.query;return i&&(t=`${t}?${i}`),t}const S=c["a"].getLogger("esri.layers.support.TilemapCache");let T=a=class extends(Object(o["b"])(n["a"])){constructor(e){super(e),this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=l["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new h["a"](this.cacheByteSize),this.handles.add([this.watch(["layer.parsedUrl","layer.tileServers?","layer.apiKey?","layer.customParameters?"],()=>this._initializeTilemapDefinition()),Object(m["a"])(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}castLevels(e){return e<=2?(S.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,a){if(!this._availableLevels[e])return Promise.reject(new s["a"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,r);if(l)return Promise.resolve(l);const n=a&&a.signal;return a={...a,signal:null},new Promise((e,t)=>{Object(u["r"])(n,()=>t(Object(u["e"])()));const i=g(r);let l=this._pendingTilemapRequests[i];if(!l){l=w.fromDefinition(r,a).then(e=>(this._tilemapCache.put(i,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=l,l.then(e,e)}l.then(e,t)})}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return this._availableLevels[e]?this.fetchTilemap(e,t,i,a).catch(e=>e).then(a=>{if(a instanceof w){const r=a.getAvailability(t,i);return"unavailable"===r?Promise.reject(new s["a"]("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(Object(u["m"])(a))throw a;return"unknown"}):Promise.reject(new s["a"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,a,r){a.level=e,a.row=t,a.col=i;const l=this.layer.tileInfo;l.updateTileInfo(a);const n=this.fetchAvailability(e,t,i,r).catch(e=>{if(Object(u["m"])(e))throw e;if(l.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,r,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,l,n){if(!this._prefetchingEnabled)return;const s="prefetch-"+e;if(this.handles.has(s))return;const o=new AbortController;n.then(()=>o.abort(),()=>o.abort());let c=!1;const h={remove(){c||(c=!0,o.abort())}};if(this.handles.add(h,s),await Object(d["d"])(10,o.signal).catch(()=>{}),c||(c=!0,this.handles.remove(s)),Object(u["n"])(o))return;const p={id:e,level:t,row:i,col:r},b={...l,signal:o.signal},m=this.layer.tileInfo;for(let u=0;a._prefetches.length<a._maxPrefetch&&m.upsampleTile(p);++u){const e=this.fetchAvailability(p.level,p.row,p.col,b);a._prefetches.push(e);const t=()=>{a._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){var e;if(!this.layer.parsedUrl)return;const{parsedUrl:t,apiKey:i,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:t.path,query:Object(b["E"])({...t.query,...a,token:null!=i?i:null==(e=t.query)?void 0:e.token}),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const r=g(a);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};T._maxPrefetch=4,T._prefetches=new p["a"]({initialSize:a._maxPrefetch}),Object(r["a"])([Object(v["b"])({constructOnly:!0,type:Number})],T.prototype,"levels",void 0),Object(r["a"])([Object(y["a"])("levels")],T.prototype,"castLevels",null),Object(r["a"])([Object(v["b"])({readOnly:!0,type:Number})],T.prototype,"size",null),Object(r["a"])([Object(v["b"])({constructOnly:!0,type:Number})],T.prototype,"cacheByteSize",void 0),Object(r["a"])([Object(v["b"])({constructOnly:!0})],T.prototype,"layer",void 0),Object(r["a"])([Object(v["b"])({constructOnly:!0})],T.prototype,"request",void 0),T=a=Object(r["a"])([Object(O["a"])("esri.layers.support.TilemapCache")],T)},ab68:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return r}));var a=i("dff3");const r={type:a["a"],json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,i,r){if(!e)return null;const{minScale:l,maxScale:n,minLOD:s,maxLOD:o}=t;if(null!=s&&null!=o)return r&&r.ignoreMinMaxLOD?a["a"].fromJSON(e):a["a"].fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=s&&e<=o)});if(0!==l&&0!==n){const t=e=>Math.round(1e4*e)/1e4,i=l?t(l):1/0,r=n?t(n):-1/0;return a["a"].fromJSON({...e,lods:e.lods.filter(e=>{const a=t(e.scale);return a<=i&&a>=r})})}return a["a"].fromJSON(e)}},b485:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var a=i("a4ee"),r=(i("e06a"),i("59b2")),l=(i("b50f"),i("c120"),i("cea0"),i("afcf")),n=i("d386"),s=i("ab68"),o=i("9651"),c=i("5996");const h=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new o["a"]({layer:this}):null}};return Object(a["a"])([Object(r["b"])({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a["a"])([Object(r["b"])()],t.prototype,"minScale",void 0),Object(a["a"])([Object(l["a"])("service","minScale")],t.prototype,"readMinScale",null),Object(a["a"])([Object(r["b"])()],t.prototype,"maxScale",void 0),Object(a["a"])([Object(l["a"])("service","maxScale")],t.prototype,"readMaxScale",null),Object(a["a"])([Object(r["b"])({type:c["a"]})],t.prototype,"spatialReference",void 0),Object(a["a"])([Object(r["b"])({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(a["a"])([Object(r["b"])(s["b"])],t.prototype,"tileInfo",void 0),Object(a["a"])([Object(r["b"])()],t.prototype,"tilemapCache",void 0),Object(a["a"])([Object(l["a"])("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(a["a"])([Object(r["b"])()],t.prototype,"version",void 0),t=Object(a["a"])([Object(n["a"])("esri.layers.mixins.ArcGISCachedService")],t),t}},d378:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var a=i("b2b2"),r=i("78ba");class l extends r["a"]{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(n.forEach((e,t)=>{e===this&&n.delete(t)}),this.destroy())}}const n=new Map;function s(e=null){let t=n.get(Object(a["u"])(e));return t||(Object(a["l"])(e)?(t=new l(t=>e.schedule(t)),n.set(e,t)):(t=new l,n.set(null,t))),++t.ref,t}},f20e:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return S}));var a=i("a4ee"),r=i("2eab"),l=i("ce50"),n=i("e92d"),s=i("b2b2"),o=i("e694"),c=i("f4cc"),h=i("e041"),p=i("59b2"),u=(i("b50f"),i("c120"),i("cea0"),i("afcf")),d=i("d386"),b=i("e64d"),m=i("a6a3"),v=i("b485"),f=i("3d59"),y=i("b911"),O=i("0db5"),j=i("22f4"),w=i("d378");const g=n["a"].getLogger("esri.layers.ElevationLayer");let _=class extends(Object(v["a"])(Object(f["a"])(Object(y["a"])(Object(O["a"])(Object(o["a"])(m["a"])))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=Object(w["a"])()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=Object(s["s"])(this._lercDecoder)}set minScale(e){this.constructed&&g.warn(this.declaredClass+".minScale support has been removed (since 4.5)")}get minScale(){}set maxScale(e){this.constructed&&g.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")}get maxScale(){}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=Object(s["l"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new l["a"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(c["v"]).then(()=>this._fetchImageService(t))),Promise.resolve(this)}fetchTile(e,t,i,a){const l=Object(s["l"])((a=a||{signal:null}).signal)?a.signal:a.signal=(new AbortController).signal,n={responseType:"array-buffer",signal:l},o={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,t,i,a)).then(()=>Object(r["default"])(this.getTileUrl(e,t,i),n)).then(e=>this._lercDecoder.decode(e.data,o,l)).then(e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}))}getTileUrl(e,t,i){const a=!this.tilemapCache&&this.supportsBlankTile,r=Object(h["E"])({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${r?"?"+r:""}`}async queryElevation(e,t){const{ElevationQuery:a}=await i.e("chunk-c6bbf30e").then(i.bind(null,"2df6"));return Object(c["w"])(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e("chunk-c6bbf30e").then(i.bind(null,"2df6"));return Object(c["w"])(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await Object(r["default"])(this.parsedUrl.path,t);i.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};Object(a["a"])([Object(p["b"])({json:{read:{source:"copyrightText"}}})],_.prototype,"copyright",void 0),Object(a["a"])([Object(p["b"])({readOnly:!0,type:b["a"]})],_.prototype,"heightModelInfo",void 0),Object(a["a"])([Object(p["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],_.prototype,"path",void 0),Object(a["a"])([Object(p["b"])({type:["show","hide"]})],_.prototype,"listMode",void 0),Object(a["a"])([Object(p["b"])({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],_.prototype,"minScale",null),Object(a["a"])([Object(p["b"])({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],_.prototype,"maxScale",null),Object(a["a"])([Object(p["b"])({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],_.prototype,"opacity",void 0),Object(a["a"])([Object(p["b"])({type:["ArcGISTiledElevationServiceLayer"]})],_.prototype,"operationalLayerType",void 0),Object(a["a"])([Object(p["b"])()],_.prototype,"sourceJSON",void 0),Object(a["a"])([Object(p["b"])({json:{read:!1},value:"elevation",readOnly:!0})],_.prototype,"type",void 0),Object(a["a"])([Object(p["b"])(j["n"])],_.prototype,"url",void 0),Object(a["a"])([Object(p["b"])()],_.prototype,"version",void 0),Object(a["a"])([Object(u["a"])("version",["currentVersion"])],_.prototype,"readVersion",null),_=Object(a["a"])([Object(d["a"])("esri.layers.ElevationLayer")],_),_.prototype.fetchTile.__isDefault__=!0;const S=_}}]);