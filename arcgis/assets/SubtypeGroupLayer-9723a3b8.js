import{ai as i,aj as s,ck as I,cc as R,al as L,ce as X,cy as Z,ct as Y,cU as k,dX as N,am as ee,cf as S,cL as te,b3 as re,hg as ie,aq as m,cW as M,hj as se,eO as ne,hA as oe,hz as ae,gB as le,cA as pe,gz as ue,eI as de,eK as ye,eJ as ce,dV as he,dW as me,au as _,av as be,aw as fe,d_ as ge,c0 as ve,dc as we,jy as Fe,fs as Se,aF as Ie,eT as Oe,hh as $e,eN as je,d6 as P,ba as Ee}from"./index-888ef8d4.js";import{n as A}from"./sql-bb25550f.js";import{i as Te}from"./APIKeyMixin-1e2aef06.js";import{l as Ce}from"./ArcGISService-b304da72.js";import{o as _e}from"./CustomParametersMixin-67adffbb.js";import{c as Le}from"./EditBusLayer-49e0354b.js";import{y as Ae,w as xe}from"./FeatureLayerBase-378715d1.js";import{a as Pe,d as Ge}from"./TemporalLayer-f95249bd.js";import{E as U,M as qe,Q as De,y as Ve,m as Re,h as ke,b as Ne,g as Me,j as Ue,q as Qe,F as He,I as Be,P as Je,A as ze,O as We}from"./featureLayerUtils-2ef2c1f5.js";import{s as Q}from"./fieldProperties-a347e1c6.js";import{p as Ke,A as Xe,w as Ze}from"./UniqueValueRenderer-3a3aef3d.js";import{p as x}from"./jsonUtils-4d6628d3.js";import{p as H}from"./FeatureTemplate-869c518a.js";import{C as Ye}from"./LabelClass-be5c1571.js";import{i as et}from"./labelingInfo-d8717546.js";import{b as B}from"./Query-66deb263.js";import{p as tt}from"./popupUtils-508fd57e.js";import{c as rt,u as it,S as st}from"./defaults-ee7ede40.js";import{e as nt}from"./versionUtils-24768af9.js";import"./serviceCapabilitiesUtils-09498ee7.js";import"./AttachmentQuery-f885be8d.js";import"./RelationshipQuery-d0cb8dd1.js";import"./FieldsIndex-d94786ea.js";import"./ColorStop-5dd24a85.js";import"./diffUtils-43577d30.js";import"./colorRamps-f58bc08e.js";import"./DictionaryLoader-8f10c9aa.js";import"./heatmapUtils-48a69b11.js";import"./defaultsJSON-59981e75.js";let f=class extends X{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=Z(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const o of Object.keys(e))e[o]&&(r[o]=(n=e[o])==null?void 0:n.toJSON());t.domains=r}};i([s({type:Number,json:{write:!0}})],f.prototype,"code",void 0),i([s({type:Object,json:{write:!0}})],f.prototype,"defaultValues",void 0),i([s({json:{write:!0}})],f.prototype,"domains",void 0),i([I("domains")],f.prototype,"readDomains",null),i([R("domains")],f.prototype,"writeDomains",null),i([s({type:String,json:{write:!0}})],f.prototype,"name",void 0),f=i([L("esri.layers.support.Subtype")],f);const ot=f,at=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],J={key:"type",base:Ke,errorContext:"renderer",typeMap:{simple:x,"unique-value":Xe,"class-breaks":Ze}},G=Q(),q=Y({types:J});let lt=0;function $(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function pt(e){return new x({symbol:ut(e)})}function ut(e){switch(e){case"point":case"multipoint":return st.clone();case"polyline":return it.clone();case"polygon":case"multipatch":return rt.clone();default:return null}}function dt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function yt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},o=z(e,t);if(o!=null){const{defaultValues:l}=o;for(const p in l)n[p]=l[p]}return n[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const W="esri.layers.support.SubtypeSublayer";let a=class extends k(N(ee(ue))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${lt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:n,parent:o}=this;let l;if(n){l=[];let p=0;n.forEach(({name:y,alias:c,editable:g,visible:v})=>{var j;if(!v)return;const d=(j=o==null?void 0:o.fields)==null?void 0:j.find(O=>O.name===y);if(!d)return;const b={name:y};let F=!1;c!==d.alias&&(b.alias=c,F=!0),g!==d.editable&&(b.editable=g,F=!0),l.push(b),F&&p++}),p===0&&l.length===n.length&&(l=null)}else l=S(e);l!=null&&l.length&&te(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!e||!(n!=null&&n.length))return null;const{subtypes:o,subtypeField:l}=e,p=o==null?void 0:o.find(v=>v.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,g=[];for(const v of n){const d=v.clone(),{name:b}=d,F=t==null?void 0:t.find(E=>E.name===b);if(d.visible=!t||!!F,F){const{alias:E,editable:K}=F;E&&(d.alias=E),K===!1&&(d.editable=!1)}const j=(y==null?void 0:y[b])??null;d.defaultValue=b===l?r:j;const O=(c==null?void 0:c[b])??null;d.domain=b===l?null:O?O.type==="inherited"?d.domain:O.clone():null,g.push(d)}return g}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||re.getLogger(W).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){ie(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?pt(e.geometryType):null}readRendererFromService(e,t,r){var y,c,g;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,o=q(n,t,r);let l;const{subtypeCode:p}=this;if(p!=null&&dt(o,t.subtypeField)){const v=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));v&&(l=new x({symbol:v.symbol}))}else(o==null?void 0:o.type)!=="simple"||(g=o.visualVariables)!=null&&g.length||(l=o);return l}readRenderer(e,t,r){var l,p,y;const n=(p=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:p.renderer;return n?((y=n.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:q(n,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[yt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:n}=this;if(!n)throw w("updateAttachment");if(e.getAttribute(n.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return n.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:o}=this;if(r){const{displayField:l,editFieldsInfo:p,objectIdField:y}=r;t={displayField:l,editFieldsInfo:p,fields:n,objectIdField:y,title:o}}return tt(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=U(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=A(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return at.some(e=>this.originIdOf(e)===M.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const n=e.clone();return n.where=D(n.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const n=B.from(e)??r.createQuery();return e!=null&&(n.where=D(n.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(n,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({json:{write:{ignoreOrigin:!0}}})],a.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],a.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],a.prototype,"fieldOverrides",void 0),i([R("fieldOverrides")],a.prototype,"writeFieldOverrides",null),i([s({...G.fields,readOnly:!0,json:{read:!1}})],a.prototype,"fields",null),i([s(G.fieldsIndex)],a.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"floorInfo",null),i([s({type:Ae,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],a.prototype,"formTemplate",void 0),i([s({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([s($(S(se)))],a.prototype,"labelsVisible",void 0),i([s({type:[Ye],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:et},write:{ignoreOrigin:!0}}})],a.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"layerType",void 0),i([s($(S(ne)))],a.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s((()=>{const e=S(oe);return e.json.origins.service.read=!1,$(e)})())],a.prototype,"minScale",void 0),i([s((()=>{const e=S(ae);return e.json.origins.service.read=!1,$(e)})())],a.prototype,"maxScale",void 0),i([s({readOnly:!0})],a.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],a.prototype,"opacity",void 0),i([s()],a.prototype,"parent",void 0),i([s($(S(le)))],a.prototype,"popupEnabled",void 0),i([s({type:pe,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),i([s({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],a.prototype,"renderer",null),i([I("service","renderer",["drawingInfo.renderer","subtypeField","type"])],a.prototype,"readRendererFromService",null),i([I("renderer",["layerDefinition.drawingInfo.renderer"])],a.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],a.prototype,"subtypeCode",void 0),i([s({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],a.prototype,"templates",void 0),i([I("service","templates",["geometryType","subtypeField","subtypes","type"])],a.prototype,"readTemplatesFromService",null),i([s({type:String,json:{write:{ignoreOrigin:!0}}})],a.prototype,"title",void 0),i([I("service","title",["subtypes"])],a.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"url",null),i([s({readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],a.prototype,"visible",void 0),a=i([L(W)],a);const D=(e,t,r)=>{const n=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return n.test(l)?l.replace(n,o):A(o,l)},w=e=>new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=a,h="SubtypeGroupLayer",ct="esri.layers.SubtypeGroupLayer";function V(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const C=Q();let u=class extends xe(Le(de(Pe(ye(ce(Ce(he(me(N(_e(Te(k(Ee))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(_.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(be(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),fe))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ge).then(async()=>{if(!this.url)throw new m("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new m("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>qe(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return De(this)}get parsedUrl(){const e=ve(this.url);return e!=null&&this.layerId!=null&&(e.path=we(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Fe(this.url,t):t}async addAttachment(e,t){return Ve(this,e,t,h)}async updateAttachment(e,t,r){return Re(this,e,t,r,h)}async applyEdits(e,t){return ke(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Se(Ie(()=>import("./FeatureLayerSource-0df24a07.js"),["assets/FeatureLayerSource-0df24a07.js","assets/index-888ef8d4.js","assets/index-5fe5af71.css","assets/MeshGeoreferencedRelativeVertexSpace-fa52001b.js","assets/External-f606302e.js","assets/editingSupport-12a47749.js","assets/normalizeUtils-c2fb91fb.js","assets/normalizeUtilsCommon-ff02416d.js","assets/EditBusLayer-49e0354b.js","assets/clientSideDefaults-2346edd6.js","assets/QueryEngineCapabilities-42e44ded.js","assets/defaultsJSON-59981e75.js","assets/QueryTask-4ee9abf2.js","assets/Query-66deb263.js","assets/executeForIds-a541175c.js","assets/query-6a85d506.js","assets/pbfQueryUtils-08029bda.js","assets/pbf-8458507f.js","assets/queryZScale-0521af07.js","assets/executeQueryJSON-59021ead.js","assets/FeatureSet-326674fa.js","assets/executeQueryPBF-123105d3.js","assets/editsZScale-393d3c04.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=U(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=A(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Ne(this,e,t,h)}async fetchRecomputedExtents(e){return Me(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Oe(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Ue(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),n=B.from(e)??r.createQuery(),o=n.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),n.outFields=o);const l=await r.source.queryFeatures(n,t);if(l!=null&&l.features)for(const p of l.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return l}async queryObjectIds(e,t){return Qe(this,e,t,h)}async queryFeatureCount(e,t){return He(this,e,t,h)}async queryExtent(e,t){return Be(this,e,t,h)}async queryRelatedFeatures(e,t){return Je(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return ze(this,e,t,h)}write(e,t){var l;const{origin:r,layerContainerType:n,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return o==null||o.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return o==null||o.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return(l=this.sublayers)!=null&&l.length?super.write(e,t):(o==null||o.push(new m("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&nt(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new m("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new m("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),$e(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return We(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([s({readOnly:!0})],u.prototype,"createQueryVersion",null),i([s({readOnly:!0})],u.prototype,"editingEnabled",null),i([s({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([s({...C.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([s(C.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([s(je)],u.prototype,"id",void 0),i([s({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([s({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([s(C.outFields)],u.prototype,"outFields",void 0),i([s({readOnly:!0})],u.prototype,"parsedUrl",null),i([s()],u.prototype,"source",null),i([s({type:[ot],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([s({type:_.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:o})=>{const l=new T({subtypeCode:o});return l.read(t,r),l});return new(_.ofType(T))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),o=M.PORTAL_ITEM;let l=!0;if(P(n)===o&&P(r.origin)>o){const p=e.some(y=>y.hasUserOverrides());l=this._sublayersCollectionChanged||p}return{enabled:l,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([s({type:Ge})],u.prototype,"timeInfo",void 0),i([s({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([I("service","title",["name"])],u.prototype,"readTitleFromService",null),i([s({json:{read:!1}})],u.prototype,"type",void 0),u=i([L(ct)],u);const Ut=u;export{Ut as default};