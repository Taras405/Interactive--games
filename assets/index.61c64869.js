(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector('[data-action="open-modal"]'),s=document.querySelector('[data-action="close-modal"]'),n=document.querySelector(".js-backdrop");e.addEventListener("click",()=>{n.classList.add("is-open")}),s.addEventListener("click",()=>{n.classList.remove("is-open")}),n.addEventListener("click",c=>{c.target===n&&n.classList.remove("is-open")}),document.addEventListener("keydown",c=>{c.key==="Escape"&&n.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".theme-toggle"),s=document.body;(localStorage.getItem("darkMode")==="true"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(e.classList.add("dark"),s.classList.add("dark-mode")),e.addEventListener("click",()=>{e.classList.toggle("dark"),s.classList.toggle("dark-mode"),localStorage.setItem("darkMode",e.classList.contains("dark"))})});const u=document.createElement("input");console.log(u);u.classList.add("input__center__section1");u.placeholder="Введіть рік народження";u.setAttribute("type","text");document.querySelector(".div__center__section1");const m=document.createElement("button");m.classList.add("button__center__section1");m.setAttribute("type","button");console.log(m);const I=document.querySelector(".form__center__section1");I.appendChild(u);I.appendChild(m);const p=document.createElement("input");p.classList.add("input__end__section1");p.placeholder="Введіть число";p.setAttribute("type","text");const y=document.createElement("button");y.classList.add("button__end__section1");y.setAttribute("type","button");const q=document.querySelector(".div__end__section1");q.appendChild(p);q.appendChild(y);const x=["rock","paper","scissors"],O=document.querySelectorAll(".item__choice"),i=document.querySelector(".game__result"),$=document.getElementById("computer-score"),G=document.getElementById("player-score");let E=0,L=0,l=null;O.forEach(e=>{e.addEventListener("click",()=>{l=e.dataset.choice,i.textContent="Натисніть 'Варіант комп'ютера'",i.style.color="black"})});function P(){if(!l){i.textContent="Спочатку зробіть вибір!",i.style.color="red";return}const e=x[Math.floor(Math.random()*x.length)];let s="",n="black";if(l===e)s="Нічия!";else{switch(l){case"rock":s=e==="scissors"?"Ви виграли!":"Комп'ютер виграв!";break;case"paper":s=e==="rock"?"Ви виграли!":"Комп'ютер виграв!";break;case"scissors":s=e==="paper"?"Ви виграли!":"Комп'ютер виграв!";break}s==="Ви виграли!"?(E++,G.textContent=E,n="green"):s==="Комп'ютер виграв!"&&(L++,$.textContent=L,n="red")}i.textContent=`Ви: ${l}, Комп'ютер: ${e}. ${s}`,i.style.color=n,l=null}window.playComputer=P;let w=null;document.querySelectorAll(".calc__ops .calc__btn").forEach(e=>{e.addEventListener("click",()=>{w=e.dataset.op,document.querySelectorAll(".calc__ops .calc__btn").forEach(s=>s.classList.remove("active")),e.classList.add("active")})});document.getElementById("eq").addEventListener("click",()=>{const e=parseFloat(document.getElementById("num1").value),s=parseFloat(document.getElementById("num2").value),n=document.getElementById("calcResult");if(isNaN(e)||isNaN(s)){n.textContent="Введіть числа!";return}let c;switch(w){case"+":c=e+s;break;case"-":c=e-s;break;case"*":c=e*s;break;case"/":c=s!==0?e/s:"Ділення на 0";break;default:c="Оберіть операцію"}n.textContent=c});document.getElementById("timeBtn").addEventListener("click",()=>{const e=parseInt(document.getElementById("minutes").value,10),s=document.getElementById("timeResult");if(isNaN(e)){s.textContent="Введіть хвилини!";return}const n=Math.floor(e/1440),c=Math.floor(e%1440/60),o=e%60;s.textContent=`${n} дн. ${String(c).padStart(2,"0")}:${String(o).padStart(2,"0")}`});const F="/Interactive--games/assets/ball.40150b79.svg",D=document.querySelector(".section5");D.innerHTML=`
    <h2 class="titleGame">Футбол</h2>
    <canvas id="footballGame" width="720px" height="220px"></canvas>
`;const r=document.getElementById("footballGame"),C=r.getContext("2d");r.style=`
  display: block;
  margin: 0 auto;
  border-radius: 37px;
  border: 2px solid black;
  background-color: #5abb58;
`;const t={x:92,y:r.height/2,radius:20,dx:0,dy:0},b=new Image;b.src=F;b.alt="футбольний м'яч";function H(){C.clearRect(0,0,r.width,r.height),C.drawImage(b,t.x-t.radius,t.y-t.radius,t.radius*2,t.radius*2)}function B(){t.x+=t.dx,t.y+=t.dy,t.dx*=.98,t.dy*=.98,Math.abs(t.dx)<.05&&(t.dx=0),Math.abs(t.dy)<.05&&(t.dy=0),t.x-t.radius<0&&(t.x=t.radius,t.dx*=-.7),t.x+t.radius>r.width&&(t.x=r.width-t.radius,t.dx*=-.7),t.y-t.radius<0&&(t.y=t.radius,t.dy*=-.7),t.y+t.radius>r.height&&(t.y=r.height-t.radius,t.dy*=-.7),H(),requestAnimationFrame(B)}r.addEventListener("click",e=>{const s=r.getBoundingClientRect(),n=e.clientX-s.left,c=e.clientY-s.top,o=n-t.x,a=c-t.y,d=Math.sqrt(o*o+a*a);if(d<=t.radius){const g=Math.atan2(a,o)+Math.PI,A=8,N=1-d/t.radius,k=A*N;t.dx=Math.cos(g)*k,t.dy=Math.sin(g)*k}});b.onload=()=>{B()};const h=document.querySelector(".number"),f=document.createElement("h2");f.classList.add("numbers__title");f.textContent="Введіть 3 числа";const v=document.createElement("ul");v.classList.add("list-number");for(let e=1;e<=3;e++){const s=document.createElement("li");s.classList.add("item__number");const n=document.createElement("input");n.classList.add("input__number"),n.type="text",n.placeholder="Введіть число",s.appendChild(n),v.appendChild(s)}const _=document.createElement("p");_.classList.add("number__text");_.textContent="Найбільше число, яке ви ввели - (число)";h.appendChild(f);h.appendChild(v);h.appendChild(_);const S=document.querySelectorAll(".input__number"),M=document.querySelector(".number__result");S.forEach(e=>{e.addEventListener("input",()=>{const s=Array.from(S).map(c=>parseFloat(c.value)||0),n=Math.max(...s);n!==-1/0?M.textContent=`Максимальное число: ${n}`:M.textContent="Введите числа в поля"})});const R=document.querySelector(".section8");R.innerHTML=`
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
