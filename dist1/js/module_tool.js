"use strict";function $(e,t){return"all"!==t?document.querySelector(e):document.querySelectorAll(e)}function ajax(r){return new Promise(function(t,o){var a=new XMLHttpRequest;if(r.type=r.type||"get",!r.url&&!r.url)throw new Error("接口地址不能为空");if(r.data&&("Object"===Object.prototype.toString.call(r.data).slice(8,-1)?r.data=function(e){if("Object"===Object.prototype.toString.call(e).slice(8,-1)){var t=[];for(var o in e)t.push(o+"="+e[o]);return t.join("&")}}(r.data):r.data=r.data),r.data&&"get"===r.type&&(r.url+="?"+r.data),"false"===r.asyne||!1===r.async?r.async:r.async=!0,a.open(r.type,r.url,r.async),r.data&&"post"===r.type?(a.setRequestHeader("content-type","application/x-www-form-urlencoded"),a.send(r.data)):a.send(),r.async)a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status){var e=null;e="json"===r.dataType?JSON.parse(a.responseText):a.responseText,t(e)}else o("接口地址有误")};else if(200===a.status){var e=null;"json"===r.dataType?r.data=JSON.parse(a.responseText):e=a.responseText,t(e)}else o("接口地址有误")})}Object.defineProperty(exports,"__esModule",{value:!0});var jstool={addcookie:function(e,t,o){var a=new Date;a.setDate(a.getDate()+o),document.cookie=e+"="+encodeURIComponent(t)+";expires="+a},getcookie:function(e){var t=decodeURIComponent(document.cookie).split("; "),o=!0,a=!1,r=void 0;try{for(var n,s=t[Symbol.iterator]();!(o=(n=s.next()).done);o=!0){var i=n.value.split("=");if(e===i[0])return i[1]}}catch(e){a=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw r}}},delcookie:function(e){this.addcookie(e,"",-1)}};function bufferMove(a,r,n){var s=0;function i(e,t){return window.getComputedStyle?window.getComputedStyle(e)[t]:e.currentStyle[t]}clearInterval(a.timer),a.timer=setInterval(function(){var e=!0;for(var t in r){var o=null;o="opacity"===t?100*i(a,t):parseInt(i(a,t)),s=0<(s=(r[t]-o)/5)?Math.ceil(s):Math.floor(s),o!==r[t]&&("opacity"===t&&(a.style.opacity=(o+s)/100,a.style.filter="alpha(opacity="+(o+s)+");"),a.style[t]=o+s+"px",e=!1)}e&&(clearInterval(a.timer),n&&"function"==typeof n&&n())},10)}exports.$=$,exports.ajax=ajax,exports.jstool=jstool,exports.bufferMove=bufferMove;