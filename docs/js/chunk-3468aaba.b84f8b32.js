(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3468aaba"],{"5afa":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var r=a("a4ee"),o=(a("e06a"),a("8d60")),i=(a("1fd7"),a("2c4f")),n=a("ce50"),l=a("7ffa"),s=a("b2b2"),y=a("e694"),c=a("9d1d"),p=a("0028"),b=a("59b2"),u=(a("cea0"),a("afcf")),d=a("d386"),O=a("09db"),f=a("8188"),m=a("a8d5"),j=a("7f83"),h=a("5bd5"),g=a("ce0b"),S=a("a6a3"),v=a("a745"),w=a("997b"),N=a("b911"),J=a("0db5"),L=a("5a62"),T=a("a1f3"),x=a("0d76"),C=a("db52"),M=a("4dc9"),I=a("21ba"),R=a("5996"),E=a("3af1");function D(e){return e.layers.some(e=>null!=e.layerDefinition.visibilityField)}const P=new T["a"]({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),k=new T["a"]({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let G=class extends g["a"]{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};Object(r["a"])([Object(b["b"])({readOnly:!0})],G.prototype,"sublayers",null),Object(r["a"])([Object(b["b"])()],G.prototype,"layer",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],G.prototype,"visibilityMode",void 0),G=Object(r["a"])([Object(d["a"])("esri.layers.MapNotesLayer.MapNotesSublayer")],G);const _=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new x["a"]).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new C["a"]).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new M["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new M["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new I["a"]).toJSON()}];let F=class extends(Object(w["a"])(Object(L["a"])(Object(N["a"])(Object(J["a"])(Object(y["a"])(S["a"])))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=R["a"].WGS84,this.sublayers=new i["a"](_.map(e=>new G({id:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,a){return{operations:{supportsMapNotesEditing:!D(t)&&"portal-item"!==(null==a?void 0:a.origin)}}}readFeatureCollections(e,t,a){if(!D(t))return null;const r=t.layers.map(e=>{const t=new h["default"];return t.read(e,a),t});return new i["a"]({items:r})}readLegacyfeatureCollectionJSON(e,t){return D(t)?Object(l["a"])(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length||t.layers.every(e=>!e.layerDefinition.extent))return new E["a"]({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:R["a"].WGS84});const a=R["a"].fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((e,t)=>{const a=t.layerDefinition.extent;return a?E["a"].fromJSON(a).union(e):e},new E["a"]({spatialReference:a}))}readMinScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?R["a"].fromJSON(t.layers[0].layerDefinition.spatialReference):R["a"].WGS84}readSublayers(e,t,a){if(D(t))return null;const r=[];for(let i=0;i<t.layers.length;i++){var n;const{layerDefinition:e,featureSet:a}=t.layers[i],l=null!=(n=e.geometryType)?n:a.geometryType,s=_.find(t=>{var a,r,o;return l===t.geometryTypeJSON&&(null==(a=e.drawingInfo)||null==(r=a.renderer)||null==(o=r.symbol)?void 0:o.type)===t.identifyingSymbol.type});if(s){const t=new G({id:s.layerId,title:e.name,layer:this,graphics:a.features.map(({geometry:e,symbol:t,attributes:a,popupInfo:r})=>o["a"].fromJSON({attributes:a,geometry:e,symbol:t,popupTemplate:r}))});r.push(t)}}return new i["a"](r)}writeSublayers(e,t,a,r){const{minScale:o,maxScale:i}=this;if(Object(s["k"])(e))return;const l=e.some(e=>e.graphics.length>0);var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&(null==r||null==(y=r.messages)||y.push(new n["a"]("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let b=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if(Object(s["l"])(e.geometry)){b=e.geometry.spatialReference.toJSON();break e}for(const n of _){const t=e.find(e=>n.layerId===e.id);this._writeMapNoteSublayer(p,t,n,o,i,b,r)}Object(c["c"])("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=Object(l["a"])(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(Object(s["k"])(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const a of r.graphics)if(Object(s["l"])(a.geometry)){const r=a.geometry;e?Object(j["d"])(r.spatialReference,e)||(Object(f["b"])(r.spatialReference,e)||Object(f["h"])()||await Object(f["i"])(),a.geometry=Object(f["m"])(r,e)):e=r.spatialReference,t.push(a)}const a=await Object(m["a"])(t.map(e=>e.geometry));t.forEach((e,t)=>e.geometry=a[t])}_findSublayer(e){var t,a;return Object(s["k"])(this.sublayers)?null:null!=(t=null==(a=this.sublayers)?void 0:a.find(t=>t.id===e))?t:null}_writeMapNoteSublayer(e,t,a,r,o,i,n){const y=[];if(!Object(s["k"])(t)){for(const e of t.graphics)this._writeMapNote(y,e,a.geometryType,n);this._normalizeObjectIds(y,P),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(l["a"])(a.identifyingSymbol)}},geometryType:a.geometryTypeJSON,minScale:r,maxScale:o,objectIdField:"OBJECTID",fields:[P.toJSON(),k.toJSON()],spatialReference:i},featureSet:{features:y,geometryType:a.geometryTypeJSON}})}}_writeMapNote(e,t,a,r){if(Object(s["k"])(t))return;const{geometry:o,symbol:i,popupTemplate:n}=t;if(Object(s["k"])(o))return;var l,y;if(o.type!==a)return void(null==r||null==(l=r.messages)||l.push(new p["a"]("map-notes-layer:invalid-geometry-type",`Geometry "${o.type}" cannot be saved in "${a}" layer`,{graphic:t})));if(Object(s["k"])(i))return void(null==r||null==(y=r.messages)||y.push(new p["a"]("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const c={attributes:{...t.attributes},geometry:o.toJSON(),symbol:i.toJSON()};Object(s["l"])(n)&&(c.popupInfo=n.toJSON()),e.push(c)}_normalizeObjectIds(e,t){const a=t.name;let r=Object(v["a"])(a,e)+1;const o=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[a]||o.has(e[a]))&&(e[a]=r++),o.add(e[a])}}};Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"capabilities",void 0),Object(r["a"])([Object(u["a"])(["portal-item","web-map"],"capabilities",["layers"])],F.prototype,"readCapabilities",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"featureCollections",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"featureCollections",["layers"])],F.prototype,"readFeatureCollections",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],F.prototype,"featureCollectionJSON",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],F.prototype,"readLegacyfeatureCollectionJSON",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],F.prototype,"featureCollectionType",void 0),Object(r["a"])([Object(b["b"])({json:{write:!1}})],F.prototype,"fullExtent",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"fullExtent",["layers"])],F.prototype,"readFullExtent",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],F.prototype,"legendEnabled",void 0),Object(r["a"])([Object(b["b"])({type:["show","hide"]})],F.prototype,"listMode",void 0),Object(r["a"])([Object(b["b"])({type:Number,nonNullable:!0,json:{write:!1}})],F.prototype,"minScale",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"minScale",["layers"])],F.prototype,"readMinScale",null),Object(r["a"])([Object(b["b"])({type:Number,nonNullable:!0,json:{write:!1}})],F.prototype,"maxScale",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"maxScale",["layers"])],F.prototype,"readMaxScale",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"multipointLayer",null),Object(r["a"])([Object(b["b"])({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],F.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"pointLayer",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"polygonLayer",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"polylineLayer",null),Object(r["a"])([Object(b["b"])({type:R["a"]})],F.prototype,"spatialReference",void 0),Object(r["a"])([Object(u["a"])(["web-map","portal-item"],"spatialReference",["layers"])],F.prototype,"readSpatialReference",null),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],F.prototype,"sublayers",void 0),Object(r["a"])([Object(u["a"])("web-map","sublayers",["layers"])],F.prototype,"readSublayers",null),Object(r["a"])([Object(O["a"])("web-map","sublayers")],F.prototype,"writeSublayers",null),Object(r["a"])([Object(b["b"])({readOnly:!0})],F.prototype,"textLayer",null),Object(r["a"])([Object(b["b"])()],F.prototype,"title",void 0),Object(r["a"])([Object(b["b"])({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),F=Object(r["a"])([Object(d["a"])("esri.layers.MapNotesLayer")],F);const z=F},a745:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));const r=1;function o(e,t){let a=0;for(const o of t){var r;const t=null==(r=o.attributes)?void 0:r[e];"number"==typeof t&&isFinite(t)&&(a=Math.max(a,t))}return a}},ce0b:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("a4ee"),o=a("59b2"),i=(a("b50f"),a("c120"),a("cea0"),a("d386")),n=a("44e6"),l=a("a6a3"),s=a("997b"),y=a("5a62"),c=a("f626"),p=a("fd14");let b=class extends(Object(s["a"])(Object(y["a"])(l["a"]))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new c["a"],this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};Object(r["a"])([Object(o["b"])({type:p["a"]})],b.prototype,"elevationInfo",void 0),Object(r["a"])([Object(o["b"])(Object(n["b"])(c["a"],"graphics"))],b.prototype,"graphics",void 0),Object(r["a"])([Object(o["b"])({type:["show","hide"]})],b.prototype,"listMode",void 0),Object(r["a"])([Object(o["b"])()],b.prototype,"screenSizePerspectiveEnabled",void 0),Object(r["a"])([Object(o["b"])({readOnly:!0})],b.prototype,"type",void 0),Object(r["a"])([Object(o["b"])({constructOnly:!0})],b.prototype,"internal",void 0),b=Object(r["a"])([Object(i["a"])("esri.layers.GraphicsLayer")],b);const u=b}}]);