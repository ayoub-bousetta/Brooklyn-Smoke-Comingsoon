!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s="./src/js/main.js")}({"./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */function(e,t,n){},"./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */function(e,t){grecaptcha.ready(function(){grecaptcha.execute("6LeaU3gUAAAAANqdOxqm4lFW0hSASwy35fbWIN9r",{action:"brsmoke"}).then(function(e){console.log(e),$(function(){$("#i-recaptcha").on("submit",function(t){t.preventDefault();var n=$("#email").val(),r=$("#fullname").val(),o=$("#phone").val(),a=$("#alert");if(""==r)return void a.css({background:"#ff1500",display:"block"}).empty().html("Le champ nom est obligatoire.");if(!o.match(/^([0|\+[0-9]{1,5})?([0-9]{10})$/))return void a.css({background:"#ff1500",display:"block"}).empty().html("Numéro de téléphone non valide. ");if(!n.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))return void a.css({background:"#ff1500",display:"block"}).empty().html("Email non valide. ");let c=$("#i-recaptcha").serialize();c=c+"&g-recaptcha-response="+e,$.ajax({type:"POST",url:"post.php",data:c,success:function(e){console.log(e),a.css({background:"#00e700",display:"block"}).empty().html("Votre email a été bien envoyé"),$("#i-recaptcha")[0].reset()}})})})})})},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);n(/*! ../css/main.scss */"./src/css/main.scss"),n(/*! ../js/app.js */"./src/js/app.js")}});
//# sourceMappingURL=app.bandle.js.map