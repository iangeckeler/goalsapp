!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var a=React.createElement,f=n(1);axios.get("/getData").then(function(e){console.log(e)});var s=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=i(this,l(t).call(this,e))).state={stakephone:"",temp:"",items:[]},n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,React.Component),n=t,(r=[{key:"onClick",value:function(){var e=this;event.preventDefault(),this.setState(function(t){return{temp:"",items:o(t.items).concat([e.state.temp])}})}},{key:"onChange",value:function(e){this.setState({temp:e.target.value})}},{key:"save",value:function(){event.preventDefault(),console.log(this.state.items),console.log(this.state.stakephone);var e={stakephone:this.state.stakephone,body:this.state.items};axios({url:"/sendData",method:"post",data:e,headers:{"Content-Type":"application/json"}}).then(function(e){})}},{key:"render",value:function(){var e=this;return a("div",null,[a("form",{onSubmit:function(e){e.preventDefault()}},[a("input",{placeholder:"stakephone",onChange:function(t){e.setState({stakephone:t.target.value})}})]),a("form",null,[a(f,{items:this.state.items}),a("input",{value:this.state.temp,onChange:this.onChange.bind(this)}),a("button",{onClick:this.onClick.bind(this)},"Add New"),a("button",{onClick:this.save.bind(this)},"Save")])])}}])&&u(n.prototype,r),s&&u(n,s),t}();ReactDOM.render(a(s),document.getElementById("fruit-list"))},function(e,t,n){var r=n(2).createElement;e.exports=function(e){return r("ul",null,[e.items.map(function(e,t){return r("li",{key:t},e)})])}},function(e,t,n){"use strict";e.exports=n(3)},function(e,t,n){"use strict";
/** @license React v16.6.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(4),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,u,i,l],a=0;(e=Error(t.replace(/%s/g,function(){return c[a++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S={};function _(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}function j(){}function O(e,t,n){this.props=e,this.context=t,this.refs=S,this.updater=n||g}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=_.prototype;var w=O.prototype=new j;w.constructor=O,r(w,_.prototype),w.isPureReactComponent=!0;var k={current:null,currentDispatcher:null},P=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r=void 0,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:u,type:e,key:i,ref:l,props:o,_owner:k.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,R=[];function A(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function M(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return r(o,t,""===n?"."+D(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var a=0;a<t.length;a++){var f=n+D(l=t[a],a);c+=e(l,f,r,o)}else if(f=null===t||"object"!=typeof t?null:"function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),a=0;!(l=t.next()).done;)c+=e(l=l.value,f=n+D(l,a++),r,o);else"object"===l&&h("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,function(e){return e}):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(E,"$&/")+"/"),M(e,q,t=A(t,u,r,o)),T(t)}var N={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;M(e,I,t=A(null,null,t,n)),T(t)},count:function(e){return M(e,function(){return null},null)},toArray:function(e){var t=[];return U(e,t,null,function(e){return e}),t},only:function(e){return $(e)||h("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},Fragment:l,StrictMode:c,Suspense:d,createElement:C,cloneElement:function(e,t,n){null==e&&h("267",e);var o=void 0,i=r({},e.props),l=e.key,c=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,a=k.current),void 0!==t.key&&(l=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)P.call(t,o)&&!x.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];i.children=f}return{$$typeof:u,type:e.type,key:l,ref:c,props:i,_owner:a}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.6.3",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:k,assign:r}};N.unstable_ConcurrentMode=p,N.unstable_Profiler=a;var F={default:N},V=F&&N||F;e.exports=V.default||V},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in n=Object(arguments[c]))o.call(n,a)&&(l[a]=n[a]);if(r){i=r(n);for(var f=0;f<i.length;f++)u.call(n,i[f])&&(l[i[f]]=n[i[f]])}}return l}}]);