(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-430f85e3"],{"0480":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return f}));var n=r("8190"),s=r("fc00");function i(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:u(e.layout)}}function f(e){return c(e.layout).createView(e.buffer)}function u(e){const t=new Array;return e.fields.forEach((e,r)=>{const n={...e,constructor:d(e.constructor)};t.push([r,n])}),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function c(e){const t=Object(s["a"])();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach(e=>t.fields.set(e[0],{...e[1],constructor:a(e[1].constructor)})),t}const o=[n["a"],n["m"],n["u"],n["C"],n["f"],n["h"],n["b"],n["n"],n["v"],n["D"],n["g"],n["i"],n["l"],n["t"],n["B"],n["J"],n["j"],n["r"],n["z"],n["H"],n["k"],n["s"],n["A"],n["I"],n["e"],n["q"],n["y"],n["G"],n["c"],n["o"],n["w"],n["E"],n["d"],n["p"],n["x"],n["F"]];function d(e){return`${e.ElementType}_${e.ElementCount}`}function a(e){return y.get(e)}const y=new Map;o.forEach(e=>y.set(d(e),e))},"0c9d":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"f",(function(){return u}));var n=r("2ebb"),s=r("fc00");const i=Object(s["a"])().vec3f("position").u16("componentIndex").u16("u16padding"),f=Object(s["a"])().vec2u8("sideness"),u=Object(n["a"])(f),c=Object(s["a"])().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),o=c.clone().vec3f("normal"),d=c.clone().vec3f("normalA").vec3f("normalB"),a=new Map([["position0",0],["position1",1],["componentIndex",2],["variantOffset",3],["variantStroke",4],["variantExtension",5],["normal",6],["normalA",6],["normalB",7],["sideness",8]])},2273:function(e,t,r){"use strict";r.r(t),r.d(t,"work",(function(){return O})),r.d(t,"wrappedWork",(function(){return w}));var n=r("8c4b");function s(e,t,r){const n=t/3,s=new Uint32Array(r+1),i=new Uint32Array(r+1),f=(e,t)=>{e<t?s[e+1]++:i[t+1]++};for(let m=0;m<n;m++){const t=e[3*m],r=e[3*m+1],n=e[3*m+2];f(t,r),f(r,n),f(n,t)}let u=0,c=0;for(let m=0;m<r;m++){const e=s[m+1],t=i[m+1];s[m+1]=u,i[m+1]=c,u+=e,c+=t}const o=new Uint32Array(6*n),d=s[r],a=(e,t,r)=>{if(e<t){const n=s[e+1]++;o[2*n]=t,o[2*n+1]=r}else{const n=i[t+1]++;o[2*d+2*n]=e,o[2*d+2*n+1]=r}};for(let m=0;m<n;m++){const t=e[3*m],r=e[3*m+1],n=e[3*m+2];a(t,r,m),a(r,n,m),a(n,t,m)}const y=(e,t)=>{const r=2*e,n=t-e;for(let s=1;s<n;s++){const e=o[r+2*s],t=o[r+2*s+1];let n=s-1;for(;n>=0&&o[r+2*n]>e;n--)o[r+2*n+2]=o[r+2*n],o[r+2*n+3]=o[r+2*n+1];o[r+2*n+2]=e,o[r+2*n+3]=t}};for(let m=0;m<r;m++)y(s[m],s[m+1]),y(d+i[m],d+i[m+1]);const l=new Int32Array(3*n),h=(t,r)=>t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1,p=(e,t)=>{const r=h(e,t);l[3*t+r]=-1},b=(e,t,r,n)=>{const s=h(e,t);l[3*t+s]=n;const i=h(r,n);l[3*n+i]=t};for(let m=0;m<r;m++){let e=s[m];const t=s[m+1];let r=i[m];const n=i[m+1];for(;e<t&&r<n;){const t=o[2*e],n=o[2*d+2*r];t===n?(b(m,o[2*e+1],n,o[2*d+2*r+1]),e++,r++):t<n?(p(m,o[2*e+1]),e++):(p(n,o[2*d+2*r+1]),r++)}for(;e<t;)p(m,o[2*e+1]),e++;for(;r<n;)p(o[2*d+2*r],o[2*d+2*r+1]),r++}return l}var i=r("0480"),f=r("0c9d"),u=r("7e0c"),c=r("b50f"),o=r("38a4"),d=r("a21b"),a=r("e431"),y=r("0b2d");const l=-1;function h(e,t,r,n=A){const s=e.vertices.position,i=e.vertices.componentIndex,f=Object(o["h"])(n.anglePlanar),u=Object(o["h"])(n.angleSignificantEdge),y=Math.cos(u),h=Math.cos(f),T=E.edge,w=T.position0,O=T.position1,S=T.faceNormal0,L=T.faceNormal1,v=g(e),j=B(e),x=j.length/4,F=t.allocate(x);let _=0;const M=x,N=r.allocate(M);let C=0,I=0,U=0;const P=Object(c["i"])(0,x),R=new Float32Array(x);Object(d["b"])(R,(e,t,r)=>{s.getVec(j[4*t+0],w),s.getVec(j[4*t+1],O),r[t]=Object(a["p"])(w,O)}),P.sort((e,t)=>R[t]-R[e]);const V=new Array,Y=new Array;for(let c=0;c<x;c++){const e=P[c],n=R[e],u=j[4*e+0],o=j[4*e+1],d=j[4*e+2],B=j[4*e+3],g=B===l;if(s.getVec(u,w),s.getVec(o,O),g)Object(a["z"])(S,v[3*d+0],v[3*d+1],v[3*d+2]),Object(a["n"])(L,S),T.componentIndex=i.get(u),T.cosAngle=Object(a["k"])(S,L);else{if(Object(a["z"])(S,v[3*d+0],v[3*d+1],v[3*d+2]),Object(a["z"])(L,v[3*B+0],v[3*B+1],v[3*B+2]),T.componentIndex=i.get(u),T.cosAngle=Object(a["k"])(S,L),b(T,h))continue;T.cosAngle<-.9999&&Object(a["n"])(L,S)}I+=n,U++,g||p(T,y)?(t.write(F,_++,T),V.push(n)):m(T,f)&&(r.write(N,C++,T),Y.push(n))}const k=new Float32Array(V.reverse()),D=new Float32Array(Y.reverse());return{regular:{instancesData:t.trim(F,_),lodInfo:{lengths:k}},silhouette:{instancesData:r.trim(N,C),lodInfo:{lengths:D}},averageEdgeLength:I/U}}function p(e,t){return e.cosAngle<t}function b(e,t){return e.cosAngle>t}function m(e,t){const r=Object(o["b"])(e.cosAngle),n=E.fwd,s=E.ortho;return Object(a["y"])(n,e.position1,e.position0),r*(Object(a["k"])(Object(a["j"])(s,e.faceNormal0,e.faceNormal1),n)>0?-1:1)>t}function B(e){const t=e.faces.length/3,r=e.faces,n=e.neighbors;let s=0;for(let u=0;u<t;u++){const e=n[3*u+0],t=n[3*u+1],i=n[3*u+2],f=r[3*u+0],c=r[3*u+1],o=r[3*u+2];s+=e===l||f<c?1:0,s+=t===l||c<o?1:0,s+=i===l||o<f?1:0}const i=new Int32Array(4*s);let f=0;for(let u=0;u<t;u++){const e=n[3*u+0],t=n[3*u+1],s=n[3*u+2],c=r[3*u+0],o=r[3*u+1],d=r[3*u+2];(e===l||c<o)&&(i[f++]=c,i[f++]=o,i[f++]=u,i[f++]=e),(t===l||o<d)&&(i[f++]=o,i[f++]=d,i[f++]=u,i[f++]=t),(s===l||d<c)&&(i[f++]=d,i[f++]=c,i[f++]=u,i[f++]=s)}return i}function g(e){const t=e.faces.length/3,r=e.vertices.position,n=e.faces,s=T.v0,i=T.v1,f=T.v2,u=new Float32Array(3*t);for(let c=0;c<t;c++){const e=n[3*c+0],t=n[3*c+1],o=n[3*c+2];r.getVec(e,s),r.getVec(t,i),r.getVec(o,f),Object(a["m"])(i,i,s),Object(a["m"])(f,f,s),Object(a["j"])(s,i,f),Object(a["u"])(s,s),u[3*c+0]=s[0],u[3*c+1]=s[1],u[3*c+2]=s[2]}return u}const E={edge:{position0:Object(y["f"])(),position1:Object(y["f"])(),faceNormal0:Object(y["f"])(),faceNormal1:Object(y["f"])(),componentIndex:0,cosAngle:0},ortho:Object(y["f"])(),fwd:Object(y["f"])()},T={v0:Object(y["f"])(),v1:Object(y["f"])(),v2:Object(y["f"])()},A={anglePlanar:4,angleSignificantEdge:35};async function w(e){const t=S(e),r=O(t),n=[t.data.buffer];return{result:L(r,n),transferList:n}}function O(e){const t=v(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return j.updateSettings(e.writerSettings),x.updateSettings(e.writerSettings),h(t,j,x)}function S(e){return{data:f["a"].createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indicesBuffer):"Uint16Array"===e.indicesType?new Uint16Array(e.indicesBuffer):void 0,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function L(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:Object(i["a"])(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:Object(i["a"])(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}function v(e,t,r,i){if(t)return{faces:r,facesLength:i,neighbors:s(r,i,e.count),vertices:e};const u=Object(n["a"])(e.buffer,e.stride/4,{originalIndices:r,originalIndicesLength:i}),c=s(u.indices,i,u.uniqueCount);return{faces:u.indices,facesLength:u.indices.length,neighbors:c,vertices:f["a"].createView(u.buffer)}}const j=new u["a"],x=new u["b"]},"2ebb":function(e,t,r){"use strict";function n(e,t=0){const r=e.stride;return e.fieldNames.filter(t=>{const r=e.fields.get(t).optional;return!(r&&r.glPadding)}).map(n=>{const i=e.fields.get(n),f=i.constructor.ElementCount,u=s(i.constructor.ElementType),c=i.offset,o=!(!i.optional||!i.optional.glNormalized);return{name:n,stride:r,count:f,type:u,offset:c,normalized:o,divisor:t}})}function s(e){const t=i[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}r.d(t,"a",(function(){return n}));const i={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126}},"7e0c":function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return B}));var n=r("880d"),s=r("e431"),i=r("0b2d"),f=r("2ebb"),u=r("0c9d");class c{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?l:y}write(e,t,r){const n=this.edgeHashFunction(r);E.seed=n;const s=E.getIntRange(0,255),i=E.getIntRange(0,this.settings.variants-1),f=.7,u=E.getFloat(),c=255*(.5*b(-(1-Math.min(u/f,1))+Math.max(0,u-f)/(1-f),1.2)+.5);e.position0.setVec(t,r.position0),e.position1.setVec(t,r.position1),e.componentIndex.set(t,r.componentIndex),e.variantOffset.set(t,s),e.variantStroke.set(t,i),e.variantExtension.set(t,c)}trim(e,t){return e.slice(0,t)}}const o=new Float32Array(6),d=new Uint32Array(o.buffer),a=new Uint32Array(1);function y(e){const t=o;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],a[0]=5381;for(let r=0;r<d.length;r++)a[0]=31*a[0]+d[r];return a[0]}function l(e){const t=o;t[0]=p(e.position0[0]),t[1]=p(e.position0[1]),t[2]=p(e.position0[2]),t[3]=p(e.position1[0]),t[4]=p(e.position1[1]),t[5]=p(e.position1[2]),a[0]=5381;for(let r=0;r<d.length;r++)a[0]=31*a[0]+d[r];return a[0]}const h=1e4;function p(e){return Math.round(e*h)/h}function b(e,t){const r=e<0?-1:1;return Math.abs(e)**t*r}class m{constructor(){this.commonWriter=new c}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return u["c"].createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),Object(s["i"])(g,r.faceNormal0,r.faceNormal1),Object(s["u"])(g,g),e.normal.setVec(t,g)}trim(e,t){return this.commonWriter.trim(e,t)}}m.Layout=u["c"],m.glLayout=Object(f["a"])(u["c"],1);class B{constructor(){this.commonWriter=new c}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return u["d"].createBuffer(e)}write(e,t,r){this.commonWriter.write(e,t,r),e.normalA.setVec(t,r.faceNormal0),e.normalB.setVec(t,r.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}B.Layout=u["d"],B.glLayout=Object(f["a"])(u["d"],1);const g=Object(i["f"])(),E=new n["a"]},8190:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return E})),r.d(t,"c",(function(){return Y})),r.d(t,"d",(function(){return W})),r.d(t,"e",(function(){return U})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return B})),r.d(t,"i",(function(){return g})),r.d(t,"j",(function(){return j})),r.d(t,"k",(function(){return M})),r.d(t,"l",(function(){return O})),r.d(t,"m",(function(){return l})),r.d(t,"n",(function(){return T})),r.d(t,"o",(function(){return k})),r.d(t,"p",(function(){return q})),r.d(t,"q",(function(){return P})),r.d(t,"r",(function(){return x})),r.d(t,"s",(function(){return N})),r.d(t,"t",(function(){return S})),r.d(t,"u",(function(){return h})),r.d(t,"v",(function(){return A})),r.d(t,"w",(function(){return D})),r.d(t,"x",(function(){return H})),r.d(t,"y",(function(){return R})),r.d(t,"z",(function(){return F})),r.d(t,"A",(function(){return C})),r.d(t,"B",(function(){return L})),r.d(t,"C",(function(){return p})),r.d(t,"D",(function(){return w})),r.d(t,"E",(function(){return z})),r.d(t,"F",(function(){return J})),r.d(t,"G",(function(){return V})),r.d(t,"H",(function(){return _})),r.d(t,"I",(function(){return I})),r.d(t,"J",(function(){return v}));class n{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===n&&(n=9*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;for(let u=0;u<9;++u)n[i++]=s[f++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===n&&(n=16*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;for(let u=0;u<16;++u)n[i++]=s[f++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class i{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===n&&(n=i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var f=r("3349");class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===n&&(n=2*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(f["s"])(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var c=r("e431");class o{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===n&&(n=3*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(c["z"])(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;n[i++]=s[f++],n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=3;var d=r("7577");class a{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===n&&(n=4*i.BYTES_PER_ELEMENT);const f=0===t.byteLength?0:r;this.typedBuffer=null==s?new i(t,f):new i(t,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,Object(d["l"])(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let i=e*this.typedBufferStride,f=r*t.typedBufferStride;n[i++]=s[f++],n[i++]=s[f++],n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class y extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class l extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class h extends o{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends a{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f32";class m extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class B extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class g extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class E extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class T extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class A extends o{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class w extends a{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="f64";class O extends i{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class S extends u{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class L extends o{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class v extends a{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u8";class j extends i{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="u16";class x extends u{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class F extends o{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u16";class _ extends a{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u16";class M extends i{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u32";class N extends u{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class C extends o{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u32";class I extends a{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends i{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class P extends u{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="i8";class R extends o{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="i8";class V extends a{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class Y extends i{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i16";class k extends u{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class D extends o{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i16";class z extends a{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class W extends i{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class q extends u{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class H extends o{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";class J extends a{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(J,e,t)}static fromTypedArray(e,t){return new J(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}J.ElementType="i32"},"8c4b":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("38a4");function s(e,t,r){var s;const o=e.byteLength/(4*t),d=new Uint32Array(e,0,o*t);let a=new Uint32Array(o);const y=null!=(s=null==r?void 0:r.minReduction)?s:0,l=(null==r?void 0:r.originalIndices)||null,h=l?l.length:0,p=(null==r?void 0:r.componentOffsets)||null;let b=0;if(p)for(let n=0;n<p.length-1;n++){const e=p[n+1]-p[n];e>b&&(b=e)}else b=o;const m=Math.floor(1.1*b)+1;(null==c||c.length<2*m)&&(c=new Uint32Array(Object(n["n"])(2*m)));for(let n=0;n<2*m;n++)c[n]=0;let B=0;const g=!!p&&!!l,E=g?h:o,T=g?new Uint32Array(h):null,A=1.96;let w=0!==y?Math.ceil(4*A*A/(y*y)*y*(1-y)):E,O=1,S=p?p[1]:E;for(let n=0;n<E;n++){if(n===w){const e=1-B/n;if(e+A*Math.sqrt(e*(1-e)/n)<y)return null;w*=2}if(n===S){for(let e=0;e<2*m;e++)c[e]=0;if(l)for(let e=p[O-1];e<p[O];e++)T[e]=a[l[e]];S=p[++O]}const e=g?l[n]:n,r=e*t,s=u(d,r,t);let f=s%m,o=B;for(;0!==c[2*f+1];){if(c[2*f]===s){const e=c[2*f+1]-1;if(i(d,r,e*t,t)){o=a[e];break}}f++,f>=m&&(f-=m)}o===B&&(c[2*f]=s,c[2*f+1]=e+1,B++),a[e]=o}if(0!==y&&1-B/o<y)return null;if(g){for(let e=p[O-1];e<T.length;e++)T[e]=a[l[e]];a=T}const L=new Uint32Array(t*B);B=0;for(let n=0;n<E;n++)a[n]===B&&(f(d,(g?l[n]:n)*t,L,B*t,t),B++);if(l&&!g){const e=new Uint32Array(h);for(let t=0;t<e.length;t++)e[t]=a[l[t]];a=e}return{buffer:L.buffer,indices:a,uniqueCount:B}}function i(e,t,r,n){for(let s=0;s<n;s++)if(e[t+s]!==e[r+s])return!1;return!0}function f(e,t,r,n,s){for(let i=0;i<s;i++)r[n+i]=e[t+i]}function u(e,t,r){let n=0;for(let s=0;s<r;s++)n=e[t+s]+n|0,n=n+(n<<11)+(n>>>2)|0;return n>>>0}let c=null},c6ac:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return f}));r("c120");function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function i(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function f(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},fc00:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("8190"),s=r("c6ac");class i{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new i(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,n){const s=this.stride;if(s%4==0){const i=new Uint32Array(e.buffer,t*s,n*s/4);new Uint32Array(this.buffer,r*s,n*s/4).set(i)}else{const i=new Uint8Array(e.buffer,t*s,n*s);new Uint8Array(this.buffer,r*s,n*s).set(i)}}}class f{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this.appendField(e,n["m"],t),this}vec2f64(e,t){return this.appendField(e,n["n"],t),this}vec3f(e,t){return this.appendField(e,n["u"],t),this}vec3f64(e,t){return this.appendField(e,n["v"],t),this}vec4f(e,t){return this.appendField(e,n["C"],t),this}vec4f64(e,t){return this.appendField(e,n["D"],t),this}mat3f(e,t){return this.appendField(e,n["f"],t),this}mat3f64(e,t){return this.appendField(e,n["g"],t),this}mat4f(e,t){return this.appendField(e,n["h"],t),this}mat4f64(e,t){return this.appendField(e,n["i"],t),this}vec4u8(e,t){return this.appendField(e,n["J"],t),this}f32(e,t){return this.appendField(e,n["a"],t),this}f64(e,t){return this.appendField(e,n["b"],t),this}u8(e,t){return this.appendField(e,n["l"],t),this}u16(e,t){return this.appendField(e,n["j"],t),this}i8(e,t){return this.appendField(e,n["e"],t),this}vec2i8(e,t){return this.appendField(e,n["q"],t),this}vec2i16(e,t){return this.appendField(e,n["o"],t),this}vec2u8(e,t){return this.appendField(e,n["t"],t),this}vec4u16(e,t){return this.appendField(e,n["H"],t),this}u32(e,t){return this.appendField(e,n["k"],t),this}appendField(e,t,r){const n=t.ElementCount*Object(s["a"])(t.ElementType),i=this.stride;this.fields.set(e,{size:n,constructor:t,offset:i,optional:r}),this.stride+=n,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new i(this,e)}createView(e){return new i(this,e)}clone(){const e=new f;return e.stride=this.stride,e.fields=new Map,this.fields.forEach((t,r)=>e.fields.set(r,t)),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function u(){return new f}}}]);