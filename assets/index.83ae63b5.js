(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector('[data-action="open-modal"]'),e=document.querySelector('[data-action="close-modal"]'),s=document.querySelector(".js-backdrop");t.addEventListener("click",()=>{s.classList.add("is-open")}),e.addEventListener("click",()=>{s.classList.remove("is-open")}),s.addEventListener("click",c=>{c.target===s&&s.classList.remove("is-open")}),document.addEventListener("keydown",c=>{c.key==="Escape"&&s.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".theme-toggle"),e=document.body;(localStorage.getItem("darkMode")==="true"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(t.classList.add("dark"),e.classList.add("dark-mode")),t.addEventListener("click",()=>{t.classList.toggle("dark"),e.classList.toggle("dark-mode"),localStorage.setItem("darkMode",t.classList.contains("dark"))})});const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAFfKj/FAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMA7yDfuZV9PV2xE94NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaUlEQVQYlW2NCw7DMAhDn8nX97/wRGlaaRsKyDwcgE4n3yN6NxiYzCwbcAR4MpNnVvVmOrgjDEtKP0MRGsfsv2IokLLb0mrt7LnUcMUotqxVR+RL6L1rfQPfX4pE867BWSq3x8zx/KL2AWd9AnS+5ySvAAAAAElFTkSuQmCC",F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAFfKj/FAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMA7yDfuZV9PV2xE94NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaUlEQVQYlW2NCw7DMAhDn8nX97/wRGlaaRsKyDwcgE4n3yN6NxiYzCwbcAR4MpNnVvVmOrgjDEtKP0MRGsfsv2IokLLb0mrt7LnUcMUotqxVR+RL6L1rfQPfX4pE867BWSq3x8zx/KL2AWd9AnS+5ySvAAAAAElFTkSuQmCC",m=document.createElement("input");console.log(m);m.classList.add("input__center__section1");m.placeholder="Введіть рік народження";m.setAttribute("type","text");const h=document.createElement("img");h.src=T;h.alt="lupa";const p=document.createElement("button");p.classList.add("button__center__section1");p.setAttribute("type","button");p.appendChild(h);console.log(p);const N=document.querySelector(".form__center__section1");document.querySelector(".div__center__section1");const R=document.querySelector(".form__end__section1");N.appendChild(m);N.appendChild(p);const A=document.createElement("input");A.classList.add("input__end__section1");A.placeholder="Введіть число";A.setAttribute("type","text");const g=document.createElement("img");g.src=F;g.alt="lupa";const b=document.createElement("button");b.classList.add("button__end__section1");b.setAttribute("type","button");b.appendChild(g);document.querySelector(".div__end__section1");R.appendChild(A);R.appendChild(b);const S=["rock","paper","scissors"],K=document.querySelectorAll(".item__choice"),u=document.querySelector(".game__result"),Q=document.getElementById("computer-score"),U=document.getElementById("player-score");let M=0,w=0,i=null;K.forEach(t=>{t.addEventListener("click",()=>{i=t.dataset.choice,u.textContent="Натисніть 'Варіант комп'ютера'",u.style.color="black"})});function $(){if(!i){u.textContent="Спочатку зробіть вибір!",u.style.color="red";return}const t=S[Math.floor(Math.random()*S.length)];let e="",s="black";if(i===t)e="Нічия!";else{switch(i){case"rock":e=t==="scissors"?"Ви виграли!":"Комп'ютер виграв!";break;case"paper":e=t==="rock"?"Ви виграли!":"Комп'ютер виграв!";break;case"scissors":e=t==="paper"?"Ви виграли!":"Комп'ютер виграв!";break}e==="Ви виграли!"?(M++,U.textContent=M,s="green"):e==="Комп'ютер виграв!"&&(w++,Q.textContent=w,s="red")}u.textContent=`Ви: ${i}, Комп'ютер: ${t}. ${e}`,u.style.color=s,i=null}window.playComputer=$;let V=null;document.querySelectorAll(".calc__ops .calc__btn").forEach(t=>{t.addEventListener("click",()=>{V=t.dataset.op,document.querySelectorAll(".calc__ops .calc__btn").forEach(e=>e.classList.remove("active")),t.classList.add("active")})});document.getElementById("eq").addEventListener("click",()=>{const t=parseFloat(document.getElementById("num1").value),e=parseFloat(document.getElementById("num2").value),s=document.getElementById("calcResult");if(isNaN(t)||isNaN(e)){s.textContent="Введіть числа!";return}let c;switch(V){case"+":c=t+e;break;case"-":c=t-e;break;case"*":c=t*e;break;case"/":c=e!==0?t/e:"Ділення на 0";break;default:c="Оберіть операцію"}s.textContent=c});document.getElementById("timeBtn").addEventListener("click",()=>{const t=parseInt(document.getElementById("minutes").value,10),e=document.getElementById("timeResult");if(isNaN(t)){e.textContent="Введіть хвилини!";return}const s=Math.floor(t/1440),c=Math.floor(t%1440/60),o=t%60;e.textContent=`${s} дн. ${String(c).padStart(2,"0")}:${String(o).padStart(2,"0")}`});const H="/Interactive--games/assets/ball.40150b79.svg",W=document.querySelector(".section5");W.innerHTML=`
    <h2 class="titleGame">Футбол</h2>
    <canvas id="footballGame" width="720px" height="220px"></canvas>
`;const l=document.getElementById("footballGame"),B=l.getContext("2d");l.style=`
  display: block;
  margin: 0 auto;
  border-radius: 37px;
  border: 2px solid black;
  background-color: #5abb58;
`;const n={x:92,y:l.height/2,radius:20,dx:0,dy:0},y=new Image;y.src=H;y.alt="футбольний м'яч";function Y(){B.clearRect(0,0,l.width,l.height),B.drawImage(y,n.x-n.radius,n.y-n.radius,n.radius*2,n.radius*2)}function D(){n.x+=n.dx,n.y+=n.dy,n.dx*=.98,n.dy*=.98,Math.abs(n.dx)<.05&&(n.dx=0),Math.abs(n.dy)<.05&&(n.dy=0),n.x-n.radius<0&&(n.x=n.radius,n.dx*=-.7),n.x+n.radius>l.width&&(n.x=l.width-n.radius,n.dx*=-.7),n.y-n.radius<0&&(n.y=n.radius,n.dy*=-.7),n.y+n.radius>l.height&&(n.y=l.height-n.radius,n.dy*=-.7),Y(),requestAnimationFrame(D)}l.addEventListener("click",t=>{const e=l.getBoundingClientRect(),s=t.clientX-e.left,c=t.clientY-e.top,o=s-n.x,a=c-n.y,d=Math.sqrt(o*o+a*a);if(d<=n.radius){const x=Math.atan2(a,o)+Math.PI,G=8,P=1-d/n.radius,C=G*P;n.dx=Math.cos(x)*C,n.dy=Math.sin(x)*C}});y.onload=()=>{D()};const E=document.querySelector(".number"),v=document.createElement("h2");v.classList.add("numbers__title");v.textContent="Введіть 3 числа";const _=document.createElement("ul");_.classList.add("list-number");for(let t=1;t<=3;t++){const e=document.createElement("li");e.classList.add("item__number");const s=document.createElement("input");s.classList.add("input__number"),s.type="text",s.placeholder="Введіть число",e.appendChild(s),_.appendChild(e)}const L=document.createElement("p");L.classList.add("number__text");L.textContent="Найбільше число, яке ви ввели - (число)";E.appendChild(v);E.appendChild(_);E.appendChild(L);const I=document.querySelectorAll(".input__number"),q=document.querySelector(".number__result");I.forEach(t=>{t.addEventListener("input",()=>{const e=Array.from(I).map(c=>parseFloat(c.value)||0),s=Math.max(...e);s!==-1/0?q.textContent=`Максимальное число: ${s}`:q.textContent="Введите числа в поля"})});const z=document.querySelector(".team-slider__list"),k=document.querySelectorAll(".team-slider__item"),O=document.getElementById("prevBtn"),X=document.getElementById("nextBtn"),j=document.getElementById("dots");let r=0;k.forEach((t,e)=>{const s=document.createElement("li");e===0&&s.classList.add("active"),s.addEventListener("click",()=>Z(e)),j.appendChild(s)});const J=document.querySelectorAll(".team-slider__dots li");function f(t){z.style.transform=`translateX(-${t*100}%)`,J.forEach((e,s)=>{e.classList.toggle("active",s===t)}),O.disabled=t===0,X.disabled=t===k.length-1}function Z(t){r=t,f(r)}O.addEventListener("click",()=>{r>0&&(r--,f(r))});X.addEventListener("click",()=>{r<k.length-1&&(r++,f(r))});f(r);const tt=document.querySelector(".section8");tt.innerHTML=`
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
