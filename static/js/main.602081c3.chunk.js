(this.webpackJsonppr3=this.webpackJsonppr3||[]).push([[0],[,,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/1.fc59dccd.mp4"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/2.c388cfd3.mp4"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/3.95ecfebb.mp4"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/4.f0077766.mp4"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/5.59b363f5.mp4"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/6.8c0e5061.mp4"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/7.396d34d6.mp4"},,,,,function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),r=i(7),s=i.n(r),l=(i(22),i(3)),a=i(4),d=i(6),o=i(5),h=(i(23),i(8),i(0));var j=function(){return Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h1",{children:"Assignment 2: Javascript"}),Object(h.jsx)("h2",{children:"CS 185 Spring 2020"}),Object(h.jsx)("p",{children:"Assigned on January 20, 2021"}),Object(h.jsx)("p",{children:"Due Date: January 27, 2021"}),Object(h.jsx)("p",{children:"Author: Jared Flores"})]})};var b=function(){return Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h1",{children:"Beta Test Sign-up"}),Object(h.jsxs)("form",{method:"GET",action:"./text.html",children:[Object(h.jsxs)("label",{children:["Minecraft Username",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"fname",id:"fname",placeholder:"Minecraft username..."})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:["Discord ID",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"lname",id:"lname",placeholder:"Discord ID..."})]}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"How did you find out about this project?"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"refer",value:"reddit"}),"\xa0Reddit",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"radio",name:"refer",value:"youtube"}),"\xa0YouTube",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"radio",name:"refer",value:"twitter"}),"\xa0Twitter"]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Sign-up"})]})]})},u=i(2);i(10);var x=function(e){var t="gallery-item "+e.item;return Object(h.jsx)("div",{class:t,onClick:e.cl})},O=function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={scrollToTop:!1,lightbox:!1,lightboxInner:"lightbox-item item-1"},n.handleScroll=n.handleScroll.bind(Object(u.a)(n)),n.handleScrollTop=n.handleScrollTop.bind(Object(u.a)(n)),n.handleMouseDown=n.handleMouseDown.bind(Object(u.a)(n)),n.handleLightboxInteract=n.handleLightboxInteract.bind(Object(u.a)(n)),n.handleImageClick=n.handleImageClick.bind(Object(u.a)(n)),n.gallery=n.gallery.bind(Object(u.a)(n)),n}return Object(a.a)(i,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({scrollToTop:document.scrollingElement.scrollTop>=.25*document.scrollingElement.scrollHeight})}},{key:"handleScrollTop",value:function(){document.scrollingElement.scrollTop=0}},{key:"handleLightboxInteract",value:function(e,t){var i,n,c,r;window.innerWidth>window.innerHeight?(i=(window.innerWidth-.9*window.innerHeight)/2,n=(window.innerWidth-.9*window.innerHeight)/2+.9*window.innerHeight,c=.05*window.innerHeight,r=.95*window.innerHeight):(i=.05*window.innerWidth,n=.95*window.innerWidth,c=(window.innerHeight-.9*window.innerWidth)/2,r=(window.innerHeight-.9*window.innerWidth)/2+.9*window.innerWidth),(e<i||e>n||t<c||t>r)&&this.setState({lightbox:!1})}},{key:"handleMouseDown",value:function(e){this.handleLightboxInteract(e.clientX,e.clientY)}},{key:"handleImageClick",value:function(e){this.setState({lightbox:!0,lightboxInner:e.target.className.replace("gallery-item ","lightbox-item ").trim()})}},{key:"gallery",value:function(){var e=this;return["item-1","item-2","item-3","item-4","item-5","item-6","item-7"].map((function(t){return Object(h.jsx)(x,{item:t,cl:e.handleImageClick})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"lightbox-background",class:this.state.lightbox?"show":"hide"}),Object(h.jsx)("div",{id:"lightbox-overlay",class:this.state.lightbox?"show":"hide",onMouseDown:this.handleMouseDown,children:Object(h.jsx)("div",{id:"lightbox-item",children:Object(h.jsx)("div",{id:"lightbox-inner",class:this.state.lightboxInner})})}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("div",{id:"header",children:Object(h.jsx)("h1",{children:"Gallery"})}),Object(h.jsx)("div",{id:"gallery",children:this.gallery()})]}),Object(h.jsx)("div",{id:"scroll-button",class:this.state.scrollToTop?"show":"hide",onClick:this.handleScrollTop,children:"Scroll to Top"})]})}}]),i}(n.Component);var p=function(e){return Object(h.jsx)("div",{class:"gallery-video-item",children:Object(h.jsx)("video",{src:e.vid.default,onClick:e.cl})})},g=(i(25),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={scrollToTop:!1,lightbox:!1,lightboxInnerVid:null},i.handleScroll=i.handleScroll.bind(Object(u.a)(i)),i.handleScrollTop=i.handleScrollTop.bind(Object(u.a)(i)),i.handleMouseDown=i.handleMouseDown.bind(Object(u.a)(i)),i.handleLightboxInteract=i.handleLightboxInteract.bind(Object(u.a)(i)),i.handleVideoClick=i.handleVideoClick.bind(Object(u.a)(i)),i.gallery=i.gallery.bind(Object(u.a)(i)),i}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScroll),this.setState({lightboxInnerVid:document.getElementById("lightbox-inner")})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){this.setState({scrollToTop:document.scrollingElement.scrollTop>=.25*document.scrollingElement.scrollHeight})}},{key:"handleScrollTop",value:function(){document.scrollingElement.scrollTop=0}},{key:"handleLightboxInteract",value:function(e,t){var i,n,c,r;i=.05*window.innerWidth,n=.95*window.innerWidth,c=.05*window.innerHeight,r=.95*window.innerHeight,(e<i||e>n||t<c||t>r)&&(this.setState({lightbox:!1}),this.state.lightboxInnerVid.pause())}},{key:"handleMouseDown",value:function(e){this.handleLightboxInteract(e.clientX,e.clientY)}},{key:"handleVideoClick",value:function(e){this.setState({lightbox:!0});e.target;this.state.lightboxInnerVid.src=e.target.src}},{key:"gallery",value:function(){var e=this;return[i(11),i(12),i(13),i(14),i(15),i(16),i(17)].map((function(t){return Object(h.jsx)(p,{vid:t,cl:e.handleVideoClick})}))}},{key:"render",value:function(){i(11),i(12),i(13),i(14),i(15),i(16),i(17);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"lightbox-video-background",class:this.state.lightbox?"show":"hide"}),Object(h.jsx)("div",{id:"lightbox-video-overlay",class:this.state.lightbox?"show":"hide",onMouseDown:this.handleMouseDown,children:Object(h.jsx)("div",{id:"lightbox-video-item",children:Object(h.jsx)("video",{id:"lightbox-inner",src:"./assets/1.mp4",controls:!0})})}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("div",{id:"header",children:Object(h.jsx)("h1",{children:"Trailers"})}),Object(h.jsx)("div",{id:"gallery-video",children:this.gallery()})]}),Object(h.jsx)("div",{id:"scroll-button",class:this.state.scrollToTop?"show":"hide",onClick:this.handleScrollTop,children:"Scroll to Top"})]})}}]),n}(n.Component));i(26);var m=function(){return Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h1",{children:"Youtube Links"}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Upload Date"}),Object(h.jsx)("th",{children:"Link"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"I Coded Christmas Weapons for my Friends"}),Object(h.jsx)("td",{children:"Dec 28, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/gTZpMCZ8KP8",target:"_blank",children:"https://youtu.be/gTZpMCZ8KP8"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"I Coded My Friends' Ideas in Minecraft"}),Object(h.jsx)("td",{children:"Dec 20, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/VE88k8doAVI",target:"_blank",children:"https://youtu.be/VE88k8doAVI"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Terraria's Slime Mount vs. Ender Dragon"}),Object(h.jsx)("td",{children:"Dec 13, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/70jsaDHx5NM",target:"_blank",children:"https://youtu.be/70jsaDHx5NM"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"M3: Magic Update Teaser"}),Object(h.jsx)("td",{children:"Dec 6, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/55_EBWIzULs",target:"_blank",children:"https://youtu.be/55_EBWIzULs"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Terraria's Stardust Dragon Meets Minecraft's Ender Dragon"}),Object(h.jsx)("td",{children:"Nov 22, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/eznCEzi-kN8",target:"_blank",children:"https://youtu.be/eznCEzi-kN8"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Trailer: Minecraft Master Mode"}),Object(h.jsx)("td",{children:"Nov 15, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/JGjpspmFi3M",target:"_blank",children:"https://youtu.be/JGjpspmFi3M"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Minecraft Master Mode (Teaser)"}),Object(h.jsx)("td",{children:"Nov 15, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/9GlHHlxmXEA",target:"_blank",children:"https://youtu.be/9GlHHlxmXEA"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Taking on Brain of Cthulhu - 360\xb0 Boss Fight"}),Object(h.jsx)("td",{children:"Nov 8, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/Bk7nOMzFXf8",target:"_blank",children:"https://youtu.be/Bk7nOMzFXf8"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"How Minecraft Teaches its Players (University Project)"}),Object(h.jsx)("td",{children:"Nov 1, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/r_fLfDiWDXs",target:"_blank",children:"https://youtu.be/r_fLfDiWDXs"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Terraria's King Slime Meets Minecraft"}),Object(h.jsx)("td",{children:"Nov 1, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/e1NQ2hYn6ZA",target:"_blank",children:"https://youtu.be/e1NQ2hYn6ZA"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Slaying Terraria's Destroyer... in 3D"}),Object(h.jsx)("td",{children:"Oct 18, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/kL_7CIv9NVk",target:"_blank",children:"https://youtu.be/kL_7CIv9NVk"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Coding More Bosses in Minecraft (Terraria's Brain of Cthulhu)"}),Object(h.jsx)("td",{children:"Oct 11, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/coIZYH5z5gw",target:"_blank",children:"https://youtu.be/coIZYH5z5gw"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Eater of Worlds in Minecraft (And how to download it!)"}),Object(h.jsx)("td",{children:"Oct 9, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/PVwfqCa9TfU",target:"_blank",children:"https://youtu.be/PVwfqCa9TfU"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Terraria's 1.4 Block Swap in Minecraft"}),Object(h.jsx)("td",{children:"Oct 2, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/J19trC1odcM",target:"_blank",children:"https://youtu.be/J19trC1odcM"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"How can Terraria exist in 3D?"}),Object(h.jsx)("td",{children:"Oct 1, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/U_DALQUsRss",target:"_blank",children:"https://youtu.be/U_DALQUsRss"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"We Made A Squid Serpent Boss In Minecraft"}),Object(h.jsx)("td",{children:"Jul 8, 2020"}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"https://youtu.be/x-xtytkI8hs",target:"_blank",children:"https://youtu.be/x-xtytkI8hs"})})]})]})]})},f=(i(27),function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(e){var n;return Object(l.a)(this,i),(n=t.call(this,e)).state={emailValue:"",message:-1,color:"#00FF00"},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.validateEmail=n.validateEmail.bind(Object(u.a)(n)),n.getColor=n.getColor.bind(Object(u.a)(n)),n}return Object(a.a)(i,[{key:"validateEmail",value:function(){if(void 0!=this.state.emailValue&&null!=this.state.emailValue&&""!=this.state.emailValue.trim()){var e=this.state.emailValue;if(e.length>4){var t=e.substring(e.length-4).toLowerCase();if(".com"==t||".edu"==t)return-1!=e.indexOf("@")}}return!1}},{key:"handleChange",value:function(e){this.setState({emailValue:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(!0),this.validateEmail()?this.setState({message:0}):this.setState({message:1})}},{key:"getColor",value:function(){return{color:0==this.state.message?"#00FF00":"#FF0000"}}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h1",{children:"Email Validator"}),Object(h.jsxs)("form",{method:"GET",action:"./text.html",id:"email-form",onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Email",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Email address...",onChange:this.handleChange})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Validate"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{id:"message-box",class:this.state.message<0?"hide":"show",style:this.getColor(),children:0==this.state.message?"Email successfully recorded":"Invalid email address."})]})}}]),i}(n.Component)),v=function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){var e=this;return function(){var t=e.props.activetab;return 2==t?Object(h.jsx)(b,{}):3==t?Object(h.jsx)(O,{}):4==t?Object(h.jsx)(g,{}):5==t?Object(h.jsx)(m,{}):6==t?Object(h.jsx)(f,{}):Object(h.jsx)(j,{})}()}}]),i}(n.Component);var y=function(e){var t=e.out.id==e.activetab;return console.log(e),Object(h.jsx)("div",{class:t?"navbar-item highlighted":"navbar-item",onClick:e.ctab.bind(this,e.out.id),children:e.out.title})},k=function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(a.a)(i,[{key:"render",value:function(){var e=this;return console.log("id is "+this.props.activetab),this.props.tabs.map((function(t){return Object(h.jsx)(y,{out:t,activetab:e.props.activetab,ctab:e.props.ctab})}))}}]),i}(n.Component),w=function(e){Object(d.a)(i,e);var t=Object(o.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).state={active:1},e.changetab=function(t){e.setState({active:t})},e}return Object(a.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{id:"navbar",children:Object(h.jsx)(k,{tabs:[{id:1,title:"Home"},{id:2,title:"Text"},{id:3,title:"Images"},{id:4,title:"Videos"},{id:5,title:"Table"},{id:6,title:"Email"}],activetab:this.state.active,ctab:this.changetab})}),Object(h.jsx)(v,{activetab:this.state.active})]})}}]),i}(n.Component),T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;i(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),T()}],[[28,1,2]]]);
//# sourceMappingURL=main.602081c3.chunk.js.map