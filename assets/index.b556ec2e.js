(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector('[data-action="open-modal"]'),e=document.querySelector('[data-action="close-modal"]'),s=document.querySelector(".js-backdrop");t.addEventListener("click",()=>{s.classList.add("is-open")}),e.addEventListener("click",()=>{s.classList.remove("is-open")}),s.addEventListener("click",c=>{c.target===s&&s.classList.remove("is-open")}),document.addEventListener("keydown",c=>{c.key==="Escape"&&s.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".theme-toggle"),e=document.body;(localStorage.getItem("darkMode")==="true"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(t.classList.add("dark"),e.classList.add("dark-mode")),t.addEventListener("click",()=>{t.classList.toggle("dark"),e.classList.toggle("dark-mode"),localStorage.setItem("darkMode",t.classList.contains("dark"))})});const m=document.createElement("input");console.log(m);m.classList.add("input__center__section1");m.placeholder="Введіть рік народження";m.setAttribute("type","text");document.querySelector(".div__center__section1");const p=document.createElement("button");p.classList.add("button__center__section1");p.setAttribute("type","button");console.log(p);const w=document.querySelector(".form__center__section1");w.appendChild(m);w.appendChild(p);const b=document.createElement("input");b.classList.add("input__end__section1");b.placeholder="Введіть число";b.setAttribute("type","text");const f=document.createElement("button");f.classList.add("button__end__section1");f.setAttribute("type","button");const A=document.querySelector(".div__end__section1");A.appendChild(b);A.appendChild(f);const C=["rock","paper","scissors"],D=document.querySelectorAll(".item__choice"),u=document.querySelector(".game__result"),H=document.getElementById("computer-score"),R=document.getElementById("player-score");let S=0,I=0,i=null;D.forEach(t=>{t.addEventListener("click",()=>{i=t.dataset.choice,u.textContent="Натисніть 'Варіант комп'ютера'",u.style.color="black"})});function T(){if(!i){u.textContent="Спочатку зробіть вибір!",u.style.color="red";return}const t=C[Math.floor(Math.random()*C.length)];let e="",s="black";if(i===t)e="Нічия!";else{switch(i){case"rock":e=t==="scissors"?"Ви виграли!":"Комп'ютер виграв!";break;case"paper":e=t==="rock"?"Ви виграли!":"Комп'ютер виграв!";break;case"scissors":e=t==="paper"?"Ви виграли!":"Комп'ютер виграв!";break}e==="Ви виграли!"?(S++,R.textContent=S,s="green"):e==="Комп'ютер виграв!"&&(I++,H.textContent=I,s="red")}u.textContent=`Ви: ${i}, Комп'ютер: ${t}. ${e}`,u.style.color=s,i=null}window.playComputer=T;let N=null;document.querySelectorAll(".calc__ops .calc__btn").forEach(t=>{t.addEventListener("click",()=>{N=t.dataset.op,document.querySelectorAll(".calc__ops .calc__btn").forEach(e=>e.classList.remove("active")),t.classList.add("active")})});document.getElementById("eq").addEventListener("click",()=>{const t=parseFloat(document.getElementById("num1").value),e=parseFloat(document.getElementById("num2").value),s=document.getElementById("calcResult");if(isNaN(t)||isNaN(e)){s.textContent="Введіть числа!";return}let c;switch(N){case"+":c=t+e;break;case"-":c=t-e;break;case"*":c=t*e;break;case"/":c=e!==0?t/e:"Ділення на 0";break;default:c="Оберіть операцію"}s.textContent=c});document.getElementById("timeBtn").addEventListener("click",()=>{const t=parseInt(document.getElementById("minutes").value,10),e=document.getElementById("timeResult");if(isNaN(t)){e.textContent="Введіть хвилини!";return}const s=Math.floor(t/1440),c=Math.floor(t%1440/60),o=t%60;e.textContent=`${s} дн. ${String(c).padStart(2,"0")}:${String(o).padStart(2,"0")}`});const X="/Interactive--games/assets/ball.40150b79.svg",V=document.querySelector(".section5");V.innerHTML=`
    <h2 class="titleGame">Футбол</h2>
    <canvas id="footballGame" width="720px" height="220px"></canvas>
`;const d=document.getElementById("footballGame"),q=d.getContext("2d");d.style=`
  display: block;
  margin: 0 auto;
  border-radius: 37px;
  border: 2px solid black;
  background-color: #5abb58;
`;const n={x:92,y:d.height/2,radius:20,dx:0,dy:0},y=new Image;y.src=X;y.alt="футбольний м'яч";function Y(){q.clearRect(0,0,d.width,d.height),q.drawImage(y,n.x-n.radius,n.y-n.radius,n.radius*2,n.radius*2)}function O(){n.x+=n.dx,n.y+=n.dy,n.dx*=.98,n.dy*=.98,Math.abs(n.dx)<.05&&(n.dx=0),Math.abs(n.dy)<.05&&(n.dy=0),n.x-n.radius<0&&(n.x=n.radius,n.dx*=-.7),n.x+n.radius>d.width&&(n.x=d.width-n.radius,n.dx*=-.7),n.y-n.radius<0&&(n.y=n.radius,n.dy*=-.7),n.y+n.radius>d.height&&(n.y=d.height-n.radius,n.dy*=-.7),Y(),requestAnimationFrame(O)}d.addEventListener("click",t=>{const e=d.getBoundingClientRect(),s=t.clientX-e.left,c=t.clientY-e.top,o=s-n.x,a=c-n.y,r=Math.sqrt(o*o+a*a);if(r<=n.radius){const L=Math.atan2(a,o)+Math.PI,P=8,F=1-r/n.radius,x=P*F;n.dx=Math.cos(L)*x,n.dy=Math.sin(L)*x}});y.onload=()=>{O()};const v=document.querySelector(".number"),_=document.createElement("h2");_.classList.add("numbers__title");_.textContent="Введіть 3 числа";const g=document.createElement("ul");g.classList.add("list-number");for(let t=1;t<=3;t++){const e=document.createElement("li");e.classList.add("item__number");const s=document.createElement("input");s.classList.add("input__number"),s.type="text",s.placeholder="Введіть число",e.appendChild(s),g.appendChild(e)}const E=document.createElement("p");E.classList.add("number__text");E.textContent="Найбільше число, яке ви ввели - (число)";v.appendChild(_);v.appendChild(g);v.appendChild(E);const B=document.querySelectorAll(".input__number"),M=document.querySelector(".number__result");B.forEach(t=>{t.addEventListener("input",()=>{const e=Array.from(B).map(c=>parseFloat(c.value)||0),s=Math.max(...e);s!==-1/0?M.textContent=`Максимальное число: ${s}`:M.textContent="Введите числа в поля"})});const j=document.querySelector(".team-slider__list"),k=document.querySelectorAll(".team-slider__item"),$=document.getElementById("prevBtn"),G=document.getElementById("nextBtn"),K=document.getElementById("dots");let l=0;k.forEach((t,e)=>{const s=document.createElement("li");e===0&&s.classList.add("active"),s.addEventListener("click",()=>J(e)),K.appendChild(s)});const z=document.querySelectorAll(".team-slider__dots li");function h(t){j.style.transform=`translateX(-${t*100}%)`,z.forEach((e,s)=>{e.classList.toggle("active",s===t)}),$.disabled=t===0,G.disabled=t===k.length-1}function J(t){l=t,h(l)}$.addEventListener("click",()=>{l>0&&(l--,h(l))});G.addEventListener("click",()=>{l<k.length-1&&(l++,h(l))});h(l);const Q=document.querySelector(".section8");Q.innerHTML=`
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
