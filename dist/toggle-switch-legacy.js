System.register(["./index-legacy.js","./assets/state-legacy-D2lZ0iuY.js"],(function(t,i){"use strict";var o,s,e,r,h;return{setters:[t=>{o=t.n,s=t.s,e=t.x,r=t.t},t=>{h=t.r}],execute:function(){var t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=(o,s,e,r)=>{for(var h,l=r>1?void 0:r?i(s,e):s,a=o.length-1;a>=0;a--)(h=o[a])&&(l=(r?h(s,e,l):h(l))||l);return r&&l&&t(s,e,l),l};let a=class extends s{constructor(){super(),this.DEFAULT_STYLES={onColor:"var(--primary-color)",offColor:"grey",dialColor:"#fff",width:"50px",height:"26px"},this.status="off",this.onColor=this.DEFAULT_STYLES.onColor,this.offColor=this.DEFAULT_STYLES.offColor,this.dialColor=this.DEFAULT_STYLES.dialColor,this.width=this.DEFAULT_STYLES.width,this.height=this.DEFAULT_STYLES.height}_parseCSS(t,i){try{CSSStyleValue.parse(t,i)}catch(o){return"TypeError"!=o.name}return!0}_parseCSSColor(t){return this._parseCSS("color",t)}_parseCSSDimension(t){return this._parseCSS("width",t)}_resetStyles(){this.onColor=this.DEFAULT_STYLES.onColor,this.offColor=this.DEFAULT_STYLES.offColor,this.dialColor=this.DEFAULT_STYLES.dialColor,this.width=this.DEFAULT_STYLES.width,this.height=this.DEFAULT_STYLES.height}attributeChangedCallback(t,i,o){if(super.attributeChangedCallback(t,i,o),"style"==t){this._resetStyles();for(let t of o.split(";")){let[i,o]=t.trim().split(":").map((t=>t.trim()));"oncolor"==i?this._parseCSSColor(o)&&(this.onColor=o):"offcolor"==i?this._parseCSSColor(o)&&(this.offColor=o):"dialcolor"==i?this._parseCSSColor(o)&&(this.dialColor=o):"width"==i?this._parseCSSDimension(o)&&(this.width=o):"height"==i&&this._parseCSSDimension(o)&&(this.height=o)}}}render(){return e`
        <style>
        :host {display:inline-block;}
        .switch-dial {position:absolute;top:3px;bottom:3px;left:3px;right:calc(100% - ${this.height} - 3px);transition:all 0.1s ease;}
        :host([status='on']) .switch-dial {right:3px;left:calc(100% - ${this.height} + 3px);}
        .switch-container {height:${this.height};width:${this.width};
                           background-color:${this.offColor};
                           box-sizing:content-box;border-radius:${this.height};position:relative;cursor:pointer;}
        .switch-dial > svg {height:calc(${this.height} - 6px);width:calc(${this.height} - 6px);}
        :host([status='on']) .switch-container {background-color:${this.onColor};}
        </style>
        <div class="switch-container"   @click=${this._onClick}>
                <span class="switch-dial">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle r="45" cx="50" cy="50" fill="${this.dialColor}" />
                    </svg>
                </span>
            </div>
            `}_onClick(){this.status="on"==this.status?"off":"on";let t=new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:this.status});this.dispatchEvent(t)}};a.properties={style:{type:String,reflect:!0}},l([o({attribute:!0,type:String,reflect:!0})],a.prototype,"status",2),l([h()],a.prototype,"onColor",2),l([h()],a.prototype,"offColor",2),l([h()],a.prototype,"dialColor",2),l([h()],a.prototype,"width",2),l([h()],a.prototype,"height",2),a=l([r("aalam-switch")],a)}}}));
