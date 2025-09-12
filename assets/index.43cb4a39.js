(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerPolicy&&(a.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?a.credentials="include":c.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(c){if(c.ep)return;c.ep=!0;const a=s(c);fetch(c.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector('[data-action="open-modal"]'),n=document.querySelector('[data-action="close-modal"]'),s=document.querySelector(".js-backdrop");t.addEventListener("click",()=>{s.classList.add("is-open")}),n.addEventListener("click",()=>{s.classList.remove("is-open")}),s.addEventListener("click",o=>{o.target===s&&s.classList.remove("is-open")}),document.addEventListener("keydown",o=>{o.key==="Escape"&&s.classList.remove("is-open")})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".theme-toggle"),n=document.body;(localStorage.getItem("darkMode")==="true"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(t.classList.add("dark"),n.classList.add("dark-mode")),t.addEventListener("click",()=>{t.classList.toggle("dark"),n.classList.toggle("dark-mode"),localStorage.setItem("darkMode",t.classList.contains("dark"))})});const F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAFfKj/FAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMA7yDfuZV9PV2xE94NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaUlEQVQYlW2NCw7DMAhDn8nX97/wRGlaaRsKyDwcgE4n3yN6NxiYzCwbcAR4MpNnVvVmOrgjDEtKP0MRGsfsv2IokLLb0mrt7LnUcMUotqxVR+RL6L1rfQPfX4pE867BWSq3x8zx/KL2AWd9AnS+5ySvAAAAAElFTkSuQmCC",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAFfKj/FAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMA7yDfuZV9PV2xE94NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaUlEQVQYlW2NCw7DMAhDn8nX97/wRGlaaRsKyDwcgE4n3yN6NxiYzCwbcAR4MpNnVvVmOrgjDEtKP0MRGsfsv2IokLLb0mrt7LnUcMUotqxVR+RL6L1rfQPfX4pE867BWSq3x8zx/KL2AWd9AnS+5ySvAAAAAElFTkSuQmCC",m=document.createElement("input");console.log(m);m.classList.add("input__center__section1");m.placeholder="Введіть рік народження";m.setAttribute("type","text");const g=document.createElement("img");g.src=F;g.alt="lupa";const p=document.createElement("button");p.classList.add("button__center__section1");p.setAttribute("type","button");p.appendChild(g);console.log(p);const R=document.querySelector(".form__center__section1");document.querySelector(".div__center__section1");const V=document.querySelector(".form__end__section1");R.appendChild(m);R.appendChild(p);const A=document.createElement("input");A.classList.add("input__end__section1");A.placeholder="Введіть число";A.setAttribute("type","text");const v=document.createElement("img");v.src=K;v.alt="lupa";const y=document.createElement("button");y.classList.add("button__end__section1");y.setAttribute("type","button");y.appendChild(v);document.querySelector(".div__end__section1");V.appendChild(A);V.appendChild(y);const M=["камінь","папір","ножиці"],h=document.querySelectorAll(".item__choice"),u=document.querySelector(".game__result"),Q=document.getElementById("computer-score"),U=document.getElementById("player-score");let B=0,w=0,i=null;h.forEach(t=>{t.addEventListener("click",()=>{i=t.dataset.choice,u.textContent="Натисніть 'Варіант комп'ютера'",u.style.color="black",h.forEach(n=>n.classList.remove("selected")),t.classList.add("selected")})});function $(){if(!i){u.textContent="Спочатку зробіть вибір!",u.style.color="red";return}const t=M[Math.floor(Math.random()*M.length)];let n="",s="black";i===t?n="Нічия!":i==="камінь"&&t==="ножиці"||i==="папір"&&t==="камінь"||i==="ножиці"&&t==="папір"?(n="Ви виграли!",B++,U.textContent=B,s="green"):(n="Комп'ютер виграв!",w++,Q.textContent=w,s="red"),u.textContent=`Ви: ${i}, Комп'ютер: ${t}. ${n}`,u.style.color=s,h.forEach(o=>o.classList.remove("selected")),i=null}window.playComputer=$;let D=null;document.querySelectorAll(".calc__ops .calc__btn").forEach(t=>{t.addEventListener("click",()=>{D=t.dataset.op,document.querySelectorAll(".calc__ops .calc__btn").forEach(n=>n.classList.remove("active")),t.classList.add("active")})});document.getElementById("eq").addEventListener("click",()=>{const t=parseFloat(document.getElementById("num1").value),n=parseFloat(document.getElementById("num2").value),s=document.getElementById("calcResult");if(isNaN(t)||isNaN(n)){s.textContent="Введіть числа!";return}let o;switch(D){case"+":o=t+n;break;case"-":o=t-n;break;case"*":o=t*n;break;case"/":o=n!==0?t/n:"Ділення на 0";break;default:o="Оберіть операцію"}s.textContent=o});document.getElementById("timeBtn").addEventListener("click",()=>{const t=parseInt(document.getElementById("minutes").value,10),n=document.getElementById("timeResult");if(isNaN(t)){n.textContent="Введіть хвилини!";return}const s=Math.floor(t/1440),o=Math.floor(t%1440/60),c=t%60;n.textContent=`${s} дн. ${String(o).padStart(2,"0")}:${String(c).padStart(2,"0")}`});const H="/Interactive--games/assets/ball.40150b79.svg",W=document.querySelector(".section5");W.innerHTML=`
    <h2 class="titleGame">Футбол</h2>
    <canvas id="footballGame" width="720px" height="220px"></canvas>
`;const l=document.getElementById("footballGame"),I=l.getContext("2d");l.style=`
  display: block;
  margin: 0 auto;
  border-radius: 37px;
  border: 2px solid black;
  background-color: #5abb58;
`;const e={x:92,y:l.height/2,radius:20,dx:0,dy:0},b=new Image;b.src=H;b.alt="футбольний м'яч";function Y(){I.clearRect(0,0,l.width,l.height),I.drawImage(b,e.x-e.radius,e.y-e.radius,e.radius*2,e.radius*2)}function O(){e.x+=e.dx,e.y+=e.dy,e.dx*=.98,e.dy*=.98,Math.abs(e.dx)<.05&&(e.dx=0),Math.abs(e.dy)<.05&&(e.dy=0),e.x-e.radius<0&&(e.x=e.radius,e.dx*=-.7),e.x+e.radius>l.width&&(e.x=l.width-e.radius,e.dx*=-.7),e.y-e.radius<0&&(e.y=e.radius,e.dy*=-.7),e.y+e.radius>l.height&&(e.y=l.height-e.radius,e.dy*=-.7),Y(),requestAnimationFrame(O)}l.addEventListener("click",t=>{const n=l.getBoundingClientRect(),s=t.clientX-n.left,o=t.clientY-n.top,c=s-e.x,a=o-e.y,r=Math.sqrt(c*c+a*a);if(r<=e.radius){const S=Math.atan2(a,c)+Math.PI,P=8,T=1-r/e.radius,k=P*T;e.dx=Math.cos(S)*k,e.dy=Math.sin(S)*k}});b.onload=()=>{O()};const E=document.querySelector(".number"),_=document.createElement("h2");_.classList.add("numbers__title");_.textContent="Введіть 3 числа";const L=document.createElement("ul");L.classList.add("list-number");for(let t=1;t<=3;t++){const n=document.createElement("li");n.classList.add("item__number");const s=document.createElement("input");s.classList.add("input__number"),s.type="text",s.placeholder="Введіть число",n.appendChild(s),L.appendChild(n)}const x=document.createElement("p");x.classList.add("number__text");x.textContent="Найбільше число, яке ви ввели - (число)";E.appendChild(_);E.appendChild(L);E.appendChild(x);const q=document.querySelectorAll(".input__number"),N=document.querySelector(".number__text");q.forEach(t=>{t.addEventListener("input",()=>{const n=Array.from(q).map(o=>parseFloat(o.value)||0),s=Math.max(...n);s!==-1/0?N.textContent=`Максимальное число: ${s}`:N.textContent="Введите числа в поля"})});const z=document.querySelector(".team-slider__list"),C=document.querySelectorAll(".team-slider__item"),X=document.getElementById("prevBtn"),G=document.getElementById("nextBtn"),j=document.getElementById("dots");let d=0;C.forEach((t,n)=>{const s=document.createElement("li");n===0&&s.classList.add("active"),s.addEventListener("click",()=>Z(n)),j.appendChild(s)});const J=document.querySelectorAll(".team-slider__dots li");function f(t){z.style.transform=`translateX(-${t*100}%)`,J.forEach((n,s)=>{n.classList.toggle("active",s===t)}),X.disabled=t===0,G.disabled=t===C.length-1}function Z(t){d=t,f(d)}X.addEventListener("click",()=>{d>0&&(d--,f(d))});G.addEventListener("click",()=>{d<C.length-1&&(d++,f(d))});f(d);const tt=document.querySelector(".section8");tt.innerHTML=`
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
