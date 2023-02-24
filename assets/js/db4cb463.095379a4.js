"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[805,5558,7207,3314,9040,1915],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"version-2.4.0/api/gestures/base-continous-gesture-callbacks",title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/versioned_docs/version-2.4.0/api/gestures/base-continous-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/base-continous-gesture-callbacks",draft:!1,tags:[],version:"2.4.0",frontMatter:{}},l={},c=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",level:3},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",level:3},{value:"<code>onChange(callback)</code>",id:"onchangecallback",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),(0,o.kt)("h3",{id:"onupdatecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),(0,o.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active."),(0,o.kt)("h3",{id:"onchangecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onChange(callback)")),(0,o.kt)("p",null,"Set the callback that is being called every time the gesture receives an update while it's active. This callback will receive information about change in value in relation to the last received event."))}d.isMDXComponent=!0},64190:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api/gestures/base-continous-gesture-config",id:"version-2.4.0/api/gestures/base-continous-gesture-config",title:"base-continous-gesture-config",description:"Properties common to all continous gestures:",source:"@site/versioned_docs/version-2.4.0/api/gestures/base-continous-gesture-config.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-continous-gesture-config",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/base-continous-gesture-config",draft:!1,tags:[],version:"2.4.0",frontMatter:{}},l={},c=[{value:"Properties common to all continous gestures:",id:"properties-common-to-all-continous-gestures",level:3},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties-common-to-all-continous-gestures"},"Properties common to all continous gestures:"),(0,o.kt)("h3",{id:"manualactivationvalue-boolead"},(0,o.kt)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/state-manager"},"state manager"),"."))}d.isMDXComponent=!0},71847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api/gestures/base-gesture-callbacks",id:"version-2.4.0/api/gestures/base-gesture-callbacks",title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/versioned_docs/version-2.4.0/api/gestures/base-gesture-callbacks.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/base-gesture-callbacks",draft:!1,tags:[],version:"2.4.0",frontMatter:{}},l={},c=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",level:3},{value:"<code>onBegin(callback)</code>",id:"onbegincallback",level:3},{value:"<code>onStart(callback)</code>",id:"onstartcallback",level:3},{value:"<code>onEnd(callback)</code>",id:"onendcallback",level:3},{value:"<code>onFinalize(callback)</code>",id:"onfinalizecallback",level:3},{value:"<code>onTouchesDown(callback)</code>",id:"ontouchesdowncallback",level:3},{value:"<code>onTouchesMove(callback)</code>",id:"ontouchesmovecallback",level:3},{value:"<code>onTouchesUp(callback)</code>",id:"ontouchesupcallback",level:3},{value:"<code>onTouchesCancelled(callback)</code>",id:"ontouchescancelledcallback",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),(0,o.kt)("h3",{id:"onbegincallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onBegin(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when given gesture handler starts receiving touches. At the moment of this callback the handler is not yet in an active state and we don't know yet if it will recognize the gesture at all."),(0,o.kt)("h3",{id:"onstartcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onStart(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when the gesture is recognized by the handler and it transitions to the active state."),(0,o.kt)("h3",{id:"onendcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onEnd(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when the gesture that was recognized by the handler finishes. It will be called only if the handler was previously in the active state."),(0,o.kt)("h3",{id:"onfinalizecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onFinalize(callback)")),(0,o.kt)("p",null,"Set the callback that is being called when the handler finalizes handling gesture - the gesture was recognized and has finished or it failed to recognize."),(0,o.kt)("h3",{id:"ontouchesdowncallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesDown(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),(0,o.kt)("h3",{id:"ontouchesmovecallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesMove(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),(0,o.kt)("h3",{id:"ontouchesupcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesUp(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),(0,o.kt)("h3",{id:"ontouchescancelledcallback"},(0,o.kt)("inlineCode",{parentName:"h3"},"onTouchesCancelled(callback)")),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."))}d.isMDXComponent=!0},85237:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api/gestures/base-gesture-config",id:"version-2.4.0/api/gestures/base-gesture-config",title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/versioned_docs/version-2.4.0/api/gestures/base-gesture-config.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/base-gesture-config",draft:!1,tags:[],version:"2.4.0",frontMatter:{}},l={},c=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",level:3},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",level:3},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",level:3},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",level:3},{value:"<code>withRef(ref)</code>",id:"withrefref",level:3},{value:"<code>withTestId(testID)</code>",id:"withtestidtestid",level:3},{value:"<code>cancelsTouchesInView(value)</code> (<strong>iOS only</strong>)",id:"cancelstouchesinviewvalue-ios-only",level:3},{value:"<code>runOnJS(value: boolean)</code>",id:"runonjsvalue-boolean",level:3},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",level:3},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),(0,o.kt)("h3",{id:"enabledvalue-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),(0,o.kt)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",(0,o.kt)("strong",{parentName:"p"},"never")," become ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#active"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#failed"},(0,o.kt)("inlineCode",{parentName:"a"},"FAILED"))," or ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#cancelled"},(0,o.kt)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," the handler will ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#cancelled"},"cancel")," or ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#failed"},"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," except for the ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/long-press-gesture"},(0,o.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/tap-gesture"},(0,o.kt)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"hitslopsettings"},(0,o.kt)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),(0,o.kt)("p",null,"This parameter enables control over what part of the connected view area can be used to ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#began"},"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),(0,o.kt)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"right"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",(0,o.kt)("inlineCode",{parentName:"p"},"right")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," is provided only ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",(0,o.kt)("inlineCode",{parentName:"p"},"left: 0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/view.html#props"},"hitSlop")," property."),(0,o.kt)("h3",{id:"withrefref"},(0,o.kt)("inlineCode",{parentName:"h3"},"withRef(ref)")),(0,o.kt)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old\nAPI."),(0,o.kt)("h3",{id:"withtestidtestid"},(0,o.kt)("inlineCode",{parentName:"h3"},"withTestId(testID)")),(0,o.kt)("p",null,"Sets a ",(0,o.kt)("inlineCode",{parentName:"p"},"testID")," property for gesture object, allowing for querying for it in tests."),(0,o.kt)("h3",{id:"cancelstouchesinviewvalue-ios-only"},(0,o.kt)("inlineCode",{parentName:"h3"},"cancelsTouchesInView(value)")," (",(0,o.kt)("strong",{parentName:"h3"},"iOS only"),")"),(0,o.kt)("p",null,"Accepts a boolean value.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the gesture will cancel touches for native UI components (",(0,o.kt)("inlineCode",{parentName:"p"},"UIButton"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UISwitch"),", etc) it's attached to when it becomes ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#active"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTIVE")),".\nDefault value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"runonjsvalue-boolean"},(0,o.kt)("inlineCode",{parentName:"h3"},"runOnJS(value: boolean)")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is installed, the callbacks passed to the gestures are automatically workletized and run on the UI thread when called. This option allows for changing this behavior: when ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", all the callbacks will be run on the JS thread instead of the UI thread, regardless of whether they are worklets or not.\nDefaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},(0,o.kt)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),(0,o.kt)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,o.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),". ",(0,o.kt)("a",{parentName:"p",href:"gesture-detector"},(0,o.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),(0,o.kt)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},(0,o.kt)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),(0,o.kt)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",(0,o.kt)("a",{parentName:"p",href:"../../gesture-composition"},"composing them"),".",(0,o.kt)("a",{parentName:"p",href:"gesture-detector"},(0,o.kt)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",(0,o.kt)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}d.isMDXComponent=!0},78886:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(83117),o=(n(67294),n(3905));const r={},i=void 0,s={unversionedId:"api/gestures/base-gesture-event-data",id:"version-2.4.0/api/gestures/base-gesture-event-data",title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/versioned_docs/version-2.4.0/api/gestures/base-gesture-event-data.md",sourceDirName:"api/gestures",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/base-gesture-event-data",draft:!1,tags:[],version:"2.4.0",frontMatter:{}},l={},c=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>numberOfPointers</code>",id:"numberofpointers",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),(0,o.kt)("h3",{id:"state"},(0,o.kt)("inlineCode",{parentName:"h3"},"state")),(0,o.kt)("p",null,"Current ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events"},"state")," of the handler. Expressed as one of the constants exported under ",(0,o.kt)("inlineCode",{parentName:"p"},"State")," object by the library."),(0,o.kt)("h3",{id:"numberofpointers"},(0,o.kt)("inlineCode",{parentName:"h3"},"numberOfPointers")),(0,o.kt)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}d.isMDXComponent=!0},41969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var a=n(83117),o=(n(67294),n(3905)),r=n(78886),i=n(85237),s=n(64190),l=n(71847),c=n(32382);const u={id:"rotation-gesture",title:"Rotation gesture",sidebar_label:"Rotation gesture"},d=void 0,p={unversionedId:"api/gestures/rotation-gesture",id:"version-2.4.0/api/gestures/rotation-gesture",title:"Rotation gesture",description:"A continuous gesture that can recognize a rotation gesture and track its movement.",source:"@site/versioned_docs/version-2.4.0/api/gestures/rotation-gesture.md",sourceDirName:"api/gestures",slug:"/api/gestures/rotation-gesture",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/rotation-gesture",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"rotation-gesture",title:"Rotation gesture",sidebar_label:"Rotation gesture"},sidebar:"version-2.4.0/docs",previous:{title:"Long press gesture",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/long-press-gesture"},next:{title:"Pinch gesture",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/pinch-gesture"}},h={},g=[{value:"Config",id:"config",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"Event data",id:"event-data",level:2},{value:"Event attributes specific to <code>RotationGesture</code>:",id:"event-attributes-specific-to-rotationgesture",level:3},{value:"<code>rotation</code>",id:"rotation",level:3},{value:"<code>velocity</code>",id:"velocity",level:3},{value:"<code>anchorX</code>",id:"anchorx",level:3},{value:"<code>anchorY</code>",id:"anchory",level:3},{value:"Example",id:"example",level:2}],m={toc:g};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A continuous gesture that can recognize a rotation gesture and track its movement."),(0,o.kt)("p",null,"The gesture ",(0,o.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/under-the-hood/states-events#active"},"activates")," when fingers are placed on the screen and change position in a proper way."),(0,o.kt)("p",null,"Gesture callback can be used for continuous tracking of the rotation gesture. It provides information about the gesture such as the amount rotated, the focal point of the rotation (anchor), and its instantaneous velocity."),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)(i.default,{mdxType:"BaseEventConfig"}),(0,o.kt)(s.default,{mdxType:"BaseContinousEventConfig"}),(0,o.kt)("h2",{id:"callbacks"},"Callbacks"),(0,o.kt)(l.default,{mdxType:"BaseEventCallbacks"}),(0,o.kt)(c.default,{mdxType:"BaseContinousEventCallbacks"}),(0,o.kt)("h2",{id:"event-data"},"Event data"),(0,o.kt)("h3",{id:"event-attributes-specific-to-rotationgesture"},"Event attributes specific to ",(0,o.kt)("inlineCode",{parentName:"h3"},"RotationGesture"),":"),(0,o.kt)("h3",{id:"rotation"},(0,o.kt)("inlineCode",{parentName:"h3"},"rotation")),(0,o.kt)("p",null,"Amount rotated, expressed in radians, from the gesture's focal point (anchor)."),(0,o.kt)("h3",{id:"velocity"},(0,o.kt)("inlineCode",{parentName:"h3"},"velocity")),(0,o.kt)("p",null,"Instantaneous velocity, expressed in point units per second, of the gesture."),(0,o.kt)("h3",{id:"anchorx"},(0,o.kt)("inlineCode",{parentName:"h3"},"anchorX")),(0,o.kt)("p",null,"X coordinate, expressed in points, of the gesture's central focal point (anchor)."),(0,o.kt)("h3",{id:"anchory"},(0,o.kt)("inlineCode",{parentName:"h3"},"anchorY")),(0,o.kt)("p",null,"Y coordinate, expressed in points, of the gesture's central focal point (anchor)."),(0,o.kt)(r.default,{mdxType:"BaseEventData"}),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const rotation = useSharedValue(1);\nconst savedRotation = useSharedValue(1);\n\nconst rotationGesture = Gesture.Rotation()\n  .onUpdate((e) => {\n    rotation.value = savedRotation.value + e.rotation;\n  })\n  .onEnd(() => {\n    savedRotation.value = rotation.value;\n  });\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }],\n}));\n\nreturn (\n  <GestureDetector gesture={rotationGesture}>\n    <Animated.View style={[styles.box, animatedStyle]} />\n  </GestureDetector>\n);\n")))}v.isMDXComponent=!0}}]);