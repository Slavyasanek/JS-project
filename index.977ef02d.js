!function(){var e=document.querySelector(".game"),n=document.querySelectorAll(".game__inner");document.querySelector(".result__text"),document.querySelector("result__again");e.addEventListener("click",makeStep=function(e){var n=e.target;n.innerHTML||(n.innerHTML="x",r(),n.removeEventListener("click",makeStep))});var r=function(){var e=Number.parseInt(Math.floor(8*Math.random()+0));n[e].innerHTML?r():n[e].innerHTML="o"};console.log(e.children)}();
//# sourceMappingURL=index.977ef02d.js.map
