(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e571a16","chunk-792b91aa","chunk-479b5802"],{2258:function(e,t,r){"use strict";function a(e,t,r){return t.flatten(({sublayers:e})=>e).length!==e.length||(!!e.some(e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r)||!s(e,t))}function i(e,t,r){return!!e.some(e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2})||!s(e,t)}function s(e,t){if(!e||!e.length)return!0;const r=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray();if(e.length>r.length)return!1;let a=0;const i=r.length;for(const{id:s}of e){for(;a<i&&r[a]!==s;)a++;if(a>=i)return!1}return!0}function n(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}))},2650:function(e,t,r){"use strict";r.r(t);var a=r("a4ee"),i=(r("c120"),r("b2b2")),s=(r("e92d"),r("59b2")),n=r("1a3e"),l=r("afcf"),o=r("d386"),c=r("09db"),u=r("ce50"),p=r("e041"),b=(r("8eed"),r("f402"),r("5996")),h=(r("e06a"),r("2eab")),d=r("a6a3"),y=r("e694"),f=r("54b4"),m=r("22f4"),O=r("b911"),v=r("3d59"),j=r("997b"),g=r("8b28"),w=r("0db5"),S=r("8e17"),_=r("5a62"),x=r("9096"),L=r("b485"),T=r("303f"),I=r("e9d0"),D=r("d409");const A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let E=class extends(Object(j["a"])(Object(D["a"])(Object(_["a"])(Object(S["a"])(Object(O["a"])(Object(w["a"])(Object(L["a"])(Object(T["a"])(Object(v["a"])(Object(y["a"])(Object(x["b"])(Object(g["a"])(d["a"]))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(i["k"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Promise.resolve(this)}get attributionDataUrl(){var e;const t=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}readSpatialReference(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&b["a"].fromJSON(e)}writeSublayers(e,t,r,a){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray(),s=[],n={writeSublayerStructure:!1,...a};i.forEach(e=>{const t=e.write({},n);s.push(t)}),s.some(e=>Object.keys(e).length>1)&&(t.layers=s)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map(e=>Object(p["J"])(e).path):null}fetchTile(e,t,r,a={}){const{signal:i,timestamp:s}=a,n=this.getTileUrl(e,t,r),l={responseType:"image",signal:i};return null!=s&&(l.query={_ts:a.timestamp}),Object(h["default"])(n,l).then(e=>e.data)}getTileUrl(e,t,r){const a=!this.tilemapCache&&this.supportsBlankTile,i=Object(p["D"])({...this.parsedUrl.query,blankTile:!a&&null,...this.customParameters}),s=this.tileServers;return`${s&&s.length?s[t%s.length]:this.parsedUrl.path}/tile/${e}/${t}/${r}${i?"?"+i:""}`}_fetchService(e){return new Promise((t,r)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new u["a"]("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new u["a"]("tile-layer:undefined-url","layer's url is not defined");const a=Object(f["e"])(this.parsedUrl.path);if(Object(i["k"])(a)&&"ImageServer"===a.serverType)throw new u["a"]("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(h["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,r)}).then(t=>{if(t.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(f["c"])(this.url))return this._fetchServerVersion(this.url,e).then(e=>{this.read({currentVersion:e})}).catch(()=>{})})}_fetchServerVersion(e,t){if(!Object(f["b"])(e))return Promise.reject();const r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(h["default"])(r,{query:{f:"json",...this.customParameters},responseType:"json",signal:t}).then(e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new u["a"]("tile-layer:version-not-available")})}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}_getDefaultAttribution(e){if(!e)return;let t;e=e.toLowerCase();for(let r=0,a=A.length;r<a;r++)if(t=A[r],t.toLowerCase().indexOf(e)>-1)return Object(p["z"])("//static.arcgis.com/attribution/"+t)}_getDefaultTileServers(e){const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}};Object(a["a"])([Object(s["b"])({readOnly:!0})],E.prototype,"attributionDataUrl",null),Object(a["a"])([Object(s["b"])({type:["show","hide","hide-children"]})],E.prototype,"listMode",void 0),Object(a["a"])([Object(s["b"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],E.prototype,"isReference",void 0),Object(a["a"])([Object(s["b"])({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],E.prototype,"operationalLayerType",void 0),Object(a["a"])([Object(s["b"])({type:Boolean})],E.prototype,"resampling",void 0),Object(a["a"])([Object(s["b"])()],E.prototype,"sourceJSON",void 0),Object(a["a"])([Object(s["b"])({type:b["a"]})],E.prototype,"spatialReference",void 0),Object(a["a"])([Object(l["a"])("spatialReference",["spatialReference","tileInfo"])],E.prototype,"readSpatialReference",null),Object(a["a"])([Object(s["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],E.prototype,"path",void 0),Object(a["a"])([Object(s["b"])({readOnly:!0})],E.prototype,"sublayers",void 0),Object(a["a"])([Object(c["a"])("sublayers",{layers:{type:[I["a"]]}})],E.prototype,"writeSublayers",null),Object(a["a"])([Object(s["b"])({json:{read:!1,write:!1}})],E.prototype,"popupEnabled",void 0),Object(a["a"])([Object(s["b"])()],E.prototype,"tileServers",null),Object(a["a"])([Object(n["a"])("tileServers")],E.prototype,"castTileServers",null),Object(a["a"])([Object(s["b"])({readOnly:!0,json:{read:!1}})],E.prototype,"type",void 0),Object(a["a"])([Object(s["b"])(m["n"])],E.prototype,"url",void 0),E=Object(a["a"])([Object(o["a"])("esri.layers.TileLayer")],E);var P=E;t["default"]=P},"303f":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r("a4ee"),i=(r("c120"),r("e92d"),r("cea0"),r("59b2")),s=r("afcf"),n=r("d386"),l=r("e041"),o=(r("8eed"),r("f402"),r("f4cc")),c=r("5996"),u=r("3af1"),p=r("2eab"),b=r("549a"),h=r("22f4");const d=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,t){const r=t.capabilities&&t.capabilities.split(",").map(e=>e.toLowerCase().trim());if(!r)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const a=this.type,i=-1!==r.indexOf("query"),s=-1!==r.indexOf("map"),n=!!t.exportTilesAllowed,l=-1!==r.indexOf("tilemap"),o="tile"!==a&&!!t.supportsDynamicLayers,c="tile"!==a&&(!t.tileInfo||o),u="tile"!==a&&(!t.tileInfo||o),p="tile"!==a,h=!!t.cimVersion&&b["a"].parse(t.cimVersion).since(1,4);return{operations:{supportsQuery:i,supportsExportMap:s,supportsExportTiles:n,supportsTileMap:l},exportMap:s?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:p,supportsDynamicLayers:o,supportsSublayerVisibility:c,supportsSublayerDefinitionExpression:u}:null,exportTiles:n?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(p["default"])(Object(l["J"])(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters}}).then(e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}},e=>({error:e})));const t=await this._allLayersAndTablesPromise;if(Object(o["w"])(e),"result"in t)return t.result;throw t.error}};return Object(a["a"])([Object(i["b"])({readOnly:!0})],t.prototype,"capabilities",void 0),Object(a["a"])([Object(s["a"])("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(a["a"])([Object(i["b"])({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a["a"])([Object(i["b"])({type:u["a"]})],t.prototype,"fullExtent",void 0),Object(a["a"])([Object(i["b"])(h["c"])],t.prototype,"id",void 0),Object(a["a"])([Object(i["b"])({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(a["a"])([Object(i["b"])(h["j"])],t.prototype,"popupEnabled",void 0),Object(a["a"])([Object(i["b"])({type:c["a"]})],t.prototype,"spatialReference",void 0),Object(a["a"])([Object(i["b"])()],t.prototype,"version",void 0),Object(a["a"])([Object(s["a"])("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(a["a"])([Object(n["a"])("esri.layers.mixins.ArcGISMapService")],t),t}},"49a0":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var a=r("8048");const i=96;function s(e,t){const r=t||e.extent,s=e.width,n=Object(a["e"])(r&&r.spatialReference);return r&&s?r.width/s*n*a["i"]*i:0}function n(e,t){return e/(Object(a["e"])(t)*a["i"]*i)}},"53f8":function(e,t,r){"use strict";r.r(t);var a=r("a4ee"),i=(r("c120"),r("b2b2")),s=(r("e92d"),r("cea0")),n=r("59b2"),l=r("afcf"),o=r("d386"),c=r("09db"),u=r("ce50"),p=(r("e041"),r("8eed"),r("92ef")),b=(r("f402"),r("f4cc")),h=r("3af1"),d=r("2eab"),y=r("1853"),f=r("a6a3"),m=r("658b"),O=r("e694"),v=r("22f4"),j=r("b911"),g=r("3d59"),w=r("997b"),S=r("8b28"),_=r("0db5"),x=r("8e17"),L=r("5a62"),T=r("601a"),I=r("9096"),D=r("49a0"),A=r("303f"),E=r("e9d0"),P=r("2258"),N=r("d409"),M=r("70ce");let C=class extends(Object(w["a"])(Object(T["a"])(Object(L["a"])(Object(x["a"])(Object(N["a"])(Object(A["a"])(Object(g["a"])(Object(j["a"])(Object(_["a"])(Object(O["a"])(Object(S["a"])(Object(I["b"])(f["a"]))))))))))))){constructor(...e){super(...e),this.alwaysRefetch=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(i["k"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(()=>this._fetchService(t),()=>this._fetchService(t))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,a){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=Object(p["d"])(a.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;s=Object(P["c"])(i,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");s=Object(P["c"])(i,e.sublayers,Object(p["d"])(e.origin))}}const n=[],l={writeSublayerStructure:s,...a};let o=s;i.forEach(e=>{const t=e.write({},l);n.push(t),o=o||"user"===e.originOf("visible")}),n.some(e=>Object.keys(e).length>1)&&(t.layers=n),o&&(t.visibleLayers=i.filter(e=>e.visible).map(e=>e.id))}createExportImageParameters(e,t,r,a){const i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new M["a"]({layer:this,scale:Object(D["b"])({extent:e,width:t})*i}),n=s.toJSON();s.destroy();const l=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},o=e&&e.spatialReference,c=o.wkid||JSON.stringify(o.toJSON());n.dpi*=i;const u={};if(null!=a&&a.timeExtent){const{start:e,end:t}=a.timeExtent.toJSON();u.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(u.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:t+","+r,...n,...l,...u}}async fetchImage(e,t,r,a){const i={responseType:"image"};a&&a.timestamp&&(i.query={...i.query,_ts:a.timestamp}),a&&a.signal&&(i.signal=a.signal),this.customParameters&&Object.keys(this.customParameters).length&&(i.query={...this.customParameters,...i.query});const s=this.parsedUrl.path+"/export",n={...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,a),f:"image",_ts:this.alwaysRefetch?Date.now():null};return null==n.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(i.query?i.query={...n,...i.query}:i.query=n,Object(d["default"])(s,i).then(e=>e.data).catch(e=>{if(Object(b["n"])(e))throw e;throw new u["a"]("mapimagelayer:image-fetch-error","Unable to load image: "+s,{error:e})})):Promise.reject(new u["a"]("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json"}},{data:r}=await Object(d["default"])(this.url,t),{extent:a,fullExtent:i,timeExtent:s}=r,n=a||i;return{fullExtent:n&&h["a"].fromJSON(n),timeExtent:s&&m["a"].fromJSON({start:s[0],end:s[1]})}}loadAll(){return Object(y["a"])(this,e=>{e(this.allSublayers)})}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await Object(d["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};Object(a["a"])([Object(n["b"])()],C.prototype,"alwaysRefetch",void 0),Object(a["a"])([Object(n["b"])()],C.prototype,"dpi",void 0),Object(a["a"])([Object(n["b"])()],C.prototype,"gdbVersion",void 0),Object(a["a"])([Object(n["b"])()],C.prototype,"imageFormat",void 0),Object(a["a"])([Object(l["a"])("imageFormat",["supportedImageFormatTypes"])],C.prototype,"readImageFormat",null),Object(a["a"])([Object(n["b"])({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],C.prototype,"imageMaxHeight",void 0),Object(a["a"])([Object(n["b"])({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],C.prototype,"imageMaxWidth",void 0),Object(a["a"])([Object(n["b"])()],C.prototype,"imageTransparency",void 0),Object(a["a"])([Object(n["b"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],C.prototype,"isReference",void 0),Object(a["a"])([Object(n["b"])({json:{read:!1,write:!1}})],C.prototype,"labelsVisible",void 0),Object(a["a"])([Object(n["b"])({type:["ArcGISMapServiceLayer"]})],C.prototype,"operationalLayerType",void 0),Object(a["a"])([Object(n["b"])({json:{read:!1,write:!1}})],C.prototype,"popupEnabled",void 0),Object(a["a"])([Object(n["b"])()],C.prototype,"sourceJSON",void 0),Object(a["a"])([Object(n["b"])({json:{write:{ignoreOrigin:!0}}})],C.prototype,"sublayers",void 0),Object(a["a"])([Object(c["a"])("sublayers",{layers:{type:[E["a"]]},visibleLayers:{type:[s["a"]]}})],C.prototype,"writeSublayers",null),Object(a["a"])([Object(n["b"])({type:["show","hide","hide-children"]})],C.prototype,"listMode",void 0),Object(a["a"])([Object(n["b"])({json:{read:!1},readOnly:!0,value:"map-image"})],C.prototype,"type",void 0),Object(a["a"])([Object(n["b"])(v["n"])],C.prototype,"url",void 0),C=Object(a["a"])([Object(o["a"])("esri.layers.MapImageLayer")],C);var J=C;t["default"]=J},"549a":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("ce50");class i{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new a["a"](t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new i(this.major,this.minor,this._context)}static parse(e,t=""){const[r,s]=e.split("."),n=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(n))throw new a["a"]((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!s||!s.match||!s.match(n))throw new a["a"]((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const l=parseInt(r,10),o=parseInt(s,10);return new i(l,o,t)}}},"70ce":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r("a4ee"),i=(r("c120"),r("e92d"),r("cea0"),r("59b2")),s=r("d386"),n=(r("e041"),r("8eed"),r("f402"),r("fc29")),l=r("22f4"),o=r("9096"),c=r("2258");const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let p=class extends(Object(o["b"])(n["a"])){constructor(e){super(e),this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(e=>e.toExportImageJSON());return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(c["a"])(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",e=>this.notifyChange(u[e.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(e=>e.id).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter(e=>null!=e.definitionExpression);return e.length?JSON.stringify(e.reduce((e,t)=>(e[t.id]=t.definitionExpression,e),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const a=this.scale,i=0===a,s=0===t.minScale||a<=t.minScale,n=0===t.maxScale||a>=t.maxScale;t.visible&&(i||s&&n)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const a=this._get("visibleSublayers");return!a||a.length!==e.length||a.some((t,r)=>e[r]!==t)?e:a}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"dynamicLayers",null),Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"hasDynamicLayers",null),Object(a["a"])([Object(i["b"])()],p.prototype,"layer",null),Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"layers",null),Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"layerDefs",null),Object(a["a"])([Object(i["b"])({type:Number})],p.prototype,"scale",void 0),Object(a["a"])([Object(i["b"])(l["a"])],p.prototype,"timeExtent",void 0),Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"version",null),Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"visibleSublayers",null),p=Object(a["a"])([Object(s["a"])("esri.layers.mixins.ExportImageParameters")],p)},"7d2d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("div",{ref:"dom",staticClass:"container"})])},i=[],s=r("1da1"),n=(r("96cf"),r("d81d"),r("d3b7"),r("159b"),r("b0c0"),r("bc3a")),l=r.n(n),o=(r("5996"),r("2650"),r("53f8"),r("5bd5")),c=r("c246"),u=r("6d1b"),p=r("a611"),b=r("f6ad"),h=r("4ae5"),d=r("8d60"),y=(r("ce0b"),{name:"PolygonLayer",components:{},data:function(){return{}},mounted:function(){this.init(),this.initGridLayer(),this.bind()},methods:{init:function(){var e=new u["a"]({basemap:"hybrid"}),t=new p["a"]({container:this.$refs["dom"],map:e,zoom:11,center:[113.51781466788616,22.759990190213156]}),r=new b["a"]({view:t});t.ui.add(r,{position:"bottom-left"}),this.map=e,window._view=this.view=t},initGridLayer:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new c["a"]({symbol:{type:"text",color:"#fff",haloColor:"#3d83d1",haloSize:1,font:{size:12,weight:"bold"}},labelPlacement:"above-center",labelExpressionInfo:{expression:"return $feature.name"}}),t.next=3,e.getGridData();case 3:a=t.sent,i=new o["default"]({id:"grid",title:"网格图层",opacity:1,fields:[{name:"ObjectID",type:"string"},{name:"name",type:"string"}],outFields:["*"],objectIdField:"ObjectID",geometryType:"polygon",source:[],labelingInfo:[r],popupTemplate:{title:"{name}"},renderer:{type:"simple",symbol:{type:"simple-fill",size:12,color:[57,100,240,.5],outline:{width:1,color:"white"}}}}),e.map.add(i),i.applyEdits({addFeatures:a}).then((function(e){console.log("deleteFeatures:".concat(e.deleteFeatureResults.length)),console.log("addFeatures:".concat(e.addFeatureResults.length))}));case 7:case"end":return t.stop()}}),t)})))()},getGridData:function(){return new Promise((function(e){l.a.get("".concat("/study-arcgis.github.io/","/static/nansha.json")).then((function(t){var r=[];t.data.data[0].features.forEach((function(e){var t=new d["a"]({geometry:{type:"polygon",rings:e.geometry.coordinates},symbol:{type:"simple-fill",color:[122,172,255,.3],style:"solid",outline:{color:"#284bff",width:2,style:"solid"}},attributes:{name:e.properties.name},popupTemplate:{title:"polygon"}});r.push(t)})),e(r)}))}))},bind:function(){var e=this,t=null,r=null;this.view.on("pointer-move",(function(a){e.view.hitTest(a).then((function(a){var i=a.results,s=i.length?i[0].graphic:null;if(s&&s.sourceLayer&&"grid"==s.sourceLayer.id){if(r==s.attributes.name)return;t&&t.remove(),e.view.whenLayerView(s.layer).then((function(e){t=e.highlight(s),r=s.attributes.name}))}else t&&(t.remove(),t=null,r=null)}))})),this.view.on("click",(function(t){var r=t.mapPoint,a=r.longitude,i=r.latitude;console.log("[".concat([a,i],"]")),e.view.goTo({center:new h["a"]({x:a,y:i}),zoom:13}).then((function(){console.log("平移")}))}))}}}),f=y,m=r("2877"),O=Object(m["a"])(f,a,i,!1,null,null,null);t["default"]=O.exports},9651:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var a=r("a4ee"),i=(r("c120"),r("e92d")),s=r("59b2"),n=r("1a3e"),l=r("d386"),o=r("ce50"),c=r("e041"),u=(r("8eed"),r("f402"),r("8a44")),p=r("f4cc"),b=r("5815"),h=r("fc29"),d=r("2eab"),y=r("af40"),f=r("3795"),m=r("c24e"),O=r("7ffa"),v=r("b50f");class j{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;const r=(e-this.location.top)*this.location.width+(t-this.location.left),a=r%8,i=r>>3,s=this._tileAvailabilityBitSet;return i<0||i>s.length?"unknown":s[i]&1<<a?"available":"unavailable"}_updateFromData(e){const t=this.location.width,r=this.location.height;let a=!0,i=!0;const s=Math.ceil(t*r/8),n=new Uint8Array(s);let l=0;for(let o=0;o<e.length;o++){const t=o%8;e[o]?(i=!1,n[l]|=1<<t):a=!1,7===t&&++l}i?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(e,t){const r=e.service.request||d["default"],{row:a,col:i,width:s,height:n}=e,l={query:{f:"json"}};return t=t?{...l,...t}:l,r(w(e),t).then(e=>e.data).catch(e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:i,width:s,height:n},valid:!0,data:Object(v["c"])(s*n,0)};throw e}).then(e=>{if(e.location&&(e.location.top!==a||e.location.left!==i||e.location.width!==s||e.location.height!==n))throw new o["a"]("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:i,width:s,height:n}});return j.fromJSON(e)})}static fromJSON(e){j.validateJSON(e);const t=new j;return t.location=Object.freeze(Object(O["a"])(e.location)),t._updateFromData(e.data),Object.freeze(t)}static validateJSON(e){if(!e||!e.location)throw new o["a"]("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o["a"]("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o["a"]("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o["a"]("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o["a"]("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function g(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function w(e){let t;if("vector-tile"===e.service.type)t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;else{const r=e.service.tileServers;t=`${r&&r.length?r[e.row%r.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}const r=e.service.query;return r&&(t=`${t}?${r}`),t}var S;const _=i["a"].getLogger("esri.layers.support.TilemapCache");let x=S=class extends h["a"]{constructor(e){super(e),this._handles=new y["a"],this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=d["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new m["a"](this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],()=>this._initializeTilemapDefinition()),Object(f["a"])(this,"layer.tileInfo.lods",e=>this._initializeAvailableLevels(e),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(_.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,r,a){if(!this._availableLevels[e])return Promise.reject(new o["a"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const i=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,r,i);if(s)return Promise.resolve(s);const n=a&&a.signal;return a={...a,signal:null},new Promise((e,t)=>{Object(p["r"])(n,()=>t(Object(p["f"])()));const r=g(i);let s=this._pendingTilemapRequests[r];if(!s){s=j.fromDefinition(i,a).then(e=>(this._tilemapCache.put(r,e,e.byteSize),e));const e=()=>delete this._pendingTilemapRequests[r];this._pendingTilemapRequests[r]=s,s.then(e,e)}s.then(e,t)})}getAvailability(e,t,r){if(!this._availableLevels[e])return"unavailable";const a=this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition);return a?a.getAvailability(t,r):"unknown"}getAvailabilityUpsample(e,t,r,a){a.level=e,a.row=t,a.col=r;const i=this.layer.tileInfo;for(i.updateTileInfo(a);;){const e=this.getAvailability(a.level,a.row,a.col);if("unavailable"!==e)return e;if(!i.upsampleTile(a))return"unavailable"}}fetchAvailability(e,t,r,a){return this._availableLevels[e]?this.fetchTilemap(e,t,r,a).catch(e=>e).then(a=>{if(a instanceof j){const i=a.getAvailability(t,r);return"unavailable"===i?Promise.reject(new o["a"]("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})):i}if(Object(p["n"])(a))throw a;return"unknown"}):Promise.reject(new o["a"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,r,a,i){a.level=e,a.row=t,a.col=r;const s=this.layer.tileInfo;s.updateTileInfo(a);const n=this.fetchAvailability(e,t,r,i).catch(e=>{if(Object(p["n"])(e))throw e;if(s.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a);throw e});return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,r,i,n),n}async _fetchAvailabilityUpsamplePrefetch(e,t,r,a,i,s){if(!this._prefetchingEnabled)return;const n="prefetch-"+e;if(this._handles.has(n))return;const l=Object(p["e"])();s.then(()=>l.abort(),()=>l.abort());let o=!1;const c={remove(){o||(o=!0,l.abort())}};if(this._handles.add(c,n),await Object(b["d"])(10,l.signal).catch(()=>{}),o||(o=!0,this._handles.remove(n)),Object(p["o"])(l))return;const u={id:e,level:t,row:r,col:a},h={...i,signal:l.signal},d=this.layer.tileInfo;for(let p=0;S._prefetches.length<S._maxPrefetch&&d.upsampleTile(u);++p){const e=this.fetchAvailability(u.level,u.row,u.col,h);S._prefetches.push(e);const t=()=>{S._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(c["D"])(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,r,a){a.level=e,a.row=t-t%this.size,a.col=r-r%this.size;const i=g(a);return this._tilemapCache.get(i)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach(e=>this._availableLevels[e.level]=!0)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,r,a)=>!!e._tilemapFromCache(t,r,a,e._tmpTilemapDefinition)}}};x._maxPrefetch=4,x._prefetches=new u["a"]({initialSize:S._maxPrefetch}),Object(a["a"])([Object(s["b"])({constructOnly:!0,type:Number})],x.prototype,"levels",void 0),Object(a["a"])([Object(n["a"])("levels")],x.prototype,"castLevels",null),Object(a["a"])([Object(s["b"])({readOnly:!0,type:Number})],x.prototype,"size",null),Object(a["a"])([Object(s["b"])({constructOnly:!0,type:Number})],x.prototype,"cacheByteSize",void 0),Object(a["a"])([Object(s["b"])({constructOnly:!0})],x.prototype,"layer",void 0),Object(a["a"])([Object(s["b"])({constructOnly:!0})],x.prototype,"request",void 0),x=S=Object(a["a"])([Object(l["a"])("esri.layers.support.TilemapCache")],x)},ab68:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var a=r("dff3");const i={type:a["a"],json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:s}}}}};function s(e,t,r,i){if(!e)return null;const{minScale:s,maxScale:n,minLOD:l,maxLOD:o}=t;if(null!=l&&null!=o)return i&&i.ignoreMinMaxLOD?a["a"].fromJSON(e):a["a"].fromJSON({...e,lods:e.lods.filter(({level:e})=>null!=e&&e>=l&&e<=o)});if(0!==s&&0!==n){const t=e=>Math.round(1e4*e)/1e4,r=s?t(s):1/0,i=n?t(n):-1/0;return a["a"].fromJSON({...e,lods:e.lods.filter(e=>{const a=t(e.scale);return a<=r&&a>=i})})}return a["a"].fromJSON(e)}},b485:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r("a4ee"),i=(r("c120"),r("e92d"),r("cea0"),r("59b2")),s=r("afcf"),n=r("d386"),l=(r("e041"),r("8eed"),r("f402"),r("5996")),o=(r("e06a"),r("ab68")),c=r("9651");const u=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new c["a"]({layer:this}):null}};return Object(a["a"])([Object(i["b"])({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(a["a"])([Object(i["b"])()],t.prototype,"minScale",void 0),Object(a["a"])([Object(s["a"])("service","minScale")],t.prototype,"readMinScale",null),Object(a["a"])([Object(i["b"])()],t.prototype,"maxScale",void 0),Object(a["a"])([Object(s["a"])("service","maxScale")],t.prototype,"readMaxScale",null),Object(a["a"])([Object(i["b"])({type:l["a"]})],t.prototype,"spatialReference",void 0),Object(a["a"])([Object(i["b"])({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(a["a"])([Object(i["b"])(o["b"])],t.prototype,"tileInfo",void 0),Object(a["a"])([Object(i["b"])()],t.prototype,"tilemapCache",void 0),Object(a["a"])([Object(s["a"])("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(a["a"])([Object(i["b"])()],t.prototype,"version",void 0),t=Object(a["a"])([Object(n["a"])("esri.layers.mixins.ArcGISCachedService")],t),t}},ce0b:function(e,t,r){"use strict";var a=r("a4ee"),i=(r("c120"),r("e92d"),r("cea0"),r("59b2")),s=r("d386"),n=(r("e041"),r("8eed"),r("f402"),r("a6a3")),l=r("fd14"),o=r("997b"),c=r("5a62"),u=r("f626");let p=class extends(Object(o["a"])(Object(c["a"])(n["a"]))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new u["b"],this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};Object(a["a"])([Object(i["b"])({type:l["a"]})],p.prototype,"elevationInfo",void 0),Object(a["a"])([Object(i["b"])(Object(u["c"])())],p.prototype,"graphics",void 0),Object(a["a"])([Object(i["b"])({type:["show","hide"]})],p.prototype,"listMode",void 0),Object(a["a"])([Object(i["b"])()],p.prototype,"screenSizePerspectiveEnabled",void 0),Object(a["a"])([Object(i["b"])({readOnly:!0})],p.prototype,"type",void 0),Object(a["a"])([Object(i["b"])({constructOnly:!0})],p.prototype,"internal",void 0),p=Object(a["a"])([Object(s["a"])("esri.layers.GraphicsLayer")],p);var b=p;t["a"]=b},d409:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var a=r("a4ee"),i=(r("c120"),r("e92d")),s=(r("cea0"),r("4c37")),n=r("59b2"),l=r("d386"),o=r("ce50"),c=(r("e041"),r("8eed"),r("92ef")),u=(r("f402"),r("2c4f")),p=r("4d10"),b=r("e9d0"),h=r("2258");const d=i["a"].getLogger("esri.layers.TileLayer");function y(e,t){const r=[],a={};return e?(e.forEach(e=>{const i=new b["a"];if(i.read(e,t),a[i.id]=i,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=a[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(i)}else r.unshift(i)}),r):r}const f=u["a"].ofType(b["a"]);function m(e,t){e&&e.forEach(e=>{t(e),e.sublayers&&e.sublayers.length&&m(e.sublayers,t)})}const O=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new p["a"]({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.watch("sublayers",(e,t)=>this._handleSublayersChange(e,t),!0)}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,a=Object(c["d"])(t.origin);if(a<2)return;if(r[a]={context:t,visibleLayers:e.visibleLayers||r[a].visibleLayers,layers:e.layers||r[a].layers},a>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:i,origin:n}=this.createSublayersForOrigin("web-document"),l=Object(s["a"])(this);l.setDefaultOrigin(n),this._set("sublayers",new f(i)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=Object(c["d"])("web-document"===e?"web-map":e);let r=2,a=this.sublayersSourceJSON[2].layers,i=this.sublayersSourceJSON[2].context,s=null;const n=[3,4,5].filter(e=>e<=t);for(const c of n){const e=this.sublayersSourceJSON[c];Object(h["b"])(e.layers)&&(r=c,a=e.layers,i=e.context,e.visibleLayers&&(s={visibleLayers:e.visibleLayers,context:e.context}))}const l=[3,4,5].filter(e=>e>r&&e<=t);let o=null;for(const c of l){const{layers:e,visibleLayers:t,context:r}=this.sublayersSourceJSON[c];e&&(o={layers:e,context:r}),t&&(s={visibleLayers:t,context:r})}const u=y(a,i),p=new Map,b=new Set;if(o)for(const c of o.layers)p.set(c.id,c);if(s)for(const c of s.visibleLayers)b.add(c);return m(u,e=>{o&&e.read(p.get(e.id),o.context),s&&e.read({defaultVisibility:b.has(e.id)},s.context)}),{origin:Object(c["b"])(r),sublayers:new f({items:u})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(e=>{e.parent=this,e.layer=this}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",e=>{d.error(new o["a"]("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()}),"sublayers-owner"))}};return Object(a["a"])([Object(n["b"])({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(a["a"])([Object(n["b"])({readOnly:!0,type:u["a"].ofType(b["a"])})],t.prototype,"serviceSublayers",void 0),Object(a["a"])([Object(n["b"])({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(a["a"])([Object(n["b"])({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(a["a"])([Object(l["a"])("esri.layers.mixins.SublayersOwner")],t),t}}}]);