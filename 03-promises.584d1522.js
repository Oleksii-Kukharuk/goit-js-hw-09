!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,n){var t=Math.random()>.3;new Promise((function(o,i){setTimeout((function(){t?r.Notify.success("Fulfilled promise ".concat(e," in ").concat(n,"ms")):r.Notify.failure("Rejcted promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector("form").addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"===e.target.nodeName)for(var n=e.currentTarget.elements,t=n.delay,o=n.step,r=n.amount,a=Number(t.value),u=Number(o.value),c=Number(r.value),l=1;l<=c;l+=1)i(l,a),a+=u}))}();
//# sourceMappingURL=03-promises.584d1522.js.map
