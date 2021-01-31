/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";var i={},r={},o=[],a=window.Webflow||[],s=window.jQuery,u=s(window),c=s(document),l=s.isFunction,f=i._=n(8),h=i.tram=n(3)&&s.tram,d=!1,p=!1;function v(t){i.env()&&(l(t.design)&&u.on("__wf_design",t.design),l(t.preview)&&u.on("__wf_preview",t.preview)),l(t.destroy)&&u.on("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){if(d)return void t.ready();if(f.contains(o,t.ready))return;o.push(t.ready)}(t)}function m(t){l(t.design)&&u.off("__wf_design",t.design),l(t.preview)&&u.off("__wf_preview",t.preview),l(t.destroy)&&u.off("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){o=f.filter(o,function(e){return e!==t.ready})}(t)}h.config.hideBackface=!1,h.config.keepInherited=!0,i.define=function(t,e,n){r[t]&&m(r[t]);var i=r[t]=e(s,f,n)||{};return v(i),i},i.require=function(t){return r[t]},i.push=function(t){d?l(t)&&t():a.push(t)},i.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var g,w=navigator.userAgent.toLowerCase(),y=i.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,b=i.env.chrome=/chrome/.test(w)&&/Google/.test(navigator.vendor)&&parseInt(w.match(/chrome\/(\d+)\./)[1],10),x=i.env.ios=/(ipod|iphone|ipad)/.test(w);i.env.safari=/safari/.test(w)&&!b&&!x,y&&c.on("touchstart mousedown",function(t){g=t.target}),i.validClick=y?function(t){return t===g||s.contains(t,g)}:function(){return!0};var _,k="resize.webflow orientationchange.webflow load.webflow";function S(t,e){var n=[],i={};return i.up=f.throttle(function(t){f.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(f.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?f.filter(n,function(e){return e!==t}):[]},i}function z(t){l(t)&&t()}function E(){_&&(_.reject(),u.off("load",_.resolve)),_=new s.Deferred,u.on("load",_.resolve)}i.resize=S(u,k),i.scroll=S(u,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),i.redraw=S(),i.location=function(t){window.location=t},i.env()&&(i.location=function(){}),i.ready=function(){d=!0,p?(p=!1,f.each(r,v)):f.each(o,z),f.each(a,z),i.resize.up()},i.load=function(t){_.then(t)},i.destroy=function(t){t=t||{},p=!0,u.triggerHandler("__wf_destroy"),null!=t.domready&&(d=t.domready),f.each(r,m),i.resize.off(),i.scroll.off(),i.redraw.off(),o=[],a=[],"pending"===_.state()&&E()},s(i.ready),E(),t.exports=window.Webflow=i},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=i=function(t){return n(t)}:t.exports=i=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},i(e)}t.exports=i},function(t,e,n){"use strict";var i=n(1)(n(2));window.tram=function(t){function e(t,e){return(new R.Bare).init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function s(t,e,n){c("Units do not match ["+t+"]: "+e+", "+n)}function u(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return V.test(t)||!Q.test(t)?i=parseInt(t,10):Q.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i==i?i:n}function c(t){G.debug&&window&&window.console.warn(t)}var l=function(t,e,n){function r(t){return"object"==(0,i.default)(t)}function o(t){return"function"==typeof t}function a(){}return function i(s,u){function c(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}u===n&&(u=s,s=Object),c.Bare=l;var f,h=a[t]=s[t],d=l[t]=c[t]=new a;return d.constructor=c,c.mixin=function(e){return l[t]=c[t]=i(c,e)[t],c},c.open=function(t){if(f={},o(t)?f=t.call(c,d,h,c,s):r(t)&&(f=t),r(f))for(var n in f)e.call(f,n)&&(d[n]=f[n]);return o(d.init)||(d.init=s),c},c.open(u)}}("prototype",{}.hasOwnProperty),f={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},h={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,v="bkwld-tram",m=/[\-\.0-9]/g,g=/[A-Z]/,w="number",y=/^(rgb|#)/,b=/(em|cm|mm|in|pt|pc|px)$/,x=/(em|cm|mm|in|pt|pc|px|%)$/,_=/(deg|rad|turn)$/,k="unitless",S=/(all|none) 0s ease 0s/,z=/^(width|height)$/,E=" ",T=d.createElement("a"),O=["Webkit","Moz","O","ms"],j=["-webkit-","-moz-","-o-","-ms-"],L=function(t){if(t in T.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<O.length;e++)if((n=O[e]+i)in T.style)return{dom:n,css:j[e]+t}},q=e.support={bind:Function.prototype.bind,transform:L("transform"),transition:L("transition"),backface:L("backface-visibility"),timing:L("transition-timing-function")};if(q.transition){var A=q.timing.dom;if(T.style[A]=f["ease-in-back"][0],!T.style[A])for(var M in h)f[M][0]=h[M]}var F=e.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&q.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),C=e.now=function(){var t=p.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&q.bind?e.bind(t):Date.now||function(){return+new Date}}(),$=l(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}((""+t).split(E)),i=n[0];e=e||{};var r=Y[i];if(!r)return c("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function o(t,e,n){if(t){var o=(0,i.default)(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new W({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":l.call(this);break;case"stop":s.call(this);break;case"redraw":f.call(this);break;default:r.call(this,t,n&&n[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var c=0;d.call(this,t,function(t,e){t.span>c&&(c=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(c=u(t.wait,0))}),h.call(this),c>0&&(this.timer=new W({duration:c,context:this}),this.active=!0,e&&(this.timer.complete=a));var p=this,v=!1,m={};F(function(){d.call(p,t,function(t){t.active&&(v=!0,m[t.name]=t.nextStyle)}),v&&p.$el.css(m)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function s(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==(0,i.default)(t)&&null!=t?t:this.props,d.call(this,e,p),h.call(this)}function l(){s.call(this),this.el.style.display="none"}function f(){this.el.offsetHeight}function h(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[q.transition.dom]=n)}function d(t,e,i){var o,a,s,u,c=e!==p,l={};for(o in t)s=t[o],o in K?(l.transform||(l.transform={}),l.transform[o]=s):(g.test(o)&&(o=n(o)),o in Y?l[o]=s:(u||(u={}),u[o]=s));for(o in l){if(s=l[o],!(a=this.props[o])){if(!c)continue;a=r.call(this,o)}e.call(this,a,s)}i&&u&&i.call(this,u)}function p(t){t.stop()}function m(t,e){t.set(e)}function w(t){this.$el.css(t)}function y(t,n){e[t]=function(){return this.children?function(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,G.keepInherited&&!G.fallback){var n=X(this.el,"transition");n&&!S.test(n)&&(this.upstream=n)}q.backface&&G.hideBackface&&U(this.el,q.backface.css,"hidden")},y("add",r),y("start",o),y("wait",function(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new W({duration:t,context:this,complete:a}),this.active=!0)}),y("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):c("No active transition timer. Use start() or wait() before then().")}),y("next",a),y("stop",s),y("set",function(t){s.call(this,t),d.call(this,t,m,w)}),y("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),y("hide",l),y("redraw",f),y("destroy",function(){s.call(this),t.removeData(this.el,v),this.$el=this.el=null})}),R=l($,function(e){function n(e,n){var i=t.data(e,v)||t.data(e,v,new $.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),B=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var r=500,a="ease",s=0;t.init=function(t,e,n,i){this.$el=t,this.el=t[0];var o=e[0];n[2]&&(o=n[2]),Z[o]&&(o=Z[o]),this.name=o,this.type=n[1],this.duration=u(e[1],this.duration,r),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in f?t:n}(e[2],this.ease,a),this.delay=u(e[3],this.delay,s),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=z.test(this.name),this.unit=i.unit||this.unit||G.defaultUnit,this.angle=i.angle||this.angle||G.defaultAngle,G.fallback||i.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+E+this.duration+"ms"+("ease"!=this.ease?E+f[this.ease][0]:"")+(this.delay?E+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new N({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return X(this.el,this.name)},t.update=function(t){U(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,U(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var r,o="number"==typeof t,a="string"==typeof t;switch(e){case w:if(o)return t;if(a&&""===t.replace(m,""))return+t;r="number(unitless)";break;case y:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}r="hex or rgb string";break;case b:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit)";break;case x:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit or %)";break;case _:if(o)return t+this.angle;if(a&&e.test(t))return t;r="number(deg) or string(angle)";break;case k:if(o)return t;if(a&&x.test(t))return t;r="number(unitless) or string(unit or %)"}return function(t,e){c("Type warning: Expected: ["+t+"] Got: ["+(0,i.default)(e)+"] "+e)}(r,t),t},t.redraw=function(){this.el.offsetHeight}}),P=l(B,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),y))}}),I=l(B,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),D=l(B,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)r=(o=K[n])[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},K.perspective&&G.perspective&&(this.current.perspective=G.perspective,U(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),U(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new H({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new H({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){U(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),N=l(function(e){function n(){var t,e,i,r=u.length;if(r)for(F(n),e=C(),t=r;t--;)(i=u[t])&&i.render(e)}var i={ease:f.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||i.ease;f[e]&&(e=f[e][1]),"function"!=typeof e&&(e=i.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=i.from),void 0===r&&(r=i.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=C(),!1!==t.autoplay&&this.play()},e.play=function(){var t;this.active||(this.start||(this.start=C()),this.active=!0,t=this,1===u.push(t)&&F(n))},e.stop=function(){var e,n,i;this.active&&(this.active=!1,e=this,(i=t.inArray(e,u))>=0&&(n=u.slice(i+1),u.length=i,n.length&&(u=u.concat(n))))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,i):function(t){return Math.round(t*c)/c}(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(m,"");n!==t.replace(m,"")&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var u=[],c=1e3}),W=l(N,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),H=l(N,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new N({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),G=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!q.transition,agentTests:[]};e.fallback=function(t){if(!q.transition)return G.fallback=!0;G.agentTests.push("("+t+")");var e=new RegExp(G.agentTests.join("|"),"i");G.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new N(t)},e.delay=function(t,e,n){return new W({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var U=t.style,X=t.css,Z={transform:q.transform&&q.transform.css},Y={color:[P,y],background:[P,y,"background-color"],"outline-color":[P,y],"border-color":[P,y],"border-top-color":[P,y],"border-right-color":[P,y],"border-bottom-color":[P,y],"border-left-color":[P,y],"border-width":[B,b],"border-top-width":[B,b],"border-right-width":[B,b],"border-bottom-width":[B,b],"border-left-width":[B,b],"border-spacing":[B,b],"letter-spacing":[B,b],margin:[B,b],"margin-top":[B,b],"margin-right":[B,b],"margin-bottom":[B,b],"margin-left":[B,b],padding:[B,b],"padding-top":[B,b],"padding-right":[B,b],"padding-bottom":[B,b],"padding-left":[B,b],"outline-width":[B,b],opacity:[B,w],top:[B,x],right:[B,x],bottom:[B,x],left:[B,x],"font-size":[B,x],"text-indent":[B,x],"word-spacing":[B,x],width:[B,x],"min-width":[B,x],"max-width":[B,x],height:[B,x],"min-height":[B,x],"max-height":[B,x],"line-height":[B,k],"scroll-top":[I,w,"scrollTop"],"scroll-left":[I,w,"scrollLeft"]},K={};q.transform&&(Y.transform=[D],K={x:[x,"translateX"],y:[x,"translateY"],rotate:[_],rotateX:[_],rotateY:[_],scale:[w],scaleX:[w],scaleY:[w],skew:[_],skewX:[_],skewY:[_]}),q.transform&&q.backface&&(K.z=[x,"translateZ"],K.rotateZ=[_],K.scaleZ=[w],K.perspective=[b]);var V=/ms/,Q=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){"use strict";var i=window.jQuery,r={},o=[],a={reset:function(t,e){e.__wf_intro=null},intro:function(t,e){e.__wf_intro||(e.__wf_intro=!0,i(e).triggerHandler(r.types.INTRO))},outro:function(t,e){e.__wf_intro&&(e.__wf_intro=null,i(e).triggerHandler(r.types.OUTRO))}};r.triggers={},r.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},r.init=function(){for(var t=o.length,e=0;e<t;e++){var n=o[e];n[0](0,n[1])}o=[],i.extend(r.triggers,a)},r.async=function(){for(var t in a){var e=a[t];a.hasOwnProperty(t)&&(r.triggers[t]=function(t,n){o.push([e,n])})}},r.async(),t.exports=r},function(t,e,n){n(6),n(7),n(4),n(9),n(10),n(11),t.exports=n(12)},function(t,e,n){"use strict";var i=n(1)(n(2));!function(){if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),e=!!t&&parseInt(t[1],10)>=16;if(!("objectFit"in document.documentElement.style!=!1)||e){var n=function(t){var e=t.parentNode;!function(t){var e=window.getComputedStyle(t,null),n=e.getPropertyValue("position"),i=e.getPropertyValue("overflow"),r=e.getPropertyValue("display");n&&"static"!==n||(t.style.position="relative"),"hidden"!==i&&(t.style.overflow="hidden"),r&&"inline"!==r||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className+=" object-fit-polyfill")}(e),function(t){var e=window.getComputedStyle(t,null),n={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var i in n)e.getPropertyValue(i)!==n[i]&&(t.style[i]=n[i])}(t),t.style.position="absolute",t.style.height="100%",t.style.width="auto",t.clientWidth>e.clientWidth?(t.style.top="0",t.style.marginTop="0",t.style.left="50%",t.style.marginLeft=t.clientWidth/-2+"px"):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",t.style.top="50%",t.style.marginTop=t.clientHeight/-2+"px")},r=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!==(0,i.default)(t)||!t.length||!t[0].nodeName)return!1;t=t}for(var r=0;r<t.length;r++)if(t[r].nodeName){var o=t[r].nodeName.toLowerCase();if("img"===o){if(e)continue;t[r].complete?n(t[r]):t[r].addEventListener("load",function(){n(this)})}else"video"===o?t[r].readyState>0?n(t[r]):t[r].addEventListener("loadedmetadata",function(){n(this)}):n(t[r])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",r):r(),window.addEventListener("resize",r),window.objectFitPolyfill=r}else window.objectFitPolyfill=function(){return!1}}}()},function(t,e,n){"use strict";var i=n(0);i.define("brand",t.exports=function(t){var e,n={},r=document,o=t("html"),a=t("body"),s=".w-webflow-badge",u=window.location,c=/PhantomJS/i.test(navigator.userAgent),l="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";function f(){var n=r.fullScreen||r.mozFullScreen||r.webkitIsFullScreen||r.msFullscreenElement||Boolean(r.webkitFullscreenElement);t(e).attr("style",n?"display: none !important;":"")}function h(){var t=a.children(s),n=t.length&&t.get(0)===e,r=i.env("editor");n?r&&t.remove():(t.length&&t.remove(),r||a.append(e))}return n.ready=function(){var n,i,a,s=o.attr("data-wf-status"),d=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(d)&&u.hostname!==d&&(s=!0),s&&!c&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),i=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt","").css({marginRight:"8px",width:"16px"}),a=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt","Made in Webflow"),n.append(i,a),n[0]),h(),setTimeout(h,500),t(r).off(l,f).on(l,f))},n})},function(t,e,n){"use strict";var i=window.$,r=n(3)&&i.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,i=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),u=n.forEach,c=n.map,l=(n.reduce,n.reduceRight,n.filter),f=(n.every,n.some),h=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),p=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else{var s=t.keys(n);for(o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(p(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return v(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(p(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var v=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:f&&n.some===f?n.some(i,r):(p(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(h&&t.indexOf===h?-1!=t.indexOf(e):v(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,r.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function c(){var l=t.now()-s;l<n?r=setTimeout(c,n-l):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var l=i&&!r;return r||(r=setTimeout(c,n)),l&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var m=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},w=/\\|'|\r|\n|\u2028|\u2029/g,y=function(t){return"\\"+g[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||m).source,(n.interpolate||m).source,(n.evaluate||m).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(w,y),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()},function(t,e,n){"use strict";var i=n(0),r=n(4);i.define("ix",t.exports=function(t,e){var n,o,a={},s=t(window),u=".w-ix",c=t.tram,l=i.env,f=l(),h=l.chrome&&l.chrome<35,d="none 0s ease 0s",p=t(),v={},m=[],g=[],w=[],y=1,b={tabs:".w-tab-link, .w-tab-pane",dropdown:".w-dropdown",slider:".w-slide",navbar:".w-nav"};function x(t){t&&(v={},e.each(t,function(t){v[t.slug]=t.value}),_())}function _(){!function(){var e=t("[data-ix]");if(!e.length)return;e.each(z),e.each(k),m.length&&(i.scroll.on(E),setTimeout(E,1));g.length&&i.load(T);w.length&&setTimeout(O,y)}(),r.init(),i.redraw.up()}function k(n,o){var s=t(o),c=s.attr("data-ix"),l=v[c];if(l){var h=l.triggers;h&&(a.style(s,l.style),e.each(h,function(t){var e={},n=t.type,o=t.stepsB&&t.stepsB.length;function a(){j(t,s,{group:"A"})}function c(){j(t,s,{group:"B"})}if("load"!==n){if("click"===n)return s.on("click"+u,function(n){i.validClick(n.currentTarget)&&("#"===s.attr("href")&&n.preventDefault(),j(t,s,{group:e.clicked?"B":"A"}),o&&(e.clicked=!e.clicked))}),void(p=p.add(s));if("hover"===n)return s.on("mouseenter"+u,a),s.on("mouseleave"+u,c),void(p=p.add(s));if("scroll"!==n){var l=b[n];if(l){var h=s.closest(l);return h.on(r.types.INTRO,a).on(r.types.OUTRO,c),void(p=p.add(h))}}else m.push({el:s,trigger:t,state:{active:!1},offsetTop:S(t.offsetTop),offsetBot:S(t.offsetBot)})}else t.preload&&!f?g.push(a):w.push(a)}))}}function S(t){if(!t)return 0;t=String(t);var e=parseInt(t,10);return e!=e?0:(t.indexOf("%")>0&&(e/=100)>=1&&(e=.999),e)}function z(e,n){t(n).off(u)}function E(){for(var t=s.scrollTop(),e=s.height(),n=m.length,i=0;i<n;i++){var r=m[i],o=r.el,a=r.trigger,u=a.stepsB&&a.stepsB.length,c=r.state,l=o.offset().top,f=o.outerHeight(),h=r.offsetTop,d=r.offsetBot;h<1&&h>0&&(h*=e),d<1&&d>0&&(d*=e);var p=l+f-h>=t&&l+d<=t+e;p!==c.active&&((!1!==p||u)&&(c.active=p,j(a,o,{group:p?"A":"B"})))}}function T(){for(var t=g.length,e=0;e<t;e++)g[e]()}function O(){for(var t=w.length,e=0;e<t;e++)w[e]()}function j(e,i,r,o){var a=(r=r||{}).done,s=e.preserve3d;if(!n||r.force){var u=r.group||"A",l=e["loop"+u],d=e["steps"+u];if(d&&d.length){if(d.length<2&&(l=!1),!o){var p=e.selector;p&&(i=e.descend?i.find(p):e.siblings?i.siblings(p):t(p),f&&i.attr("data-ix-affect",1)),h&&i.addClass("w-ix-emptyfix"),s&&i.css("transform-style","preserve-3d")}for(var v=c(i),m={omit3d:!s},g=0;g<d.length;g++)L(v,d[g],m);m.start?v.then(w):w()}}function w(){if(l)return j(e,i,r,!0);"auto"===m.width&&v.set({width:"auto"}),"auto"===m.height&&v.set({height:"auto"}),a&&a()}}function L(t,e,n){var r="add",o="start";n.start&&(r=o="then");var a=e.transition;if(a){a=a.split(",");for(var s=0;s<a.length;s++){var u=a[s];t[r](u)}}var c=q(e,n)||{};if(null!=c.width&&(n.width=c.width),null!=c.height&&(n.height=c.height),null==a){n.start?t.then(function(){var e=this.queue;this.set(c),c.display&&(t.redraw(),i.redraw.up()),this.queue=e,this.next()}):(t.set(c),c.display&&(t.redraw(),i.redraw.up()));var l=c.wait;null!=l&&(t.wait(l),n.start=!0)}else{if(c.display){var f=c.display;delete c.display,n.start?t.then(function(){var t=this.queue;this.set({display:f}).redraw(),i.redraw.up(),this.queue=t,this.next()}):(t.set({display:f}).redraw(),i.redraw.up())}t[o](c),n.start=!0}}function q(t,e){var n=e&&e.omit3d,i={},r=!1;for(var o in t)"transition"!==o&&"keysort"!==o&&(!n||"z"!==o&&"rotateX"!==o&&"rotateY"!==o&&"scaleZ"!==o)&&(i[o]=t[o],r=!0);return r?i:null}return a.init=function(t){setTimeout(function(){x(t)},1)},a.preview=function(){n=!1,y=100,setTimeout(function(){x(window.__wf_ix)},1)},a.design=function(){n=!0,a.destroy()},a.destroy=function(){o=!0,p.each(z),i.scroll.off(E),r.async(),m=[],g=[],w=[]},a.ready=function(){if(f)return l("design")?a.design():a.preview();v&&o&&(o=!1,_())},a.run=j,a.style=f?function(e,n){var i=c(e);if(t.isEmptyObject(n))return;e.css("transition","");var r=e.css("transition");r===d&&(r=i.upstream=null);i.upstream=d,i.set(q(n)),i.upstream=r}:function(t,e){c(t).set(q(e))},a})},function(t,e,n){"use strict";var i=n(0);i.define("links",t.exports=function(t,e){var n,r,o,a={},s=t(window),u=i.env(),c=window.location,l=document.createElement("a"),f="w--current",h=/index\.(html|php)$/,d=/\/$/;function p(e){var i=n&&e.getAttribute("href-disabled")||e.getAttribute("href");if(l.href=i,!(i.indexOf(":")>=0)){var a=t(e);if(l.hash.length>1&&l.host+l.pathname===c.host+c.pathname){if(!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash))return;var s=t(l.hash);s.length&&r.push({link:a,sec:s,active:!1})}else if("#"!==i&&""!==i){var u=l.href===c.href||i===o||h.test(i)&&d.test(o);m(a,f,u)}}}function v(){var t=s.scrollTop(),n=s.height();e.each(r,function(e){var i=e.link,r=e.sec,o=r.offset().top,a=r.outerHeight(),s=.5*n,u=r.is(":visible")&&o+a-s>=t&&o+s<=t+n;e.active!==u&&(e.active=u,m(i,f,u))})}function m(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}return a.ready=a.design=a.preview=function(){n=u&&i.env("design"),o=i.env("slug")||c.pathname||"",i.scroll.off(v),r=[];for(var t=document.links,e=0;e<t.length;++e)p(t[e]);r.length&&(i.scroll.on(v),v())},a})},function(t,e,n){"use strict";var i=n(0);i.define("scroll",t.exports=function(t){var e,n={WF_CHANGE:"change.wf-change",WF_CLICK_EMPTY:"click.wf-empty-link",WF_CLICK_SCROLL:"click.wf-scroll"},r=t(document),o=window,a=o.location,s=function(){try{return Boolean(o.frameElement)}catch(t){return!0}}()?null:o.history,u=/^[a-zA-Z0-9][\w:.-]*$/,c='a[href="#"]',l='a[href*="#"]:not(.w-tab-link):not('+c+")";function f(n){if(!(i.env("design")||window.$.mobile&&t(n.currentTarget).hasClass("ui-link"))){var r=this.href.split("#"),c=r[0]===e?r[1]:null;c&&function(e,n){if(!u.test(e))return;var r=t("#"+e);if(!r.length)return;n&&(n.preventDefault(),n.stopPropagation());if(a.hash!==e&&s&&s.pushState&&(!i.env.chrome||"file:"!==a.protocol)){var c=s.state&&s.state.hash;c!==e&&s.pushState({hash:e},"","#"+e)}var l=i.env("editor")?".w-editor-body":"body",f=t("header, "+l+" > .header, "+l+" > .w-nav:not([data-no-scroll])"),h="fixed"===f.css("position")?f.outerHeight():0;o.setTimeout(function(){!function(e,n){var i=t(o).scrollTop(),r=e.offset().top-n;if("mid"===e.data("scroll")){var a=t(o).height()-n,s=e.outerHeight();s<a&&(r-=Math.round((a-s)/2))}var u=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(u=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(t){o.setTimeout(t,15)},f=(472.143*Math.log(Math.abs(i-r)+125)-2e3)*u;!function t(){var e=Date.now()-c;o.scroll(0,function(t,e,n,i){if(n>i)return e;return t+(e-t)*(r=n/i,r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r}(i,r,e,f)),e<=f&&l(t)}()}(r,h)},n?0:300)}(c,n)}}function h(t){var e=n.WF_CLICK_SCROLL;t.target.matches?r.off(e):r.on(e,l,f)}return{ready:function(){var i=n.WF_CHANGE,o=n.WF_CLICK_EMPTY,s=n.WF_CLICK_SCROLL;e=a.href.split("#")[0];var u=window.matchMedia("(prefers-reduced-motion: reduce)");u.matches||r.on(s,l,f),t(u).on(i,h),r.on(o,c,function(t){t.preventDefault()})}}})},function(t,e,n){"use strict";n(0).define("touch",t.exports=function(t){var e={},n=window.getSelection;function i(e){var i,r,o=!1,a=!1,s=Math.min(Math.round(.04*window.innerWidth),40);function u(t){var e=t.touches;e&&e.length>1||(o=!0,e?(a=!0,i=e[0].clientX):i=t.clientX,r=i)}function c(e){if(o){if(a&&"mousemove"===e.type)return e.preventDefault(),void e.stopPropagation();var i=e.touches,u=i?i[0].clientX:e.clientX,c=u-r;r=u,Math.abs(c)>s&&n&&""===String(n())&&(!function(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}("swipe",e,{direction:c>0?"right":"left"}),f())}}function l(t){if(o)return o=!1,a&&"mouseup"===t.type?(t.preventDefault(),t.stopPropagation(),void(a=!1)):void 0}function f(){o=!1}e.addEventListener("touchstart",u,!1),e.addEventListener("touchmove",c,!1),e.addEventListener("touchend",l,!1),e.addEventListener("touchcancel",f,!1),e.addEventListener("mousedown",u,!1),e.addEventListener("mousemove",c,!1),e.addEventListener("mouseup",l,!1),e.addEventListener("mouseout",f,!1),this.destroy=function(){e.removeEventListener("touchstart",u,!1),e.removeEventListener("touchmove",c,!1),e.removeEventListener("touchend",l,!1),e.removeEventListener("touchcancel",f,!1),e.removeEventListener("mousedown",u,!1),e.removeEventListener("mousemove",c,!1),e.removeEventListener("mouseup",l,!1),e.removeEventListener("mouseout",f,!1),e=null}}return t.event.special.tap={bindType:"click",delegateType:"click"},e.init=function(e){return(e="string"==typeof e?t(e).get(0):e)?new i(e):null},e.instance=e.init(document),e})}]);/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
  {"slug":"tooltip-first-app","name":"Tooltip First App.","value":{"style":{"opacity":0,"x":"0px","y":"-15px","z":"0px"},"triggers":[]}},
  {"slug":"show-tooltip-on-hover","name":"Show Tooltip on Hover","value":{"style":{},"triggers":[{"type":"hover","selector":".tooltip-text","preserve3d":true,"stepsA":[{"opacity":1,"transition":"transform 300ms ease 0, opacity 200 ease 0","x":"0px","y":"0px","z":"0px"}],"stepsB":[{"opacity":0,"transition":"transform 200 ease 0, opacity 200 ease 0","x":"0px","y":"-15px","z":"0px"}]}]}}
]);
