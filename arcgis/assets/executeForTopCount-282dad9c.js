import{cg as i}from"./index-888ef8d4.js";import{m as p}from"./queryTopFeatures-f4a25670.js";import{S as a}from"./TopFeaturesQuery-1ed01c54.js";import"./normalizeUtils-c2fb91fb.js";import"./normalizeUtilsCommon-ff02416d.js";import"./query-6a85d506.js";import"./pbfQueryUtils-08029bda.js";import"./pbf-8458507f.js";import"./queryZScale-0521af07.js";async function w(o,t,r){const m=i(o);return(await p(m,a.from(t),{...r})).data.count}export{w as executeForTopCount};