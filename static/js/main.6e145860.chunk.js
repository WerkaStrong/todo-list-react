(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(27)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),s=(n(15),n(5)),i=n(2),u=n(1),l=(n(17),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],s=c[1],i=Object(a.useRef)(null);return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==r&&(t(r.trim()),s(""))}},o.a.createElement("input",{ref:i,value:r,type:"text",className:"form__input",id:"myText",placeholder:"Co jest do zrobienia?",onChange:function(e){var t=e.target;return s(t.value)}}),o.a.createElement("button",{onClick:function(){i.current.focus()},className:"form__button"},"Dodaj zadanie"))}),m=(n(19),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"tasks"},t.map(function(e){return o.a.createElement("li",{key:e.id,className:"tasks__item".concat(e.done&&n?" tasks__item--hidden":"","\n          ")},o.a.createElement("button",{onClick:function(){return c(e.id)},className:"tasks__button tasks__button--toggleDone"},e.done?"\u2714":""),o.a.createElement("span",{className:"tasks__content".concat(e.done?" tasks__content--done":"")},e.content),o.a.createElement("button",{onClick:function(){return a(e.id)},className:"tasks__button tasks__button--remove"},"\ud83d\uddd1"))}))}),d=(n(21),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setAllDone;return o.a.createElement("div",{className:"buttons"},t.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:a,className:"buttons__button"},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{onClick:c,className:"buttons__button",disabled:t.every(function(e){return e.done})},"Uko\u0144cz wszystkie")))}),f=(n(23),function(e){var t=e.title,n=e.body,a=e.extraHeaderContent;return o.a.createElement("section",{className:"section"},o.a.createElement("header",{className:"section__header"},o.a.createElement("h2",{className:"section__title"},t),a),o.a.createElement("div",{className:"section__list"},n))}),b=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))},k=(n(25),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)});var E=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),E=Object(u.a)(r,2),_=E[0],g=E[1];return Object(a.useEffect)(function(){localStorage.setItem("tasks",JSON.stringify(_))},[_]),o.a.createElement(k,{className:"container"},o.a.createElement(b,{title:"Lista zada\u0144"}),o.a.createElement(f,{title:"Dodaj nowe zadanie",body:o.a.createElement(l,{addNewTask:function(e){g(function(t){return[].concat(Object(s.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])})}})}),o.a.createElement(f,{title:"Lista zada\u0144",body:o.a.createElement(m,{tasks:_,hideDone:n,removeTask:function(e){g(function(t){return t.filter(function(t){return t.id!==e})})},toggleTaskDone:function(e){g(function(t){return t.map(function(t){return t.id===e?Object(i.a)({},t,{done:!t.done}):t})})}}),extraHeaderContent:o.a.createElement(d,{tasks:_,hideDone:n,toggleHideDone:function(){c(function(e){return!e})},setAllDone:function(){g(function(e){return e.map(function(e){return Object(i.a)({},e,{done:!0})})})}})}))},_=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,29)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null))),_()}],[[6,3,2]]]);
//# sourceMappingURL=main.6e145860.chunk.js.map