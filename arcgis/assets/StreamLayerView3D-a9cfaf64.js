import{ai as r,aj as o,al as p,cU as P,cV as M,ao as U,ah as y,fw as R,av as _,az as k,as as $,aq as T}from"./index-888ef8d4.js";import{o as C}from"./StreamFeatureManager-c799818e.js";import{createConnection as x}from"./createConnection-0e192b7d.js";import{r as j}from"./EventedSet-d812a785.js";import{b as E}from"./Query-66deb263.js";import{E as G}from"./FeatureLikeLayerView3D-ab1472c7.js";import{n as V}from"./LayerView3D-6fe144b8.js";import{d as L}from"./LayerView-411adf7f.js";import{d as F}from"./FeatureFilter-8d009764.js";import"./query-6a85d506.js";import"./normalizeUtils-c2fb91fb.js";import"./normalizeUtilsCommon-ff02416d.js";import"./pbfQueryUtils-08029bda.js";import"./pbf-8458507f.js";import"./queryZScale-0521af07.js";import"./dehydratedFeatureComparison-cf859587.js";import"./queryForSymbologySnapping-e6fcc345.js";import"./elevationInfoUtils-0a20eaa3.js";import"./hash-6f442295.js";import"./diffUtils-43577d30.js";import"./UniqueValueRenderer-3a3aef3d.js";import"./ColorStop-5dd24a85.js";import"./colorRamps-f58bc08e.js";import"./Graphics3DObjectStates-e62c9e52.js";import"./jsonUtils-4d6628d3.js";import"./DictionaryLoader-8f10c9aa.js";import"./FieldsIndex-d94786ea.js";import"./heatmapUtils-48a69b11.js";import"./defaults-ee7ede40.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-5cf923bf.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-e690fc92.js";import"./quickselect-8d688dcf.js";import"./popupUtils-20c3176f.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-10c1400f.js";import"./WhereClause-bae43477.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-633d5bd5.js";import"./generateRendererUtils-393d0b69.js";import"./FeatureSet-326674fa.js";import"./FeatureStore-8011ae57.js";import"./BoundsStore-a4947a64.js";import"./projectExtentUtils-5e1f169b.js";const N=2500;let l=class extends k{getObjectId(){return this.objectId}};r([o({type:Number,json:{read:!0}})],l.prototype,"objectId",void 0),l=r([p("esri.layers.graphics.controllers.StreamGraphic")],l);let z=class{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const s=this._idToGraphic.get(t);return s?(s.sourceLayer=s.layer=null,this._idToGraphic.delete(t),s):null}update(t,s){this.onUpdate(t,s)}get size(){return this._idToGraphic.size}},a=class extends P(M(U)){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new j,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval(),this.connection=y(this.connection),this.store=y(this.store),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{layer:e,layerView:t}=this,{spatialReference:s,definitionExpression:c,geometryDefinition:d,objectIdField:h,timeInfo:f,purgeOptions:g,maxReconnectionAttempts:v,maxReconnectionInterval:I,customParameters:w}=e,S=e.geometryType?R.toJSON(e.geometryType):null,b=s,u=t.view.spatialReference,O={geometry:d,where:c};this.clear(),this._set("connection",x(e.parsedUrl,b,u,S,O,v,I,w??void 0)),this._outSpatialReference=u.toJSON(),this.store=new z(this._onUpdate.bind(this)),this.featuresManager=new C(this.store,h,f.toJSON(),g);const m="startup-watches";this.handles.remove(m),this.handles.add([e.on("send-message-to-socket",n=>this.connection.sendMessageToSocket(n)),e.on("send-message-to-client",n=>this.connection.sendMessageToClient(n)),this.connection.on("data-received",n=>this._onFeature(n)),this.connection.on("message-received",n=>this._onWebSocketMessage(n)),_(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],m),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach(t=>this.featuresManager.removeById(t.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=l.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){t!=null&&this.graphics.removeMany(t),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const s=performance.now(),c=s-t;if(c>N){t=s;const d=Math.round(this._updateInfo.client/(c/1e3)),h=Math.round(this._updateInfo.websocket/(c/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:d,websocket:h})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}};r([o()],a.prototype,"isPaused",void 0),r([o({constructOnly:!0})],a.prototype,"layer",void 0),r([o({constructOnly:!0})],a.prototype,"layerView",void 0),r([o()],a.prototype,"connection",void 0),r([o({readOnly:!0})],a.prototype,"updating",null),a=r([p("esri.layers.graphics.controllers.StreamController")],a);const B=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume()}};return r([o()],t.prototype,"_isUserPaused",void 0),r([o({readOnly:!0})],t.prototype,"connectionStatus",null),r([o({type:F})],t.prototype,"filter",void 0),t=r([p("esri.layers.mixins.StreamLayerView")],t),t};let i=class extends B(G(V(L))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=$.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add(_(()=>this.suspended,e=>{this.controller&&this._onSuspendedChange(e)}))}get connectionError(){const e=this.get("controller.connection.errorString");return e?new T("stream-controller",e):null}createQuery(){return new E({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t==null?void 0:t.signal)}get _streamConnectionStatus(){var e,t;return((t=(e=this.controller)==null?void 0:e.connection)==null?void 0:t.connectionStatus)??"disconnected"}createController(){return new a({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var e;(e=this.controller)==null||e.pauseStream()}_doResume(){var e;(e=this.controller)==null||e.resumeStream()}};r([o({readOnly:!0})],i.prototype,"updatePolicy",void 0),r([o({readOnly:!0})],i.prototype,"connectionError",null),r([o()],i.prototype,"controller",void 0),r([o({readOnly:!0})],i.prototype,"hasZ",void 0),r([o({readOnly:!0})],i.prototype,"hasM",void 0),r([o({readOnly:!0})],i.prototype,"_streamConnectionStatus",null),i=r([p("esri.views.3d.layers.StreamLayerView3D")],i);const Le=i;export{Le as default};