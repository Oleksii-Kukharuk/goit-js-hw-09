!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(o),t.addEventListener("click",(function(o){r=setInterval(n,500),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(o){console.log("this mess was stoped"),clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));var r=null;function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));o.style.backgroundColor=t}}();
//# sourceMappingURL=01-color-switcher.9e457734.js.map