import"./index-888ef8d4.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */function b(r,n,o){const e=i(r);return new e(n,o)}function i(r){class n extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter(s=>s.target!==e);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach(s=>this.observe(s.target,s.options))}}return function(){return r==="intersection"?window.IntersectionObserver:r==="mutation"?n:window.ResizeObserver}()}export{b as c};
