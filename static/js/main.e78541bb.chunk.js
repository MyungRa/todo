(this.webpackJsonpsample02=this.webpackJsonpsample02||[]).push([[0],{21:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var c,r,o,i=e(0),a=e.n(i),l=e(12),s=e.n(l),d=(e(21),e(10)),u=e(16),j=e(7),b=e(5),h=e(6),p=h.a.div(c||(c=Object(b.a)(["\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 45%;\n    transform: translate(-50%, -50%);\n    width: 800px;\n    height: 680px;\n    text-align: center;\n"]))),O=h.a.div(r||(r=Object(b.a)(["\n    font-size: 24px;\n    text-align: center;\n"]))),x=h.a.div(o||(o=Object(b.a)(["\n    position: absolute;\n    left: 49%;\n    top: 50%;\n    transform: translate(-50%, -26%);\n    background-color: white;\n    width: 466px;\n    height: 500px;\n    border-radius: 10px;\n    overflow-y: scroll;\n    &::-webkit-scrollbar{\n        display:none;\n    }\n"]))),f=e(1),g=function(){var t=Object(i.useState)([]),n=Object(j.a)(t,2),e=n[0],c=n[1],r=Object(i.useState)(""),o=Object(j.a)(r,2),a=o[0],l=o[1],s=Object(i.useState)(0),b=Object(j.a)(s,2),h=b[0],g=b[1],v={color:"lightgray",textDecoration:"line-through",cursor:"pointer"},k={color:"black",textDecoration:"none",cursor:"pointer"};return Object(f.jsxs)(p,{children:[Object(f.jsx)(O,{children:Object(f.jsx)("h1",{children:"TO DO LIST"})}),Object(f.jsx)("input",{type:"text",placeholder:"What To Do?",onChange:function(t){return l(t.target.value)},value:a}),Object(f.jsx)("button",{onClick:function(){var t={content:a,id:h,didIt:!1};c([].concat(Object(u.a)(e),[t])),g(h+1),l("")},children:"ADD"}),Object(f.jsx)(x,{children:Object(f.jsx)("ul",{children:e.map((function(t,n){return Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{style:t.didIt?v:k,onClick:function(){return function(t){var n=e.map((function(n){return n.id!==t?n:Object(d.a)(Object(d.a)({},n),{},{didIt:!n.didIt})}));c(n)}(t.id)},children:t.content}),Object(f.jsx)("span",{style:{color:"red",cursor:"pointer"},onClick:function(){return function(t){var n=e.filter((function(n){return n.id!==t}));c(n)}(t.id)},children:"X"})]},n)}))})})]})};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e78541bb.chunk.js.map