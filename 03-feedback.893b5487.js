function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,i,r,f,a,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function j(e){return l=e,a=setTimeout(h,t),c?y(e):f}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function h(){var e=v();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,r-(e-l)):n}(e))}function w(e){return a=void 0,g&&o?y(e):(o=i=void 0,f)}function x(){var e=v(),n=T(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return j(u);if(s)return a=setTimeout(h,t),y(u)}return void 0===a&&(a=setTimeout(h,t)),f}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=u=i=a=void 0},x.flush=function(){return void 0===a?f:w(v())},x}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y={form:document.querySelector(".feedback-form")};let j={};!function(e){const t=localStorage.getItem("feedback-form-state");if(t){const e=JSON.parse(t);y.form.elements.email.value=e.email,y.form.elements.message.value=e.text}}(),y.form.addEventListener("submit",(function(e){e.preventDefault();const t={email:y.form.elements.email.value,message:y.form.elements.message.value};console.log(t),e.currentTarget.reset()})),y.form.addEventListener("input",e(t)((function(e){const t=e.target.value,n=e.target.value;j={email:t,text:n},localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500));
//# sourceMappingURL=03-feedback.893b5487.js.map