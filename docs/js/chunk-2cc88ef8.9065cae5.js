(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cc88ef8"],{"02b4":function(e,t,i){"use strict";i.r(t);var s=i("a4ee"),r=(i("c120"),i("b2b2")),a=i("e92d"),n=(i("cea0"),i("59b2")),c=i("d386"),o=i("ce50"),h=(i("e041"),i("8eed"),i("f402"),i("f4cc")),l=i("ae54"),u=i("6c7a"),d=i("018d"),p=i("07cd"),f=i("d302"),b=i("365a"),y=i("e94b"),g=i("2be0"),m=i("566d"),w=i("164a");const v=a["a"].getLogger("esri.views.2d.layers.TileLayerView2D"),_=[0,0];let O=class extends(Object(g["a"])(Object(u["a"])(Object(w["a"])(Object(m["a"])(b["a"]))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new o["a"]("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new o["a"]("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",()=>{this.refresh()}),i&&this.addResolvingPromise(Promise.reject(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new d["a"](this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new p["a"]({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new f["a"]({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(y["a"])(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>this._enqueueTileFetch(e)),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!Object(r["j"])(t)&&t.signal;if(!i)try{return await this._fetchImage(e,s)}catch(d){if(!Object(h["n"])(d)&&!this.resampling)return this._createBlankImage();throw d}const a=new l["a"](0,0,0,0);let n;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return this._createBlankImage();n=await this._fetchImage(a,s)}catch(d){if(Object(h["n"])(d))throw d;n=await this._fetchImage(e,s)}const{level:c,row:o,col:u}=a;return this.resampling&&c!==e.level?this._resampleImage(n,c,o,u,e.level,e.row,e.col):n}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){Object(h["n"])(t)||v.error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,s,r,a,n){const c=this._tileInfoView.tileInfo.size,o=this._tileInfoView.getTileResolution(t),h=this._tileInfoView.getTileResolution(r);let l=this._tileInfoView.getLODInfoAt(r);const u=l.getXForColumn(n),d=l.getYForRow(a);l=this._tileInfoView.getLODInfoAt(t);const p=l.getXForColumn(s),f=l.getYForRow(i),b=Math.round((u-p)/o),y=Math.round(-(d-f)/o),g=Math.round(c[0]*(h/o)),m=Math.round(c[1]*(h/o)),w=this._createBlankImage();return w.getContext("2d").drawImage(e,b,y,g,m,0,0,c[0],c[1]),w}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};Object(s["a"])([Object(n["b"])()],O.prototype,"resampling",null),O=Object(s["a"])([Object(c["a"])("esri.views.2d.layers.TileLayerView2D")],O);var j=O;t["default"]=j},"164a":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("a4ee"),r=(i("c120"),i("e92d"),i("cea0"),i("59b2"),i("d386")),a=(i("e041"),i("8eed"),i("f402"),i("e80c"));const n=e=>{let t=class extends e{attach(){this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new a["a"](this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return t=Object(s["a"])([Object(r["a"])("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},"2be0":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var s=i("a4ee"),r=(i("c120"),i("b2b2")),a=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),c=i("ce50"),o=(i("e041"),i("8eed"),i("f402"),i("f4cc")),h=i("536f");const l=e=>{let t=class extends e{async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)return Promise.reject(new c["a"]("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));if("tile"!==i.type)return Promise.reject(new c["a"]("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:i.type}));const s=this.get("view.scale"),a=i.allSublayers.toArray().filter(e=>{const t=0===e.minScale||s<=e.minScale,i=0===e.maxScale||s>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&t&&i});return Object(o["k"])(a.map(async i=>{const s=i.createQuery(),a=Object(r["k"])(t)?t.event:null,n=Object(h["a"])({renderer:i.renderer,event:a});return s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,n),s.outFields=await i.popupTemplate.getRequiredFields(),(await i.queryFeatures(s)).features})).then(e=>[].concat(...e.map(e=>e.value).filter(Boolean)))}};return Object(s["a"])([Object(a["b"])()],t.prototype,"layer",void 0),t=Object(s["a"])([Object(n["a"])("esri.layers.mixins.TileLayerView")],t),t}},"365a":function(e,t,i){"use strict";var s=i("a4ee"),r=(i("c120"),i("e92d")),a=(i("cea0"),i("59b2")),n=i("d386"),c=(i("e041"),i("8eed"),i("f402"),i("fc29")),o=i("ce6d"),h=i("a5d8"),l=i("fab3"),u=i("9096");let d=class extends(Object(u["b"])(Object(h["a"])(Object(l["b"])(o["a"].EventedMixin(c["a"]))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw r["a"].getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){const e=e=>null==e?1:e;return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s["a"])([Object(a["b"])()],d.prototype,"fullOpacity",null),Object(s["a"])([Object(a["b"])()],d.prototype,"layer",void 0),Object(s["a"])([Object(a["b"])()],d.prototype,"parent",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0})],d.prototype,"suspended",null),Object(s["a"])([Object(a["b"])({readOnly:!0})],d.prototype,"suspendInfo",null),Object(s["a"])([Object(a["b"])({readOnly:!0})],d.prototype,"legendEnabled",null),Object(s["a"])([Object(a["b"])({type:Boolean,readOnly:!0})],d.prototype,"updating",null),Object(s["a"])([Object(a["b"])()],d.prototype,"visible",null),d=Object(s["a"])([Object(n["a"])("esri.views.layers.LayerView")],d);var p=d;t["a"]=p},"536f":function(e,t,i){"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e){let t=0,i=0;for(let s=0;s<e.length;s++){const r=e[s].size;"number"==typeof r&&(t+=r,i++)}return t/i}function a(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?r(e.stops):t}function n(e,t){if(!t)return e;const i=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:i,minSize:s}=t;return(a(i,e)+a(s,e))/2});let s=0;const r=i.length;if(0===r)return e;for(let a=0;a<r;a++)s+=i[a];const n=Math.floor(s/r);return Math.max(n,e)}function c(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const r="visualVariables"in t?n(i,t.visualVariables):i;if("simple"===t.type)return s(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach(t=>{e=s(e,t.symbol)}),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach(t=>{e=s(e,t.symbol)}),e}return t.type,r}i.d(t,"a",(function(){return c}))},"566d":function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var s=i("a4ee"),r=(i("c120"),i("e92d"),i("cea0"),i("59b2")),a=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("2c4f")),c=i("7d7d"),o=i("3795"),h=i("6a0e");let l=class extends h["a"]{};l=Object(s["a"])([Object(a["a"])("esri.views.layers.support.ClipArea")],l);var u,d=l,p=d;let f=u=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new u({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],f.prototype,"left",void 0),Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],f.prototype,"right",void 0),Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],f.prototype,"top",void 0),Object(s["a"])([Object(r["b"])({type:[Number,String],json:{write:!0}})],f.prototype,"bottom",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],f.prototype,"version",null),f=u=Object(s["a"])([Object(a["a"])("esri.views.layers.support.ClipRect")],f);var b,y=f,g=y,m=i("00c0"),w=i("3760"),v=i("3af1"),_=i("1219"),O=i("a9ab");i("e06a");const j={base:w["a"],key:"type",typeMap:{extent:v["a"],polygon:_["a"]}};let x=b=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new b({geometry:this.geometry.clone()})}};Object(s["a"])([Object(r["b"])({types:j,json:{read:O["a"],write:!0}})],x.prototype,"geometry",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],x.prototype,"version",null),x=b=Object(s["a"])([Object(a["a"])("esri.views.layers.support.Geometry")],x);var R=x,I=R;let T=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s["a"])([Object(r["b"])({type:[[[Number]]],json:{write:!0}})],T.prototype,"path",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],T.prototype,"version",null),T=Object(s["a"])([Object(a["a"])("esri.views.layers.support.Path")],T);var k=T,B=k;const P=n["a"].ofType({key:"type",base:p,typeMap:{rect:g,path:B,geometry:I}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new P,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new m["a"]),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(o["a"])(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(o["a"])(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(o["a"])(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(o["a"])(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s["a"])([Object(r["b"])({type:P,set(e){const t=Object(c["b"])(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"moving",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"attached",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"container",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"suspended",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"updateRequested",void 0),Object(s["a"])([Object(r["b"])()],t.prototype,"updating",null),Object(s["a"])([Object(r["b"])()],t.prototype,"view",void 0),t=Object(s["a"])([Object(a["a"])("esri.views.2d.layers.LayerView2D")],t),t}},6722:function(e,t,i){"use strict";var s=i("c84e"),r=i("6f75"),a=i("ec5e"),n=i("9a02");const c=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class o extends n["a"]{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(c),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:t}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(t.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(t.scale)}}prepareRenderPasses(e){const t=e.registerRenderPass({name:"stencil",brushes:[a["a"]],drawPhase:s["c"].DEBUG|s["c"].MAP|s["c"].HIGHLIGHT,target:()=>this.getStencilTarget()}),i=e.registerRenderPass({name:"tileInfo",brushes:[r["a"]],drawPhase:s["c"].DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(e),t,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const t of this.children){const i=this._tileInfoView.getTileResolution(t.key);t.setTransform(e,i)}}setStencilReference(){let e=1;for(const t of this.children)t.stencilRef=e++}}t["a"]=o},"894c":function(e,t,i){"use strict";class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}t["a"]=s},"9a02":function(e,t,i){"use strict";i("c120");var s=i("b2b2"),r=i("c84e"),a=i("00c0"),n=i("3b1a"),c=i("e92d"),o=i("ce50"),h=i("0fa6"),l=i("7c4b"),u=i("8152"),d=i("6655"),p=i("02f1"),f=i("fb2c"),b=i("3349"),y=i("7ce4"),g=i("d114");const m=c["a"].getLogger("esri.views.2d.engine.webgl.Mesh2D"),w=e=>{switch(e.BYTES_PER_ELEMENT){case 1:return 5121;case 2:return 5123;case 4:return 5125;default:throw new o["a"]("Cannot get DataType of array")}},v=(e,t,i,s)=>{let r=0;for(let a=1;a<i;a++){const i=e[2*(t+a-1)],s=e[2*(t+a-1)+1];r+=(e[2*(t+a)]-i)*(e[2*(t+a)+1]+s)}return s?r>0:r<0},_=({coords:e,lengths:t},i)=>{const s=[];for(let r=0,a=0;r<t.length;a+=t[r],r+=1){const n=a,c=[];for(;r<t.length-1&&v(e,a+t[r],t[r+1],i);r+=1,a+=t[r])c.push(a+t[r]-n);const o=e.slice(2*n,2*(a+t[r])),h=Object(f["b"])(o,c,2);for(const e of h)s.push(e+n)}return s};class O{constructor(e,t,i,s=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=i,this.isMapSpace=s}static fromRect({x:e,y:t,width:i,height:s}){const r=e,a=t,n=r+i,c=a+s;return O.fromScreenExtent({xmin:r,ymin:a,xmax:n,ymax:c})}static fromPath(e){const t=Object(d["f"])(new u["a"],e.path,!1,!1),i=t.coords,s=new Uint32Array(_(t,!0)),r=new Uint32Array(i.length/2);for(let a=0;a<r.length;a++)r[a]=Object(g["a"])(Math.floor(i[2*a]),Math.floor(i[2*a+1]));return new O({geometry:r},s,4)}static fromGeometry(e,t){const i=t.geometry.type;switch(i){case"polygon":return O.fromPolygon(e,t.geometry);case"extent":return O.fromMapExtent(e,t.geometry);default:return m.error(new o["a"]("mapview-bad-type","Unable to create a mesh from type "+i,t)),O.fromRect({x:0,y:0,width:1,height:1})}}static fromPolygon(e,t){const i=Object(d["g"])(new u["a"],t,!1,!1),s=i.coords,r=new Uint32Array(_(i,!1)),a=new Uint32Array(s.length/2),n=Object(p["b"])(),c=Object(p["b"])();for(let o=0;o<a.length;o++)Object(b["s"])(n,s[2*o],s[2*o+1]),e.toScreen(c,n),a[o]=Object(g["a"])(Math.floor(c[0]),Math.floor(c[1]));return new O({geometry:a},r,4,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:i,ymax:s}){const r={geometry:new Uint32Array([Object(g["a"])(e,i),Object(g["a"])(t,i),Object(g["a"])(e,s),Object(g["a"])(e,s),Object(g["a"])(t,i),Object(g["a"])(t,s)])},a=new Uint32Array([0,1,2,3,4,5]);return new O(r,a,4)}static fromMapExtent(e,t){const[i,s]=e.toScreen([0,0],[t.xmin,t.ymin]),[r,a]=e.toScreen([0,0],[t.xmax,t.ymax]),n={geometry:new Uint32Array([Object(g["a"])(i,s),Object(g["a"])(r,s),Object(g["a"])(i,a),Object(g["a"])(i,a),Object(g["a"])(r,s),Object(g["a"])(r,a)])},c=new Uint32Array([0,1,2,3,4,5]);return new O(n,c,4)}destroy(){Object(s["k"])(this._cache.indexBuffer)&&this._cache.indexBuffer.dispose();for(const e in this._cache.vertexBuffers)Object(s["k"])(this._cache.vertexBuffers[e])&&this._cache.vertexBuffers[e].dispose()}get elementType(){return w(this.indices)}getIndexBuffer(e,t=35044){return this._cache.indexBuffer||(this._cache.indexBuffer=y["a"].createIndex(e,t,this.indices)),this._cache.indexBuffer}getVertexBuffers(e,t=35044){return this._cache.vertexBuffers||(this._cache.vertexBuffers=Object.keys(this.vertices).reduce((i,s)=>({...i,[s]:y["a"].createVertex(e,t,this.vertices[s])}),{})),this._cache.vertexBuffers}}var j=O;const x=c["a"].getLogger("esri.views.2d.engine.webgl.ClippingInfo"),R=e=>parseFloat(e)/100;class I extends l["a"]{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=t.watch("version",()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new I(e,t)}_destroyGL(){Object(s["k"])(this._cache.mesh)&&(this._cache.mesh.destroy(),this._cache.mesh=null),Object(s["k"])(this._cache.vao)&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,i,r){const[a,n]=t.size;if("geometry"!==this._clip.type&&this._lastWidth===a&&this._lastHeight===n||(this._lastWidth=a,this._lastHeight=n,this._destroyGL()),Object(s["j"])(this._cache.vao)){const s=this._createMesh(t,this._clip),a=s.getIndexBuffer(e),n=s.getVertexBuffers(e);this._cache.mesh=s,this._cache.vao=new h["a"](e,i,r,n,a)}return this._cache.vao}_invalidate(){this._destroyGL(),this.requestRender()}_createScreenRect(e,t){const[i,s]=e.size,r="string"==typeof t.left?R(t.left)*i:t.left,a="string"==typeof t.right?R(t.right)*i:t.right,n="string"==typeof t.top?R(t.top)*s:t.top,c="string"==typeof t.bottom?R(t.bottom)*s:t.bottom,o=r,h=n;return{x:o,y:h,width:Math.max(i-a-o,0),height:Math.max(s-c-h,0)}}_createMesh(e,t){switch(t.type){case"rect":return j.fromRect(this._createScreenRect(e,t));case"path":return j.fromPath(t);case"geometry":return j.fromGeometry(e,t);default:return x.error(new o["a"]("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),j.fromRect({x:0,y:0,width:1,height:1})}}}var T=I;class k extends a["a"]{constructor(){super(...arguments),this.name=this.constructor.name}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e),this._updateClippingInfo()}doRender(e){const t=this.createRenderParams(e),{painter:i,globalOpacity:s,profiler:a,drawPhase:n}=t,c=n===r["c"].LABEL?1:s*this.computedOpacity;a.recordContainerStart(this.name),i.beforeRenderLayer(t,this._clippingInfos?255:0,c),this.updateTransforms(e.state),this.renderChildren(t),i.compositeLayer(t,c),a.recordContainerEnd()}renderChildren(e){Object(s["j"])(this._renderPasses)&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const i of this.children)i.beforeRender(e);for(const i of this._renderPasses)try{i.render(e)}catch(t){}for(const i of this.children)i.afterRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO}}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[n["a"].clip],target:()=>this._clippingInfos,drawPhase:r["c"].MAP|r["c"].LABEL|r["c"].LABEL_ALPHA|r["c"].DEBUG|r["c"].HIGHLIGHT})]}updateTransforms(e){for(const t of this.children)t.setTransform(e)}onAttach(){super.onAttach(),this._updateClippingInfo()}onDetach(){super.onDetach(),this._updateClippingInfo()}_updateClippingInfo(){if(Object(s["k"])(this._clippingInfos)&&(this._clippingInfos.forEach(e=>e.destroy()),this._clippingInfos=null),!this.stage)return;const e=this._clips;Object(s["k"])(e)&&e.length&&(this._clippingInfos=e.items.map(e=>T.fromClipArea(this.stage,e))),this.requestRender()}}t["a"]=k},c73a:function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));i("c120");var s=i("1c92"),r=i("8c71"),a=i("738e"),n=(i("9f8b"),i("1956"),i("a1ff")),c=(i("d267"),i("7c4b")),o=i("894c");function h(e){return e&&"render"in e}function l(e){return e&&!("render"in e)}function u(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function d(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new n["a"](e,s)}class p extends c["a"]{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(r["b"])()},this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(e){const t=Object(s["h"])(this.transforms.dvs),[i,r]=e.toScreenNoRotation([0,0],this.x,this.y),n=this.resolution/this.pixelRatio/e.resolution,c=n*this.width,o=n*this.height,h=Math.PI*this.rotation/180;Object(s["a"])(t,t,Object(a["b"])(i,r)),Object(s["a"])(t,t,Object(a["b"])(c/2,o/2)),Object(s["l"])(t,t,-h),Object(s["a"])(t,t,Object(a["b"])(-c/2,-o/2)),Object(s["i"])(t,t,Object(a["b"])(c,o)),Object(s["j"])(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind({context:e},t){this._texture&&e.bindTexture(this._texture,t)}updateTexture({context:e}){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),h(i))if(i instanceof o["a"]){const e=i.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(u(i));else l(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},e4b1:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));i("c120");var s=i("1c92"),r=i("ae54"),a=i("8c71"),n=i("7c4b");class c extends n["a"]{constructor(e,t,i,s=i){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:Object(a["b"])(),tileMat3:Object(a["b"])()},this.triangleCount=0,this.key=new r["a"](e),this.bounds=t,this.size=i,this.coordRange=s}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(e){this._coords=[e[0],e[3]],this._bounds=e}setTransform(e,t){const i=t/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[a,n]=e.toScreenNoRotation([0,0],this.coords),c=this.size[0]/this.coordRange[0]*i,o=this.size[1]/this.coordRange[1]*i;Object(s["m"])(r,c,0,0,0,o,0,a,n,1),Object(s["j"])(this.transforms.dvs,e.displayViewMat3,r)}}},e80c:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var s=i("9180"),r=i("c84e"),a=i("3b1a"),n=i("6722"),c=i("e4b1"),o=i("c73a");class h extends c["a"]{constructor(e,t,i,s=null){super(e,t,i,i),this.bitmap=new o["a"](s,"standard",!1),this.bitmap.coordScale=i,this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}class l extends n["a"]{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.bitmap.blendFunction)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(s["l"])(),e);return new h(e,t,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[a["a"].bitmap],target:()=>this.children.map(e=>e.bitmap),drawPhase:r["c"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===r["c"].MAP&&super.doRender(e)}}},e94b:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return o}));var s=i("b2b2"),r=i("3af1"),a=(i("e06a"),i("8048")),n=i("536f");function c(e,t,i,n=new r["a"]){let c;if("2d"===i.type)c=t*i.resolution;else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference;c=Object(s["k"])(n)&&!n.equals(i.spatialReference)?Object(a["e"])(n)/Object(a["e"])(i.spatialReference):t*r}const o=e.x-c,h=e.y-c,l=e.x+c,u=e.y+c,{spatialReference:d}=i;return n.xmin=Math.min(o,l),n.ymin=Math.min(h,u),n.xmax=Math.max(o,l),n.ymax=Math.max(h,u),n.spatialReference=d,n}function o(e,t,i){const r=i.toMap(e);return!Object(s["j"])(r)&&c(r,Object(n["a"])(),i,h).intersects(t)}const h=new r["a"]}}]);