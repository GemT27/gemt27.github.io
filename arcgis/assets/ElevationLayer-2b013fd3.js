import{dV as m,dW as g,dX as w,dY as f,dZ as T,aq as b,d_ as S,by as p,d$ as _,e0 as $,aF as d,bY as c,ai as o,aj as s,ck as h,e1 as I,e2 as O,al as E,ba as j}from"./index-888ef8d4.js";import{p as D}from"./ArcGISCachedService-c635d20d.js";import{l as L}from"./ArcGISService-b304da72.js";import"./TileInfoTilemapCache-21417e11.js";import"./TilemapCache-dd01ef73.js";let a=class extends D(L(m(g(w(j))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=f()}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}destroy(){this._lercDecoder=T(this._lercDecoder)}readCapabilities(e,i){const t=i.capabilities&&i.capabilities.split(",").map(r=>r.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,i){let t=i.currentVersion;return t||(t=9.3),t}load(e){const i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let r=0;r<t.typeKeywords.length;r++)if(t.typeKeywords[r].toLowerCase()==="elevation 3d layer")return!0;throw new b("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(S).then(()=>this._fetchImageService(i))),Promise.resolve(this)}fetchTile(e,i,t,r){const l=(r=r||{signal:null}).signal!=null?r.signal:r.signal=new AbortController().signal,u={responseType:"array-buffer",signal:l},v={noDataValue:r.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,i,t,r)).then(()=>p(this.getTileUrl(e,i,t),u)).then(n=>this._lercDecoder.decode(n.data,v,l)).then(n=>new _(n))}getTileUrl(e,i,t){const r=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=$({...this.parsedUrl.query,blankTile:!r&&null});return`${this.parsedUrl.path}/tile/${e}/${i}/${t}${l?"?"+l:""}`}async queryElevation(e,i){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery-e5482e26.js"),["assets/ElevationQuery-e5482e26.js","assets/index-888ef8d4.js","assets/index-5fe5af71.css"]);return c(i),new t().query(this,e,i)}async createElevationSampler(e,i){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery-e5482e26.js"),["assets/ElevationQuery-e5482e26.js","assets/index-888ef8d4.js","assets/index-5fe5af71.css"]);return c(i),new t().createSampler(this,e,i)}_fetchTileAvailability(e,i,t,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,i,t,r):Promise.resolve("unknown")}async _fetchImageService(e){var r;if(this.sourceJSON)return this.sourceJSON;const i={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await p(this.parsedUrl.path,i);t.ssl&&(this.url=(r=this.url)==null?void 0:r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[y]}};o([s({readOnly:!0})],a.prototype,"capabilities",void 0),o([h("service","capabilities",["capabilities"])],a.prototype,"readCapabilities",null),o([s({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o([s({readOnly:!0,type:I})],a.prototype,"heightModelInfo",void 0),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),o([s({type:["show","hide"]})],a.prototype,"listMode",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"minScale",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"maxScale",void 0),o([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),o([s({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),o([s()],a.prototype,"sourceJSON",void 0),o([s({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),o([s(O)],a.prototype,"url",void 0),o([s()],a.prototype,"version",void 0),o([h("version",["currentVersion"])],a.prototype,"readVersion",null),a=o([E("esri.layers.ElevationLayer")],a);const y=Symbol("default-fetch-tile");a.prototype.fetchTile[y]=!0;const P=a;export{P as default};