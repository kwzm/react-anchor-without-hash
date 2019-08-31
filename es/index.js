import t from"react";import e from"prop-types";var n=process.env.NODE_ENV,r=function(t,e,r,o,i,s,a,c){if("production"!==n&&void 0===e)throw new Error("invariant requires an error message argument");if(!t){var h;if(void 0===e)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,s,a,c],u=0;(h=new Error(e.replace(/%s/g,function(){return l[u++]}))).name="Invariant Violation"}throw h.framesToPop=1,h}},o={};try{!function(t,e){if("+"!==new t("q=%2B").get("q")||"+"!==new t({q:"+"}).get("q")||"+"!==new t([["q","+"]]).get("q")||"q=%0A"!==new t("q=\n").toString()||"q=+%26"!==new t({q:" &"}).toString())throw t;o.URLSearchParams=t}(URLSearchParams)}catch(t){!function(t,e,n){var r=t.create,i=t.defineProperty,s=/[!'\(\)~]|%20|%00/g,a=/\+/g,c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},h={append:function(t,e){p(this._ungap,t,e)},delete:function(t){delete this._ungap[t]},get:function(t){return this.has(t)?this._ungap[t][0]:null},getAll:function(t){return this.has(t)?this._ungap[t].slice(0):[]},has:function(t){return t in this._ungap},set:function(t,n){this._ungap[t]=[e(n)]},forEach:function(t,n){var r=this;for(var o in r._ungap)r._ungap[o].forEach(i,o);function i(i){t.call(n,i,e(o),r)}},toJSON:function(){return{}},toString:function(){var t=[];for(var e in this._ungap)for(var n=g(e),r=0,o=this._ungap[e];r<o.length;r++)t.push(n+"="+g(o[r]));return t.join("&")}};for(var l in h)i(u.prototype,l,{configurable:!0,writable:!0,value:h[l]});function u(t){var e=r(null);switch(i(this,"_ungap",{value:e}),!0){case!t:break;case"string"==typeof t:"?"===t.charAt(0)&&(t=t.slice(1));for(var o=t.split("&"),s=0,a=o.length;s<a;s++){var c=(h=o[s]).indexOf("=");-1<c?p(e,d(h.slice(0,c)),d(h.slice(c+1))):h.length&&p(e,d(h),"")}break;case n(t):for(s=0,a=t.length;s<a;s++){var h;p(e,(h=t[s])[0],h[1])}break;case"forEach"in t:t.forEach(f,e);break;default:for(var l in t)p(e,l,t[l])}}function f(t,e){p(this,e,t)}function p(t,e,r){var o=n(r)?r.join(","):r;e in t?t[e].push(o):t[e]=[o]}function d(t){return decodeURIComponent(t.replace(a," "))}function g(t){return encodeURIComponent(t).replace(s,m)}function m(t){return c[t]}o.URLSearchParams=u}(Object,String,Array.isArray)}!function(t){var e=!1;try{e=!!Symbol.iterator}catch(t){}function n(t,n){var r=[];return t.forEach(n,r),e?r[Symbol.iterator]():{next:function(){var t=r.shift();return{done:void 0===t,value:t}}}}"forEach"in t||(t.forEach=function(t,e){var n=this,r=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(o){!o.length||o in r||(r[o]=n.getAll(o)).forEach(function(r){t.call(e,r,o,n)})})}),"keys"in t||(t.keys=function(){return n(this,function(t,e){this.push(e)})}),"values"in t||(t.values=function(){return n(this,function(t,e){this.push(t)})}),"entries"in t||(t.entries=function(){return n(this,function(t,e){this.push([e,t])})}),!e||Symbol.iterator in t||(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,e,n,r=this.entries(),o=r.next(),i=o.done,s=[],a=Object.create(null);!i;)e=(n=o.value)[0],s.push(e),e in a||(a[e]=[]),a[e].push(n[1]),i=(o=r.next()).done;for(s.sort(),t=0;t<s.length;t++)this.delete(s[t]);for(t=0;t<s.length;t++)e=s[t],this.append(e,a[e].shift())}),function(e){var n=e.defineProperty,r=e.getOwnPropertyDescriptor,o=function(e){var n=e.append;e.append=t.append,URLSearchParams.call(e,e._usp.search.slice(1)),e.append=n},i=function(t,e){if(!(t instanceof e))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+e.name)},s=function(s){var a,c,h=s.prototype,l=r(h,"searchParams"),u=r(h,"href"),f=r(h,"search");!l&&f&&f.set&&(c=function(e){function r(n,r){t.append.call(this,n,r),n=this.toString(),e.set.call(this._usp,n?"?"+n:"")}function o(n){t.delete.call(this,n),n=this.toString(),e.set.call(this._usp,n?"?"+n:"")}function i(n,r){t.set.call(this,n,r),n=this.toString(),e.set.call(this._usp,n?"?"+n:"")}return function(t,e){return t.append=r,t.delete=o,t.set=i,n(t,"_usp",{configurable:!0,writable:!0,value:e})}}(f),a=function(t,e){return n(t,"_searchParams",{configurable:!0,writable:!0,value:c(e,t)}),e},e.defineProperties(h,{href:{get:function(){return u.get.call(this)},set:function(t){var e=this._searchParams;u.set.call(this,t),e&&o(e)}},search:{get:function(){return f.get.call(this)},set:function(t){var e=this._searchParams;f.set.call(this,t),e&&o(e)}},searchParams:{get:function(){return i(this,s),this._searchParams||a(this,new URLSearchParams(this.search.slice(1)))},set:function(t){i(this,s),a(this,t)}}}))};try{s(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&s(URL)}catch(t){}}(Object)}(o.URLSearchParams.prototype);var i=o.URLSearchParams;const s=t=>{return new i((()=>{const{location:t}=window,e=t.href.split("?")[1];if(e)return`?${e}`})()).get(t)},a=t=>"[object Number]"===Object.prototype.toString.call(t)&&!isNaN(t),c=t=>{document.documentElement.scrollTop=t,window.pageYOffset=t,document.body.scrollTop=t},h="scrollIntoView",l="scrollTop";class u extends t.Component{constructor(e){super(e),this.anchorRef=t.createRef(),this.handleHashChange=this.handleHashChange.bind(this),this.scroll=this.scroll.bind(this),this.scrollIntoView=this.scrollIntoView.bind(this),this.scrollTop=this.scrollTop.bind(this)}componentDidMount(){const{anchorKey:t}=this.props;s(t)&&this.scroll(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.addEventListener("hashchange",this.handleHashChange)}componentWillUnmount(){"scrollRestoration"in history&&(history.scrollRestoration="auto"),window.removeEventListener("hashchange",this.handleHashChange)}handleHashChange(){this.scroll()}scroll(){const{type:t}=this.props;t===h&&this.scrollIntoView(),t===l&&this.scrollTop()}scrollIntoView(){const{name:t,anchorKey:e,scrollIntoViewOption:n}=this.props;if(t===s(e)){const t=this.anchorRef.current;t.scrollIntoView&&setTimeout(()=>{t.scrollIntoView(n)},0)}}scrollTop(){const{name:t,anchorKey:e,container:n,interval:o}=this.props;if(t===s(e)){r(a(o),"interval must be a number");const t=this.anchorRef.current.offsetTop+Number(o);if(n){const e=document.querySelector(n);r(e,"container can't match any element"),setTimeout(()=>{e.scrollTop=t},0)}else setTimeout(()=>{c(t)},0)}}render(){const{children:e}=this.props;return t.createElement("div",{ref:this.anchorRef},e)}}u.defaultProps={anchorKey:"_to",type:h,scrollIntoViewOption:!0,interval:0},u.protoTypes={anchorKey:e.string,type:e.oneOf([h,l]),scrollIntoViewOption:e.oneOf([e.bool,e.object]),container:e.string,interval:e.number};export default u;
