(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector('[data-action="open-modal"]'),n=document.querySelector('[data-action="close-modal"]'),s=document.querySelector(".js-backdrop");e.addEventListener("click",()=>{s.classList.add("is-open")}),n.addEventListener("click",()=>{s.classList.remove("is-open")}),s.addEventListener("click",c=>{c.target===s&&s.classList.remove("is-open")}),document.addEventListener("keydown",c=>{c.key==="Escape"&&s.classList.remove("is-open")})});const u=document.createElement("input");console.log(u);u.classList.add("input__center__section1");u.placeholder="Введіть рік народження";u.setAttribute("type","text");document.querySelector(".div__center__section1");const m=document.createElement("button");m.classList.add("button__center__section1");m.setAttribute("type","button");console.log(m);const I=document.querySelector(".form__center__section1");I.appendChild(u);I.appendChild(m);const p=document.createElement("input");p.classList.add("input__end__section1");p.placeholder="Введіть число";p.setAttribute("type","text");const y=document.createElement("button");y.classList.add("button__end__section1");y.setAttribute("type","button");const M=document.querySelector(".div__end__section1");M.appendChild(p);M.appendChild(y);const E=["rock","paper","scissors"],O=document.querySelectorAll(".item__choice"),d=document.querySelector(".game__result"),$=document.getElementById("computer-score"),G=document.getElementById("player-score");let k=0,L=0,i=null;O.forEach(e=>{e.addEventListener("click",()=>{i=e.dataset.choice,d.textContent="Натисніть 'Варіант комп'ютера'",d.style.color="black"})});function P(){if(!i){d.textContent="Спочатку зробіть вибір!",d.style.color="red";return}const e=E[Math.floor(Math.random()*E.length)];let n="",s="black";if(i===e)n="Нічия!";else{switch(i){case"rock":n=e==="scissors"?"Ви виграли!":"Комп'ютер виграв!";break;case"paper":n=e==="rock"?"Ви виграли!":"Комп'ютер виграв!";break;case"scissors":n=e==="paper"?"Ви виграли!":"Комп'ютер виграв!";break}n==="Ви виграли!"?(k++,G.textContent=k,s="green"):n==="Комп'ютер виграв!"&&(L++,$.textContent=L,s="red")}d.textContent=`Ви: ${i}, Комп'ютер: ${e}. ${n}`,d.style.color=s,i=null}window.playComputer=P;let w=null;document.querySelectorAll(".calc__ops .calc__btn").forEach(e=>{e.addEventListener("click",()=>{w=e.dataset.op,document.querySelectorAll(".calc__ops .calc__btn").forEach(n=>n.classList.remove("active")),e.classList.add("active")})});document.getElementById("eq").addEventListener("click",()=>{const e=parseFloat(document.getElementById("num1").value),n=parseFloat(document.getElementById("num2").value),s=document.getElementById("calcResult");if(isNaN(e)||isNaN(n)){s.textContent="Введіть числа!";return}let c;switch(w){case"+":c=e+n;break;case"-":c=e-n;break;case"*":c=e*n;break;case"/":c=n!==0?e/n:"Ділення на 0";break;default:c="Оберіть операцію"}s.textContent=c});document.getElementById("timeBtn").addEventListener("click",()=>{const e=parseInt(document.getElementById("minutes").value,10),n=document.getElementById("timeResult");if(isNaN(e)){n.textContent="Введіть хвилини!";return}const s=Math.floor(e/1440),c=Math.floor(e%1440/60),o=e%60;n.textContent=`${s} дн. ${String(c).padStart(2,"0")}:${String(o).padStart(2,"0")}`});const F="/Interactive--games/assets/ball.40150b79.svg",H=document.querySelector(".section5");H.innerHTML=`
    <h2 class="titleGame">Футбол</h2>
    <canvas id="footballGame" width="720px" height="220px"></canvas>
`;const r=document.getElementById("footballGame"),C=r.getContext("2d");r.style=`
  display: block;
  margin: 0 auto;
  border-radius: 37px;
  border: 2px solid black;
  background-color: #5abb58;
`;const t={x:92,y:r.height/2,radius:20,dx:0,dy:0},b=new Image;b.src=F;b.alt="футбольний м'яч";function R(){C.clearRect(0,0,r.width,r.height),C.drawImage(b,t.x-t.radius,t.y-t.radius,t.radius*2,t.radius*2)}function B(){t.x+=t.dx,t.y+=t.dy,t.dx*=.98,t.dy*=.98,Math.abs(t.dx)<.05&&(t.dx=0),Math.abs(t.dy)<.05&&(t.dy=0),t.x-t.radius<0&&(t.x=t.radius,t.dx*=-.7),t.x+t.radius>r.width&&(t.x=r.width-t.radius,t.dx*=-.7),t.y-t.radius<0&&(t.y=t.radius,t.dy*=-.7),t.y+t.radius>r.height&&(t.y=r.height-t.radius,t.dy*=-.7),R(),requestAnimationFrame(B)}r.addEventListener("click",e=>{const n=r.getBoundingClientRect(),s=e.clientX-n.left,c=e.clientY-n.top,o=s-t.x,a=c-t.y,l=Math.sqrt(o*o+a*a);if(l<=t.radius){const g=Math.atan2(a,o)+Math.PI,A=8,N=1-l/t.radius,x=A*N;t.dx=Math.cos(g)*x,t.dy=Math.sin(g)*x}});b.onload=()=>{B()};const h=document.querySelector(".number"),f=document.createElement("h2");f.classList.add("numbers__title");f.textContent="Введіть 3 числа";const _=document.createElement("ul");_.classList.add("list-number");for(let e=1;e<=3;e++){const n=document.createElement("li");n.classList.add("item__number");const s=document.createElement("input");s.classList.add("input__number"),s.type="text",s.placeholder="Введіть число",n.appendChild(s),_.appendChild(n)}const v=document.createElement("p");v.classList.add("number__text");v.textContent="Найбільше число, яке ви ввели - (число)";h.appendChild(f);h.appendChild(_);h.appendChild(v);const S=document.querySelectorAll(".input__number"),q=document.querySelector(".number__result");S.forEach(e=>{e.addEventListener("input",()=>{const n=Array.from(S).map(c=>parseFloat(c.value)||0),s=Math.max(...n);s!==-1/0?q.textContent=`Максимальное число: ${s}`:q.textContent="Введите числа в поля"})});const T=document.querySelector(".section8");T.innerHTML=`
    <div class="container">
    <h2 class="titleGame">Обери вченого/их</h2>
    <form class="scientists">
      <div class="scientists__slots">
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
      </div>
      <div class="scientists__tasks">
        <button class="task-btn" type="button">
          Які вчені народилися в 19 ст.
        </button>
        <button class="task-btn" type="button">
          Знайти рік народження Albert Einshtein
        </button>
        <button class="task-btn" type="button">
          Відсортувати вчених за алфавітом
        </button>
        <button class="task-btn" type="button">
          Знайти вчених, прізвища яких починаються на на літеру “С”
        </button>
        <button class="task-btn" type="button">
          Відсортувати вчених за кількістю прожитих років
        </button>
        <button class="task-btn" type="button">
          Видалити всіх вчених, ім’я яких починається на “А”
        </button>
        <button class="task-btn" type="button">
          Знайти вченого, який народився найпізніше
        </button>
        <button class="task-btn" type="button">
          Знайти вченого, який прожив найдовше і вченого, який прожив найменше
        </button>
        <button class="task-btn" type="button">
          Знайти вчених, в яких співпадають перші літери імені і прізвища
        </button>
      </div>
    </form>
  </div>
`;
