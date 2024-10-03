var m=Object.freeze,_=Object.defineProperty;var h=(t,i)=>m(_(t,"raw",{value:m(i||t.slice())}));import{n as c,t as f,s as y,i as u,x as v}from"./index.js";import{e as w}from"./assets/query-DjSY4l8D.js";import{o as g}from"./assets/query-assigned-elements-CUArdile.js";import"./assets/base-DIkkzJ-c.js";function $(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,r=(t,i,a,e)=>{for(var s=e>1?void 0:e?x(i,a):i,o=t.length-1,l;o>=0;o--)(l=t[o])&&(s=(e?l(i,a,s):l(s))||s);return e&&s&&b(i,a,s),s},d,p;let n=class extends y{constructor(){super(),this.interval=3,this.showanimation="name:fade;dur:200",this.hideanimation="name:fade;dur:200",this._timer=null}static get styles(){return u(d||(d=h(["\n        :host {\n            display:inline-block;\n        }\n        #container {\n            position:relative;\n            display:inline-block;\n            white-space:nowrap;\n            vertical-align:top;\n            align-items:center;\n        }\n        ::slotted(*){\n            display:none;\n            position:absolute;\n            top:0;\n            left:0;\n        }\n        ::slotted(.show) {\n            display:inline-block !important;\n            animation: var(--show-animation-name)\n            calc(var(--show-animation-dur) ) ease;\n            transform-origin: var(--show-tr-origin);\n        }\n        ::slotted(.hide) {\n            display:inline-block !important;\n            animation: var(--hide-animation-name)\n            calc(var(--hide-animation-dur) ) ease;\n            transform-origin: var(--hide-tr-origin);\n        }"])))}render(){return v(p||(p=h(['<span id="container"> <slot> </slot> </span>'])))}getKeyFrames(t){return{"show-fade":[{opacity:0},{opacity:1}],"hide-fade":[{opacity:1},{opacity:0}],"show-b2t":[{transform:"translate(0, 100%)",opacity:0},{transform:"translate(0, 0)",opacity:1}],"hide-b2t":[{transform:"translate(0, 0)",opacity:1},{transform:"translate(0, -100%)",opacity:0}],"show-t2b":[{transform:"translate(0, -100%)",opacity:0},{transform:"translate(0, 0)",opacity:1}],"hide-t2b":[{transform:"translate(0,0)",opacity:1},{transform:"translate(0,100%)",opacity:0}],"show-r2l":[{transform:"translate(100%,0)",opacity:0},{transform:"translate(0,0)",opacity:1}],"hide-r2l":[{transform:"translate(0,0)",opacity:1},{transform:"translate(-100%,0)",opacity:0}],"show-l2r":[{transform:"translate(-100%,0)",opacity:0},{transform:"translate(0,0)",opacity:1}],"hide-l2r":[{transform:"translate(0,0)",opacity:1},{transform:"translate(100%,0)",opacity:0}],"show-reveal-b2t":[{transform:"scaleY(0)",opacity:0},{transform:"scaleY(1)",opacity:1}],"hide-reveal-b2t":[{transform:"scaleY(1)",opacity:1},{transform:"scaleY(0)",opacity:0}],"show-reveal-t2b":[{transform:"scaleY(0)",opacity:0},{transform:"scaleY(1)",opacity:1}],"hide-reveal-t2b":[{transform:"scaleY(1)",opacity:1},{transform:"scaleY(0)",opacity:0}],"show-reveal-r2l":[{transform:"scaleX(0)",opacity:0},{transform:"scaleX(1)",opacity:1}],"hide-reveal-r2l":[{transform:"scaleX(1)",opacity:1},{transform:"scaleX(0)",opacity:0}],"show-reveal-l2r":[{transform:"scaleX(0)",opacity:0},{transform:"scaleX(1)",opacity:1}],"hide-reveal-l2r":[{transform:"scaleX(1)",opacity:1},{transform:"scaleX(0)",opacity:0}]}[t]}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",()=>{this.slotChangedEvent()}),this.animationChange(this.showanimation,"show"),this.animationChange(this.hideanimation,"hide")}attributeChangedCallback(t,i,a){super.attributeChangedCallback(t,i,a),t=="showanimation"?this.animationChange(a,"show"):t=="hideanimation"&&this.animationChange(a,"hide")}animationChange(t,i){const a=this.procAnimationValue(t),e={"reveal-t2b":"top","reveal-b2t":"bottom","reveal-r2l":"right","reveal-l2r":"left"},s={"reveal-t2b":"bottom","reveal-b2t":"top","reveal-r2l":"left","reveal-l2r":"right"};e[a.name]&&(this.style.setProperty("--show-tr-origin",e[a.name]),this.style.setProperty("--hide-tr-origin",s[a.name])),i=="show"?this.show_animation_props={name:"show-".concat(a.name),duration:"".concat(a.dur,"ms")}:i=="hide"&&(this.hide_animation_props={name:"hide-".concat(a.name),duration:"".concat(a.dur,"ms")}),this.style.setProperty("--".concat(i,"-animation-name"),"".concat(i,"-").concat(a.name)),this.style.setProperty("--".concat(i,"-animation-dur"),"".concat(a.dur,"ms"))}procAnimationValue(t){return t.split(";").map(i=>i.split(":")).reduce((i,[a,e])=>(a&&e&&(i[a.trim()]=e.trim()),i),{})}_showEl(t){t.classList.add("show");const i=t.getBoundingClientRect(),a=this.getKeyFrames(this.show_animation_props.name),e=parseInt(this.show_animation_props.duration);return t.animate(a,{duration:e}).finished.then(()=>{let s=t.getBoundingClientRect().width;parseInt(this._container_el.style.width)>s&&(this._container_el.style.width="".concat(s,"px"))}),i}_hideEl(t){const i=this.getKeyFrames(this.hide_animation_props.name),a=parseInt(this.hide_animation_props.duration);t.classList.add("hide"),t.animate(i,{duration:a}).finished.then(()=>{t.classList.remove("hide")})}slotChangedEvent(){let t=this._showEl(this._slotted_els[0]);this._active_index=0,this._timer&&clearInterval(this._timer),this._timer=setInterval(()=>{this.switch()},this.interval*1e3),this.adjustcontainerwidth(0,t)}switch(){let t=(this._active_index+1)%this._slotted_els.length;this.dispatchEvent(new CustomEvent("change",{detail:{showing:t,hiding:this._active_index}}));let i=this._showEl(this._slotted_els[t]);this.adjustcontainerwidth(this._active_index,i),this._slotted_els[this._active_index].classList.remove("show"),this._hideEl(this._slotted_els[this._active_index]),this._active_index=t}adjustcontainerwidth(t,i){let a=this._slotted_els[t].getBoundingClientRect();i!=null&&a!=null&&this._container_el!=null&&(this._container_el.style.width="".concat(Math.max(i.width,a.width),"px"),this._container_el.style.height="".concat(Math.max(i.height,a.height),"px"))}};r([c({type:Number,attribute:!0})],n.prototype,"interval",2);r([c({type:String,attribute:!0})],n.prototype,"showanimation",2);r([c({type:String,attribute:!0})],n.prototype,"hideanimation",2);r([g({slot:""})],n.prototype,"_slotted_els",2);r([w("#container")],n.prototype,"_container_el",2);n=r([f("aalam-txtloop")],n);export{$ as __vite_legacy_guard};
