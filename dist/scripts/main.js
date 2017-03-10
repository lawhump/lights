"use strict";function cie_to_rgb(t,e,n){void 0===n&&(n=254);var r=1-t-e,a=(n/254).toFixed(2),i=a/e*t,o=a/e*r,s=1.656492*i-.354851*a-.255038*o,u=.707196*-i+1.655397*a+.036152*o,f=.051713*i-.121364*a+1.01153*o;return s>f&&s>u&&s>1?(u/=s,f/=s,s=1):u>f&&u>s&&u>1?(s/=u,f/=u,u=1):f>s&&f>u&&f>1&&(s/=f,u/=f,f=1),s=s<=.0031308?12.92*s:1.055*Math.pow(s,1/2.4)-.055,u=u<=.0031308?12.92*u:1.055*Math.pow(u,1/2.4)-.055,f=f<=.0031308?12.92*f:1.055*Math.pow(f,1/2.4)-.055,s=Math.round(255*s),u=Math.round(255*u),f=Math.round(255*f),isNaN(s)&&(s=0),isNaN(u)&&(u=0),isNaN(f)&&(f=0),[s,u,f]}function rgb_to_cie(t,e,n){var t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,r=.664511*t+.154324*e+.162028*n,a=.283881*t+.668433*e+.047685*n,i=88e-6*t+.07231*e+.986039*n,o=(r/(r+a+i)).toFixed(4),s=(a/(r+a+i)).toFixed(4);return isNaN(o)&&(o=0),isNaN(s)&&(s=0),[o,s]}var jsHueAPI=function(t,e){var n=function(t,e){return t.replace(/\{(\w+)\}/g,function(t,n){return e[n]||t})},r=function(){return Array.prototype.slice.call(arguments,0).join("/")},a=function(e,n,r,a,i){var o=new t;return o.onreadystatechange=function(){4===o.readyState&&(200===o.status?a&&a(o.responseText):i&&i({type:"xhr",code:o.status,message:o.statusText}))},o.open(e,n,!0),o.send(r),!0},i=function(t,n,r,i,o){var s=function(t){try{t=e.parse(t)}catch(t){return o&&o({type:"json",message:t.message}),!1}i&&i(t)};if(null!==r)try{r=e.stringify(r)}catch(t){return o&&o({type:"json",message:t.message}),!1}return a(t,n,r,s,o)},o=function(t,e,n,r){return i(t,e,null,n,r)},s=o.bind(null,"GET"),u=i.bind(null,"PUT"),f=i.bind(null,"POST"),c=o.bind(null,"DELETE"),l=function(t,e){return function(n){return t.apply(null,[e(n)].concat(Array.prototype.slice.call(arguments,1)))}};return{discover:s.bind(null,"https://www.meethue.com/api/nupnp"),bridge:function(t){var e=n("http://{ip}/api",{ip:t});return{createUser:function(t,n,r){var a={devicetype:t};return f(e,a,n,r)},user:function(t){var n=r(e,t),a=r(n,"info"),i=r(n,"config"),o=r(n,"lights"),h=r(n,"groups"),g=r(n,"schedules"),d=r(n,"scenes"),b=r(n,"sensors"),p=r(n,"rules"),m=function(t){return function(e){return r(t,e)}},v=m(o),y=m(h),_=m(g),x=m(d),w=m(b),S=m(p);return{getTimezones:s.bind(null,r(a,"timezones")),create:function(n,r,a){var i={username:t,devicetype:n};return f(e,i,r,a)},deleteUser:l(c,function(t){return r(i,"whitelist",t)}),getConfig:s.bind(null,i),setConfig:u.bind(null,i),getFullState:s.bind(null,n),getLights:s.bind(null,o),getNewLights:s.bind(null,r(o,"new")),searchForNewLights:f.bind(null,o,null),getLight:l(s,v),setLight:l(u,v),setLightState:l(u,function(t){return r(v(t),"state")}),getGroups:s.bind(null,h),createGroup:f.bind(null,h),getGroup:l(s,y),setGroup:l(u,y),setGroupState:l(u,function(t){return r(y(t),"action")}),deleteGroup:l(c,y),getSchedules:s.bind(null,g),createSchedule:f.bind(null,g),getSchedule:l(s,_),setSchedule:l(u,_),deleteSchedule:l(c,_),getScenes:s.bind(null,d),setScene:l(u,x),setSceneLightState:function(t,e,n,a,i){return u(r(x(t),"lights",e,"state"),n,a,i)},getSensors:s.bind(null,b),createSensor:f.bind(null,b),searchForNewSensors:f.bind(null,b,null),getNewSensors:s.bind(null,r(b,"new")),getSensor:l(s,w),setSensor:l(u,w),setSensorConfig:l(u,function(t){return r(w(t),"config")}),setSensorState:l(u,function(t){return r(w(t),"state")}),deleteSensor:l(c,w),getRules:s.bind(null,p),createRule:f.bind(null,p),getRule:l(s,S),setRule:l(u,S),deleteRule:l(c,S)}}}}}};if("undefined"!=typeof XMLHttpRequest&&"undefined"!=typeof JSON)var jsHue=jsHueAPI.bind(null,XMLHttpRequest,JSON);var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){function e(t,r){if(t=t?t:"",r=r||{},t instanceof e)return t;if(!(this instanceof e))return new e(t,r);var a=n(t);this._originalInput=t,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=P(100*this._a)/100,this._format=r.format||a.format,this._gradientType=r.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=a.ok,this._tc_id=O++}function n(t){var e={r:0,g:0,b:0},n=1,a=null,o=null,u=null,f=!1,c=!1;return"string"==typeof t&&(t=q(t)),"object"==("undefined"==typeof t?"undefined":_typeof(t))&&(I(t.r)&&I(t.g)&&I(t.b)?(e=r(t.r,t.g,t.b),f=!0,c="%"===String(t.r).substr(-1)?"prgb":"rgb"):I(t.h)&&I(t.s)&&I(t.v)?(a=L(t.s),o=L(t.v),e=s(t.h,a,o),f=!0,c="hsv"):I(t.h)&&I(t.s)&&I(t.l)&&(a=L(t.s),u=L(t.l),e=i(t.h,a,u),f=!0,c="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=k(n),{ok:f,format:t.format||c,r:U(255,$(e.r,0)),g:U(255,$(e.g,0)),b:U(255,$(e.b,0)),a:n}}function r(t,e,n){return{r:255*F(t,255),g:255*F(e,255),b:255*F(n,255)}}function a(t,e,n){t=F(t,255),e=F(e,255),n=F(n,255);var r,a,i=$(t,e,n),o=U(t,e,n),s=(i+o)/2;if(i==o)r=a=0;else{var u=i-o;switch(a=s>.5?u/(2-i-o):u/(i+o),i){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:a,l:s}}function i(t,e,n){function r(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var a,i,o;if(t=F(t,360),e=F(e,100),n=F(n,100),0===e)a=i=o=n;else{var s=n<.5?n*(1+e):n+e-n*e,u=2*n-s;a=r(u,s,t+1/3),i=r(u,s,t),o=r(u,s,t-1/3)}return{r:255*a,g:255*i,b:255*o}}function o(t,e,n){t=F(t,255),e=F(e,255),n=F(n,255);var r,a,i=$(t,e,n),o=U(t,e,n),s=i,u=i-o;if(a=0===i?0:u/i,i==o)r=0;else{switch(i){case t:r=(e-n)/u+(e<n?6:0);break;case e:r=(n-t)/u+2;break;case n:r=(t-e)/u+4}r/=6}return{h:r,s:a,v:s}}function s(e,n,r){e=6*F(e,360),n=F(n,100),r=F(r,100);var a=t.floor(e),i=e-a,o=r*(1-n),s=r*(1-i*n),u=r*(1-(1-i)*n),f=a%6,c=[r,s,o,o,u,r][f],l=[u,r,r,s,o,o][f],h=[o,o,u,r,r,s][f];return{r:255*c,g:255*l,b:255*h}}function u(t,e,n,r){var a=[M(P(t).toString(16)),M(P(e).toString(16)),M(P(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function f(t,e,n,r,a){var i=[M(P(t).toString(16)),M(P(e).toString(16)),M(P(n).toString(16)),M(N(r))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function c(t,e,n,r){var a=[M(N(r)),M(P(t).toString(16)),M(P(e).toString(16)),M(P(n).toString(16))];return a.join("")}function l(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.s-=n/100,r.s=C(r.s),e(r)}function h(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.s+=n/100,r.s=C(r.s),e(r)}function g(t){return e(t).desaturate(100)}function d(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.l+=n/100,r.l=C(r.l),e(r)}function b(t,n){n=0===n?0:n||10;var r=e(t).toRgb();return r.r=$(0,U(255,r.r-P(255*-(n/100)))),r.g=$(0,U(255,r.g-P(255*-(n/100)))),r.b=$(0,U(255,r.b-P(255*-(n/100)))),e(r)}function p(t,n){n=0===n?0:n||10;var r=e(t).toHsl();return r.l-=n/100,r.l=C(r.l),e(r)}function m(t,n){var r=e(t).toHsl(),a=(r.h+n)%360;return r.h=a<0?360+a:a,e(r)}function v(t){var n=e(t).toHsl();return n.h=(n.h+180)%360,e(n)}function y(t){var n=e(t).toHsl(),r=n.h;return[e(t),e({h:(r+120)%360,s:n.s,l:n.l}),e({h:(r+240)%360,s:n.s,l:n.l})]}function _(t){var n=e(t).toHsl(),r=n.h;return[e(t),e({h:(r+90)%360,s:n.s,l:n.l}),e({h:(r+180)%360,s:n.s,l:n.l}),e({h:(r+270)%360,s:n.s,l:n.l})]}function x(t){var n=e(t).toHsl(),r=n.h;return[e(t),e({h:(r+72)%360,s:n.s,l:n.l}),e({h:(r+216)%360,s:n.s,l:n.l})]}function w(t,n,r){n=n||6,r=r||30;var a=e(t).toHsl(),i=360/r,o=[e(t)];for(a.h=(a.h-(i*n>>1)+720)%360;--n;)a.h=(a.h+i)%360,o.push(e(a));return o}function S(t,n){n=n||6;for(var r=e(t).toHsv(),a=r.h,i=r.s,o=r.v,s=[],u=1/n;n--;)s.push(e({h:a,s:i,v:o})),o=(o+u)%1;return s}function A(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}function k(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function F(e,n){R(e)&&(e="100%");var r=H(e);return e=U(n,$(0,parseFloat(e))),r&&(e=parseInt(e*n,10)/100),t.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function C(t){return U(1,$(0,t))}function T(t){return parseInt(t,16)}function R(t){return"string"==typeof t&&t.indexOf(".")!=-1&&1===parseFloat(t)}function H(t){return"string"==typeof t&&t.indexOf("%")!=-1}function M(t){return 1==t.length?"0"+t:""+t}function L(t){return t<=1&&(t=100*t+"%"),t}function N(e){return t.round(255*parseFloat(e)).toString(16)}function E(t){return T(t)/255}function I(t){return!!J.CSS_UNIT.exec(t)}function q(t){t=t.replace(z,"").replace(G,"").toLowerCase();var e=!1;if(B[t])t=B[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=J.rgb.exec(t))?{r:n[1],g:n[2],b:n[3]}:(n=J.rgba.exec(t))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=J.hsl.exec(t))?{h:n[1],s:n[2],l:n[3]}:(n=J.hsla.exec(t))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=J.hsv.exec(t))?{h:n[1],s:n[2],v:n[3]}:(n=J.hsva.exec(t))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=J.hex8.exec(t))?{r:T(n[1]),g:T(n[2]),b:T(n[3]),a:E(n[4]),format:e?"name":"hex8"}:(n=J.hex6.exec(t))?{r:T(n[1]),g:T(n[2]),b:T(n[3]),format:e?"name":"hex"}:(n=J.hex4.exec(t))?{r:T(n[1]+""+n[1]),g:T(n[2]+""+n[2]),b:T(n[3]+""+n[3]),a:E(n[4]+""+n[4]),format:e?"name":"hex8"}:!!(n=J.hex3.exec(t))&&{r:T(n[1]+""+n[1]),g:T(n[2]+""+n[2]),b:T(n[3]+""+n[3]),format:e?"name":"hex"}}function j(t){var e,n;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),n=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:e,size:n}}var z=/^\s+/,G=/\s+$/,O=0,P=t.round,U=t.min,$=t.max,X=t.random;e.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var e,n,r,a,i,o,s=this.toRgb();return e=s.r/255,n=s.g/255,r=s.b/255,a=e<=.03928?e/12.92:t.pow((e+.055)/1.055,2.4),i=n<=.03928?n/12.92:t.pow((n+.055)/1.055,2.4),o=r<=.03928?r/12.92:t.pow((r+.055)/1.055,2.4),.2126*a+.7152*i+.0722*o},setAlpha:function(t){return this._a=k(t),this._roundA=P(100*this._a)/100,this},toHsv:function(){var t=o(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=o(this._r,this._g,this._b),e=P(360*t.h),n=P(100*t.s),r=P(100*t.v);return 1==this._a?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=a(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=a(this._r,this._g,this._b),e=P(360*t.h),n=P(100*t.s),r=P(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return u(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return f(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*F(this._r,255))+"%",g:P(100*F(this._g,255))+"%",b:P(100*F(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+P(100*F(this._r,255))+"%, "+P(100*F(this._g,255))+"%, "+P(100*F(this._b,255))+"%)":"rgba("+P(100*F(this._r,255))+"%, "+P(100*F(this._g,255))+"%, "+P(100*F(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(D[u(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var n="#"+c(this._r,this._g,this._b,this._a),r=n,a=this._gradientType?"GradientType = 1, ":"";if(t){var i=e(t);r="#"+c(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0,a=!e&&r&&("hex"===t||"hex6"===t||"hex3"===t||"hex4"===t||"hex8"===t||"name"===t);return a?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString())},clone:function(){return e(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(d,arguments)},brighten:function(){return this._applyModification(b,arguments)},darken:function(){return this._applyModification(p,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(h,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(m,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(v,arguments)},monochromatic:function(){return this._applyCombination(S,arguments)},splitcomplement:function(){return this._applyCombination(x,arguments)},triad:function(){return this._applyCombination(y,arguments)},tetrad:function(){return this._applyCombination(_,arguments)}},e.fromRatio=function(t,n){if("object"==("undefined"==typeof t?"undefined":_typeof(t))){var r={};for(var a in t)t.hasOwnProperty(a)&&("a"===a?r[a]=t[a]:r[a]=L(t[a]));t=r}return e(t,n)},e.equals=function(t,n){return!(!t||!n)&&e(t).toRgbString()==e(n).toRgbString()},e.random=function(){return e.fromRatio({r:X(),g:X(),b:X()})},e.mix=function(t,n,r){r=0===r?0:r||50;var a=e(t).toRgb(),i=e(n).toRgb(),o=r/100,s={r:(i.r-a.r)*o+a.r,g:(i.g-a.g)*o+a.g,b:(i.b-a.b)*o+a.b,a:(i.a-a.a)*o+a.a};return e(s)},e.readability=function(n,r){var a=e(n),i=e(r);return(t.max(a.getLuminance(),i.getLuminance())+.05)/(t.min(a.getLuminance(),i.getLuminance())+.05)},e.isReadable=function(t,n,r){var a,i,o=e.readability(t,n);switch(i=!1,a=j(r),a.level+a.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},e.mostReadable=function(t,n,r){var a,i,o,s,u=null,f=0;r=r||{},i=r.includeFallbackColors,o=r.level,s=r.size;for(var c=0;c<n.length;c++)a=e.readability(t,n[c]),a>f&&(f=a,u=e(n[c]));return e.isReadable(t,u,{level:o,size:s})||!i?u:(r.includeFallbackColors=!1,e.mostReadable(t,["#fff","#000"],r))};var B=e.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},D=e.hexNames=A(B),J=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",n="(?:"+e+")|(?:"+t+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",a="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):window.tinycolor=e}(Math);var colors=function(){var t=function(t,e){this.x=t,this.y=e},e=new t(.675,.322),n=new t(.4091,.518),r=new t(.167,.04),a=function(t){return parseInt(t.substring(0,2),16)},i=function(t){return parseInt(t.substring(2,4),16)},o=function(t){return parseInt(t.substring(4,6),16)},s=function(t){var e=[a(t),i(t),o(t)];return e},u=function(t){var e=t.toString(16);return 1==e.length?"0"+e:e},f=function(t,e,n){return u(t)+u(e)+u(n)},c=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},l=function(){return c(0,255)},h=function(t,e){return t.x*e.y-t.y*e.x},g=function(a){var i=new t(n.x-e.x,n.y-e.y),o=new t(r.x-e.x,r.y-e.y),s=new t(a.x-e.x,a.y-e.y),u=h(s,o)/h(i,o),f=h(i,s)/h(i,o);return u>=0&&f>=0&&u+f<=1},d=function(e,n,r){var a=new t(r.x-e.x,r.y-e.y),i=new t(n.x-e.x,n.y-e.y),o=i.x*i.x+i.y*i.y,s=a.x*i.x+a.y*i.y,u=s/o;return u<0?u=0:u>1&&(u=1),new t(e.x+i.x*u,e.y+i.y*u)},b=function(t){var a=d(e,n,t),i=d(r,e,t),o=d(n,r,t),s=p(t,a),u=p(t,i),f=p(t,o),c=s,l=a;return u<c&&(c=u,l=i),f<c&&(c=f,l=o),l},p=function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)},m=function(e,n,r){var a=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,i=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92,o=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,s=.4360747*a+.3850649*i+.0930804*o,u=.2225045*a+.7168786*i+.0406169*o,f=.0139322*a+.0971045*i+.7141733*o,c=s/(s+u+f),l=u/(s+u+f);c=isNaN(c)?0:c,l=isNaN(l)?0:l;var h=new t(c,l),d=g(h);if(!d){var p=b(h);c=p.x,l=p.y}return new t(c,l)},v=function(e,n,r){var a=new t(e,n);void 0===r&&(r=1),g(a)||(a=b(a));var i=r,o=i/a.y*a.x,s=i/a.y*(1-a.x-a.y),u=[1.612*o-.203*i-.302*s,.509*-o+1.412*i+.066*s,.026*o-.072*i+.962*s];u=u.map(function(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}),u=u.map(function(t){return Math.max(0,t)});var f=Math.max(u[0],u[1],u[2]);return f>1&&(u=u.map(function(t){return t/f})),u=u.map(function(t){return Math.floor(255*t)})};return{hexToCIE1931:function(t){var e=s(t);return this.rgbToCIE1931(e[0],e[1],e[2])},rgbToCIE1931:function(t,e,n){var r=m(t,e,n);return[r.x,r.y]},getCIEColor:function(t){var e=t||null,n=[];if(null!==e)n=this.hexToCIE1931(e);else{var r=l(),a=l(),i=l();n=this.rgbToCIE1931(r,a,i)}return n},CIE1931ToHex:function(t,e,n){void 0===n&&(n=1);var r=v(t,e,n);return f(r[0],r[1],r[2])},hexFullRed:"FF0000",hexFullGreen:"00FF00",hexFullBlue:"0000FF",hexFullWhite:"FFFFFF"}};"undefined"!=typeof define&&"undefined"!=typeof define.amd?define(colors):window.colors=colors();var $=function(t){var e=document.querySelectorAll(t);return 1===e.length?e[0]:e},hue=jsHue(),bridge=hue.bridge("10.20.5.75"),username="xV5U8C2oBX5swYoNe8NLSRc4u6wHp2X-n-9z4pLf",user=void 0,mavTC=tinycolor("#e62325").toRgb(),conTC=tinycolor("#785ef0").toRgb(),menTC=tinycolor("#dc267f").toRgb(),dynTC=tinycolor("#009bef").toRgb(),navTC=tinycolor("#ffb000").toRgb(),mav=rgb_to_cie(mavTC.r,mavTC.g,mavTC.b).map(function(t){return parseFloat(t)}),con=rgb_to_cie(conTC.r,conTC.g,conTC.b).map(function(t){return parseFloat(t)}),men=rgb_to_cie(menTC.r,menTC.g,menTC.b).map(function(t){return parseFloat(t)}),dyn=rgb_to_cie(dynTC.r,dynTC.g,dynTC.b).map(function(t){return parseFloat(t)}),nav=rgb_to_cie(navTC.r,navTC.g,navTC.b).map(function(t){return parseFloat(t)}),get=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&e(n.responseText)},n.open("GET",t,!0),n.send(null)},samples=[{connector:30,maverick:30,mentor:30,navigator:10,dynamo:0},{connector:40,maverick:30,mentor:30,navigator:10,dynamo:0},{connector:20,maverick:10,mentor:30,navigator:10,dynamo:0},{connector:30,maverick:30,mentor:30,navigator:10,dynamo:100},{connector:30,maverick:30,mentor:30,navigator:60,dynamo:0}],hitEndpoint=function(){var t="http://personalitee-api.mybluemix.net/personality-percentage",e=function(t){var e=function(t){var e="mentor";for(var n in t)t[e]<t[n]&&(e=n);return e},n=samples[Math.floor(5*Math.random())],r=e(n),a=8;switch(r){case"connector":for(var i=0;i<a;i++)user.setLightState(i+1,{xy:con},function(t){},function(t){});break;case"maverick":for(var o=0;o<a;o++)user.setLightState(o+1,{xy:mav},function(t){},function(t){});break;case"navigator":for(var s=0;s<a;s++)user.setLightState(s+1,{xy:nav},function(t){},function(t){});break;case"dynamo":for(var u=0;u<a;u++)user.setLightState(u+1,{xy:dyn},function(t){},function(t){});break;case"mentor":for(var f=0;f<a;f++)user.setLightState(f+1,{xy:men},function(t){},function(t){})}};get(t,e)};bridge.createUser("sxsw",function(t){user=bridge.user(username)}),$(".btns").addEventListener("click",function(t){t.target&&"BUTTON"===t.target.nodeName&&("maverick"==t.target.dataset.personality?user.setLightState(1,{xy:mav},function(t){},function(t){}):"connector"==t.target.dataset.personality?user.setLightState(1,{xy:con},function(t){},function(t){}):"mentor"==t.target.dataset.personality?user.setLightState(1,{xy:men},function(t){},function(t){}):"dynamo"==t.target.dataset.personality?user.setLightState(1,{xy:dyn},function(t){},function(t){}):user.setLightState(1,{xy:nav},function(t){},function(t){}))}),window.setInterval(hitEndpoint,3e3);