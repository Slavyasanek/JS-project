const t=document.querySelector(".game"),e=document.querySelectorAll(".game__inner"),n=document.querySelector(".result__text"),o=document.querySelector(".result__again");let a=0;const r=t=>{const e=t.target;if(!e.innerHTML){if(e.innerHTML="x",l(),a+=1,a>4)return;i()}};t.addEventListener("click",r);const i=()=>{let t=Number.parseInt(Math.floor(8*Math.random()+0));e[t].innerHTML?i():e[t].innerHTML="o"},l=()=>{const a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let i of a)e[i[0]].textContent==e[i[1]].textContent&&e[i[1]].textContent==e[i[2]].textContent&&""!=e[i[0]].textContent&&("x"===e[i[0]].textContent&&"x"===e[i[1]].textContent&&"x"===e[i[2]].textContent?(n.textContent="You win!",o.classList.remove("disabled"),o.textContent="Wanna play again?",t.removeEventListener("click",r)):(n.textContent="Bot winned:(",o.classList.remove("disabled"),o.textContent="Wanna play again?",t.removeEventListener("click",r)));(()=>{let t=!1;for(let n=0;n<e.length;n++){if(!e[n].hasChildNodes()){t=!0;break}t=!1}return t})()||(n.textContent="It is a draw!",o.classList.remove("disabled"),o.textContent="Wanna play again?",t.removeEventListener("click",r))};o.addEventListener("click",clearGame=()=>{e.forEach((t=>t.innerHTML="")),n.textContent="",o.textContent="",o.classList.add("disabled"),a=0,t.addEventListener("click",r)});
//# sourceMappingURL=index.055e5d95.js.map