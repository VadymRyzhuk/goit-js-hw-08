!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return v.Date.now()};function b(e,t,n){var o,r,a,u,f,l,c=0,s=!1,v=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),s?b(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=a}function h(){var e=p();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return v?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,d&&o?b(e):(o=r=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(v)return f=setTimeout(h,t),b(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(v="maxWait"in n)?m(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var S=document.querySelector(".feedback-form"),O=S.querySelector('input[name="email"]'),h=S.querySelector('textarea[name="message"]');!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);O.value=t.email,h.value=t.message,console.log("Дані форми:"),console.log({email:O.value,message:h.value})}}();var w=e(t)((function(){var e={email:O.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);O.addEventListener("input",(function(){w()})),h.addEventListener("input",(function(){w()})),S.addEventListener("submit",(function(e){e.preventDefault();var t=O.value,n=h.value;t&&n?(localStorage.removeItem("feedback-form-state"),console.log("Дані форми:"),console.log({email:t,message:n}),O.value="",h.value=""):alert("Будь ласка, заповніть усі поля форми.")}))}();
//# sourceMappingURL=03-feedback.48461238.js.map