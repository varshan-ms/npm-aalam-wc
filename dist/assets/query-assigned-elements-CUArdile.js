import{e as a}from"./base-DIkkzJ-c.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(e){return(i,l)=>{const{slot:r,selector:n}=e!=null?e:{},m="slot"+(r?"[name=".concat(r,"]"):":not([name])");return a(i,l,{get(){var o,c;const t=(o=this.renderRoot)==null?void 0:o.querySelector(m),s=(c=t==null?void 0:t.assignedElements(e))!=null?c:[];return n===void 0?s:s.filter(u=>u.matches(n))}})}}export{f as o};
