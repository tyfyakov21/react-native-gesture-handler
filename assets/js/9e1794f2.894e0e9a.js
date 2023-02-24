"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[3130],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905));const i={id:"states-events",title:"Gesture states & events",sidebar_label:"Gesture states & events"},o=void 0,l={unversionedId:"under-the-hood/states-events",id:"version-2.3.0/under-the-hood/states-events",title:"Gesture states & events",description:'Every gesture can be treated as "state machine".',source:"@site/versioned_docs/version-2.3.0/under-the-hood/states-events.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/states-events",permalink:"/react-native-gesture-handler/docs/2.3.0/under-the-hood/states-events",draft:!1,tags:[],version:"2.3.0",frontMatter:{id:"states-events",title:"Gesture states & events",sidebar_label:"Gesture states & events"},sidebar:"version-2.3.0/docs",previous:{title:"Manual gestures",permalink:"/react-native-gesture-handler/docs/2.3.0/manual-gestures/"},next:{title:"About Gesture Handlers",permalink:"/react-native-gesture-handler/docs/2.3.0/gesture-handlers/basics/about-handlers"}},s={},p=[{value:"State flows",id:"state-flows",level:2},{value:"Events",id:"events",level:2},{value:"<code>onBegin</code>",id:"onbegin",level:3},{value:"<code>onStart</code>",id:"onstart",level:3},{value:"<code>onEnd</code>",id:"onend",level:3},{value:"<code>onFinalize</code>",id:"onfinalize",level:3},{value:"<code>onUpdate</code>",id:"onupdate",level:3},{value:"<code>onPointerDown</code>",id:"onpointerdown",level:3},{value:"<code>onPointerMove</code>",id:"onpointermove",level:3},{value:"<code>onPointerUp</code>",id:"onpointerup",level:3},{value:"<code>onPointerCancelled</code>",id:"onpointercancelled",level:3},{value:"<code>onPointerChange</code>",id:"onpointerchange",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every gesture can be treated as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Finite-state_machine"},'"state machine"'),".\nAt any given time, each handler instance has an assigned state that can change when new touch events occur or can be forced to change by the touch system in certain circumstances."),(0,r.kt)("p",null,"A gesture can be in one of the six possible states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"undetermined"},"UNDETERMINED"),(0,r.kt)("p",{parentName:"li"},"This is the initial state of each gesture recognizer and it goes into this state after it's done recognizing a gesture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"failed"},"FAILED"),(0,r.kt)("p",{parentName:"li"},"A gesture recognizer received some touches but for some reason didn't recognize them. For example, if a finger travels more distance than a defined ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDist")," property allows, then the gesture won't become active but will fail instead. Afterwards, it's state will be reset to ",(0,r.kt)("inlineCode",{parentName:"p"},"UNDETERMINED"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"began"},"BEGAN"),(0,r.kt)("p",{parentName:"li"},"Gesture recognizer has started receiving touch stream but hasn't yet received enough data to either ",(0,r.kt)("a",{parentName:"p",href:"#failed"},"fail")," or ",(0,r.kt)("a",{parentName:"p",href:"#active"},"activate"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"cancelled"},"CANCELLED"),(0,r.kt)("p",{parentName:"li"},"The gesture recognizer has received a signal (possibly new touches or a command from the touch system controller) resulting in the cancellation of a continuous gesture. The gesture's state will become ",(0,r.kt)("inlineCode",{parentName:"p"},"CANCELLED")," until it is finally reset to the initial state, ",(0,r.kt)("inlineCode",{parentName:"p"},"UNDETERMINED"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"active"},"ACTIVE"),(0,r.kt)("p",{parentName:"li"},"Recognizer has recognized a gesture. It will become and stay in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACTIVE")," state until the gesture finishes (e.g. when user lifts the finger) or gets cancelled by the touch system. Under normal circumstances the state will then turn into ",(0,r.kt)("inlineCode",{parentName:"p"},"END"),". In the case that a gesture is cancelled by the touch system, its state would then become ",(0,r.kt)("inlineCode",{parentName:"p"},"CANCELLED"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"end"},"END"),(0,r.kt)("p",{parentName:"li"},"The gesture recognizer has received touches signalling the end of a gesture. Its state will become ",(0,r.kt)("inlineCode",{parentName:"p"},"END")," until it is reset to ",(0,r.kt)("inlineCode",{parentName:"p"},"UNDETERMINED"),"."))),(0,r.kt)("h2",{id:"state-flows"},"State flows"),(0,r.kt)("p",null,"The most typical flow of state is when a gesture picks up on an initial touch event, then recognizes it, then acknowledges its ending and resets itself back to the initial state."),(0,r.kt)("p",null,"The flow looks as follows (longer arrows represent that there are possibly more touch events received before the state changes):"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#undetermined"},(0,r.kt)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",(0,r.kt)("a",{parentName:"p",href:"#began"},(0,r.kt)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",(0,r.kt)("a",{parentName:"p",href:"#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," ------\x3e ",(0,r.kt)("a",{parentName:"p",href:"#end"},(0,r.kt)("inlineCode",{parentName:"a"},"END"))," -> ",(0,r.kt)("a",{parentName:"p",href:"#undetermined"},(0,r.kt)("inlineCode",{parentName:"a"},"UNDETERMINED"))),(0,r.kt)("p",null,"Another possible flow is when a handler receives touches that cause a recognition failure:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#undetermined"},(0,r.kt)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",(0,r.kt)("a",{parentName:"p",href:"#began"},(0,r.kt)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",(0,r.kt)("a",{parentName:"p",href:"#failed"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILED"))," -> ",(0,r.kt)("a",{parentName:"p",href:"#undetermined"},(0,r.kt)("inlineCode",{parentName:"a"},"UNDETERMINED"))),(0,r.kt)("p",null,"At last, when a handler does properly recognize the gesture but then is interrupted by the touch system the gesture recognition is canceled and the flow looks as follows:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#undetermined"},(0,r.kt)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",(0,r.kt)("a",{parentName:"p",href:"#began"},(0,r.kt)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",(0,r.kt)("a",{parentName:"p",href:"#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," ------\x3e ",(0,r.kt)("a",{parentName:"p",href:"#cancelled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," -> ",(0,r.kt)("a",{parentName:"p",href:"#undetermined"},(0,r.kt)("inlineCode",{parentName:"a"},"UNDETERMINED"))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"There are three types of events in RNGH2: ",(0,r.kt)("inlineCode",{parentName:"p"},"StateChangeEvent"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureEvent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PointerEvent"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"StateChangeEvent")," is send every time a gesture moves to a different state, while ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureEvent")," is send every time a gesture is updated. The first two carry a gesture-specific data and a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," property, indicating the current state of the gesture. ",(0,r.kt)("inlineCode",{parentName:"p"},"StateChangeEvent")," also carries a ",(0,r.kt)("inlineCode",{parentName:"p"},"oldState")," property indicating the previous state of the gesture. ",(0,r.kt)("inlineCode",{parentName:"p"},"PointerEvent")," carries information about raw touch events, like touching the screen or moving the finger. These events are handled internally before they are passed along to the correct callbacks:"),(0,r.kt)("h3",{id:"onbegin"},(0,r.kt)("inlineCode",{parentName:"h3"},"onBegin")),(0,r.kt)("p",null,"Is called when a gesture transitions to the ",(0,r.kt)("a",{parentName:"p",href:"#began"},(0,r.kt)("inlineCode",{parentName:"a"},"BEGAN"))," state."),(0,r.kt)("h3",{id:"onstart"},(0,r.kt)("inlineCode",{parentName:"h3"},"onStart")),(0,r.kt)("p",null,"Is called when a gesture transitions to the ",(0,r.kt)("a",{parentName:"p",href:"#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," state."),(0,r.kt)("h3",{id:"onend"},(0,r.kt)("inlineCode",{parentName:"h3"},"onEnd")),(0,r.kt)("p",null,"Is called when a gesture transitions from the ",(0,r.kt)("a",{parentName:"p",href:"#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," state to the ",(0,r.kt)("a",{parentName:"p",href:"#end"},(0,r.kt)("inlineCode",{parentName:"a"},"END")),", ",(0,r.kt)("a",{parentName:"p",href:"#failed"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILED")),", or ",(0,r.kt)("a",{parentName:"p",href:"#cancelled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," state. If the gesture transitions to the ",(0,r.kt)("a",{parentName:"p",href:"#end"},(0,r.kt)("inlineCode",{parentName:"a"},"END"))," state, the ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," argument is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," otherwise it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h3",{id:"onfinalize"},(0,r.kt)("inlineCode",{parentName:"h3"},"onFinalize")),(0,r.kt)("p",null,"Is called when a gesture transitions to the ",(0,r.kt)("a",{parentName:"p",href:"#end"},(0,r.kt)("inlineCode",{parentName:"a"},"END")),", ",(0,r.kt)("a",{parentName:"p",href:"#failed"},(0,r.kt)("inlineCode",{parentName:"a"},"FAILED")),", or ",(0,r.kt)("a",{parentName:"p",href:"#cancelled"},(0,r.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," state. If the gesture transitions to the ",(0,r.kt)("a",{parentName:"p",href:"#end"},(0,r.kt)("inlineCode",{parentName:"a"},"END"))," state, the ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," argument is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," otherwise it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If the gesture transitions from the ",(0,r.kt)("a",{parentName:"p",href:"#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," state, it will be called after ",(0,r.kt)("inlineCode",{parentName:"p"},"onEnd"),"."),(0,r.kt)("h3",{id:"onupdate"},(0,r.kt)("inlineCode",{parentName:"h3"},"onUpdate")),(0,r.kt)("p",null,"Is called every time a gesture is updated while it is in the ",(0,r.kt)("a",{parentName:"p",href:"#active"},(0,r.kt)("inlineCode",{parentName:"a"},"ACTIVE"))," state."),(0,r.kt)("h3",{id:"onpointerdown"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPointerDown")),(0,r.kt)("p",null,"Is called when new pointers are placed on the screen. It may carry information about more than one pointer because the events are batched."),(0,r.kt)("h3",{id:"onpointermove"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPointerMove")),(0,r.kt)("p",null,"Is called when pointers are moved on the screen. It may carry information about more than one pointer because the events are batched."),(0,r.kt)("h3",{id:"onpointerup"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPointerUp")),(0,r.kt)("p",null,"Is called when pointers are lifted from the screen. It may carry information about more than one pointer because the events are batched."),(0,r.kt)("h3",{id:"onpointercancelled"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPointerCancelled")),(0,r.kt)("p",null,"Is called when there will be no more information about this pointer. It may be called because the gesture has ended or was interrupted. It may carry information about more than one pointer because the events are batched."),(0,r.kt)("h3",{id:"onpointerchange"},(0,r.kt)("inlineCode",{parentName:"h3"},"onPointerChange")),(0,r.kt)("p",null,"Is called before ",(0,r.kt)("inlineCode",{parentName:"p"},"onPointerDown"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onPointerMove"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onPointerUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"onPointerCancelled")," with the same event, which may be useful in case you share logic between them. It may carry information about more than one pointer because the events are batched."))}c.isMDXComponent=!0}}]);