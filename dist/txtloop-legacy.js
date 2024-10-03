System.register(["./index-legacy.js","./assets/query-legacy-CILVpPJY.js","./assets/query-assigned-elements-legacy-1pHNcqST.js","./assets/base-legacy-ClOgP1kU.js"],(function(t,e){"use strict";var a,i,s,n,r,o,l;return{setters:[t=>{a=t.n,i=t.t,s=t.s,n=t.i,r=t.x},t=>{o=t.e},t=>{l=t.o},null],execute:function(){var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,h=(a,i,s,n)=>{for(var r,o=n>1?void 0:n?e(i,s):i,l=a.length-1;l>=0;l--)(r=a[l])&&(o=(n?r(i,s,o):r(o))||o);return n&&o&&t(i,s,o),o};let c=class extends s{constructor(){super(),this.interval=3,this.showanimation="name:fade;dur:200",this.hideanimation="name:fade;dur:200",this._timer=null}static get styles(){return n`
        :host {
            display:inline-block;
        }
        #container {
            position:relative;
            display:inline-block;
            white-space:nowrap;
            vertical-align:top;
            align-items:center;
        }
        ::slotted(*){
            display:none;
            position:absolute;
            top:0;
            left:0;
        }
        ::slotted(.show) {
            display:inline-block !important;
            animation: var(--show-animation-name)
            calc(var(--show-animation-dur) ) ease;
            transform-origin: var(--show-tr-origin);
        }
        ::slotted(.hide) {
            display:inline-block !important;
            animation: var(--hide-animation-name)
            calc(var(--hide-animation-dur) ) ease;
            transform-origin: var(--hide-tr-origin);
        }`}render(){return r`<span id="container"> <slot> </slot> </span>`}getKeyFrames(t){return{"show-fade":[{opacity:0},{opacity:1}],"hide-fade":[{opacity:1},{opacity:0}],"show-b2t":[{transform:"translate(0, 100%)",opacity:0},{transform:"translate(0, 0)",opacity:1}],"hide-b2t":[{transform:"translate(0, 0)",opacity:1},{transform:"translate(0, -100%)",opacity:0}],"show-t2b":[{transform:"translate(0, -100%)",opacity:0},{transform:"translate(0, 0)",opacity:1}],"hide-t2b":[{transform:"translate(0,0)",opacity:1},{transform:"translate(0,100%)",opacity:0}],"show-r2l":[{transform:"translate(100%,0)",opacity:0},{transform:"translate(0,0)",opacity:1}],"hide-r2l":[{transform:"translate(0,0)",opacity:1},{transform:"translate(-100%,0)",opacity:0}],"show-l2r":[{transform:"translate(-100%,0)",opacity:0},{transform:"translate(0,0)",opacity:1}],"hide-l2r":[{transform:"translate(0,0)",opacity:1},{transform:"translate(100%,0)",opacity:0}],"show-reveal-b2t":[{transform:"scaleY(0)",opacity:0},{transform:"scaleY(1)",opacity:1}],"hide-reveal-b2t":[{transform:"scaleY(1)",opacity:1},{transform:"scaleY(0)",opacity:0}],"show-reveal-t2b":[{transform:"scaleY(0)",opacity:0},{transform:"scaleY(1)",opacity:1}],"hide-reveal-t2b":[{transform:"scaleY(1)",opacity:1},{transform:"scaleY(0)",opacity:0}],"show-reveal-r2l":[{transform:"scaleX(0)",opacity:0},{transform:"scaleX(1)",opacity:1}],"hide-reveal-r2l":[{transform:"scaleX(1)",opacity:1},{transform:"scaleX(0)",opacity:0}],"show-reveal-l2r":[{transform:"scaleX(0)",opacity:0},{transform:"scaleX(1)",opacity:1}],"hide-reveal-l2r":[{transform:"scaleX(1)",opacity:1},{transform:"scaleX(0)",opacity:0}]}[t]}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",(()=>{this.slotChangedEvent()})),this.animationChange(this.showanimation,"show"),this.animationChange(this.hideanimation,"hide")}attributeChangedCallback(t,e,a){super.attributeChangedCallback(t,e,a),"showanimation"==t?this.animationChange(a,"show"):"hideanimation"==t&&this.animationChange(a,"hide")}animationChange(t,e){const a=this.procAnimationValue(t),i={"reveal-t2b":"top","reveal-b2t":"bottom","reveal-r2l":"right","reveal-l2r":"left"},s={"reveal-t2b":"bottom","reveal-b2t":"top","reveal-r2l":"left","reveal-l2r":"right"};i[a.name]&&(this.style.setProperty("--show-tr-origin",i[a.name]),this.style.setProperty("--hide-tr-origin",s[a.name])),"show"==e?this.show_animation_props={name:`show-${a.name}`,duration:`${a.dur}ms`}:"hide"==e&&(this.hide_animation_props={name:`hide-${a.name}`,duration:`${a.dur}ms`}),this.style.setProperty(`--${e}-animation-name`,`${e}-${a.name}`),this.style.setProperty(`--${e}-animation-dur`,`${a.dur}ms`)}procAnimationValue(t){return t.split(";").map((t=>t.split(":"))).reduce(((t,[e,a])=>(e&&a&&(t[e.trim()]=a.trim()),t)),{})}_showEl(t){t.classList.add("show");const e=t.getBoundingClientRect(),a=this.getKeyFrames(this.show_animation_props.name),i=parseInt(this.show_animation_props.duration);return t.animate(a,{duration:i}).finished.then((()=>{let e=t.getBoundingClientRect().width;parseInt(this._container_el.style.width)>e&&(this._container_el.style.width=`${e}px`)})),e}_hideEl(t){const e=this.getKeyFrames(this.hide_animation_props.name),a=parseInt(this.hide_animation_props.duration);t.classList.add("hide"),t.animate(e,{duration:a}).finished.then((()=>{t.classList.remove("hide")}))}slotChangedEvent(){let t=this._showEl(this._slotted_els[0]);this._active_index=0,this._timer&&clearInterval(this._timer),this._timer=setInterval((()=>{this.switch()}),1e3*this.interval),this.adjustcontainerwidth(0,t)}switch(){let t=(this._active_index+1)%this._slotted_els.length;this.dispatchEvent(new CustomEvent("change",{detail:{showing:t,hiding:this._active_index}}));let e=this._showEl(this._slotted_els[t]);this.adjustcontainerwidth(this._active_index,e),this._slotted_els[this._active_index].classList.remove("show"),this._hideEl(this._slotted_els[this._active_index]),this._active_index=t}adjustcontainerwidth(t,e){let a=this._slotted_els[t].getBoundingClientRect();null!=e&&null!=a&&null!=this._container_el&&(this._container_el.style.width=`${Math.max(e.width,a.width)}px`,this._container_el.style.height=`${Math.max(e.height,a.height)}px`)}};h([a({type:Number,attribute:!0})],c.prototype,"interval",2),h([a({type:String,attribute:!0})],c.prototype,"showanimation",2),h([a({type:String,attribute:!0})],c.prototype,"hideanimation",2),h([l({slot:""})],c.prototype,"_slotted_els",2),h([o("#container")],c.prototype,"_container_el",2),c=h([i("aalam-txtloop")],c)}}}));
