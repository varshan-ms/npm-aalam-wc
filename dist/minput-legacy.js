System.register(["./index-legacy.js","./assets/style-map-legacy-ZuJKoPGU.js","./assets/map-legacy-CwlZ3H7X.js","./assets/when-legacy-CPfilbPv.js","./assets/base-legacy-ClOgP1kU.js","./assets/utils-legacy-1NLZUWf7.js"],(function(e,t){"use strict";var s,i,n,a,l,r,h,c,o,u;return{setters:[e=>{s=e.n,i=e.t,n=e.s,a=e.x,l=e.i},e=>{r=e.o},e=>{h=e.o},e=>{c=e.n},e=>{o=e.e},e=>{u=e.p}],execute:function(){
/**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
let e;var t=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=(e,s,i,n)=>{for(var a,l=n>1?void 0:n?p(s,i):s,r=e.length-1;r>=0;r--)(a=e[r])&&(l=(n?a(s,i,l):a(l))||l);return n&&l&&t(s,i,l),l};let _=class extends n{constructor(){super(),this.order="",this.value="",this._items=[],this._dset={},this._evnt_data={},this._isNum=e=>["n","num","number"].indexOf((e.type||"").toLowerCase())>=0}_getItemSpec(e){let t=e;if(!(e in this._dset)){if(!this.dataset[t]){for(let s of Object.keys(this.dataset))if("*"==s[s.length-1]&&e.startsWith(s.substr(0,s.length-1))){t=s;break}if(!this.dataset[t])return console.warn("No data attribute set for ",e),this._dset[e]={}}let s=this.dataset[t]||"";if(this._dset[e]=u(s),this._dset[e].choices&&(this._dset[e].choices=this._dset[e].choices.split(","),!this._dset[e].chars)){let t=this._dset[e].choices[0].length;for(let s=0;s<this._dset[e].choices.length;s++)t=Math.max(this._dset[e].choices[s].length,t);this._dset[e].chars=t}}return this._dset[e]}_itemHtml(e,t){let s=this._getItemSpec(e),i=t==this._items.length-1,n={};s.chars&&(n.width=+s.chars+1+"ch"),!s.gapnxt||s.sepnxt||i||(n["margin-right"]=s.gapnxt);let l={};return s.sepnxt&&(l.display="inline-block",l.width=s.gapnxt,l["text-align"]="center"),a`
<input id="${e}" part="inp-field" class="fld" data-ix="${t}"
    type="${"text"==s.type?"text":"tel"}" style=${r(n)}
    placeholder="${s.ph}" @input=${this._inputEvent} @blur=${this._blurEvent}
    @keydown=${this._keyDownEvent} @click=${this._clickEvent}
    value=${s.choices?.length?s.choices[0]:null}
    autocomplet="off"/>
${c(s.sepnxt&&!i,(()=>a`<div style=${r(l)}>${s.sepnxt}</div>`))}
`}_resetChoiceVal(e){e.dataset?.val&&e.setAttribute("data-val","")}_choicesKeyDown(e,t,s){if(e.preventDefault(),!s)return!1;let i=e.target,n=i.dataset?.val||"";for(let a=0;a<t.choices.length;a++)if(0==t.choices[a].toLowerCase().indexOf((n+e.key).toLowerCase())){i.value=t.choices[a];break}return i.setAttribute("data-val",n+e.key),!1}_clickEvent(e){e.target.select()}_keyDownEvent(e){let t=e.target,s=+(t.dataset?.ix||-1),i=this.input_els[s],n=s==this._items.length-1?0:s+1,a=0==s?this._items.length-1:s-1,l=i.selectionStart,r=this._getItemSpec(i.id);if("ArrowRight"==e.key||"Delete"==e.key)if(l==i.value.length||"ArrowRight"==e.key&&r.choices?.length){if(s-n>0&&"Delete"==e.key)return e.preventDefault(),!1;let t=this.input_els[n];t.focus(),t.selectionStart=t.selectionEnd=0,"ArrowRight"==e.key&&e.preventDefault()}else r.choices?.length&&"Delete"==e.key&&(i.value=r.choices[0],this._resetChoiceVal(i),e.preventDefault());else if("ArrowLeft"==e.key||"Backspace"==e.key)if(0==l||"ArrowLeft"==e.key&&r.choices?.length){if(s-a<0&&"Backspace"==e.key)return e.preventDefault(),!1;let t=this.input_els[a];t.focus(),t.selectionStart=t.selectionEnd=t.value.length,"ArrowLeft"==e.key&&e.preventDefault()}else r.choices?.length&&"Backspace"==e.key&&(i.value=r.choices[0],e.preventDefault(),this._resetChoiceVal(i));else if("ArrowUp"==e.key||"ArrowDown"==e.key){let t=+i.value;if(r.choices?.length){let t=i.value,s=r.choices.indexOf(t);"ArrowDown"==e.key?i.value=r.choices[s==r.choices.length-1?0:s+1]:i.value=r.choices[0==s?r.choices.length-1:s-1]}else{if(isNaN(t))return;"ArrowUp"==e.key&&(!r.nmax||"1"==r.loop&&r.nmin||t<=+r.nmax-1)&&(!r.chars||(""+(t+1)).length<=+r.chars)?("1"==r.loop&&r.nmin&&r.nmax&&t>=+r.nmax&&(t=+r.nmin-1),i.value=""+(t+1)):"ArrowDown"==e.key&&(!r.nmin||"1"==r.loop&&r.nmax||t>=+r.nmin+1)&&(!r.chars||(""+(t-1)).length<=+r.chars)&&("1"==r.loop&&null!=r.nmin&&r.nmax&&t<=+r.nmin&&(t=+r.nmax+1),i.value=""+(t-1))}this._raiseEvent(i,r)}else{let t=1==e.key.length&&null!=e.key.match(/^[A-Za-z0-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`{|}~-]*$/g);if(r.choices?.length)return this._choicesKeyDown(e,r,t);if(i.selectionStart!=i.selectionEnd)return!0;if(t){let t=i.value,s=this._isNum(r)&&r.nmax&&+r.nmax<+(t.slice(0,l)+e.key+t.slice(l));if(i.value.length>=+r.chars||s)return e.preventDefault(),!1}}return!0}_raiseEvent(e,t){let s=e.id,i=this._isNum(t);if(this._evnt_data[s]==(i?+e.value:e.value))return;let n=this._evnt_data[s];this._evnt_data[s]=e.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{changed:s,old_val:n,new_val:this._evnt_data[s],all:{...this._evnt_data}}})),this.value=this._items.map((e=>`${e}:${this._evnt_data[e]||""}`)).join(";")}_blurEvent(e){let t=e.target;this._resetChoiceVal(t),this._raiseEvent(t,this._getItemSpec(t.id))}_inputEvent(e){let t=e.target,s=t.id,i=+(t.dataset?.ix||-1),n=i==this._items.length-1?0:i+1,a=this._getItemSpec(s),l=t,r=this._isNum(a),h=r&&a.nmax&&+a.nmax<+(l.value+"0");if(l.value.length>=+a.chars||h){h&&l.value.length>+a.chars?l.value=a.nmax:r&&a.nmin&&+l.value<+a.nmin&&(l.value=a.nmin);let e=this.input_els[n];e.focus(),e.select(),this._raiseEvent(l,a)}}_valueChanged(){let e=u(this.value);for(let t in this._items){let s=this._items[t],i=e[s]||"";this._evnt_data[s]=this._isNum(this._getItemSpec(s))?+i:i,this.input_els[t]&&(this.input_els[t].value=e[s]||"")}}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s),"order"==e?this._items=s.split(",").map((e=>e.trim())):"value"==e&&this.input_els.length>0&&this._valueChanged()}connectedCallback(){super.connectedCallback()}render(){return a`
${h(this._items,((e,t)=>this._itemHtml(e,t)))}
`}static get styles(){return l`
:host {display:inline-block;}
input,input:focus {border:0;padding:0;outline:0;}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;margin: 0;
}
input[type=number] {-moz-appearance: textfield;}
`}firstUpdated(e){super.firstUpdated(e),this.value&&this._valueChanged()}get valdata(){return{...this._evnt_data}}};d([s({type:String,attribute:!0})],_.prototype,"order",2),d([s({type:String,attribute:!0})],_.prototype,"value",2),d([function(t){return(s,i)=>o(s,i,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll(t)}})}(".fld")],_.prototype,"input_els",2),_=d([i("aalam-minput")],_)}}}));
