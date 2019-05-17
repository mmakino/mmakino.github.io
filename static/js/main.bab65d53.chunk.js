(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a(232)},108:function(e,t,a){},109:function(e,t,a){},215:function(e,t,a){},218:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(30),o=a.n(r),s=(a(108),a(109),a(39)),l=a(40),c=a(43),m=a(42),u=a(44),p=a(102),d=a(20),h=a(21),g=a(88),f=a.n(g),b=a(89),k=a.n(b),y=a(11),v=a.n(y),E=a(32),j=a.n(E),w=a(31),x=a.n(w),A=a(87),N=a.n(A),S=a(85);function G(e){var t=e.location.pathname;return"/"===t?"about":"/portfolio"===t?"portfolio":"about"}function P(e){var t="",a=G(e);return"about"===a?t="Portfolio":"portfolio"===a&&(t="About"),t}var C=Object(h.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},left:{alignItems:"flex-start",flexGrow:11},bar:{backgroundColor:S.blue[900]},menuButton:{alignContent:"flex-end"},button:{margin:e.spacing.unit}}})(Object(d.e)(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(f.a,{position:"fixed",className:t.bar},i.a.createElement(k.a,{variant:"regular"},i.a.createElement(v.a,{variant:"h6",color:"inherit",className:t.grow},"Motohiko Makino"),function(e){var t=e.classes;return"portfolio"===G(e)?i.a.createElement(j.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement(N.a,null)):void 0}(e),i.a.createElement(v.a,{variant:"subtitle1",color:"inherit",className:t.left},function(e){var t="",a=G(e);return"about"===a?t="About Me":"portfolio"===a&&(t="portfolio"),t}(e)),i.a.createElement(v.a,{variant:"subheading",color:"inherit"},i.a.createElement(x.a,{variant:"outlined",color:"inherit",href:"/#/"+P(e).toLowerCase(),className:t.button},P(e))))))})),B=a(26),O=a.n(B),M=a(91),R=a.n(M),I=(a(215),Object(h.withStyles)(function(e){return{section:{margin:e.spacing.unit},link:{margin:e.spacing.unit,color:"inherit"}}})(function(e){var t=e.classes;return i.a.createElement("section",{className:"container"},i.a.createElement("aside",null,i.a.createElement("img",{src:"assets/images/moto_makino.png",alt:"Motohiko Makino",className:"photo"})),i.a.createElement("article",null,i.a.createElement("p",null,"Motohiko Makino is a software engineer with a natural knack for combining technical know-how with creative elements. He has 18 years of demonstrated experience working with integrated circuit(IC) test chip technology and yield modeling methodology. He is well-versed in C/C++, Visual Basic, Perl, Ruby, and SQL. He uses his skills and creativity by playing a key role in providing solutions for integrating IC design, testing, and analysis."),i.a.createElement("p",null,"He is constantly expanding his knowledge and experience by keeping abreast of the evolving trends, techniques, and technologies to streamline efficiency. Most recently, he was a part time student studying Full Stack Web Development."),i.a.createElement("p",null,"When he is not working on a computer, he repeatedly plays the same old 80s rock music pieces with his 6 strings, reads Russian novels from 19th century, and is skiing on mountains with his kid during winter."),i.a.createElement(R.a,null),i.a.createElement(v.a,{className:"social-media-links"},i.a.createElement(O.a,{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/makino"},i.a.createElement("i",{className:"fa fa-linkedin-square fa-1g","aria-hidden":"true"}),"LinkedIn"),i.a.createElement(O.a,{className:t.link,target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mmakino"},i.a.createElement("i",{className:"fa fa-github fa-1g","aria-hidden":"true"}),"GitHub"),i.a.createElement(O.a,{className:t.link,href:"mailto:motohiko.makino@gmail.com?Subject=Reaching out via GitHub",target:"_top"},i.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"Email"))))})),L=a(41),Q=a(101),z=a.n(Q),H=(a(218),a(92)),W=a(5),J=a.n(W),T=a(94),q=a.n(T),F=a(95),_=a.n(F),U=a(97),X=a.n(U),D=a(54),V=a.n(D),Y=a(98),$=a.n(Y),K=a(100),Z=a.n(K),ee=a(99),te=a.n(ee),ae=a(96),ne=a.n(ae),ie=a(93),re=a.n(ie);var oe=Object(h.withStyles)(function(e){return{card:{display:"inline-block",float:"left",width:"35vw",maxHeight:"80vh",marginLeft:"5%",marginBottom:"2%",paddingBottom:"1%"},root:{paddingBottom:"1%"},cardHeader:{padding:"2%"},cardContent:{display:"inline-block",padding:"1%  1%"},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex",padding:"0px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},chip:{margin:"0.2em",fontSize:"0.75em",height:"1.6em"},link:{margin:e.spacing.unit,color:"inherit",width:"5%",height:"5%",marginLeft:"5%"},button:{margin:e.spacing.unit,padding:"0% 2%",fullWith:!0,size:"small",mini:!0}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:"portfolio-card"},i.a.createElement(q.a,{className:t.card},i.a.createElement(_.a,{className:t.cardHeader,action:i.a.createElement(j.a,null,i.a.createElement(ne.a,null)),title:e.project.name}),i.a.createElement(X.a,{className:t.media,image:e.project.image,title:e.project.title}),i.a.createElement(V.a,{className:t.cardContent,style:{paddingBottom:"1%"}},function(e){var t=e.classes;return e.project.technologies.map(function(e){return i.a.createElement(re.a,{label:e,className:t.chip})})}(e)),i.a.createElement($.a,{className:t.actions,disableActionSpacing:!0},function(e){return i.a.createElement(O.a,{target:"_blank",rel:"noopener noreferrer",href:e.project.github,className:e.classes.link},i.a.createElement("svg",{className:"j2dfb39",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},i.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"})))}(e),function(e){return i.a.createElement(x.a,{target:"_blank",rel:"noopener noreferrer",href:e.project.deployedAt,variant:"contained",className:e.classes.button},"Live App")}(e),i.a.createElement(j.a,{className:J()(t.expand,Object(H.a)({},t.expandOpen,e.project.expanded)),onClick:e.onClick,"aria-expanded":e.project.expanded,"aria-label":"Show more"},i.a.createElement(te.a,null))),i.a.createElement(Z.a,{in:e.project.expanded,timeout:"auto",unmountOnExit:!0},i.a.createElement(V.a,null,i.a.createElement(v.a,{paragraph:!0,style:{fontWeight:"bold"}},e.project.title),i.a.createElement(v.a,{paragraph:!0},e.project.description)))))}),se=[{name:"Sequelized Burger",title:"Sequelized Burger",description:"The burger app revised to use Sequelize ORM",technologies:["Node.js","Express","Handlebars","Sequelize","MySQL"],image:"assets/images/sequelizedBurger.png",github:"https://github.com/mmakino/sequelizedBurger",deployedAt:"https://damp-forest-95991.herokuapp.com"},{name:"Project 2: Recipe Wolves",title:"Project 2: Recipe Wolves",description:"Search and share your favorite recipes!",technologies:["Node.js","Express","Handlebars","Sequelize","MySQL","RESTFul API","Authentification(passport-js)","connect-flash"],image:"assets/images/Project-2.png",github:"https://github.com/mmakino/Project-2",deployedAt:"https://peaceful-eyrie-53353.herokuapp.com/"},{name:"Burger App",title:"Eat-Da-Burger! -- Node Express Handlebars",description:"A restaurant app that lets users input the names of burgers to devour",technologies:["Node.js","Express","Handlebars","MySQL","ORM","jQuery","AJAX"],image:"assets/images/burger.png",github:"https://github.com/mmakino/burger",deployedAt:"https://aqueous-beach-82382.herokuapp.com"},{name:"Project 1: Bottoms Up",title:"Project-1: BottomsUp!",description:"Drink web site that lets users search for drinks and share their favorite drink recipes",technologies:["Javascript","jQuery","AJAX API client","Firebase","Text-to-speech"],image:"assets/images/BottomsUp.png",github:"https://github.com/mmakino/BottomsUp",deployedAt:"https://mmakino.github.io/BottomsUp"},{name:"Friend Finder",title:"Friend Finder - Node and Express Servers",description:"A dating app based on personality compatibility through survey",technologies:["Node.js","Express","RESTful API","jQuery","AJAX"],image:"assets/images/friend_finder.png",github:"https://github.com/mmakino/FriendFinder",deployedAt:"https://intense-falls-18158.herokuapp.com/"},{name:"Word Guess Game",title:"Word Guess Game",description:"80's music themed Hangman game",technologies:["Javascript","jQuery"],image:"assets/images/word-guess-game.png",github:"https://github.com/mmakino/Word-Guess-Game",deployedAt:"https://mmakino.github.io/Word-Guess-Game"},{name:"RPS-Multiplayer",title:"RPS Multi-player",description:"Rock-Paper-Scissors multi-player online game based on Firebase for event synchronization",technologies:["Javascript","jQuery","Firebase"],image:"assets/images/rps-multiplayer.png",github:"https://github.com/mmakino/RPS-Multiplayer",deployedAt:"https://mmakino.github.io/RPS-Multiplayer"},{name:"Trivia Game",title:"Trivia Quiz Game",description:"A Trivia game written in JavaScript and jQuery, making use of the timers",technologies:["Javascript","jQuery"],image:"assets/images/trivia-game.png",github:"https://github.com/mmakino/TriviaGame",deployedAt:"https://mmakino.github.io/TriviaGame"},{name:"Giftastic",title:"GifTastic!",description:"Use the GIPHY API to make a dynamic web page that populates with gif images",technologies:["Javascript","jQuery","AJAX"],image:"assets/images/giftastic.png",github:"https://github.com/mmakino/GifTastic",deployedAt:"https://mmakino.github.io/GifTastic"},{name:"Star Wars RPG Game",title:"Star Wars RPG Game",description:"Star Wars themed RPG game written in javascript and jQuery.",technologies:["Javascript","jQuery"],image:"assets/images/star-wars-rpg.png",github:"https://github.com/mmakino/unit-4-game",deployedAt:"https://mmakino.github.io/unit-4-game"},{name:"Bamazon Storefront",title:"Bamazon -- Amazon-like storefront",description:"Node.js app with a command-line interface using MySQL in the backend.",technologies:["Node.js","MySQL"],image:"assets/images/bamazon.png",github:"https://github.com/mmakino/bamazon",deployedAt:""},{name:"LIRI CLI App",title:"LIRI -- Node.js command-line app",description:"LIRI is like iPhone's SIRI.",technologies:["Node.js","AJAX API query"],image:"assets/images/liri-node-cli.png",github:"https://github.com/mmakino/liri-node-app",deployedAt:""}],le=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={projects:a.initProjects()},a.handleCardExpandClick=a.handleCardExpandClick.bind(Object(L.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"initProjects",value:function(){return se.slice().map(function(e){return e.expanded=!1,e})}},{key:"handleCardExpandClick",value:function(e){var t=this.state.projects.slice();t[e].expanded=!this.state.projects[e].expanded,this.setState({projects:t})}},{key:"renderProjects",value:function(){var e=this,t=this.props.classes;return i.a.createElement(z.a,{cellHeight:"auto",className:t.gridList},this.state.projects.map(function(t,a){return i.a.createElement("div",{key:a.toString()},i.a.createElement(oe,{project:t,onClick:function(){return e.handleCardExpandClick(a)}}))}))}},{key:"render",value:function(){this.props.classes;return i.a.createElement("section",{className:"portfolio"},this.renderProjects())}}]),t}(n.Component),ce=Object(h.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"auto",height:"auto"}}})(le),me=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={placeholder:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement("nav",null,i.a.createElement(C,null)),i.a.createElement("section",null,i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/portfolio",component:ce}),i.a.createElement(d.a,{path:"/",render:function(e){return i.a.createElement(I,e)}}))))}}]),t}(n.Component);var ue=function(){return i.a.createElement(me,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.bab65d53.chunk.js.map