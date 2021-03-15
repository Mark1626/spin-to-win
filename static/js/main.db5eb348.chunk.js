(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){"use strict";var o=n(8),a=n.n(o)()(!1);a.push([e.i,"body {\n  margin: auto;\n  padding: 0;\n  width: 80vw;\n  font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  line-height: 1.7;\n  color: #000;\n  transition: background-color 200ms linear;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",""])},23:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),s=(n(18),n(1));const l=s.a.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  border: 2px solid;
  border-radius: 10px;
  margin: 0 20vw;
  padding: 16px;
  width: 50vw;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  /* transition: opacity 200ms linear; */
  font-size: 20px;
  text-align: center;
  transition: opacity 1000ms ease-in-out;
  opacity: 0;
`,c=s.a.div`
  height: fit-content;
  margin: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`,d=s.a.div``,p=s.a.ul`
  list-style: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-padding-start: 0;
`,g=s.a.li`
  float: left;
  margin: 20px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;

  span {
    padding-left: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`,h=s.a.input`
  margin: 20px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  line-height: 1.7;
  font-size: inherit;
  font-family: inherit;
`;var u=n(25);const m=s.a.div`
  position: relative;
  margin: 50px auto;
  width: 20em;
  height: 20em;
  color: #fff;
`,f=s.a.ul`
  position: relative;
  border: 2px solid #000;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: #000;
  overflow: hidden;
  transition: transform 6s cubic-bezier(0, 0.99, 0.44, 0.99);
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.2);
`,b=s.a.li`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  overflow: hidden;
  transform-origin: 0 100%;
  opacity: 1;
  ${({rotate:e,skew:t})=>`transform: rotate(${e}deg) skewY(-${t}deg)`}
`,w=s.a.div`
  position: absolute;
  left: -100%;
  width: 200%;
  height: 200%;
  padding-top: 20px;
  text-align: center;
  ${({color:e})=>`background-color: ${e};`}
  ${({skew:e,rotate:t})=>`transform: skewY(${e}deg) rotate(${t}deg)`}
`,x=s.a.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
`,y=s.a.div`
  position: absolute;
  left: -25px;
  bottom: -25px;
  border-radius: 50%;
  width: 50px;
  background-color: #eee;
  text-align: center;
  line-height: 50px;
  color: black;

  &::before {
    content: "";
    position: absolute;
    top: -9px;
    left: 10px;
    width: 0;
    height: 0;
    border-width: 0 15px 15px 15px;
    border-style: solid;
    border-color: transparent transparent #eee transparent;
  }

  &:hover {
    cursor: pointer;
  }
`,k=({players:e,setWinner:t})=>{e.length<4&&(e=[...e,...e]);const[n,r]=Object(o.useState)(!1),[i,s]=Object(o.useState)(0),l=["#16a085","#2980b9","#34495e","#f39c12","#d35400","#c0392b"],c=e.length,d=360/c,p={transition:"transform 5000ms cubic-bezier(0,.99,.44,.99)",transform:"rotate(0deg)"},g={entered:{transform:"rotate(0deg)"},entering:{transform:"rotate(0deg)"},exiting:{transform:`rotate(${i}deg)`},exited:{transform:`rotate(${i}deg)`}};return Object(o.useEffect)(()=>{r(!1)},[n]),a.a.createElement(m,null,a.a.createElement(u.a,{in:n,timeout:5e3},t=>a.a.createElement(f,{style:{...p,...g[t]}},e.map(({name:e},t)=>{const n=Math.floor(d*t),o=90-d;return a.a.createElement(b,{key:t,skew:o,rotate:n},a.a.createElement(w,{skew:o,rotate:d/2,color:l[t%l.length]},e))}))),a.a.createElement(x,null,a.a.createElement(y,{onClick:()=>{const n=1+Math.floor(360*Math.random()),o=i+1800+n,a=c-Math.floor(o%360/d)-1;setTimeout(()=>{t(e[a].name)},5e3),r(!0),s(o)}},"Spin")))};var v=()=>{const{players:e,persistPlayers:t}=(()=>{const e=[{name:"Player1",checked:!0},{name:"Player2",checked:!0},{name:"Player3",checked:!0},{name:"Player4",checked:!0}],[t,n]=Object(o.useState)(e);return Object(o.useEffect)(()=>{let t=JSON.parse(localStorage.getItem("spin-to-win-players"));t||(t=e),n(t)},[]),{players:t,persistPlayers:e=>{localStorage.setItem("spin-to-win-players",JSON.stringify(e)),n(e)}}})(),[n,r]=Object(o.useState)(""),[i,s]=Object(o.useState)(""),[m,f]=Object(o.useState)(!1),b={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};return Object(o.useEffect)(()=>{setTimeout(()=>{f(!1)},1e3)},[m]),a.a.createElement(a.a.Fragment,null,a.a.createElement(c,null,a.a.createElement("span",null,"The Winner is ",n)),a.a.createElement(u.a,{in:m,timeout:1e3},e=>a.a.createElement(l,{style:{...b[e]}},"Player already exists")),a.a.createElement(k,{players:e.filter(e=>e.checked),setWinner:r}),a.a.createElement(d,null,a.a.createElement(p,null,e.map((n,o)=>a.a.createElement(g,{key:o},a.a.createElement("input",{type:"checkbox",onChange:a=>{if(n.checked!==a.target.checked){const n=[...e];n[o].checked=a.target.checked,t(n)}},checked:n.checked,value:n.name}),n.name,a.a.createElement("span",{onClick:()=>{const n=[...e];n.splice(o,1),t(n)}},"\u2716")))),a.a.createElement(h,{onKeyUp:n=>{13===n.keyCode&&(e.find(e=>i===e.name)?f(!0):(t([...e,{name:i,checked:!0}]),s("")))},onChange:e=>s(e.target.value),value:i,type:"text",placeholder:"Add player"})))};const E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/spin-to-win",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="/spin-to-win/service-worker.js";E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):S(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[23,1,2]]]);