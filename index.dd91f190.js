!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequire9b17;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire9b17=n),n.register("cHbiO",(function(e,r){var t=n("6qd2L"),o=n("1wVs5"),i=n("481Mb"),l=n("gwhML");const c=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function a(e){console.log(`[dotenv][DEBUG] ${e}`)}const s={config:function(e){let r=i.resolve(t.cwd(),".env"),n="utf8";const c=Boolean(e&&e.debug),u=Boolean(e&&e.override);var f;e&&(null!=e.path&&(r="~"===(f=e.path)[0]?i.join(l.homedir(),f.slice(1)):f),null!=e.encoding&&(n=e.encoding));try{const e=s.parse(o.readFileSync(r,{encoding:n}));return Object.keys(e).forEach((function(r){Object.prototype.hasOwnProperty.call(t.env,r)?(!0===u&&e[r],c&&a(!0===u?`"${r}" is already defined in \`process.env\` and WAS overwritten`:`"${r}" is already defined in \`process.env\` and was NOT overwritten`)):e[r]})),{parsed:e}}catch(e){return c&&a(`Failed to load ${r} ${e.message}`),{error:e}}},parse:function(e){const r={};let t,n=e.toString();for(n=n.replace(/\r\n?/gm,"\n");null!=(t=c.exec(n));){const e=t[1];let n=t[2]||"";n=n.trim();const o=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(n=n.replace(/\\n/g,"\n"),n=n.replace(/\\r/g,"\r")),r[e]=n}return r}};e.exports.config=s.config,e.exports.parse=s.parse,e.exports=s})),n.register("6qd2L",(function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:l}catch(e){n=l}}();var a,s=[],u=!1,f=-1;function h(){u&&a&&(u=!1,a.length?s=a.concat(s):f=-1,s.length&&d())}function d(){if(!u){var e=c(h);u=!0;for(var r=s.length;r;){for(a=s,s=[];++f<r;)a&&a[f].run();f=-1,r=s.length}a=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===l||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function g(e,r){this.fun=e,this.array=r}function p(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];s.push(new g(e,r)),1!==s.length||u||c(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),n.register("1wVs5",(function(e,r){})),n.register("481Mb",(function(e,r){"use strict";var t=n("6qd2L");function o(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,r){for(var t,n="",o=0,i=-1,l=0,c=0;c<=e.length;++c){if(c<e.length)t=e.charCodeAt(c);else{if(47===t)break;t=47}if(47===t){if(i===c-1||1===l);else if(i!==c-1&&2===l){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var a=n.lastIndexOf("/");if(a!==n.length-1){-1===a?(n="",o=0):o=(n=n.slice(0,a)).length-1-n.lastIndexOf("/"),i=c,l=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=c,l=0;continue}r&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,c):n=e.slice(i+1,c),o=c-i-1;i=c,l=0}else 46===t&&-1!==l?++l:l=-1}return n}var l={resolve:function(){for(var e,r="",n=!1,l=arguments.length-1;l>=-1&&!n;l--){var c;l>=0?c=arguments[l]:(void 0===e&&(e=t.cwd()),c=e),o(c),0!==c.length&&(r=c+"/"+r,n=47===c.charCodeAt(0))}return r=i(r,!n),n?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(o(e),0===e.length)return".";var r=47===e.charCodeAt(0),t=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!r)).length||r||(e="."),e.length>0&&t&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var t=arguments[r];o(t),t.length>0&&(void 0===e?e=t:e+="/"+t)}return void 0===e?".":l.normalize(e)},relative:function(e,r){if(o(e),o(r),e===r)return"";if((e=l.resolve(e))===(r=l.resolve(r)))return"";for(var t=1;t<e.length&&47===e.charCodeAt(t);++t);for(var n=e.length,i=n-t,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var a=r.length-c,s=i<a?i:a,u=-1,f=0;f<=s;++f){if(f===s){if(a>s){if(47===r.charCodeAt(c+f))return r.slice(c+f+1);if(0===f)return r.slice(c+f)}else i>s&&(47===e.charCodeAt(t+f)?u=f:0===f&&(u=0));break}var h=e.charCodeAt(t+f);if(h!==r.charCodeAt(c+f))break;47===h&&(u=f)}var d="";for(f=t+u+1;f<=n;++f)f!==n&&47!==e.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+r.slice(c+u):(c+=u,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var r=e.charCodeAt(0),t=47===r,n=-1,i=!0,l=e.length-1;l>=1;--l)if(47===(r=e.charCodeAt(l))){if(!i){n=l;break}}else i=!1;return-1===n?t?"/":".":t&&1===n?"//":e.slice(0,n)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');o(e);var t,n=0,i=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var c=r.length-1,a=-1;for(t=e.length-1;t>=0;--t){var s=e.charCodeAt(t);if(47===s){if(!l){n=t+1;break}}else-1===a&&(l=!1,a=t+1),c>=0&&(s===r.charCodeAt(c)?-1==--c&&(i=t):(c=-1,i=a))}return n===i?i=a:-1===i&&(i=e.length),e.slice(n,i)}for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!l){n=t+1;break}}else-1===i&&(l=!1,i=t+1);return-1===i?"":e.slice(n,i)},extname:function(e){o(e);for(var r=-1,t=0,n=-1,i=!0,l=0,c=e.length-1;c>=0;--c){var a=e.charCodeAt(c);if(47!==a)-1===n&&(i=!1,n=c+1),46===a?-1===r?r=c:1!==l&&(l=1):-1!==r&&(l=-1);else if(!i){t=c+1;break}}return-1===r||-1===n||0===l||1===l&&r===n-1&&r===t+1?"":e.slice(r,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,r){var t=r.dir||r.root,n=r.base||(r.name||"")+(r.ext||"");return t?t===r.root?t+n:t+e+n:n}("/",e)},parse:function(e){o(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var t,n=e.charCodeAt(0),i=47===n;i?(r.root="/",t=1):t=0;for(var l=-1,c=0,a=-1,s=!0,u=e.length-1,f=0;u>=t;--u)if(47!==(n=e.charCodeAt(u)))-1===a&&(s=!1,a=u+1),46===n?-1===l?l=u:1!==f&&(f=1):-1!==l&&(f=-1);else if(!s){c=u+1;break}return-1===l||-1===a||0===f||1===f&&l===a-1&&l===c+1?-1!==a&&(r.base=r.name=0===c&&i?e.slice(1,a):e.slice(c,a)):(0===c&&i?(r.name=e.slice(1,l),r.base=e.slice(1,a)):(r.name=e.slice(c,l),r.base=e.slice(c,a)),r.ext=e.slice(l,a)),c>0?r.dir=e.slice(0,c-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};l.posix=l,e.exports=l})),n.register("gwhML",(function(e,r){var t,n,o,i,l;t=e.exports,n="homedir",o=function(){return l},i=function(e){return l=e},Object.defineProperty(t,n,{get:o,set:i,enumerable:!0,configurable:!0}),l=function(){return"/"}})),n("cHbiO").config();console.log("YOURS3BUCKET",undefined)}();
//# sourceMappingURL=index.dd91f190.js.map
