import{cg as a,bl as i}from"./index-888ef8d4.js";import{p as e}from"./queryTopFeatures-f4a25670.js";import{S as n}from"./TopFeaturesQuery-1ed01c54.js";import"./normalizeUtils-c2fb91fb.js";import"./normalizeUtilsCommon-ff02416d.js";import"./query-6a85d506.js";import"./pbfQueryUtils-08029bda.js";import"./pbf-8458507f.js";import"./queryZScale-0521af07.js";async function g(o,r,m){const p=a(o),t=await e(p,n.from(r),{...m});return{count:t.data.count,extent:i.fromJSON(t.data.extent)}}export{g as executeForTopExtents};