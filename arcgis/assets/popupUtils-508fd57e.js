import{cA as u,cB as f,cC as m,cD as p,cE as s,cF as w,cG as F,cH as g,cI as b}from"./index-888ef8d4.js";function j({displayField:e,editFieldsInfo:a,fields:i,objectIdField:t,title:r},o){if(!i)return null;const l=L({editFieldsInfo:a,fields:i,objectIdField:t},o);if(!l.length)return null;const c=N({titleBase:r,fields:i,displayField:e}),d=v();return new u({title:c,content:d,fieldInfos:l})}const y=(e,a)=>a.visibleFieldNames?a.visibleFieldNames.has(e.name):b(e,a);function C(e,a){const i=e;return a&&(e=e.filter(t=>!a.includes(t.type))),e===i&&(e=e.slice()),e.sort(I),e}function I(e,a){return e.type==="oid"?-1:a.type==="oid"?1:n(e)?-1:n(a)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((a.alias||a.name).toLocaleLowerCase())}function L(e,a){const i=a==null?void 0:a.visibleFieldNames;return C(e.fields??[],(a==null?void 0:a.ignoreFieldTypes)||$).map(t=>new f({fieldName:t.name,isEditable:m(t,e),label:t.alias,format:h(t),visible:y(t,{...e,visibleFieldNames:i})}))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new s({digitSeparator:!0,places:0});case"double":return new s({digitSeparator:!0,places:2});case"date":return new s({dateFormat:"long-month-day-year"});default:return e.type==="string"&&p(e.name)?new s({digitSeparator:!0,places:0}):null}}function v(){return[new w,new F]}function N(e){const a=g(e),{titleBase:i}=e;return a?`${i}: {${a.trim()}}`:i??""}function n(e){return(e.name&&e.name.toLowerCase())==="name"?!0:(e.alias&&e.alias.toLowerCase())==="name"}const $=["geometry","blob","raster","guid","xml"];export{j as p};