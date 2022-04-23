(()=>{"use strict";function e(e){const a=document.querySelector(e);return Number.parseFloat(a.value)}const a=e=>parseFloat((4*e).toFixed(2)),t=e=>parseFloat((e**2).toFixed(2)),r=(e,a)=>parseFloat((e*a).toFixed(2)),s=(e,a,t)=>parseFloat((e+a+t).toFixed(2)),n=(e,a)=>Math.sqrt(e**2-a**2/4),c=(e,a,t,r)=>2/t*Math.sqrt(r*(r-e)*(r-a)*(r-t)),o=e=>parseFloat((4*e).toFixed(2)),l=(e,a)=>parseFloat((e*a/2).toFixed(2)),i=e=>parseFloat((Math.pow(e,2)*Math.PI).toFixed(2)),u=s=>{const n={sS:e("#squareInput"),rH:e("#rectangleHeightInput"),rB:e("#rectangleBaseInput"),dS:e("#diamondSideInput"),dD:e("#diamondDiagonalInput"),cR:e("#circleInput")},c=(u=n.dS,p=n.dD,parseFloat(Math.sqrt(4*u**2-p**2).toFixed(2)));var u,p;const d={squarePerimeter:`${a(n.sS)}<span>cm</span>`,squareArea:`${t(n.sS)}<span>cm<sup>2</sup></span>`,rectanglePerimeter:`${b=n.rB,g=n.rH,parseFloat((2*(b+g)).toFixed(2))}<span>cm</span>`,rectangleArea:`${r(n.rB,n.rH)}<span>cm<sup>2</sup></span>`,diamondDiagonal:`${c}<span>cm</span>`,diamondPerimeter:`${o(n.dS)}<span>cm</span>`,diamondArea:`${l(c,n.dD)}<span>cm<sup>2</sup></span>`,circumference:`${m=n.cR,parseFloat((2*m*Math.PI).toFixed(2))}<span>cm</span>`,circleArea:`${i(n.cR)}<span>cm<sup>2</sup></span>`};var m,b,g;if(!1===isNaN(n.sS))return document.querySelector("#"+s).innerHTML=d[s]},p=a=>{const t={a:e("#triangleSideAInput"),b:e("#triangleSideBInput"),base:e("#triangleBaseInput")},r=parseFloat(t.a*Math.sqrt(2).toFixed(1)),o=Math.ceil(t.a**2+t.b**2),l=t.base**2,i=t.a===t.b&&t.b===t.base,u=t.a===t.b&&t.base<r,p=t.a===t.b&&t.base==r,d=t.a===t.b&&t.base>r,m=t.a<t.b&&t.b<t.base&&o>l,b=t.a<t.b&&o>t.base**2*.983&&o<=l,g=t.a<t.b&&t.b<t.base&&o<l,F=s(t.a,t.b,t.base)/2,q=e=>document.querySelector("#triangleType").innerHTML=` ${e}`;let S;i?(S=(e=>Math.sqrt(3)*e/2)(t.a),q("Equilatero - Acutángulo")):u?(S=n(t.a,t.base),q("Isósceles - Acutángulo")):p?(S=n(t.a,t.base),q("Rectángulo - Isósceles")):d?(S=n(t.a,t.base),q("Isósceles - Obtusángulo")):m?(S=c(t.a,t.b,t.base,F),q("Escaleno - Acutángulo")):b?(S=t.a*t.b/t.base,q("Rectángulo - Escaleno")):g?(S=c(t.a,t.b,t.base,F),q("Escaleno - Obtusángulo")):alert("Ingresa correctamente todos los lados del triangulo, lee la guía");const I={triangleHeight:`${parseFloat(S.toFixed(2))}<span>cm</span>`,trianglePerimeter:`${s(t.a,t.b,t.base)}<span>cm</span>`,triangleArea:`${A=t.base,x=S,parseFloat((A*x/2).toFixed(2))}<span>cm<sup>2</sup></span>`};var A,x;return document.querySelector("#"+a).innerHTML=I[a]};document.querySelector(".squareCalc").onclick=()=>{u("squarePerimeter"),u("squareArea")},document.querySelector(".rectangleCalc").onclick=()=>{u("rectanglePerimeter"),u("rectangleArea")},document.querySelector(".diamondCalc").onclick=()=>{u("diamondDiagonal"),u("diamondPerimeter"),u("diamondArea")},document.querySelector(".circleCalc").onclick=()=>{u("circumference"),u("circleArea")},document.querySelector(".triangleCalc").onclick=()=>{p("triangleHeight"),p("trianglePerimeter"),p("triangleArea")}})();