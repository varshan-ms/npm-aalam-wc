import{e as u}from"./base-DIkkzJ-c.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(c,h){return(r,o,n)=>{const l=s=>{var e,t;return(t=(e=s.renderRoot)==null?void 0:e.querySelector(c))!=null?t:null};if(h){const{get:s,set:e}=typeof o=="object"?r:n!=null?n:(()=>{const t=Symbol();return{get(){return this[t]},set(i){this[t]=i}}})();return u(r,o,{get(){let t=s.call(this);return t===void 0&&(t=l(this),(t!==null||this.hasUpdated)&&e.call(this,t)),t}})}return u(r,o,{get(){return l(this)}})}}export{d as e};
