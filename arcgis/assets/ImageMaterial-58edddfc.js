import{ig as P,ih as m,ii as v,aQ as f,ij as u,ik as y,il as O,im as A,io as $,hL as r,ip as g,iq as S,ir as c,is as C,aF as E,it as x,iu as _,ai as o,iv as n,iw as d,ix as w,iy as b,iz as N,iA as M,iB as D,iC as R,iD as I,iE as F,iF as L,iG as U,iH as B,iI as G,iJ as W,iK as z,iL as H,iM as j,iN as Q,hM as p,iO as q,iP as V,iQ as k,iR as J}from"./index-888ef8d4.js";function K(a){const e=new P,{vertex:t,fragment:i}=e;return m(t,a),e.include(v,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(O,a),i.uniforms.add(new A("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===r.Alpha?i.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(g)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(i.include(S),i.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(g)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const X=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new b(e.rctx,h.shader.get().build(this.configuration),N)}_setPipelineState(e,t){const i=this.configuration,l=e===c.NONE,T=e===c.FrontFace;return M({blending:i.output!==r.Color&&i.output!==r.Alpha||!i.transparent?null:l?Y:D(e),culling:R(i.cullFace),depthTest:{func:I(e)},depthWrite:l?i.writeDepth?F:null:L(e),colorWrite:U,stencilWrite:i.hasOccludees?B:null,stencilTest:i.hasOccludees?t?G:W:null,polygonOffset:l||T?null:z(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new C(X,()=>E(()=>import("./ImageMaterial.glsl-8d85adf9.js"),["assets/ImageMaterial.glsl-8d85adf9.js","assets/index-888ef8d4.js","assets/index-5fe5af71.css"]));const Y=x(_.ONE,_.ONE_MINUS_SRC_ALPHA);class s extends H{constructor(){super(...arguments),this.output=r.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:r.COUNT})],s.prototype,"output",void 0),o([n({count:d.COUNT})],s.prototype,"cullFace",void 0),o([n()],s.prototype,"hasSlicePlane",void 0),o([n()],s.prototype,"transparent",void 0),o([n()],s.prototype,"enableOffset",void 0),o([n()],s.prototype,"writeDepth",void 0),o([n()],s.prototype,"hasOccludees",void 0),o([n({count:c.COUNT})],s.prototype,"transparencyPassType",void 0),o([n()],s.prototype,"hasMultipassTerrain",void 0),o([n()],s.prototype,"cullAboveGround",void 0);class ae extends j{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new s}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Q,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===r.Color||t===r.Alpha||t===r.Highlight?e===p.DRAPED_MATERIAL?!0:t===r.Highlight?e===p.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Z(e)}createBufferWriter(){return new q(V)}}class Z extends k{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==r.Color&&this._output!==r.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends J{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,K as v};
