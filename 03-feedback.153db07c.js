function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,m=function(){return l.Date.now()};function y(e,t,n){var i,r,o,u,a,f,c=0,l=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,a=setTimeout(w,t),l?b(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function w(){var e=m();if(h(e))return S(e);a=setTimeout(w,function(e){var n=t-(e-f);return s?p(n,o-(e-c)):n}(e))}function S(e){return a=void 0,y&&i?b(e):(i=r=void 0,u)}function T(){var e=m(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(w,t),b(f)}return void 0===a&&(a=setTimeout(w,t)),u}return t=g(t)||0,v(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=r=a=void 0},T.flush=function(){return void 0===a?u:S(m())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=(document.querySelector('input[type="email"]'),document.querySelector('textarea[name="message"]'),document.querySelector('button[type="submit"]')),h={email:"",message:""};b.addEventListener("input",e(t)((e=>{h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),j.addEventListener("click",(e=>{e.preventDefault(),localStorage.clear(),b.reset(),console.log(h)}));
//# sourceMappingURL=03-feedback.153db07c.js.map
