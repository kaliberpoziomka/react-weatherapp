(this["webpackJsonpreact-weatherapp"]=this["webpackJsonpreact-weatherapp"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),r=a.n(o),l=(a(17),a(18),a(19),a(20),a(21),a(1)),s=a(8),i=a(3),d=function(){var e=document.querySelector(".button-wrapper"),t=document.querySelector(".search"),a=document.querySelector(".content-box");e.classList.remove("transform"),t.classList.remove("transform"),setTimeout((function(){a.classList.remove("hide")}),700)},u=function(){var e=document.querySelector(".wave");e.classList.add("wave-animate"),setTimeout((function(){e.classList.remove("wave-animate")}),1e3)};var m=function(){document.querySelector(".content-box").classList.remove("light-sun","light-clouds","light-rain","light-suncloud","dark-sun","dark-clouds","dark-rain","dark-suncloud")},h=function(){u(),d(),m()};var g=function(){var e=document.querySelector(".search__input");e.classList.add("toggle"),setTimeout((function(){e.classList.remove("toggle")}),1);var t=document.querySelector(".content-box").classList,a=document.querySelector(".content-box").classList[1];switch(m(),a){case"light-sun":t.add("dark-sun");break;case"dark-sun":t.add("light-sun");break;case"light-suncloud":t.add("dark-suncloud");break;case"dark-suncloud":t.add("light-suncloud");break;case"light-clouds":t.add("dark-clouds");break;case"dark-clouds":t.add("light-clouds");break;case"light-rain":t.add("dark-rain");break;case"dark-rain":t.add("light-rain")}var n=document.querySelector(".wrapper").classList,c=document.querySelector(".wrapper").classList[1];switch(document.querySelector(".wrapper").classList.remove("light-logo","dark-logo"),c){case"light-logo":n.add("dark-logo");break;case"dark-logo":n.add("light-logo")}};function f(){var e=Object(s.a)(["\n:root {\n  --main-color: ",";\n  --light: ",";\n  --shadow: ",";\n  --font-color: ",";\n}\n"]);return f=function(){return e},e}var p=Object(i.b)(f(),(function(e){return"dark"===e.theme.mode?"#091921":"#ecf0f3"}),(function(e){return"dark"===e.theme.mode?"rgba(255, 255, 255, 0.05)":"#ffffff"}),(function(e){return"dark"===e.theme.mode?"rgba(0, 0, 0, 0.3)":"#d1d9e6"}),(function(e){return"dark"===e.theme.mode?"#ecf0f3":"#091921"}));var v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)({}),s=Object(l.a)(r,2),d=s[0],u=s[1],m=Object(n.useState)({mode:"light"}),f=Object(l.a)(m,2),v=f[0],k=f[1],b=Object(n.useState)("light"),w=Object(l.a)(b,2),E=w[0],y=w[1],S=document.querySelector(".content-box");return c.a.createElement(i.a,{theme:v},c.a.createElement(p,null),c.a.createElement("div",{className:"wrapper light-logo"},c.a.createElement("div",{className:"top-wrapper"},c.a.createElement("div",{className:"switch-mode"},c.a.createElement("label",{className:"label"},c.a.createElement("div",{className:"toggle"},c.a.createElement("input",{onChange:function(e){g(),k("dark"===v.mode?{mode:"light"}:{mode:"dark"}),y("light"===E?"dark":"light")},className:"toggle-state",type:"checkbox",name:"check",value:"check"}),c.a.createElement("div",{className:"indicator"})),c.a.createElement("div",{className:"label-text"},E," mode"))),c.a.createElement("div",{className:"search transform"},c.a.createElement("input",{type:"text",className:"search__input",placeholder:"Find your city",onChange:function(e){return o(e.target.value)},value:a,required:!0})),c.a.createElement("div",{className:"button-wrapper transform"},c.a.createElement("div",{className:"wave"}),c.a.createElement("button",{onClick:function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("15edd3579364fda5d71c71e38acd7978")).then((function(e){return e.json()})).then((function(e){u(e),console.log(e),o(""),e.clouds.all<10?(S.classList.add("".concat(E,"-sun")),console.log(e.rain),console.log(e.clouds.all)):e.clouds.all<50?S.classList.add("".concat(E,"-suncloud")):e.clouds.all>=50&&(void 0!=e.rain?S.classList.add("".concat(E,"-rain")):S.classList.add("".concat(E,"-clouds")))})).catch((function(e){console.log(e.cod)})),h()}},"Search"))),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"content-box hide"},"undefined"!=typeof d.main?c.a.createElement("div",{className:"content-info"},c.a.createElement("p",null,d.name,", ",d.sys.country),c.a.createElement("p",null,"Clouds: ",d.clouds.all,"%"),c.a.createElement("p",null," ",d.weather[0].description),c.a.createElement("p",null," ",Math.floor(d.main.temp-273.15)," \xb0C")):c.a.createElement("div",null,c.a.createElement("p",null,"We can't find that city, please check spelling"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.aefe8730.chunk.js.map