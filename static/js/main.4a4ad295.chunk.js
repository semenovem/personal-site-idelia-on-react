(this["webpackJsonpidelia-site-at-react"]=this["webpackJsonpidelia-site-at-react"]||[]).push([[1],[,,,,,,function(e,t,n){"use strict";var r,a,i;n.d(t,"a",(function(){return a})),function(e){e[e.PLAY=0]="PLAY",e[e.PAUSE=1]="PAUSE",e[e.NEXT=2]="NEXT",e[e.PREV=3]="PREV",e[e.CHANGE=4]="CHANGE"}(r||(r={})),function(e){e[e.PLAY=0]="PLAY",e[e.PAUSE=1]="PAUSE"}(a||(a={})),function(e){e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e[e.MUTE=2]="MUTE",e[e.UNMUTE=3]="UNMUTE"}(i||(i={}))},,function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return l}));var r=[],a=[],i={play:function(){r.forEach((function(e){return e()}))},pause:function(){a.forEach((function(e){return e()}))}};function c(e){r.push(e)}function u(e){a.push(e)}function o(e){r=r.filter((function(t){return t!==e}))}function l(e){a.push(e)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r="ReactSnap";function a(){return window.navigator.userAgent===r}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),i={status:n(6).a.PAUSE,play:function(){},pause:function(){},change:function(){},isPlay:!1,url:null},c=a.a.createContext(i);t.a=c},function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext({isOpen:!1,open:function(){},close:function(){}});t.a=a},,function(e,t,n){"use strict";var r,a=n(2),i=n(1),c=n(4),u=n(3),o=n(5),l=n(0),s=n.n(l);function f(e){return e<r.SM?r.XS:e<r.MD?r.SM:e<r.LG?r.MD:e<r.XL?r.LG:r.XL}function d(e,t){return t<=e}function p(e){return e===r.XL?r.LG:e===r.LG?r.MD:e===r.MD?r.SM:e===r.SM?r.XS:null}function h(e){return e===r.XS?"XS":e===r.SM?"SM":e===r.MD?"MD":e===r.LG?"LG":"XL"}!function(e){e[e.XS=0]="XS",e[e.SM=600]="SM",e[e.MD=960]="MD",e[e.LG=1280]="LG",e[e.XL=1920]="XL"}(r||(r={}));var O=s.a.createContext(r.XS);O.displayName="WinSizeCtx";var m=O,v=100,b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={winSize:f(window.innerWidth)},n.scrollSize=void 0,n.resizeTimer=null,n.resizeLast=0,n.handleResize=function(){n.resizeLast=Date.now()+v,n.resizeTimer||n.resizeCallback(v)},n.resizeCheckAct=function(){var e=Date.now();if(e<n.resizeLast)n.resizeCallback(e-n.resizeLast);else{n.resizeTimer=null;var t=f(window.innerWidth);n.state.winSize!==t&&n.setState({winSize:t})}},window.addEventListener("resize",n.handleResize),n.scrollSize=function(){try{var e=document.createElement("div"),t=e.style;t.width="100px",t.height="100px",t.position="fixed",t.overflow="scroll",t.visibility="hidden",t.bottom="-300px",t.left="0",e.innerHTML='<div style="width:200px; height:200px;"></div>',document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth,r=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),{x:n<0?0:n,y:r<0?0:r}}catch(a){return{x:0,y:0}}}(),n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),this.resizeTimer&&clearTimeout(this.resizeTimer)}},{key:"resizeCallback",value:function(e){this.resizeTimer=window.setTimeout(this.resizeCheckAct,e)}},{key:"render",value:function(){return s.a.createElement(m.Provider,{value:this.state.winSize},this.props.children)}}]),t}(s.a.Component);var y=function(e){function t(t){return s.a.createElement(m.Consumer,null,(function(n){return s.a.createElement(e,Object.assign({},t,{winSize:n}))}))}return t.displayName="withWinSizeCtx(".concat(e.displayName||e.name||"Undefined",")"),t};n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return y})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return h}))},function(e,t,n){"use strict";var r;!function(e){e.UNKNOWN="UNKNOWN",e.SINGLE="SINGLE",e.HAM_MENU="HAM_MENU",e.BIO_MOB="BIO_MOB",e.PHOTOS_VIEWER="PHOTOS_VIEWER"}(r||(r={}));var a=n(7),i=n(2),c=n(4),u=n(3),o=n(1),l=n(5),s=n(0),f=n.n(s),d=[],p={on:h.bind(void 0,!0),off:h.bind(void 0,!1),getStatus:function(){return!d.length}};function h(e){e?d.pop():d.push(!0),window.requestAnimationFrame(O)}function O(){document.body.style.overflow=d.length?"hidden":null}var m={hasUserInteraction:!1,topPage:r.UNKNOWN},v=f.a.createContext(m);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).openPage=function(e){var t=n.state.pageMgr;n.setState({pageMgr:y({},t,{topPage:e})}),p.off()},n.closePage=function(){var e=n.state.pageMgr;p.on(),n.setState({pageMgr:y({},e,{topPage:r.SINGLE})})},n.state={pageMgr:{hasUserInteraction:!1,topPage:r.SINGLE}},t.handlerOpen=n.openPage,t.handlerClose=n.closePage,n}return Object(l.a)(t,e),Object(o.a)(t,null,[{key:"open",value:function(e){t.handlerOpen&&t.handlerOpen(e)}},{key:"close",value:function(e){t.handlerClose&&t.handlerClose(e)}}]),Object(o.a)(t,[{key:"render",value:function(){return f.a.createElement(v.Provider,{value:this.state.pageMgr},this.props.children)}}]),t}(f.a.Component);P.Page=r,P.handlerOpen=null,P.handlerClose=null;var E=P;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t){function n(n){return f.a.createElement(v.Consumer,null,(function(r){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{hasUserInteraction:e===r.topPage});return f.a.createElement(v.Provider,{value:i},f.a.createElement(t,Object.assign({},n,{pageMgr:i})))}))}return n.displayName="withCtxPageMgr(".concat(t.displayName||t.name||"Undefined",")"),n}function C(e){function t(t){return f.a.createElement(v.Consumer,null,(function(n){return f.a.createElement(e,Object.assign({},t,{hasUserInteraction:n.hasUserInteraction}))}))}return t.displayName="withCtxPageMgr(".concat(e.displayName||e.name||"Undefined",")"),t}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return C}))},function(e,t,n){"use strict";var r,a=n(7),i=n(2),c=n(1),u=n(4),o=n(3),l=n(5),s=n(0),f=n.n(s),d=n(9);!function(e){e[e.CORE=0]="CORE",e[e.CRITICAL=1]="CRITICAL",e[e.IMPORTANT=2]="IMPORTANT",e[e.MINOR=3]="MINOR",e[e.NOT_IMPORTANT=4]="NOT_IMPORTANT",e[e.FINALLY=5]="FINALLY"}(r||(r={}));var p={getLevel:function(){return r.CORE},addTask:function(){return 0},removeTask:function(){}},h=f.a.createContext(p);var O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(o.a)(t).call(this,e))).countdown=void 0,n.level=r.CORE,n.numCallback=0,n.callbacks=[],n.getLevel=function(){return n.level},n.addTask=function(e,t){return e<=n.level?(setTimeout((function(){t(n.level)}),1),0):(n.callbacks.push({l:e,n:n.numCallback++,fn:t}),n.numCallback)},n.removeTask=function(e){n.callbacks=n.callbacks.filter((function(t){return t.n!==e}))},n.runCallbacks=function(){n.callbacks=n.callbacks.filter((function(e){return e.l>n.level||(e.fn(n.level),!1)}))},n.nextLevel=function(){var e=function(e){switch(e){case r.CORE:return r.CRITICAL;case r.CRITICAL:return r.IMPORTANT;case r.IMPORTANT:return r.MINOR;case r.MINOR:return r.NOT_IMPORTANT;case r.NOT_IMPORTANT:return r.FINALLY;default:return null}}(n.level);if(e){n.level=e,window.requestAnimationFrame(n.runCallbacks);var a=t.cssCls[e];a&&document.body.classList.remove(a)}},n.countdown={getLevel:n.getLevel,addTask:Object(d.a)()?function(){return 0}:n.addTask,removeTask:n.removeTask},setTimeout(n.nextLevel,500),setTimeout(n.nextLevel,1e3),setTimeout(n.nextLevel,2e3),setTimeout(n.nextLevel,4e3),setTimeout(n.nextLevel,6e3),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return f.a.createElement(h.Provider,{value:this.countdown},this.props.children)}}]),t}(f.a.Component);O.cssCls=Object(a.a)({},r.CRITICAL,"hide-elem-before-critical");var m=O;var v=function(e){function t(t){return f.a.createElement(h.Consumer,null,(function(n){return f.a.createElement(e,Object.assign({},t,{countdown:n}))}))}return t.displayName="withCtxCountdown(".concat(e.displayName||e.name||"Undefined",")"),t};n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return r}))},function(e,t,n){"use strict";var r=n(20);n.d(t,"MusicPlayerCtxCmp",(function(){return r.a}));var a=n(21);n.d(t,"withCtxMusicPlayer",(function(){return a.a}));n(22);var i=n(8);n.d(t,"musicPlayerControl",(function(){return i.c}))},,,function(e,t,n){"use strict";var r=n(23);n.d(t,"MenuCtxCmp",(function(){return r.a}));var a=n(24);n.d(t,"withCtxMenu",(function(){return a.a}));n(25)},function(e,t,n){"use strict";var r=n(7),a=n(2),i=n(1),c=n(4),u=n(3),o=n(5),l=n(6),s=n(0),f=n.n(s),d=n(10),p=n(8);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handlePlay=function(){var e=n.state.player;n.setState({player:O({},e,{status:l.a.PLAY,isPlay:!0})})},n.handlePause=function(){var e=n.state.player;n.setState({player:O({},e,{status:l.a.PAUSE,isPlay:!1})})},n.handleChange=function(e){var t=n.state.player;n.setState({player:O({},t,{url:e,status:e?l.a.PLAY:l.a.PAUSE,isPlay:!!e})})},n.handleIsPlay=function(){return n.state.player.status===l.a.PLAY},n.state={player:{status:l.a.PAUSE,play:n.handlePlay,pause:n.handlePause,change:n.handleChange,url:null,isPlay:!1}},Object(p.b)(n.handlePlay),Object(p.a)(n.handlePause),n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){Object(p.e)(this.handlePlay),Object(p.d)(this.handlePause)}},{key:"render",value:function(){var e=this.state.player;return f.a.createElement(d.a.Provider,{value:e},this.props.children)}}]),t}(f.a.Component);t.a=m},function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10);t.a=function(e){function t(t){return a.a.createElement(i.a.Consumer,null,(function(n){return a.a.createElement(e,Object.assign({},t,{musicPlayer:n}))}))}return t.displayName="withMusicPlayerCtx(".concat(e.displayName||e.name||"Undefined",")"),t}},function(e,t){},function(e,t,n){"use strict";var r=n(2),a=n(1),i=n(4),c=n(3),u=n(5),o=n(0),l=n.n(o),s=n(11),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).open=function(){n.state.isOpen||n.setState({isOpen:!0})},n.close=function(){n.state.isOpen&&n.setState({isOpen:!1})},n.state={isOpen:!1,open:n.open,close:n.close},n}return Object(u.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a.Provider,{value:this.state},this.props.children)}}]),t}(l.a.Component);f.displayName="MenuCtxCmp",t.a=f},function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11);t.a=function(e){var t=function(t){return a.a.createElement(i.a.Consumer,null,(function(n){return a.a.createElement(e,Object.assign({},t,{menu:n}))}))};return t.displayName="withCtxMenu(".concat(e.displayName||e.name||"Undefined",")"),t}},function(e,t){},function(e,t,n){e.exports=n(33)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n.n(a),c=n(12),u=n(13),o=n(16),l=n(15),s=n(14),f=n(19),d=n(2),p=n(4),h=n(3),O=n(1),m=n(5),v=n(9),b=(n(31),n(32),i.a.lazy((function(){return n.e(5).then(n.bind(null,489))}))),y=i.a.lazy((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,487))})),P=i.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,488))}));!function(e){e.MAIN="",e.MUSIC="music",e.MOVIES="see-my-voice"}(r||(r={}));var E=new RegExp("^/".concat(r.MUSIC,"(/.*)?$"),"i"),w=new RegExp("^/".concat(r.MOVIES,"(/.*)?$"),"i"),g=function(e){function t(e){var n;Object(d.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).handlePopState=function(){var e=t.defineRoute();n.state.route!==e&&n.setState({route:e})},window.addEventListener("popstate",n.handlePopState);var r=window.history.pushState;return window.history.pushState=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r.apply(window.history,t),window.dispatchEvent(new Event("popstate"))},n.state={route:t.defineRoute()},n}return Object(m.a)(t,e),Object(O.a)(t,null,[{key:"defineRoute",value:function(){var e=window.location.pathname;switch(!0){case E.test(e):return r.MUSIC;case w.test(e):return r.MOVIES;default:return r.MAIN}}}]),Object(O.a)(t,[{key:"render",value:function(){var e;switch(this.state.route){case r.MUSIC:e=i.a.createElement(y,null);break;case r.MOVIES:e=i.a.createElement(P,null);break;default:e=i.a.createElement(b,null)}return i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Suspense,{fallback:null},e),Object(v.a)()&&i.a.createElement("span",{style:{display:"none"},className:""},i.a.createElement("a",{href:"/music"}),i.a.createElement("a",{href:"/see-my-voice"})))}}]),t}(i.a.Component),C=function(){return i.a.createElement(u.c,null,i.a.createElement(l.a,null,i.a.createElement(f.MenuCtxCmp,null,i.a.createElement(o.MusicPlayerCtxCmp,null,i.a.createElement(s.b,null,i.a.createElement(g,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=document.getElementById("root");if(!j)throw new Error("Not found dom element `id:root`");j.hasChildNodes()?Object(c.hydrate)(i.a.createElement(C,null),j):Object(c.render)(i.a.createElement(C,null),j),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[26,2,6]]]);
//# sourceMappingURL=main.4a4ad295.chunk.js.map