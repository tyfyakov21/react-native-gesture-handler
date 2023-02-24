"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[1443],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(n),p=l,b=h["".concat(i,".").concat(p)]||h[p]||d[p]||c;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,r=new Array(c);r[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<c;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},57977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s}});var a=n(83117),l=(n(67294),n(3905));const c={},r=void 0,o={unversionedId:"api/gestures/base-gesture-callbacks",id:"api/gestures/base-gesture-callbacks",title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/docs/api/gestures/base-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-callbacks",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,l.kt)("h3",{id:"onbegincallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,l.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,l.kt)("h3",{id:"onstartcallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,l.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,l.kt)("h3",{id:"onendcallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,l.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,l.kt)("h3",{id:"onfinalizecallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,l.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,l.kt)("h3",{id:"ontouchesdowncallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,l.kt)("p",null,"Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,l.kt)("h3",{id:"ontouchesmovecallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,l.kt)("p",null,"Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,l.kt)("h3",{id:"ontouchesupcallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,l.kt)("p",null,"Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,l.kt)("h3",{id:"ontouchescancelledcallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,l.kt)("p",null,"Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}d.isMDXComponent=!0}}]);