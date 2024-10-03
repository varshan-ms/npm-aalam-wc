System.register(["./index-legacy.js","./assets/query-legacy-CILVpPJY.js","./assets/query-assigned-elements-legacy-1pHNcqST.js","./assets/when-legacy-CPfilbPv.js","./assets/base-legacy-ClOgP1kU.js"],(function(t,e){"use strict";var i,s,n,o,l,r,a,d;return{setters:[t=>{i=t.n,s=t.t,n=t.s,o=t.x,l=t.i},t=>{r=t.e},t=>{a=t.o},t=>{d=t.n},null],execute:function(){var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,p=(i,s,n,o)=>{for(var l,r=o>1?void 0:o?e(s,n):s,a=i.length-1;a>=0;a--)(l=i[a])&&(r=(o?l(s,n,r):l(r))||r);return o&&r&&t(s,n,r),r};let u=class extends n{constructor(){super(),this.label="Label",this.mode="filled",this.color="currentColor",this.disabled=!1,this.prefix="",this.suffix="",this.charcount=""}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),"disabled"==t?this._disableInput():"charcount"==t?this._charCounter():"mode"==t&&"outline"!=this.mode&&"filled"!=this.mode&&(this.mode="filled")}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",(t=>{this._slotChangedEvent(t)}))}disconnectedCallback(){super.disconnectedCallback()}render(){return o`
<div id="_container" class="mode-${this.mode}"
    @click=${this._clickEvent}
    style="--attrcolor:${this.color}">
    <div>
        <slot name="leading-icon"></slot>
    </div>
    <div id="_input-container">
        ${d(this.prefix,(()=>o`<span id="_prefix">${this.prefix}</span>`))}
        <span id="_input-span" @input=${this._charCounter}>
            <slot name="input">
                <input id="_input-box" type="text"
                    @focus=${this._focusEvent}
                    @blur=${this._blurEvent}>
            </slot>
        </span>
        ${d(this.suffix,(()=>o`<span id="_suffix">${this.suffix}</span>`))}
        <span id="_label">${this.label}</span>
    </div>
    <div>
        <slot name="trailing-icon"></slot>
    </div>
</div>
<div id="_helper-text">
    <slot name="helper-text"></slot>
    <span id='_display-counter'></span>
</div>`}static get styles(){return l`
:host {position:relative;display:block;width:100%}
#_container {
    position:relative;display:flex;align-items:center;
    gap:5px;padding-left:5px;padding-right:5px}
#_input-container {
    position:relative;padding-top:calc(0.75em + 7px);padding-bottom:3px;
    gap:5px;padding-right:5px;
    display:flex;align-items:center;flex:1}
#_label {
    position:absolute;top:50%;left:0;
    transition:transform 0.2s ease;transform:translateY(-50%)}
#_prefix, #_suffix {opacity:0}
#_input-span {flex:1}
#_helper-text {display:flex;padding-left:5px}
#_display-counter {display:flex;margin-left:auto}
::slotted([slot=input]), #_input-box {
    background:transparent;outline:none;
    border:none;width:100%;padding:0px;font-size:1em}
.focused #_prefix, .focused #_suffix {opacity:1}

.mode-filled {backdrop-filter:brightness(0.90)}
.mode-filled:hover {backdrop-filter:brightness(0.80)}
.mode-filled.focused {backdrop-filter:brightness(0.70)}
.mode-filled.focused #_label {
    transform:translateY(calc(-100% - 2px)) scale(0.75);transform-origin:left}
.mode-filled.focused {border-bottom:solid 2px var(--attrcolor)}
.mode-filled.focusout {border-bottom:transparent !important}
.mode-filled.focusout {backdrop-filter:brightness(0.90)}

.mode-outline.focused {
    border:solid 2px var(--attrcolor)}
.mode-outline.focused #_input-container {
    padding:calc((0.75em + 10px)/2);padding-left:0px;padding-right:5px}
.mode-outline, .mode-outline.focusout {border:solid 2px grey}
.mode-outline.focused #_label {
    padding:4px;background:white;
    transform:translateY(-130%)
        translateX(calc(var(--tx)*-1px)) scale(0.75)}`}firstUpdated(){this._input_slot[0]?this._input_element=this._input_slot[0]:this._input_element=this._input_box,this._input_element.value="",this.charcount&&this._charCounter(),this._setTransX(),this._disableInput()}_slotChangedEvent(t){if(!t.target)return;let e=t.target?.name;if("input"==e){if(!this._input_slot[0])return void(this._input_element!=this._input_box&&(this._input_element=this._input_box));this._input_element!=this._input_slot[0]&&(this._input_element=this._input_slot[0]),this._input_element.addEventListener("focus",(()=>{this._focusEvent()})),this._input_element.addEventListener("blur",(()=>{this._blurEvent()}))}else"leading-icon"==e&&this._setTransX()}_clickEvent(){this.disabled||this._input_element.focus()}_focusEvent(){this.disabled||(this._container.classList.add("focused"),this._container.classList.remove("focusout"))}_blurEvent(){this._input_element.value?this._container.classList.add("focusout"):this._container.classList.remove("focused")}_charCounter(){if(!this._input_element)return;if(!this.charcount)return this._display_counter.innerText="",this._display_counter.style.display="none",void this._input_element.removeAttribute("maxlength");this._display_counter.style.display="flex",this._input_element.setAttribute("maxlength",this.charcount);let t=this._input_element.value.length;this._display_counter.innerText=`${t}/${this.charcount}`}_disableInput(){this._input_element&&(1==this.disabled?this._input_element.setAttribute("disabled",""):this._input_element.removeAttribute("disabled"))}_setTransX(){let t=this.shadowRoot?.querySelector("#_input-container"),e=t?.getBoundingClientRect().x;if(e){let t=this.getBoundingClientRect().x;this.style.setProperty("--tx",""+(e-t-4))}}};p([i({type:String,attribute:!0})],u.prototype,"label",2),p([i({type:String,attribute:!0})],u.prototype,"mode",2),p([i({type:String,attribute:!0})],u.prototype,"color",2),p([i({type:Boolean,attribute:!0})],u.prototype,"disabled",2),p([i({type:String,attribute:!0})],u.prototype,"prefix",2),p([i({type:String,attribute:!0})],u.prototype,"suffix",2),p([i({type:Number,attribute:!0})],u.prototype,"charcount",2),p([r("#_container")],u.prototype,"_container",2),p([r("#_input-box")],u.prototype,"_input_box",2),p([r("#_display-counter")],u.prototype,"_display_counter",2),p([a({slot:"input"})],u.prototype,"_input_slot",2),u=p([s("aalam-md-input")],u)}}}));
