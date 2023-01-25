(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){n.exports=t(28)},23:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,d,l,u,s,b,m,p,g,f,h,x,k,j,O,w,v=t(0),E=t.n(v),D=t(10),y=t.n(D),T=(t(23),t(3)),C=t(1),z=t(2),S=z.b.form(a||(a=Object(C.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n    padding: 20px;\n\n    @media (max-width: 767px) {\n        display: flex;\n        flex-direction: column;\n    }\n"]))),N=z.b.input(o||(o=Object(C.a)(["\n    padding: 10px;\n    border: 1px solid black;\n"]))),H=z.b.button(r||(r=Object(C.a)(["\n    border: none;\n    background-color:hsl(180, 100%, 25%);\n    color: white;\n    padding: 10px;\n    transition: 1s;\n    cursor: pointer;\n\n        &:hover {\n            background: hsl(180, 100%, 35%);\n            transform: scale(1.1);\n        }\n\n        &:active {\n            background: hsl(180, 100%, 35%);\n        }\n"]))),F=function(n){var e=n.addNewTask,t=Object(v.useState)(""),a=Object(T.a)(t,2),o=a[0],r=a[1],i=Object(v.useRef)(null);return E.a.createElement(S,{onSubmit:function(n){n.preventDefault(),""!==o&&(e(o.trim()),r(""))}},E.a.createElement(N,{ref:i,value:o,type:"text",id:"myText",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),E.a.createElement(H,{onClick:function(){i.current.focus()},hover:!0,active:!0},"Dodaj zadanie"))},A=z.b.ul(i||(i=Object(C.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0px;\n    word-break: break-word;\n"]))),I=z.b.li(c||(c=Object(C.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    padding: 20px;\n    align-items: center;\n    border-bottom: 1px solid #ddd;\n\n    ","\n\n    @media(max-width: 767px) {\n        padding: 5px;\n    }\n"])),function(n){return n.hidden&&Object(z.a)(d||(d=Object(C.a)(["\n        display: none;\n    "])))}),J=z.b.span(l||(l=Object(C.a)(["\n    ","\n"])),function(n){return n.done&&Object(z.a)(u||(u=Object(C.a)(["\n        text-decoration: line-through;\n    "])))}),L=z.b.button(s||(s=Object(C.a)(["\n    border: none;\n    color: white;\n    width: 40px;\n    height: 40px;\n    padding: 0;\n    transition: 1s;\n    cursor: pointer;\n\n    ","\n\n    ","\n\n"])),function(n){return n.toggleDone&&Object(z.a)(b||(b=Object(C.a)(["\n        background: hsl(120, 100%, 25%);\n\n        &:hover {\n            background: hsl(120, 100%, 35%);\n        }\n    "])))},function(n){return n.remove&&Object(z.a)(m||(m=Object(C.a)(["\n        background: hsl(0, 100%, 50%);\n\n        &:hover {\n            background: hsl(0, 100%, 60%);\n        }\n    "])))}),P=function(n){var e=n.tasks,t=n.hideDone,a=n.removeTask,o=n.toggleTaskDone;return E.a.createElement(A,null,e.map(function(n){return E.a.createElement(I,{key:n.id,hidden:n.done&&t},E.a.createElement(L,{onClick:function(){return o(n.id)},toggleDone:!0},n.done?"\u2714":""),E.a.createElement(J,{done:n.done},n.content),E.a.createElement(L,{onClick:function(){return a(n.id)},remove:!0},"\ud83d\uddd1"))}))},B=z.b.div(p||(p=Object(C.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n"]))),R=z.b.button(g||(g=Object(C.a)(["\n    background-color: white;\n    border: none;\n    color:teal;\n    width: 170px;\n    height: 50px ;\n    transition: 1s;\n    padding: 1%;\n    cursor: pointer;\n\n    ","\n\n    ","\n\n    @media(max-width: 767px) {\n        flex-basis: 100%;\n        margin: 0;\n        padding: 0,5%;\n    }\n"])),function(n){return n.disabled&&Object(z.a)(f||(f=Object(C.a)(["\n        color: #ccc;\n    "])))},function(n){return n.hover&&Object(z.a)(h||(h=Object(C.a)(["\n        color: hsl(180, 100%, 35%);\n    "])))}),U=function(n){var e=n.tasks,t=n.hideDone,a=n.toggleHideDone,o=n.setAllDone;return E.a.createElement(B,{className:"buttons"},e.length>0&&E.a.createElement(E.a.Fragment,null,E.a.createElement(R,{onClick:a},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),E.a.createElement(R,{onClick:o,disabled:e.every(function(n){return n.done})},"Uko\u0144cz wszystkie")))},M=z.b.section(x||(x=Object(C.a)(["\n    background-color: white;\n    margin: 10px 0;\n    box-shadow: 2px #0000;\n    display: block;\n\n    @media(max-width: 767px) {\n        padding: 15px;\n    }\n"]))),q=z.b.header(k||(k=Object(C.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    justify-content: space-between;\n    border-bottom: 1px solid #ddd;\n\n    @media(max-width: 767px) {\n        grid-template-columns: 1fr;\n    }\n"]))),G=z.b.h2(j||(j=Object(C.a)(["\n    font-size: 20px;\n    padding: 20px;\n    margin: 0;\n\n    @media(max-width: 767px) {\n        font-size: 20px;\n        padding: 10px;\n        margin: 0;\n    }\n"]))),K=z.b.div(O||(O=Object(C.a)(["\n    @media(max-width: 767px) {\n        padding: 10px;\n    }\n"]))),Q=function(n){var e=n.title,t=n.body,a=n.extraHeaderContent;return E.a.createElement(M,null,E.a.createElement(q,null,E.a.createElement(G,null,e),a),E.a.createElement(K,null,t))},V=function(n){var e=n.title;return E.a.createElement("header",null,E.a.createElement("h1",null,e))},W=z.b.main(w||(w=Object(C.a)(["\n    max-width: 950px;\n    padding: 30px;\n    margin: 0 auto;\n\n    @media (max-width: 767px) {\n        padding: 10px;  \n    }\n"]))),X=function(n){var e=n.children;return E.a.createElement(W,null,e)},Y=t(14),Z=t(6);var $=function(){var n=function(){var n=Object(v.useState)(!1),e=Object(T.a)(n,2),t=e[0],a=e[1],o=Object(v.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),r=Object(T.a)(o,2),i=r[0],c=r[1];return Object(v.useEffect)(function(){localStorage.setItem("tasks",JSON.stringify(i))},[i]),{tasks:i,hideDone:t,toggleHideDone:function(){a(function(n){return!n})},removeTask:function(n){c(function(e){return e.filter(function(e){return e.id!==n})})},toggleTaskDone:function(n){c(function(e){return e.map(function(e){return e.id===n?Object(Z.a)({},e,{done:!e.done}):e})})},setAllDone:function(){c(function(n){return n.map(function(n){return Object(Z.a)({},n,{done:!0})})})},addNewTask:function(n){c(function(e){return[].concat(Object(Y.a)(e),[{content:n,done:!1,id:e.length?e[e.length-1].id+1:1}])})}}}(),e=n.tasks,t=n.hideDone,a=n.toggleHideDone,o=n.removeTask,r=n.toggleTaskDone,i=n.setAllDone,c=n.addNewTask;return E.a.createElement(X,{className:"container"},E.a.createElement(V,{title:"Lista zada\u0144"}),E.a.createElement(Q,{title:"Dodaj nowe zadanie",body:E.a.createElement(F,{addNewTask:c})}),E.a.createElement(Q,{title:"Lista zada\u0144",body:E.a.createElement(P,{tasks:e,hideDone:t,removeTask:o,toggleTaskDone:r}),extraHeaderContent:E.a.createElement(U,{tasks:e,hideDone:t,toggleHideDone:a,setAllDone:i})}))},_=function(n){n&&n instanceof Function&&t.e(1).then(t.bind(null,29)).then(function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),o(n),r(n),i(n)})};y.a.createRoot(document.getElementById("root")).render(E.a.createElement(E.a.StrictMode,null,E.a.createElement($,null))),_()}},[[15,3,2]]]);
//# sourceMappingURL=main.9b487212.chunk.js.map