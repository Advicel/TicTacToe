(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n(6),o=n.n(a),i=n(32),s=n(8),u=n(47),l=n(14),d="CREATE_MOVE";function b(e){var t=e.createMove,n=e.square,c=e.onClick,a=e.index,o=f();return Object(r.jsx)("button",{className:n.isWin?o.red:o.square,onClick:function(){c(),t(a)},children:n.value})}b.defaultProps={value:null};var j={createMove:function(e){return{type:d,payload:e}}},O=Object(l.b)((function(e){return{moves:e.moves.moves}}),j)(b),f=Object(u.a)({square:{background:"#fff",border:"1px solid #999",borderRadius:"20%",fontSize:24,fontWeight:"bold",textAlign:"center","&:hover":{cursor:"pointer",background:"#ab9e9e",border:"1px solid blue"},"$:active":{outline:"none"},"$:focus":{outline:"none"}},red:{background:"red",border:"1px solid #999",borderRadius:"20%",fontSize:24,fontWeight:"bold",textAlign:"center",outline:"none","&:hover":{cursor:"pointer",background:"#ab9e9e",border:"1px solid blue"},"&:active":{outline:"none"},"&:focus":{outline:"none"}}},{name:"square"});function v(e){var t=e.squares,n=e.onClick,c=e.classes,a=p({classes:c});return Object(r.jsx)("div",{className:a.gameBoard,children:t.map((function(e,c){return Object(r.jsx)(O,{square:t[c],onClick:function(){return n(c)},index:c},c)}))})}v.defaultProps={};var m,p=Object(u.a)({gameBoard:{display:"inline-grid",gridTemplateColumns:"40px 40px 40px",gridTemplateRows:"40px 40px 40px"}});function x(){var e=g(),t=Object(c.useState)([{squares:Array(9).fill({value:null,isWin:!1}),posX:null,posY:null}]),n=Object(s.a)(t,2),a=n[0],o=n[1],u=Object(c.useState)(0),l=Object(s.a)(u,2),d=l[0],b=l[1],j=Object(c.useState)(!0),O=Object(s.a)(j,2),f=O[0],p=O[1],x=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=[e[t[n][0]],e[t[n][1]],e[t[n][2]]],c=r[0],o=r[1],i=r[2];if(c.value&&c.value===o.value&&c.value===i.value)return t[n].map((function(e){return a[d].squares[e].isWin=!0})),c.value}return null},h=a[d],w=x(h.squares),k=a.map((function(e,t){var n=t?"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0445\u043e\u0434\u0443 #"+t+" (x: "+a[t].posX+" y: "+a[t].posY+")":"\u041a \u043d\u0430\u0447\u0430\u043b\u0443 \u0438\u0433\u0440\u044b";return Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:function(){return function(e){a[d].squares.map((function(e){return e.isWin=!1})),b(e),p(e%2===0),o(a.slice(0,e+1))}(t)},children:n})},t)}));return m=w?"\u041f\u043e\u0431\u0435\u0434\u0438\u043b "+w:10===a.length?"\u041d\u0438\u0447\u044c\u044f":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0445\u043e\u0434: "+(f?"X":"O"),Object(r.jsxs)("div",{className:e.game,children:[Object(r.jsx)(v,{classes:{gameBoard:e.fancyGameBoard},squares:h.squares,onClick:function(e){return function(e){var t=a[d],n=Object(i.a)(t.squares),r={value:f?"X":"O",isWin:!1};x(n)||n[e].value||(n[e]=r,o(a.concat([{squares:n,posY:Math.trunc(e/3),posX:e>2?e%3:e}])),b(a.length),p(!f))}(e)}}),Object(r.jsxs)("div",{className:e.gameInfo,children:[Object(r.jsx)("div",{children:m}),Object(r.jsx)("ol",{children:k})]})]})}var h,g=Object(u.a)({fancyGameBoard:{border:"2px solid red"},game:{textAlign:"center",marginTop:20},gameInfo:{textAlign:"center"}},{index:1,name:"game"});function w(){var e=k(),t=Object(c.useState)(new Date),n=Object(s.a)(t,2),a=n[0],o=n[1];return Object(c.useEffect)((function(){return h=setInterval((function(){return o(new Date)}),1e3),function(){return clearInterval(h)}})),Object(r.jsxs)("div",{className:e.clock,children:[Object(r.jsx)("h1",{children:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0438\u0440!"}),Object(r.jsxs)("h2",{children:["\u0421\u0435\u0439\u0447\u0430\u0441 ",a.toLocaleTimeString(),"."]})]})}var k=Object(u.a)({clock:{textAlign:"center"}});function E(){var e=S(),t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1];function i(e){(function(e){return fetch("https://worldtimeapi.org/api/timezone/Europe/".concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.datetime,n=t.indexOf("T");return t=t.slice(n+1)}))})(e).then((function(e){return o(e)}))}return Object(c.useEffect)((function(){i("moscow")}),[]),Object(r.jsxs)("div",{className:e.worldsTime,children:[Object(r.jsx)("button",{className:e.button,onClick:function(){return i("samara")},children:"\u0432\u0440\u0435\u043c\u044f \u0432 \u0421\u0430\u043c\u0430\u0440\u0435"}),Object(r.jsx)("button",{className:e.button,onClick:function(){return i("moscow")},children:"\u0432\u0440\u0435\u043c\u044f \u0432 \u041c\u043e\u0441\u043a\u0432\u0435"}),Object(r.jsx)("div",{children:null===a?"\u0437\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0432\u0440\u0435\u043c\u044f":a})]})}var S=Object(u.a)({worldsTime:{textAlign:"center"},button:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px","& button":{marginLeft:10}}}),q=n(79),N=n(80);var T=Object(l.b)((function(e){return{moves:e.moves.moves}}),null)((function(e){var t=e.moves,n=_(),a=Object(c.useState)(),o=Object(s.a)(a,2),i=o[0],u=o[1],l=Object(c.useState)(i),d=Object(s.a)(l,2),b=d[0],j=d[1];return console.log(t,"from CLoneInput"),Object(c.useEffect)((function(){j(i)}),[i]),Object(r.jsx)("div",{className:n.cloneInput,children:Object(r.jsxs)("form",{className:n.root,children:[Object(r.jsx)(N.a,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",onChange:function(e){return t=e.target.value,void u(t);var t}}),Object(r.jsx)("p",{children:b}),Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})})})),_=Object(q.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},cloneInput:{textAlign:"center"},input:{borderRadius:"20%"},output:{minHeight:20,marginTop:10,border:"1px solid black",width:"auto"}}})),C=n(11),y=n(28),I={moves:[]},A=Object(C.b)({moves:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(y.a)(Object(y.a)({},e),{},{moves:e.moves.concat([t.payload])});default:return e}}}),X=Object(C.d)(A,Object(C.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),B=Object(r.jsx)(l.a,{store:X,children:Object(r.jsxs)("div",{children:[Object(r.jsx)(w,{}),Object(r.jsx)(E,{}),Object(r.jsx)(x,{}),Object(r.jsx)(T,{})]})});o.a.render(B,document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a99228db.chunk.js.map