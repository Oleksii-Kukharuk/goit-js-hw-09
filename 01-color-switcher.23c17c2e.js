const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");console.log(o),t.addEventListener("click",(function(o){n=setInterval(r,500),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(o){console.log("this mess was stoped"),clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}));let n=null;function r(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;o.style.backgroundColor=t}
//# sourceMappingURL=01-color-switcher.23c17c2e.js.map