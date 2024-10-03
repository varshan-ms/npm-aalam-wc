System.register(["./index-legacy.js","./assets/style-map-legacy-ZuJKoPGU.js","./assets/state-legacy-D2lZ0iuY.js","./assets/query-legacy-CILVpPJY.js","./assets/query-assigned-elements-legacy-1pHNcqST.js","./assets/utils-legacy-1NLZUWf7.js","./assets/base-legacy-ClOgP1kU.js"],(function(t,e){"use strict";var i,s,h,o,n,r,l,_,d,a;return{setters:[t=>{i=t.n,s=t.t,h=t.s,o=t.i,n=t.x},t=>{r=t.o},t=>{l=t.r},t=>{_=t.e},t=>{d=t.o},t=>{a=t.g},null],execute:function(){var t=Object.defineProperty,e=Object.getOwnPropertyDescriptor,c=(i,s,h,o)=>{for(var n,r=o>1?void 0:o?e(s,h):s,l=i.length-1;l>=0;l--)(n=i[l])&&(r=(o?n(s,h,r):n(r))||r);return o&&r&&t(s,h,r),r};class u{constructor(t,e,i,s){this.start_x=t,this.prev_x=t,this.move_handler=i.bind(e),this.end_handler=s.bind(e),this.moved_x=0,this.direction="",document.addEventListener("mouseup",this.end_handler),document.addEventListener("touchend",this.end_handler),document.addEventListener("mousemove",this.move_handler),document.addEventListener("touchmove",this.move_handler)}destroy(){document.removeEventListener("mouseup",this.end_handler),document.removeEventListener("touchend",this.end_handler),document.removeEventListener("mousemove",this.move_handler),document.removeEventListener("touchmove",this.move_handler)}}let m=class extends h{constructor(){super(),this.loop=!1,this.autoslide=null,this.center=!1,this.sets=!1,this.anchorindex=0,this.noguide=!1,this.gap="xs:0px",this.transition_dur=.3,this._itemgap=[],this.translatex=0,this.showing=!1,this.no_prev=!1,this.no_next=!1,this._mouse_event_data=null,this._animated_queue=[],this._direction="",this._set_items=null,this._autoslide={dur:0,onhover:"pause",timer:null},this._active_attr="data-active-ix",this._guide_els=[],this._coords={},this._coords.rt_ix=this._coords.lt_ix=0}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"gap"==t)this._itemgap=a(i||"",{xs:"0px"},(t=>{try{return CSSStyleValue.parse("padding-left",t),!0}catch(e){}return!1}));else if("autoslide"==t)this._setupAutoSlide(i);else if(("center"==t||"sets"==t||"loop"==t)&&this.slide_items?.length){if(this.sets&&!this.center?this._set_items=this._setupSets():this._set_items=null,"loop"==t&&!this.loop){let t=this.slide_items[this.anchorindex].getBoundingClientRect();for(let i of this.slide_items)i.style.order="";let e=this.slide_items[this.anchorindex].getBoundingClientRect();this.translatex+=t.left-e.left}let e=this.anchorindex;this.anchorindex=-1,this.show(e),this._setupGuides(!0)}}slotChangedEvent(t){let e=t.target?.name;"slide-item"==e?(this.sets&&!this.center&&(this._set_items=this._setupSets()),this._setupGuides(),this._show(0,"L")):"nav-guide-item"==e&&this.slide_items&&this._setupGuides()}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",(t=>{this.slotChangedEvent(t)}))}static get styles(){return o`
:host {position:relative;overflow:hidden;overflow:clip;display:block;}
.__container {display:flex;flex-wrap:nowrap;will-change:transform;position:relative;touch-action:pan-y;}
.__container.__trans {trasition-timing-function: ease;}
.__container > ::slotted(*) {flex:none;box-sizing:border-box;}
.__nav {position:absolute;font-weight:700;font-size:40px;color:rgba(0,0,0,0.5);top:50%;transform:translateY(-50%);cursor:pointer;user-select:none}
.__nav.__prev {left: 0;margin-left:20px;}
.__nav.__next {right: 0;margin-right:20px;}
.__def_guide {margin-right:12px;cursor:pointer}
.__def_guide:last-child {margin-right:0px;}
.__def_guide[data-active-ix="0"] > circle {fill:grey;}
.__guide {position:absolute;bottom:0;margin-bottom:20px;left:0;right:0;text-align:center}`}render(){let t={};null!=this.translatex&&(t.transform=`translateX(${this.translatex}px)`),this.showing&&this.transition_dur&&(t["transition-duration"]=`${this.transition_dur}s`,t["transition-property"]="transform"),this._mouse_event_data&&(t["user-select"]="none");let e=n`${this._itemgap.map((t=>n`@media ${null!=t.ll?`(min-width:${t.ll}px)`:""} ${null!=t.ll&&null!=t.ul?" and ":""} ${null!=t.ul?`(max-width:${t.ul}px)`:""} {
.__container > ::slotted(*) {padding-left: ${t.val};}
.__container {margin-left: -${t.val};}
        }`))}`;return n`
<style>
    ${e}
</style>
<div class="__container ${this._mouse_event_data?"":"__trans"}" style="${r(t)}"
    @dragstart=${this._dragStartEvent}
    @mouseover=${this._autoslide.dur&&"pause"==this._autoslide.onhover?this._stopTimer:null}
    @mouseout=${this._autoslide.dur&&"pause"==this._autoslide.onhover&&!this._mouse_event_data?this._startTimer:null}
    @touchstart=${this._touchStartEvent}
    @mousedown=${this._touchStartEvent}
    @transitionend=${this._animationEndEvent}
    tabindex="-1">
    <slot name="slide-item"></slot>
</div>
<span @click=${this.next} style="display:${this.no_next?"none":"inline-block"}"><slot name="nav-next"><span class="__nav __next">&gt;</span></slot></span>
<span @click=${this.prev} style="display:${this.no_prev?"none":"inline-block"}"><slot name="nav-prev"><span class="__nav __prev">&lt;</span></slot></span>
<div part="nav-guide" style="display:${this.noguide?"none":"block"}" class="__guide" @click=${this._navGuideClickEvent}>
<div style="display:none">
<svg class="__def_guide" height="10px" width="10px" xmlns="http://www.w3.org/2000/svg"><circle r="4.5" cx="5" cy="5" fill="none" stroke="currentColor" /></svg>
</div>
<slot name="nav-guide-item"></slot>
</div>
</div>
`}_setupAutoSlide(t){if(t){let e=t.split(";");for(let t of e){let[e,i]=t.trim().split(":");if(e=e.trim(),i=i.trim(),"dur"==e){let t=parseInt(i,10);Number.isNaN(t)||(this._autoslide.dur=t)}else"onhover"!=e&&("play"!=i&&"pause"!=i||(this._autoslide.onhover=i))}}else this._autoslide.dur=0,this._autoslide.onhover="pause";this._autoslide.dur?this._startTimer():this._autoslide.timer&&this._stopTimer()}_stopTimer(){this._autoslide.timer&&(clearTimeout(this._autoslide.timer),this._autoslide.timer=null)}_startTimer(){this._autoslide.timer&&this._stopTimer(),this._autoslide.dur&&(this._autoslide.timer=setTimeout((()=>(this._autoslide.timer=null,this.next())),this._autoslide.dur))}_getGap(){let t=window.getComputedStyle(this.container_el).marginLeft;return-1*parseInt(t||"0px",10)}_setupSets(){let t=this.clientWidth,e=[0],i=0,s=this._getGap();for(let h=0;h<this.slide_items.length;h++)i+=this.slide_items[h].offsetWidth,i>t+s&&(e.push(h),i=this.slide_items[h].offsetWidth);return e}_setupGuides(t){let e=(this._set_items||this.slide_items).length;if(this.guide_items?.length>1){if(!t)return;let e=this.guide_items.slice(1);for(let t of e)t.remove();this.guide_items[0].removeAttribute(this._active_attr)}if(this._guide_els?.length){for(let t of this._guide_els||[])t.remove();this._guide_els=[]}for(let i=this.guide_items?.length?1:0;i<e;i++)if(this.guide_items?.[0]){let t=this.guide_items[0].cloneNode(!0);this.appendChild(t)}else{let t=this.def_guide_el.cloneNode(!0);this.guide_blk_el.appendChild(t),this._guide_els.push(t)}}_fireEvent(t,e){for(let i of t){let t=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:this.slide_items[i]});this.dispatchEvent(t)}}_updateActive(){let t=this.guide_items?.length?this.guide_items:this._guide_els,e=[],i=[],s=(t,s)=>{let h=this.slide_items[t].getAttribute(this._active_attr);"0"==h&&0!=s?i.push(t):"0"!=h&&0==s&&e.push(t),this.slide_items[t].setAttribute(this._active_attr,`${s}`)};if(!this.sets||this.center)for(let h=0;h<this.slide_items.length;h++)t[h].setAttribute(this._active_attr,""+(h-this.anchorindex)),s(h,h-this.anchorindex);else{let e=(this._set_items?.length||0)-1;for(let i=0;i<(this._set_items?.length||0);i++){t[i].setAttribute(this._active_attr,""+(i-this.anchorindex));for(let t=this._set_items?.[i]||0;t<(i==e?this.slide_items.length:this._set_items?.[i+1]||this.slide_items.length);t++)s(t,i-this.anchorindex)}}this._fireEvent(e,"itemshown"),this._fireEvent(i,"itemhidden")}_setupOrder(t,e){if(!this.loop)return 0;let i=0,s=(0==this._coords.lt_ix?this.slide_items.length:this._coords.lt_ix)-1,h=this.slide_items[e].getBoundingClientRect();for(let n=0;n<this.slide_items.length;n++){let e=this.slide_items[n];"R"==t&&n>=this._coords.lt_ix?e.style.order="-1":"L"==t&&n<s?e.style.order="1":("L"==t&&n==s&&0==n&&"1"==e.style.order&&(i+=e.offsetWidth),e.style.order="")}let o=this.slide_items[e].getBoundingClientRect();return h.left,o.left,h.left-o.left}_getContainerHalfWidth(){return this.clientWidth/2}_getCenterX(){return this._getContainerHalfWidth()+this.getBoundingClientRect().left}_fetchItemsToShow(t,e,i){let s=t,h=this.slide_items.length-1,o=this.slide_items[t].getBoundingClientRect(),n=o.left-e.left-(i||0),r=this._getCenterX(),l=t;if(this.center&&!this._mouse_event_data){let e=this._getContainerHalfWidth(),i=this._getGap();for(e-=(o.right-o.left-i)/2;e>=0;){if(0==t){if(!this.loop)break;t=this.slide_items.length}t-=1,o=this.slide_items[t].getBoundingClientRect(),e-=o.right-o.left}n=e,s=t}let _="R";for(;;){let e=this.slide_items["R"==_?s:t].getBoundingClientRect();if(e.right,e.left,this.center&&e.left<=r&&r<e.right&&(l="R"==_?s:t),this.clientWidth,e.left,e.right,n+=e.right-e.left,n>=this.clientWidth)break;if(s==h)if(this.loop)s=-1;else{if("L"==_&&0==t)break;_="L"}"R"==_?s+=1:"L"==_&&(t-=1)}return{lt_ix:t,rt_ix:s,c_ix:l}}_getLimit(t,e,i){let s=e[i];return{right:t.right-s,left:t.left-s,tleft:t.left-s-this.translatex,tright:t.right-s-this.translatex}}_calcRightLeftIndices(t,e,i){this._coords.rt_ix,this.translatex,this.anchorindex;let s=this._coords.lt_ix,h=this.getBoundingClientRect(),{lt_ix:o,rt_ix:n,c_ix:r}=this._fetchItemsToShow(t,h,i);this._coords.lt_ix=o,this._coords.rt_ix=n,this._coords.c_ix=r;let l=this.loop&&s!=this._coords.lt_ix?this._setupOrder(e,!this.center||this._mouse_event_data?"L"==e?this._coords.lt_ix:this._coords.rt_ix:t):0;l&&this._mouse_event_data&&(this._mouse_event_data.start_x-=l);let _=this.slide_items[this._coords.lt_ix].getBoundingClientRect(),d=this.slide_items[this._coords.rt_ix].getBoundingClientRect(),a=this.slide_items[this._coords.c_ix].getBoundingClientRect(),c={left:h.left,right:h.right,center:this._getCenterX()},u=(t,e)=>this._getLimit(t,c,e);return this._coords.rt_limit=u(d,"right"),this._coords.lt_limit=u(_,"left"),this._coords.c_limit=u(a,"center"),this._direction=e,this._coords.lt_limit.left,this._coords.lt_ix,this._coords.lt_limit.right,this._coords.rt_limit.left,this._coords.rt_ix,this._coords.rt_limit.right,this._coords.lt_limit.tleft,this._coords.lt_ix,this._coords.lt_limit.tright,this._coords.rt_limit.tleft,this._coords.rt_ix,this._coords.rt_limit.tright,this.translatex,l}_dragStartEvent(t){t.preventDefault()}_navGuideClickEvent(t){let e=t.target;for(;e&&"nav-guide-item"!=e.slot&&!e.classList.contains("__def_guide");)e=e.parentElement;if(!e)return;let i=("nav-guide-item"==e.slot?this.guide_items:this._guide_els).indexOf(e);i>=0&&this.show(i)}_touchMoveEvent(t){if(!this._mouse_event_data)return;let e=this.slide_items.length-1,i=null,s=t.touches?t.touches[0].clientX:t.clientX,h=this._mouse_event_data.prev_x>s?"L":this._mouse_event_data.prev_x<s?"R":this._mouse_event_data.direction;if(this.translatex=s-this._mouse_event_data.start_x,this._mouse_event_data.prev_x=s,this._coords.lt_limit.tleft,this._coords.lt_ix,this._coords.lt_limit.tright,this._coords.rt_limit.tleft,this._coords.rt_ix,this._coords.rt_limit.tright,this.translatex,this._mouse_event_data.moved_x,"L"==h?(this._mouse_event_data.direction="L",this._coords.lt_limit.tright+this.translatex<0?this.loop?i=this._coords.lt_ix==e?0:this._coords.lt_ix+1:this._coords.lt_ix<e&&(i=this._coords.lt_ix+1):this._coords.rt_limit.tright+this.translatex<0&&(this.loop||this._coords.rt_ix<e)&&(i=this._coords.lt_ix)):"R"==h&&(this._mouse_event_data.direction="R",(this._coords.lt_limit.tleft+this.translatex>0||this._coords.rt_limit.tleft+this.translatex>0)&&(this.loop?i=0==this._coords.lt_ix?e:this._coords.lt_ix-1:this._coords.lt_ix>0&&(i=this._coords.lt_ix-1))),null!=i){let t=0;if(!this._mouse_event_data)return;if("R"==this._mouse_event_data.direction){let e=this.slide_items[i].getBoundingClientRect(),s=this.getBoundingClientRect();t=e.left-s.left}this.translatex+=this._calcRightLeftIndices(i,this._mouse_event_data.direction,t),this.anchorindex=this.center?this._coords.c_ix:this._coords.lt_ix,this.sets&&(this.anchorindex=this._getSetIndex(this.anchorindex)),this._updateActive()}else if(this.center){let t=!1;if("L"==h&&this._coords.c_limit.tright+this.translatex<0?(this._coords.c_ix=this._coords.c_ix<e?this._coords.c_ix+1:this.loop?0:this._coords.c_ix,t=!0):"R"==h&&this._coords.c_limit.tleft+this.translatex>0&&(this._coords.c_ix=this._coords.c_ix>0?this._coords.c_ix-1:this.loop?e:this._coords.c_ix,t=!0),t){let t=this.slide_items[this._coords.c_ix].getBoundingClientRect(),e=this._getCenterX();this._coords.c_limit=this._getLimit(t,{center:e,left:0,right:0},"center"),this.anchorindex=this._coords.c_ix,this._updateActive()}}}_touchStartEvent(t){let e=t.touches?t.touches[0].clientX:t.clientX;this._mouse_event_data=new u(e-(this.translatex||0),this,this._touchMoveEvent,this._touchEndEvent),this._mouse_event_data.moved_x=0,this.showing=!1,this.translatex+=this._calcRightLeftIndices(this._coords.lt_ix,this._direction)}_getCenterItem(t){let e=this._getCenterX(),i=this._coords.lt_ix;for(;this._coords.lt_ix<=i&&i<=this._coords.rt_ix+(this._coords.lt_ix>this._coords.rt_ix?this.slide_items.length:0);){let s=i%this.slide_items.length,h=this.slide_items[s],o=h.getBoundingClientRect(),n=h.offsetWidth/2+o.left;if(o.left<=e&&e<=o.right){"L"==t&&n<e?i+=1:"R"==t&&n>e&&(i=0==i?this.loop?this.slide_items.length-1:i:i-1);break}if(!this.loop&&("L"==t&&i==this.slide_items.length-1||"R"==t&&0==i))return i;i+=1}let s=i%this.slide_items.length;return"L"==t&&(s=(0==s?this.slide_items.length:s)-1),s}_getSetIndex(t){let e=0;if(!this._set_items)return t;for(let i=this._set_items.length-1;i>=0;i--)if(this._set_items[i]<=t){e=i;break}return e}_recalibrateCoords(t){if(this.loop)return;let e,i,s,h,o,n,r=this.getBoundingClientRect(),l=this._getCenterX(),_=e=>e.right-t,d=e=>e.left-t;for(let c=0;c<this.slide_items.length;c++){let t=this.slide_items[c].getBoundingClientRect();_(t)>r.left&&d(t)<=r.right&&(null==e&&(h=t,e=c),i=c,o=t),d(t)<=l&&l<_(t)&&(s=c,n=t)}let a={left:r.left,right:r.right,center:l};this._coords.lt_ix=e,this._coords.lt_limit=this._getLimit({right:_(h),left:d(h)},a,"left"),this._coords.rt_ix=i,this._coords.rt_limit=this._getLimit({right:_(o),left:d(o)},a,"left"),this._coords.c_ix=s,this._coords.c_limit=this._getLimit({right:_(n),left:d(n)},a,"center")}_touchEndEvent(){if(!this._mouse_event_data)return;let t=this.slide_items.length-1,e=this.translatex,i=this._mouse_event_data.direction,s=this._getGap();if(this._mouse_event_data.destroy(),this._mouse_event_data=null,i&&(this.loop||(this.anchorindex,this._coords.rt_ix,(this.center?this.anchorindex:this._coords.rt_ix)==t&&e<0?(this.showing=!0,requestAnimationFrame((()=>{let i=this.slide_items[t].getBoundingClientRect(),h=this.getBoundingClientRect();if(this.center){let e=h.left+this.clientWidth/2;this.translatex+=e-i.right+(this.slide_items[t].clientWidth-s)/2}else this.translatex+=h.right-i.right;this._recalibrateCoords(e-this.translatex)})),this.anchorindex=(this._set_items||this.slide_items).length-1,this.no_next=!0,this.no_prev=!1):0==(this.center?this.anchorindex:this._coords.lt_ix)&&e>0&&(this.showing=!0,this.center?requestAnimationFrame((()=>{let t=this.slide_items[0].getBoundingClientRect(),i=this.getBoundingClientRect().left+this.clientWidth/2;this.translatex+=i-t.left-(this.slide_items[0].clientWidth+s)/2,this._recalibrateCoords(e-this.translatex)})):(this.translatex=0,this._recalibrateCoords(e-this.translatex)),this.no_next=!1,this.no_prev=!0,this.anchorindex=0),this.showing&&this._updateActive()),this.loop||!this.showing)){let e=this.center?this._getCenterItem(i):this._coords.lt_ix;"R"==i?this._show(this._getSetIndex(e),i):"L"==i&&this._show(this._getSetIndex(e==t?this.loop?0:t:e+1),i)}}next(){if(this.anchorindex,this._set_items){if(this.loop){let t=this.anchorindex==this._set_items.length-1?0:this.anchorindex+1,e=parseInt(this.slide_items[this._set_items[this.anchorindex]].style.order||"0",10);if(parseInt(this.slide_items[this._set_items[t]].style.order||"0",10)<e){let i=0;for(let s=this._set_items[t];s<(t==this._set_items.length-1?this.slide_items.length:this._set_items[t+1]);s++){let t=this.slide_items[s];t.style.order=`${e}`,i+=t.offsetWidth}this.translatex+=i}return this._show(t,"L")}if(this.anchorindex<this._set_items.length-1)return this._show(this.anchorindex+1,"L")}else{if(this.loop)return this._show(this.anchorindex==this.slide_items.length-1?0:this.anchorindex+1,"L");if(this.anchorindex<this.slide_items.length-1)return this._show(this.anchorindex+1,"L")}return null}prev(){if(this.anchorindex,this._set_items){if(this.loop){let t=(0==this.anchorindex?this._set_items.length:this.anchorindex)-1,e=parseInt(this.slide_items[this._set_items[this.anchorindex]].style.order||"0",10);if(e<parseInt(this.slide_items[this._set_items[t]].style.order||"0",10)){let i=0;for(let s=this._set_items[t];s<(this.anchorindex==this._set_items.length-1?this.slide_items.length:this._set_items[this.anchorindex+1]);s++){let t=this.slide_items[s];t.style.order=`${e}`,i+=t.offsetWidth}this.translatex-=i}return this._show(t,"R")}if(this.anchorindex>0)return this._show(this.anchorindex-1,"R")}else{if(this.loop)return this._show((0==this.anchorindex?this.slide_items.length:this.anchorindex)-1,"R");if(this.anchorindex>0)return this._show(this.anchorindex-1,"R")}return null}_animationEndEvent(){this._animated_queue.shift(),0==this._animated_queue.length&&(this.showing=!1)}_show(t,e){return new Promise((i=>{let s=this._getGap(),h=this.getBoundingClientRect(),o=this.slide_items.length-1,n=t;this.anchorindex=t,this._set_items&&(n=t=this._set_items[t]),this.showing&&(this._animated_queue=[],this.showing=!1),!this.loop&&"R"==e&&t>this._coords.lt_ix&&!this.center&&(t=this._coords.lt_ix),n=t,this.no_next=this.no_prev=!1,this.loop||(this.anchorindex==(this._set_items||this.slide_items).length-1&&(this.no_next=!0),0==this.anchorindex&&(this.no_prev=!0),this.center||("L"==e&&this._coords.rt_ix==o&&this._coords.lt_limit.right>this._coords.rt_limit.right?(n=this._coords.lt_ix,this._coords.no_next=!0):"R"==e&&0==this._coords.lt_ix&&(n=0),"R"==e&&this.anchorindex>n&&(this.anchorindex=n))),this._coords.lt_ix,requestAnimationFrame((()=>{let r=this.slide_items[n].getBoundingClientRect(),l=this._calcRightLeftIndices(n,e,n!=this._coords.lt_ix?r.left-h.left:0);this.translatex+=l,this._animated_queue.push({direction:e}),requestAnimationFrame((()=>{let r=this.slide_items[this.center?n:t].getBoundingClientRect(),l=this.center?(h.right-h.left)/2-this.slide_items[t].offsetWidth/2+h.left-r.left-s/2:h.left-s-r.left;this.loop||this.center||("L"==e&&this._coords.rt_ix==o?l=Math.max(l,0-this._coords.rt_limit.right):"R"==e&&0==this._coords.lt_ix&&(l=Math.max(l,0)));let _=t=>{t.left=t.left+l,t.right=t.right+l,t.tleft=t.tleft+l,t.tright=t.tright+l};l&&(this.translatex+=l,this.showing=!0,_(this._coords.lt_limit),_(this._coords.rt_limit),_(this._coords.c_limit)),this._updateActive(),this._startTimer(),i(0)}))}))}))}show(t){if(!(t>(this._set_items||this.slide_items).length-1)&&t!=this.anchorindex)return this._show(t,t>this.anchorindex?"L":"R")}};c([i({type:Boolean,attribute:!0,reflect:!0})],m.prototype,"loop",2),c([i({type:String,reflect:!0})],m.prototype,"autoslide",2),c([i({type:Boolean,reflect:!0})],m.prototype,"center",2),c([i({type:Boolean,reflect:!0})],m.prototype,"sets",2),c([i({type:Number})],m.prototype,"anchorindex",2),c([i({type:Boolean,reflect:!0})],m.prototype,"noguide",2),c([i({type:String,attribute:!0,reflect:!0})],m.prototype,"gap",2),c([i({type:Number,reflect:!1,attribute:!1})],m.prototype,"transition_dur",2),c([d({slot:"slide-item"})],m.prototype,"slide_items",2),c([d({slot:"nav-guide-item"})],m.prototype,"guide_items",2),c([_(".__container")],m.prototype,"container_el",2),c([_(".__guide")],m.prototype,"guide_blk_el",2),c([_(".__def_guide")],m.prototype,"def_guide_el",2),c([l()],m.prototype,"_itemgap",2),c([l()],m.prototype,"translatex",2),c([l()],m.prototype,"showing",2),c([l()],m.prototype,"no_prev",2),c([l()],m.prototype,"no_next",2),c([
/**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
function(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}({passive:!0})],m.prototype,"_touchStartEvent",1),m=c([s("aalam-slider")],m)}}}));
