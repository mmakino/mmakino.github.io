(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,t){e.exports=t(236)},113:function(e,a,t){},114:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(33),o=t.n(r),l=(t(113),t(114),t(42)),s=t(43),c=t(47),m=t(45),p=t(44),d=t(48),u=t(107),h=t(22),g=t(13),f=t(94),b=t.n(f),v=t(95),E=t.n(v),k=t(10),y=t.n(k),j=t(46),N=t.n(j),w=t(24),x=t.n(w),S=t(93),A=t.n(S),C=t(91);function B(e){var a=e.location.pathname;return"/"===a?"about":"/portfolio"===a?"portfolio":"about"}function G(e){var a="",t=B(e);return"about"===t?a="Portfolio":"portfolio"===t&&(a="About"),a}var R=Object(g.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},left:{alignItems:"flex-start",flexGrow:11},bar:{backgroundColor:C.blue[300]},menuButton:{alignContent:"flex-end"},button:{margin:e.spacing.unit}}})(Object(h.e)(function(e){var a=e.classes;return i.a.createElement("div",{className:a.root},i.a.createElement(b.a,{position:"static",className:a.bar},i.a.createElement(E.a,{variant:"regular"},i.a.createElement(y.a,{variant:"h6",color:"inherit",className:a.grow},"Motohiko Makino"),function(e){var a=e.classes;return"portfolio"===B(e)?i.a.createElement(N.a,{className:a.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(A.a,null)):void 0}(e),i.a.createElement(y.a,{variant:"subtitle1",color:"inherit",className:a.left},function(e){var a="",t=B(e);return"about"===t?a="About Me":"portfolio"===t&&(a="portfolio"),a}(e)),i.a.createElement(y.a,{variant:"subheading",color:"inherit"},i.a.createElement(x.a,{variant:"outlined",color:"inherit",href:"/#/"+G(e).toLowerCase(),className:a.button},G(e))))))})),O=t(98),z=t.n(O),L=t(30),M=t.n(L),P=t(9),I=t.n(P),W=t(97),Q=t.n(W),H=t(34),T=t.n(H),q=t(57),J=t.n(q),F=t(58),U=t.n(F),_=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).handleNext=function(){t.setState(function(e){return{activeStep:e.activeStep+1}})},t.handleBack=function(){t.setState(function(e){return{activeStep:e.activeStep-1}})},t.state={activeStep:0},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.theme,n=this.state.activeStep;return i.a.createElement("div",{className:a.root},i.a.createElement(T.a,{square:!0,elevation:0,className:a.header},i.a.createElement(y.a,{style:{fontSize:"1.2em",color:"#7ab"}},this.props.projects[n].title)),i.a.createElement("img",{className:a.img,src:this.props.projects[n].image,alt:this.props.projects[n].name}),i.a.createElement(Q.a,{steps:3,position:"static",activeStep:n,className:a.mobileStepper,nextButton:i.a.createElement(x.a,{size:"small",onClick:this.handleNext,disabled:2===n},"Next","rtl"===t.direction?i.a.createElement(J.a,null):i.a.createElement(U.a,null)),backButton:i.a.createElement(x.a,{size:"small",onClick:this.handleBack,disabled:0===n},"rtl"===t.direction?i.a.createElement(U.a,null):i.a.createElement(J.a,null),"Back")}))}}]),a}(i.a.Component),D=Object(g.withStyles)(function(e){return{root:{maxWidth:600,flexGrow:1,margin:"auto",display:"center"},header:{display:"flex",alignItems:"center",height:50,paddingLeft:4*e.spacing.unit,backgroundColor:e.palette.background.default,fontSize:"1.5em"},img:{height:375,maxWidth:600,overflow:"hidden",display:"block",width:"100%"}}},{withTheme:!0})(_),X=t(29),V=t.n(X);var Y=Object(g.withStyles)(function(e){return{root:{marginLeft:"auto",marginRight:"auto",marginBottom:"7%",width:"40%",display:"block",testAlign:"center"},link:{margin:e.spacing.unit,color:"#555",fontSize:"1.2em",textAlign:"center"}}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.root},i.a.createElement(y.a,{className:"links"},i.a.createElement(V.a,{className:a.link,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/makino"},i.a.createElement("i",{className:"fa fa-linkedin-square fa-1g","aria-hidden":"true"}),"LinkedIn"),i.a.createElement(V.a,{className:a.link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mmakino"},i.a.createElement("i",{className:"fa fa-github fa-1g","aria-hidden":"true"}),"GitHub"),i.a.createElement(V.a,{className:a.link,href:"mailto:motohiko.makino@gmail.com?Subject=Reaching out via GitHub",target:"_top"},i.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"Email")))}),$=Object(g.withStyles)(function(e){return{root:{margin:e.spacing.unit,marginLeft:"5%",marginRight:"5%"},article:{fontSize:"1.0em",color:"#777",lineHeight:"2.0em",animationName:"text-fadein",animationDuration:"4s"},avatar:{margin:10,width:160,height:160,float:"left"},photo:{width:"15%",float:"left",margin:"10px 15px 0px 0px"},logoDarkBG:{width:"15%",height:"10%",margin:"0% 0%",background:"#333"},divider:{margin:"2% 0% 1% 0%",clear:"left"},link:{margin:e.spacing.unit,color:"#555",fontSize:"1.2em"},skills:{display:"block",width:"100%",fontSize:"1.2em"},tech:{display:"flex",justifyContent:"center",flexWrap:"wrap"},chip:{margin:e.spacing.unit}}})(function(e){var a=e.classes;return i.a.createElement("div",{className:a.root},i.a.createElement("aside",null,i.a.createElement(z.a,{src:"assets/images/moto_makino.png",alt:"Motohiko Makino",className:a.avatar})),i.a.createElement("article",null,i.a.createElement(y.a,{className:a.article},"Motohiko Makino is a software engineer with a natural knack for combining technical know-how with creative elements. He has 18 years of demonstrated experience working with integrated circuit(IC) test chip technology and yield modeling methodology. He is well-versed in C/C++, Visual Basic, Perl, Ruby, and SQL. He uses his skills and creativity by playing a key role in providing solutions for integrating IC design, testing, and analysis."),i.a.createElement(y.a,{className:a.article},"He is constantly expanding his knowledge and experience by keeping abreast of the evolving trends, techniques, and technologies to streamline efficiency. Most recently, he was a part time student studying Full Stack Web Development."),i.a.createElement(y.a,{className:a.article},"When he is not working on a computer, he repeatedly plays the same old 80s rock music pieces with his 6 strings, reads Russian novels from 19th century, and is skiing on mountains with his kid during winter.")),i.a.createElement(M.a,{className:a.divider}),i.a.createElement("section",{className:a.tech},i.a.createElement(y.a,{className:a.skills},"Skills"),i.a.createElement(I.a,{label:"Ruby",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Perl",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Javascript",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"HTML",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"CSS",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"jQuery",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Node.js",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Express",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"React",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Redux",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"MySQL",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"PostgreSQL",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"MongoDB",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Sequelize ORM",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Visual Basic",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"Unix Shell",className:a.chip,color:"primary",variant:"outlined"}),i.a.createElement(I.a,{label:"sed & awk",className:a.chip,color:"primary",variant:"outlined"})),i.a.createElement(M.a,{className:a.divider}),i.a.createElement("section",null,i.a.createElement(y.a,{className:a.skills},"Web Applications"),i.a.createElement(D,{projects:e.projects})),i.a.createElement(M.a,{className:a.divider}),i.a.createElement("footer",null,i.a.createElement(Y,null)))}),K=t(2),Z=t.n(K),ee=t(106),ae=t.n(ee),te=t(99),ne=t(5),ie=t.n(ne),re=t(100),oe=t.n(re),le=t(101),se=t.n(le),ce=t(102),me=t.n(ce),pe=t(59),de=t.n(pe),ue=t(103),he=t.n(ue),ge=t(105),fe=t.n(ge),be=t(104),ve=t.n(be);var Ee=Object(g.withStyles)(function(e){return{card:{display:"inline-block",float:"left",width:"35vw",maxHeight:"80vh",marginLeft:"5%",marginBottom:"2%",paddingBottom:"1%",background:"#fafcfe"},root:{paddingBottom:"1%"},cardHeader:{padding:"2%"},cardContent:{display:"inline-block",padding:"1%  1%"},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex",padding:"0px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},chip:{margin:"0.2em",fontSize:"0.75em",height:"1.6em",variant:"outlined"},link:{margin:e.spacing.unit,color:"inherit",width:"5%",height:"5%",marginLeft:"5%"},button:{margin:e.spacing.unit,padding:"0% 2%",fullWith:!0,size:"small",mini:!0}}})(function(e){var a=e.classes;return i.a.createElement("div",{className:"portfolio-card"},i.a.createElement(oe.a,{className:a.card},i.a.createElement(se.a,{className:a.cardHeader,title:e.project.name}),i.a.createElement(me.a,{className:a.media,image:e.project.image,title:e.project.title}),i.a.createElement(de.a,{className:a.cardContent,style:{paddingBottom:"1%"}},function(e){var a=e.classes;return e.project.technologies.map(function(e){return i.a.createElement(I.a,{label:e,className:a.chip,variant:"outlined"})})}(e)),i.a.createElement(he.a,{className:a.actions,disableActionSpacing:!0},function(e){return i.a.createElement(V.a,{target:"_blank",rel:"noopener noreferrer",href:e.project.github,className:e.classes.link},i.a.createElement("svg",{className:"j2dfb39",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))}(e),function(e){return 0===e.project.deployedAt.length?void 0:i.a.createElement(x.a,{target:"_blank",rel:"noopener noreferrer",href:e.project.deployedAt,variant:"contained",className:e.classes.button},"Live App")}(e),i.a.createElement(N.a,{className:ie()(a.expand,Object(te.a)({},a.expandOpen,e.project.expanded)),onClick:e.onClick,"aria-expanded":e.project.expanded,"aria-label":"Show more"},i.a.createElement(ve.a,null))),i.a.createElement(fe.a,{in:e.project.expanded,timeout:"auto",unmountOnExit:!0},i.a.createElement(de.a,null,i.a.createElement(y.a,{paragraph:!0,style:{fontWeight:"bold"}},e.project.title),i.a.createElement(y.a,{paragraph:!0},e.project.description)))))});function ke(e){var a=e.classes;return i.a.createElement("div",{className:"portfolio"},i.a.createElement("section",null,i.a.createElement("div",{className:a.root},i.a.createElement(ae.a,{cellHeight:"auto",className:a.gridList},e.projects.map(function(a,t){return i.a.createElement("div",{key:t.toString()},i.a.createElement(Ee,{project:a,onClick:function(){return e.handleCardExpandClick(t)}}))})))),i.a.createElement(M.a,{className:a.divider}),i.a.createElement("footer",null,i.a.createElement(Y,null)))}ke.prototype={projects:Z.a.object.isRequired,handleCardExpandClick:Z.a.func.isRequired,classes:Z.a.object.isRequired};var ye=Object(g.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"2%",marginLeft:"3%"},gridList:{width:"auto",height:"auto"},divider:{margin:"2% 0% 1% 0%",clear:"left"}}})(ke),je=[{name:"Sequelized Burger",title:"Eat-Da-Burger! -- Node Express Handlebars",description:"The pseudo burger restaurant app revised to use Sequelize ORM",technologies:["Node.js","Express","Handlebars","Sequelize","MySQL"],image:"assets/images/sequelizedBurger.png",github:"https://github.com/mmakino/sequelizedBurger",deployedAt:"https://damp-forest-95991.herokuapp.com"},{name:"Recipe Wolves",title:"Recipe Wolves",description:"Search and share your favorite recipes!",technologies:["Node.js","Express","Handlebars","Sequelize","MySQL","RESTFul API","Authentification(passport-js)","connect-flash"],image:"assets/images/Project-2.png",github:"https://github.com/mmakino/Project-2",deployedAt:"https://peaceful-eyrie-53353.herokuapp.com/"},{name:"Bottoms Up",title:"BottomsUp!",description:"Drink web site that lets users search for drinks and share their favorite drink recipes",technologies:["Javascript","jQuery","AJAX API client","Firebase","Text-to-speech"],image:"assets/images/BottomsUp.png",github:"https://github.com/mmakino/BottomsUp",deployedAt:"https://mmakino.github.io/BottomsUp"},{name:"Friend Finder",title:"Friend Finder - Node and Express Servers",description:"A dating app based on personality compatibility through survey",technologies:["Node.js","Express","RESTful API","jQuery","AJAX"],image:"assets/images/friend_finder.png",github:"https://github.com/mmakino/FriendFinder",deployedAt:"https://intense-falls-18158.herokuapp.com/"},{name:"Word Guess Game",title:"Word Guess Game",description:"80's music themed Hangman game",technologies:["Javascript","jQuery"],image:"assets/images/word-guess-game.png",github:"https://github.com/mmakino/Word-Guess-Game",deployedAt:"https://mmakino.github.io/Word-Guess-Game"},{name:"RPS-Multiplayer",title:"RPS Multi-player",description:"Rock-Paper-Scissors multi-player online game based on Firebase for event synchronization",technologies:["Javascript","jQuery","Firebase"],image:"assets/images/rps-multiplayer.png",github:"https://github.com/mmakino/RPS-Multiplayer",deployedAt:"https://mmakino.github.io/RPS-Multiplayer"},{name:"Trivia Game",title:"Trivia Quiz Game",description:"A Trivia game written in JavaScript and jQuery, making use of the timers",technologies:["Javascript","jQuery"],image:"assets/images/trivia-game.png",github:"https://github.com/mmakino/TriviaGame",deployedAt:"https://mmakino.github.io/TriviaGame"},{name:"Giftastic",title:"GifTastic!",description:"Use the GIPHY API to make a dynamic web page that populates with gif images",technologies:["Javascript","jQuery","AJAX"],image:"assets/images/giftastic.png",github:"https://github.com/mmakino/GifTastic",deployedAt:"https://mmakino.github.io/GifTastic"},{name:"Star Wars RPG Game",title:"Star Wars RPG Game",description:"Star Wars themed RPG game written in javascript and jQuery.",technologies:["Javascript","jQuery"],image:"assets/images/star-wars-rpg.png",github:"https://github.com/mmakino/unit-4-game",deployedAt:"https://mmakino.github.io/unit-4-game"},{name:"Bamazon Storefront",title:"Bamazon -- Amazon-like storefront",description:"Node.js app with a command-line interface using MySQL in the backend.",technologies:["Node.js","MySQL"],image:"assets/images/bamazon.png",github:"https://github.com/mmakino/bamazon",deployedAt:""},{name:"LIRI CLI App",title:"LIRI -- Node.js command-line app",description:"LIRI is like iPhone's SIRI.",technologies:["Node.js","AJAX API query"],image:"assets/images/liri-node-cli.png",github:"https://github.com/mmakino/liri-node-app",deployedAt:""}],Ne=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={projects:t.initProjects()},t.handleCardExpandClick=t.handleCardExpandClick.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"initProjects",value:function(){return je.slice().map(function(e){return e.expanded=!1,e})}},{key:"handleCardExpandClick",value:function(e){var a=this.state.projects.slice();a[e].expanded=!this.state.projects[e].expanded,this.setState({projects:a})}},{key:"render",value:function(){var e=this;return i.a.createElement(u.a,null,i.a.createElement("nav",null,i.a.createElement(R,null)),i.a.createElement("section",null,i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/portfolio",render:function(a){return i.a.createElement(ye,{projects:e.state.projects,handleCardExpandClick:function(a){return e.handleCardExpandClick(a)}})}}),i.a.createElement(h.a,{path:"/",render:function(a){return i.a.createElement($,Object.assign({projects:e.state.projects},a))}}))))}}]),a}(n.Component);var we=function(){return i.a.createElement(Ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,1,2]]]);
//# sourceMappingURL=main.a20c7d4b.chunk.js.map