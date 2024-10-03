System.register(["../index-legacy.js"],(function(t,e){"use strict";var s;return{setters:[t=>{s=t.w}],execute:function(){
/**
			 * @license
			 * Copyright 2017 Google LLC
			 * SPDX-License-Identifier: BSD-3-Clause
			 */
const e=1;let r=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
			 * @license
			 * Copyright 2018 Google LLC
			 * SPDX-License-Identifier: BSD-3-Clause
			 */const n="important",i=" !"+n;t("o",(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends r{constructor(t){if(super(t),t.type!==e||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const r=t[s];return null==r?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:r}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const s of this.ft)null==e[s]&&(this.ft.delete(s),s.includes("-")?r.removeProperty(s):r[s]=null);for(const s in e){const t=e[s];if(null!=t){this.ft.add(s);const e="string"==typeof t&&t.endsWith(i);s.includes("-")||e?r.setProperty(s,e?t.slice(0,-11):t,e?n:""):r[s]=t}}return s}}))}}}));
