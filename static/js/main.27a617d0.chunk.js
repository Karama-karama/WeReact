(this.webpackJsonpwereact=this.webpackJsonpwereact||[]).push([[0],{56:function(e,t,a){e.exports=a(85)},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),i=a.n(r),c=a(27),s=(a(61),a(13)),o=a(14),m=a(17),u=a(15),d=a(18),h=function(){return l.a.createElement("div",{className:"UserLandPage"},l.a.createElement("p",null,"User land space  "))};a(62);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var f=l.a.createElement("title",null,"Group"),v=l.a.createElement("desc",null,"Created with Sketch."),b=l.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},l.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},l.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),l.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),l.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),l.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),l.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),g=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return l.a.createElement("svg",p({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?f:a?l.a.createElement("title",null,a):null,v,b)},O=l.a.forwardRef((function(e,t){return l.a.createElement(g,p({svgRef:t},e))})),j=(a.p,function(e){e.placeholder;var t=e.handleChange;return l.a.createElement("div",{className:"header"},l.a.createElement(c.b,{className:"logo-container",to:"/"},l.a.createElement(O,{className:"logo"})),l.a.createElement("input",{className:"search",type:"search",placeholder:"Recherche",onChange:t}),l.a.createElement("div",{className:"options"},l.a.createElement(c.b,{className:"option",to:"/userland"}," User Land ")))}),y=a(24),k=(a(68),function(){return l.a.createElement("div",{className:"projet"},l.a.createElement("p",null,"La page de projet "))}),C=(a(69),a(70),a(71),a(12)),N=a(88),w=a(87),q=a(89),S=(a(72),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={show:!1,membres:[{name:" Karama",id:"k"},{name:"Sourour",id:"S"},{name:"Mariem ",id:"M"},{name:"Seif ",id:"Se"}]},a.close=a.close.bind(Object(C.a)(a)),a.open=a.open.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"close",value:function(){this.setState({show:!1})}},{key:"open",value:function(e){this.setState({show:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"modal-container",role:"dialog"},l.a.createElement(w.a,{onClick:this.open,variant:"outline-primary"}," "," ","liste membre"),l.a.createElement(q.a,{full:!0,show:this.state.show,onHide:this.close},l.a.createElement(N.a,null,l.a.createElement(q.a.Header,null,l.a.createElement(q.a.Title,null,l.a.createElement("h1",{className:"h1"},"La liste"))),l.a.createElement(q.a.Body,null,this.state.membres.map((function(e){return l.a.createElement("p",{key:e.id}," ",e.name," ")}))),l.a.createElement(q.a.Footer,null,l.a.createElement(w.a,{onClick:this.close,appearance:"primary"},"Ok"),l.a.createElement(w.a,{onClick:this.close,appearance:"subtle"},"Cancel")))))}}]),t}(l.a.Component)),L=function(e){return l.a.createElement("div",{className:"corners"},l.a.createElement("div",{className:"equipe-container"},l.a.createElement("h1",null," ",e.equipe.name),l.a.createElement("h3",null," ",e.equipe.description),l.a.createElement("h3",null," ",e.equipe.membres),l.a.createElement("div",null,"    ",l.a.createElement(S,null),"   ")))},x=function(e){return l.a.createElement("div",{className:"equipe-liste"},e.equipes.map((function(e){return l.a.createElement(L,{key:e.id,equipe:e})})))},P=(a(73),function(e){return l.a.createElement("div",{className:"corners-profile"},l.a.createElement("div",{className:"profile-container"},l.a.createElement("h1",null," ",e.profile.name),l.a.createElement("h3",null," ",e.profile.role)))}),I=(a(74),a(75),a(54)),M=function(e){return l.a.createElement("div",{className:"profile-list"},l.a.createElement(I.a,{showThumbs:!1},e.profiles.map((function(e){return l.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel-slide","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement(P,{key:e.id,profile:e}))))}))))},A=(a(77),a(55)),R=(a(78),function(e){e.handleChange;var t=e.label,a=Object(A.a)(e,["handleChange","label"]);return l.a.createElement("div",{className:"group"},l.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),t?l.a.createElement("label",{className:"".concat(a.value?"shrink":""," form-input-label ")},t):null)}),B=a(35),T=(a(79),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={listOpen:!1,headerTitle:a.props.title,equipes:[{" id":"001",title:"Front",selected:"false",key:"team"},{" id":"002",title:"Back",selected:"false",key:"team"},{" id":"003",title:"Design",selected:"false"," key":"team"}]},a.toggleList=a.toggleList.bind(Object(C.a)(a)),a.toggleSelected=a.toggleSelected.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClickOutside",value:function(){this.setState({listOpen:!1})}},{key:"toggleList",value:function(e){this.setState({listOpen:!e.listOpen})}},{key:"toggleSelected",value:function(e,t){var a=this.state[t];a[e].selected=!a[e].selected,this.setState(Object(B.a)({},t,a))}},{key:"render",value:function(){var e=this,t=(this.props.list,this.state),a=t.listOpen,n=t.headerTitle;return l.a.createElement("div",{className:"dd-wrapper"},l.a.createElement("div",{className:"dd-header"},l.a.createElement("div",{className:"dd-header-title",onClick:this.toggleList},n),a),a&&l.a.createElement("ul",{className:"dd-list"},this.state.equipes.map((function(t){return l.a.createElement("p",{className:"dd-list-item",key:t.id,onClick:e.toggleSelected},t.title)}))))}}]),t}(l.a.Component)),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={show:!1},a.close=a.close.bind(Object(C.a)(a)),a.open=a.open.bind(Object(C.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"close",value:function(){this.setState({show:!1})}},{key:"open",value:function(e){this.setState({show:!0})}},{key:"render",value:function(){return l.a.createElement("div",{className:"modal-container",role:"dialog"},l.a.createElement(w.a,{onClick:this.open,variant:"outline-primary"}," "," ","Ajouter un membre"),l.a.createElement(q.a,{full:!0,show:this.state.show,onHide:this.close},l.a.createElement(N.a,null,l.a.createElement(q.a.Header,null,l.a.createElement(q.a.Title,null,l.a.createElement("h1",{className:"h1"},"Ajouter un membre"))),l.a.createElement(q.a.Body,null,l.a.createElement(R,{name:"name",type:"text",value:this.state.text,handleChange:this.handleChange,label:"Nom & Pr\xe9nom",required:!0}),l.a.createElement(R,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),l.a.createElement(R,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Confirmation email",required:!0}),l.a.createElement(R,{name:"pseudo",type:"text",value:this.state.text,handleChange:this.handleChange,label:"Pseudo",required:!0}),l.a.createElement(T,{title:"Selectionner une \xe9quipe",list:this.state.equipes,toggleItem:this.toggleSelected})),l.a.createElement(q.a.Footer,null,l.a.createElement(w.a,{onClick:this.close,appearance:"primary"},"Ajouter")))))}}]),t}(l.a.Component),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={equipes:[{id:1,name:"Equipe-Projet 1 ",description:"Gestion des projets",membres:"3 Membres"},{id:2,name:"Equipe-Projet 2 ",description:"Gestion des ressources humaine",membres:"5 Membres"},{id:3,name:"Equipe-Projet 3",description:"Dev Jeux",membres:"8 Membres"}],profiles:[{id:"S",name:"Seif ",role:"Leader"},{id:"M",name:"Mahdi ",role:"leader"},{id:"D",name:"Nsyt esmha",role:"designer"},{id:"SC",name:"Sourour Chalbi",role:"Intern"},{id:"MG",name:"Mariem Garfa",role:"Intern"},{id:"KA",name:"Karama aissaoui",role:"Intern"}]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"equipe-page"},l.a.createElement(M,{profiles:this.state.profiles}),l.a.createElement(x,{equipes:this.state.equipes}),l.a.createElement(D,null))}}]),t}(l.a.Component),G=a(53),W=(a(80),a(81),function(){return l.a.createElement("div",{className:"page-calendrier"},l.a.createElement("p",null,"La page du calendrier "),l.a.createElement(G.a,null))}),H=function(){return l.a.createElement("div",{className:"equipe"},l.a.createElement("p",null,"La page des documents"))},J=a(91),K=a(90),U=(a(82),function(){return l.a.createElement(J.a,{expand:"lg",variant:"dark",bg:"dark"},l.a.createElement(J.a.Brand,{href:"/"},"WeReact"),l.a.createElement(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(J.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement("div",{className:"container"},l.a.createElement(K.a,{className:"ml-auto"},l.a.createElement(K.a.Item,null,l.a.createElement(K.a.Link,{href:"/projet"},"Projet")),l.a.createElement(K.a.Item,null,l.a.createElement(K.a.Link,{href:"/equipe"},"Equipe")),l.a.createElement(K.a.Item,null,l.a.createElement(K.a.Link,{href:"/calendrier"},"Calendrier")),l.a.createElement(K.a.Item,null,l.a.createElement(K.a.Link,{href:"/document"},"Document"))))))}),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({searchField:e.target.value})},a.state={searchField:"",equipes:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({equipes:t})}))}},{key:"render",value:function(){var e=this.state,t=e.equipes,a=e.searchField;t.filter((function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}));return l.a.createElement("div",{className:"App"},l.a.createElement(j,{handleChange:this.handleChange}),l.a.createElement(U,null),l.a.createElement(y.c,null,l.a.createElement(y.a,{exact:!0,path:"/userland",component:h}),l.a.createElement(y.a,{path:"/projet",component:k,id:"pathProjet"}),l.a.createElement(y.a,{path:"/equipe",component:F,id:"pathEquipe"}),l.a.createElement(y.a,{path:"/calendrier",component:W,id:"pathCalendrier"}),l.a.createElement(y.a,{path:"/document",component:H,id:"pathDocument"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(c.a,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.27a617d0.chunk.js.map