var c=Object.freeze,S=Object.defineProperty;var p=(t,s)=>c(S(t,"raw",{value:c(s||t.slice())}));import{n as C,s as u,x as d,t as g}from"./index.js";import{r as n}from"./assets/state-amsnmWNs.js";function y(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=(t,s,e,l)=>{for(var o=l>1?void 0:l?w(s,e):s,i=t.length-1,a;i>=0;i--)(a=t[i])&&(o=(l?a(s,e,o):a(o))||o);return l&&o&&_(s,e,o),o},f;let r=class extends u{constructor(){super(),this.DEFAULT_STYLES={onColor:"var(--primary-color)",offColor:"grey",dialColor:"#fff",width:"50px",height:"26px"},this.status="off",this.onColor=this.DEFAULT_STYLES.onColor,this.offColor=this.DEFAULT_STYLES.offColor,this.dialColor=this.DEFAULT_STYLES.dialColor,this.width=this.DEFAULT_STYLES.width,this.height=this.DEFAULT_STYLES.height}_parseCSS(t,s){try{CSSStyleValue.parse(t,s)}catch(e){return e.name!="TypeError"}return!0}_parseCSSColor(t){return this._parseCSS("color",t)}_parseCSSDimension(t){return this._parseCSS("width",t)}_resetStyles(){this.onColor=this.DEFAULT_STYLES.onColor,this.offColor=this.DEFAULT_STYLES.offColor,this.dialColor=this.DEFAULT_STYLES.dialColor,this.width=this.DEFAULT_STYLES.width,this.height=this.DEFAULT_STYLES.height}attributeChangedCallback(t,s,e){if(super.attributeChangedCallback(t,s,e),t=="style"){this._resetStyles();for(let l of e.split(";")){let[o,i]=l.trim().split(":").map(a=>a.trim());o=="oncolor"?this._parseCSSColor(i)&&(this.onColor=i):o=="offcolor"?this._parseCSSColor(i)&&(this.offColor=i):o=="dialcolor"?this._parseCSSColor(i)&&(this.dialColor=i):o=="width"?this._parseCSSDimension(i)&&(this.width=i):o=="height"&&this._parseCSSDimension(i)&&(this.height=i)}}}render(){return d(f||(f=p(["\n        <style>\n        :host {display:inline-block;}\n        .switch-dial {position:absolute;top:3px;bottom:3px;left:3px;right:calc(100% - "," - 3px);transition:all 0.1s ease;}\n        :host([status='on']) .switch-dial {right:3px;left:calc(100% - "," + 3px);}\n        .switch-container {height:",";width:",";\n                           background-color:",";\n                           box-sizing:content-box;border-radius:",";position:relative;cursor:pointer;}\n        .switch-dial > svg {height:calc("," - 6px);width:calc("," - 6px);}\n        :host([status='on']) .switch-container {background-color:",';}\n        </style>\n        <div class="switch-container"   @click=','>\n                <span class="switch-dial">\n                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                      <circle r="45" cx="50" cy="50" fill="','" />\n                    </svg>\n                </span>\n            </div>\n            '])),this.height,this.height,this.height,this.width,this.offColor,this.height,this.height,this.height,this.onColor,this._onClick,this.dialColor)}_onClick(){this.status=this.status=="on"?"off":"on";let t=new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:this.status});this.dispatchEvent(t)}};r.properties={style:{type:String,reflect:!0}};h([C({attribute:!0,type:String,reflect:!0})],r.prototype,"status",2);h([n()],r.prototype,"onColor",2);h([n()],r.prototype,"offColor",2);h([n()],r.prototype,"dialColor",2);h([n()],r.prototype,"width",2);h([n()],r.prototype,"height",2);r=h([g("aalam-switch")],r);export{y as __vite_legacy_guard};
