(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(5),s=a(2),c=(a(14),a(1)),o=a(9),l=a.n(o),d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(d.jsxs)("article",{"data-id":a,className:l()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(d.jsx)(u,{user:r})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})},b=a(7),h=function(e,t){return e.find((function(e){return e.id===t}))||null};function O(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1}var f,p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],x=(f=p,[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(b.a)(Object(b.a)({},e),{},{user:h(f,e.id)})}))),v=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(x),o=Object(s.a)(i,2),l=o[0],u=o[1],m=Object(c.useState)(""),b=Object(s.a)(m,2),f=b[0],v=b[1],y=Object(c.useState)(!1),S=Object(s.a)(y,2),N=S[0],I=S[1],g=Object(c.useState)(!1),C=Object(s.a)(g,2),_=C[0],T=C[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),f||I(!0),a||T(!0),a&&f){var t={id:O(l),completed:!1,user:h(p,Number(a)),title:f.trim(),userId:Number(a)};u([].concat(Object(r.a)(l),[t])),v(""),n(0)}},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{htmlFor:"titleInput",children:["Title:",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",id:"title",name:"title",placeholder:"Title",value:f,onChange:function(e){v(e.target.value),I(!1)}})]}),N&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{htmlFor:"userSelect",children:["User:",Object(d.jsxs)("select",{"data-cy":"userSelect",name:"user",id:"user",value:a,onChange:function(e){n(Number(e.target.value)),T(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),p.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),_&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:l})]})};i.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e9c4495a.chunk.js.map