!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("collegeDlsUmd",t):(e="undefined"!=typeof globalThis?globalThis:e||self).collegeDlsUmd=t()}(this,function(){let r=new Map;var n=function(e,t,n){r.has(e)||r.set(e,new Map);e=r.get(e);e.has(t)||0===e.size?e.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(e.keys())[0]}.`)},t=function(e,t){return r.has(e)&&r.get(e).get(t)||null},F=function(e,t){var n;r.has(e)&&((n=r.get(e)).delete(t),0===n.size)&&r.delete(e)};let q=1e3,s="transitionend",i=e=>e=e&&window.CSS&&window.CSS.escape?e.replace(/#([^\s"#']+)/g,(e,t)=>"#"+CSS.escape(t)):e,o=e=>!(!e||"object"!=typeof e)&&void 0!==(e=void 0!==e.jquery?e[0]:e).nodeType,l=e=>o(e)?e.jquery?e[0]:e:"string"==typeof e&&0<e.length?document.querySelector(i(e)):null,a=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,u=[];var e=r=>{var e;e=()=>{let n=a();if(n){let e=r.NAME,t=n.fn[e];n.fn[e]=r.jQueryInterface,n.fn[e].Constructor=r,n.fn[e].noConflict=()=>(n.fn[e]=t,r.jQueryInterface)}},"loading"===document.readyState?(u.length||document.addEventListener("DOMContentLoaded",()=>{for(var e of u)e()}),u.push(e)):e()};let c=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,P=(r,i,e=!0)=>{if(e){e=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);var e=Number.parseFloat(t),r=Number.parseFloat(n);return e||r?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*q):0})(i)+5;let t=!1,n=({target:e})=>{e===i&&(t=!0,i.removeEventListener(s,n),c(r))};i.addEventListener(s,n),setTimeout(()=>{t||i.dispatchEvent(new Event(s))},e)}else c(r)},Y=/[^.]*(?=\..*)\.|.*/,K=/\..*/,z=/::\d+$/,g={},f=1,p={mouseenter:"mouseover",mouseleave:"mouseout"},$=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function m(e,t){return t&&t+"::"+f++||e.uidEvent||f++}function A(e){var t=m(e);return e.uidEvent=t,g[t]=g[t]||{},g[t]}function b(e,t,n=null){return Object.values(e).find(e=>e.callable===t&&e.delegationSelector===n)}function E(e,t,n){var r="string"==typeof t,t=!r&&t||n;let i=h(e);return[r,t,i=$.has(i)?i:e]}function d(r,i,s,o,l){if("string"==typeof i&&r){let[e,t,n]=E(i,s,o);i in p&&(t=(a=t,function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return a.call(this,e)}));var a,u,c,g,f,d,o=A(r),o=o[n]||(o[n]={}),h=b(o,t,e?s:null);h?h.oneOff=h.oneOff&&l:(h=m(t,i.replace(Y,"")),(i=e?(g=r,f=s,d=t,function t(n){var r=g.querySelectorAll(f);for(let e=n["target"];e&&e!==this;e=e.parentNode)for(var i of r)if(i===e)return v(n,{delegateTarget:e}),t.oneOff&&_.off(g,n.type,f,d),d.apply(e,[n])}):(u=r,c=t,function e(t){return v(t,{delegateTarget:u}),e.oneOff&&_.off(u,t.type,c),c.apply(u,[t])})).delegationSelector=e?s:null,i.callable=t,i.oneOff=l,o[i.uidEvent=h]=i,r.addEventListener(n,i,e))}}function C(e,t,n,r,i){r=b(t[n],r,i);r&&(e.removeEventListener(n,r,Boolean(i)),delete t[n][r.uidEvent])}function h(e){return e=e.replace(K,""),p[e]||e}let _={on(e,t,n,r){d(e,t,n,r,!1)},one(e,t,n,r){d(e,t,n,r,!0)},off(e,t,n,r){if("string"==typeof t&&e){var i,s,[r,o,l]=E(t,n,r),a=l!==t,u=A(e),c=u[l]||{},g=t.startsWith(".");if(void 0!==o)return Object.keys(c).length?void C(e,u,l,o,r?n:null):void 0;if(g)for(var f of Object.keys(u)){h=d=v=_=b=m=p=void 0;var d,h,p=e,m=u,b=f,_=t.slice(1),v=m[b]||{};for([d,h]of Object.entries(v))d.includes(_)&&C(p,m,b,h.callable,h.delegationSelector)}for([i,s]of Object.entries(c)){var y=i.replace(z,"");a&&!t.includes(y)||C(e,u,l,s.callable,s.delegationSelector)}}},trigger(e,t,n){if("string"!=typeof t||!e)return null;var r=a();let i=null,s=!0,o=!0,l=!1;t!==h(t)&&r&&(i=r.Event(t,n),r(e).trigger(i),s=!i.isPropagationStopped(),o=!i.isImmediatePropagationStopped(),l=i.isDefaultPrevented());r=v(new Event(t,{bubbles:s,cancelable:!0}),n);return l&&r.preventDefault(),o&&e.dispatchEvent(r),r.defaultPrevented&&i&&i.preventDefault(),r}};function v(n,r={}){for(let[e,t]of Object.entries(r))try{n[e]=t}catch{Object.defineProperty(n,e,{configurable:!0,get(){return t}})}return n}function y(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function w(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}let S={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+w(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+w(t))},getDataAttributes(t){if(!t)return{};var n,r={};for(n of Object.keys(t.dataset).filter(e=>e.startsWith("bs")&&!e.startsWith("bsConfig"))){let e=n.replace(/^bs/,"");r[e=e.charAt(0).toLowerCase()+e.slice(1,e.length)]=y(t.dataset[n])}return r},getDataAttribute(e,t){return y(e.getAttribute("data-bs-"+w(t)))}};class B{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){var n=o(t)?S.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...o(t)?S.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(var[n,r]of Object.entries(t)){var i=e[n],i=o(i)?"element":null==(i=i)?""+i:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(r).test(i))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${i}" but expected type "${r}".`)}}}class O extends B{constructor(e,t){super(),(e=l(e))&&(this._element=e,this._config=this._getConfig(t),n(this._element,this.constructor.DATA_KEY,this))}dispose(){F(this._element,this.constructor.DATA_KEY),_.off(this._element,this.constructor.EVENT_KEY);for(var e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){P(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return t(l(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}static eventName(e){return""+e+this.EVENT_KEY}}let T='[data-bs-toggle="button"]';class D extends O{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each(function(){var e=D.getOrCreateInstance(this);"toggle"===t&&e[t]()})}}_.on(document,"click.bs.button.data-api",T,e=>{e.preventDefault();e=e.target.closest(T);D.getOrCreateInstance(e).toggle()}),e(D);let j=t=>{let n=t.getAttribute("data-bs-target");if(!n||"#"===n){let e=t.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e="#"+e.split("#")[1]),n=e&&"#"!==e?e.trim():null}return n?n.split(",").map(e=>i(e)).join(","):null},N={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){var n=[];let r=e.parentNode.closest(t);for(;r;)n.push(r),r=r.parentNode.closest(t);return n},prev(e,t){let n=e.previousElementSibling;for(;n;){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;for(;n;){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){var t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(",");return this.find(t,e).filter(e=>{return!(!(t=e)||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")))&&(e=>{if(!o(e)||0===e.getClientRects().length)return!1;var t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(n&&n!==e){e=e.closest("summary");if(e&&e.parentNode!==n)return!1;if(null===e)return!1}return t})(e);var t})},getSelectorFromElement(e){e=j(e);return e&&N.findOne(e)?e:null},getElementFromSelector(e){e=j(e);return e?N.findOne(e):null},getMultipleElementsFromSelector(e){e=j(e);return e?N.find(e):[]}};let L="show",M="collapse",k="collapsing",x=(M,M,'[data-bs-toggle="collapse"]'),Q={parent:null,toggle:!0},R={parent:"(null|element)",toggle:"boolean"};class I extends O{constructor(e,t){var n;super(e,t),this._isTransitioning=!1,this._triggerArray=[];for(n of N.find(x)){var r=N.getSelectorFromElement(n),i=N.find(r).filter(e=>e===this._element);null!==r&&i.length&&this._triggerArray.push(n)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Q}static get DefaultType(){return R}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(!this._isTransitioning&&!this._isShown()){let t=[];if(!(t=this._config.parent?this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e=>e!==this._element).map(e=>I.getOrCreateInstance(e,{toggle:!1})):t).length||!t[0]._isTransitioning){var n=_.trigger(this._element,"show.bs.collapse");if(!n.defaultPrevented){for(var r of t)r.hide();let e=this._getDimension();this._element.classList.remove(M),this._element.classList.add(k),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;n="scroll"+(e[0].toUpperCase()+e.slice(1));this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(k),this._element.classList.add(M,L),this._element.style[e]="",_.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[e]=this._element[n]+"px"}}}}hide(){if(!this._isTransitioning&&this._isShown()){var e=_.trigger(this._element,"hide.bs.collapse");if(!e.defaultPrevented){var t,e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",this._element.offsetHeight,this._element.classList.add(k),this._element.classList.remove(M,L);for(t of this._triggerArray){var n=N.getElementFromSelector(t);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;this._element.style[e]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(k),this._element.classList.add(M),_.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}}}_isShown(e=this._element){return e.classList.contains(L)}_configAfterMerge(e){return e.toggle=Boolean(e.toggle),e.parent=l(e.parent),e}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){var e;if(this._config.parent)for(e of this._getFirstLevelChildren(x)){var t=N.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(e){let t=N.find(":scope .collapse .collapse",this._config.parent);return N.find(e,this._config.parent).filter(e=>!t.includes(e))}_addAriaAndCollapsedClass(e,t){if(e.length)for(var n of e)n.classList.toggle("collapsed",!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(t){let n={};return"string"==typeof t&&/show|hide/.test(t)&&(n.toggle=!1),this.each(function(){var e=I.getOrCreateInstance(this,n);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}})}}return _.on(document,"click.bs.collapse.data-api",x,function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();for(var t of N.getMultipleElementsFromSelector(this))I.getOrCreateInstance(t,{toggle:!1}).toggle()}),e(I),{Button:D,Collapse:I}});