import{eI as I,eK as $,hu as E,ai as o,aj as l,gA as k,hv as W,al as C,ba as D,cl as R,bn as q,bJ as H,bI as x,br as K,dV as V,dW as X,dX as U,a_ as S,au as v,cf as N,dr as j,hw as J,du as O,g1 as P,hx as _,aK as G,az as Y,aq as Z,cL as Q,aX as ee,ap as te,dD as re,dE as oe,dF as ie,bZ as T,ck as h,cc as ae,bl as le}from"./index-888ef8d4.js";import{b as ne}from"./normalizeUtils-c2fb91fb.js";import se from"./FeatureLayer-b7ad044f.js";import{n as pe}from"./objectIdUtils-789e911a.js";import"./normalizeUtilsCommon-ff02416d.js";import"./UniqueValueRenderer-3a3aef3d.js";import"./ColorStop-5dd24a85.js";import"./diffUtils-43577d30.js";import"./colorRamps-f58bc08e.js";import"./jsonUtils-4d6628d3.js";import"./DictionaryLoader-8f10c9aa.js";import"./FieldsIndex-d94786ea.js";import"./heatmapUtils-48a69b11.js";import"./sql-bb25550f.js";import"./FeatureLayerBase-378715d1.js";import"./featureLayerUtils-2ef2c1f5.js";import"./AttachmentQuery-f885be8d.js";import"./Query-66deb263.js";import"./RelationshipQuery-d0cb8dd1.js";import"./serviceCapabilitiesUtils-09498ee7.js";import"./editsZScale-393d3c04.js";import"./queryZScale-0521af07.js";import"./FeatureSet-326674fa.js";import"./APIKeyMixin-1e2aef06.js";import"./ArcGISService-b304da72.js";import"./CustomParametersMixin-67adffbb.js";import"./EditBusLayer-49e0354b.js";import"./FeatureEffectLayer-7d62cf30.js";import"./FeatureEffect-88120ef9.js";import"./FeatureFilter-8d009764.js";import"./FeatureReductionLayer-700dc81d.js";import"./LabelClass-be5c1571.js";import"./defaults-ee7ede40.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-5bd7358e.js";import"./TemporalLayer-f95249bd.js";import"./FeatureTemplate-869c518a.js";import"./FeatureType-7302997b.js";import"./fieldProperties-a347e1c6.js";import"./labelingInfo-d8717546.js";import"./versionUtils-24768af9.js";import"./styleUtils-21ec589e.js";import"./TopFeaturesQuery-1ed01c54.js";import"./popupUtils-508fd57e.js";let d=class extends I($(D)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new E,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};o([l({type:k})],d.prototype,"elevationInfo",void 0),o([l(W(E,"graphics"))],d.prototype,"graphics",void 0),o([l({type:["show","hide"]})],d.prototype,"listMode",void 0),o([l()],d.prototype,"screenSizePerspectiveEnabled",void 0),o([l({readOnly:!0})],d.prototype,"type",void 0),o([l({constructOnly:!0})],d.prototype,"internal",void 0),d=o([C("esri.layers.GraphicsLayer")],d);const ye=d;function b(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!B(t))}function B({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return L.find(i=>{var a,s,p;return r===i.geometryTypeJSON&&((p=(s=(a=e.drawingInfo)==null?void 0:a.renderer)==null?void 0:s.symbol)==null?void 0:p.type)===i.identifyingSymbol.type})}function F(){return new le({xmin:-180,ymin:-90,xmax:180,ymax:90})}const M=new R({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ue=new R({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends ye{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference,t=this.fullBounds;return e?t==null?O(F(),e).geometry:G(t,e):null}get fullBounds(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference;if(!e)return null;const t=j();return this.graphics.forEach(i=>{const a=i.geometry!=null?O(i.geometry,e).geometry:null;a!=null&&J(t,a.type==="point"?a:a.extent,t)}),P(t,_)?null:t}get sublayers(){return this.graphics}};o([l({readOnly:!0})],u.prototype,"fullExtent",null),o([l({readOnly:!0})],u.prototype,"fullBounds",null),o([l({readOnly:!0})],u.prototype,"sublayers",null),o([l()],u.prototype,"layer",void 0),o([l()],u.prototype,"layerId",void 0),o([l({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=o([C("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const L=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new q().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new H().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new K().toJSON()}];let n=class extends I($(V(X(U(D))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=S.WGS84,this.sublayers=new v(L.map(t=>new u({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!b(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!b(t))return null;const i=t.layers.map(a=>{const s=new se;return s.read(a,r),s});return new v({items:i})}readLegacyfeatureCollectionJSON(e,t){return b(t)?N(t.featureCollection):null}get fullExtent(){var r;const e=this.spatialReference,t=j();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:i})=>i!=null?J(t,i,t):t,t):(r=this.featureCollectionJSON)!=null&&r.layers.some(i=>i.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(i=>{const a=O(i.layerDefinition.extent,e).geometry;a!=null&&J(t,a,t)}),P(t,_)?O(F(),e).geometry:G(t,e)}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?S.fromJSON(t.layers[0].layerDefinition.spatialReference):S.WGS84}readSublayers(e,t,r){if(b(t))return null;const i=[];let a=t.layers.reduce((s,p)=>Math.max(s,p.layerDefinition.id??-1),-1)+1;for(const s of t.layers){const{layerDefinition:p,featureSet:y}=s,m=p.id??a++,c=B(s);if(c!=null){const f=new u({id:c.id,title:p.name,layerId:m,layer:this,graphics:y.features.map(({geometry:g,symbol:w,attributes:z,popupInfo:A})=>Y.fromJSON({attributes:z,geometry:g,symbol:w,popupTemplate:A}))});i.push(f)}}return new v(i)}writeSublayers(e,t,r,i){var c;const{minScale:a,maxScale:s}=this;if(e==null)return;const p=e.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(p&&((c=i==null?void 0:i.messages)==null?void 0:c.push(new Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let m=this.spatialReference.toJSON();e:for(const f of e)for(const g of f.graphics)if(g.geometry!=null){m=g.geometry.spatialReference.toJSON();break e}for(const f of L){const g=e.find(w=>f.id===w.id);this._writeMapNoteSublayer(y,g,f,a,s,m,i)}Q("featureCollection.layers",y,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=N(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(this.sublayers==null)return;let e=null;const t=[];for(const i of this.sublayers)for(const a of i.graphics)if(a.geometry!=null){const s=a.geometry;e?ee(s.spatialReference,e)||(te(s.spatialReference,e)||re()||await oe(),a.geometry=ie(s,e)):e=s.spatialReference,t.push(a)}const r=await ne(t.map(i=>i.geometry));t.forEach((i,a)=>i.geometry=r[a])}_findSublayer(e){var t;return this.sublayers==null?null:((t=this.sublayers)==null?void 0:t.find(r=>r.id===e))??null}_writeMapNoteSublayer(e,t,r,i,a,s,p){const y=[];if(t!=null){for(const m of t.graphics)this._writeMapNote(y,m,r.geometryType,p);this._normalizeObjectIds(y,M),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:a,objectIdField:"OBJECTID",fields:[M.toJSON(),ue.toJSON()],spatialReference:s},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){var m,c;if(t==null)return;const{geometry:a,symbol:s,popupTemplate:p}=t;if(a==null)return;if(a.type!==r)return void((m=i==null?void 0:i.messages)==null?void 0:m.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(s==null)return void((c=i==null?void 0:i.messages)==null?void 0:c.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const y={attributes:{...t.attributes},geometry:a.toJSON(),symbol:s.toJSON()};p!=null&&(y.popupInfo=p.toJSON()),e.push(y)}_normalizeObjectIds(e,t){const r=t.name;let i=pe(r,e)+1;const a=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:p}=s;(p[r]==null||a.has(p[r]))&&(p[r]=i++),a.add(p[r])}}};o([l({readOnly:!0})],n.prototype,"capabilities",void 0),o([h(["portal-item","web-map"],"capabilities",["layers"])],n.prototype,"readCapabilities",null),o([l({readOnly:!0})],n.prototype,"featureCollections",void 0),o([h(["web-map","portal-item"],"featureCollections",["layers"])],n.prototype,"readFeatureCollections",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],n.prototype,"featureCollectionJSON",void 0),o([h(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],n.prototype,"readLegacyfeatureCollectionJSON",null),o([l({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],n.prototype,"featureCollectionType",void 0),o([l({readOnly:!0})],n.prototype,"fullExtent",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],n.prototype,"legendEnabled",void 0),o([l({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),o([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"minScale",void 0),o([h(["web-map","portal-item"],"minScale",["layers"])],n.prototype,"readMinScale",null),o([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"maxScale",void 0),o([h(["web-map","portal-item"],"maxScale",["layers"])],n.prototype,"readMaxScale",null),o([l({readOnly:!0})],n.prototype,"multipointLayer",null),o([l({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),o([l({readOnly:!0})],n.prototype,"pointLayer",null),o([l({readOnly:!0})],n.prototype,"polygonLayer",null),o([l({readOnly:!0})],n.prototype,"polylineLayer",null),o([l({type:S})],n.prototype,"spatialReference",void 0),o([h(["web-map","portal-item"],"spatialReference",["layers"])],n.prototype,"readSpatialReference",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],n.prototype,"sublayers",void 0),o([h("web-map","sublayers",["layers"])],n.prototype,"readSublayers",null),o([ae("web-map","sublayers")],n.prototype,"writeSublayers",null),o([l({readOnly:!0})],n.prototype,"textLayer",null),o([l()],n.prototype,"title",void 0),o([l({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=o([C("esri.layers.MapNotesLayer")],n);const rt=n;export{rt as default};