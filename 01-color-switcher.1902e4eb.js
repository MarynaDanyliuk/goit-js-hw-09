const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(n=>{n.preventDefault(),e=setInterval((()=>{console.log(t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`)}),1e3)})),t.startBtn.addEventListener("click",(function(e){t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),console.log(`Interval with id ${e} has stopped!`),t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1902e4eb.js.map
