(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{59:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},96:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(26),i=s.n(a),r=(s(59),s(43)),o=s(103),l=s(102),d=s(100),j=s(101),m=s(99),h=s.p+"static/media/ngrx.b49f3c62.png",b=s.p+"static/media/react.ef20e673.png",u=s.p+"static/media/node.a8c363ae.png",p=s.p+"static/media/js.e35fa00e.png",x=s.p+"static/media/redux.4516fe25.jpg",O=s.p+"static/media/angular.367d4f3d.png",g=s.p+"static/media/vue.17c4554a.jpeg";const f={react:{backgroundImage:b,linearGradient:v("#61dafb","#222222"),primaryColor:"#61dafb",color:"#222222"},angular:{backgroundImage:O,linearGradient:v("#0043A9","#B42B2C"),primaryColor:"#B52C2D",color:"#0043A9"},vue:{backgroundImage:g,linearGradient:v("#49D191","#33475F"),primaryColor:"#33475F",color:"#49D191"},node:{backgroundImage:u,linearGradient:v("#80BD01","#333333"),primaryColor:"#333333",color:"#80BD01"},javascript:{backgroundImage:p,linearGradient:v("#F7E018","#000000"),primaryColor:"#F7E018",color:"#000000"},rxjs:{backgroundImage:h,linearGradient:v("#F80090","#242A31"),primaryColor:"#F80090",color:"#242A31"},redux:{backgroundImage:x,linearGradient:v("#764ABD","#1E1E1E"),primaryColor:"#764ABD",color:"#1E1E1E"},ngrx:{backgroundImage:h,linearGradient:v("#F80090","#242A31"),primaryColor:"#F80090",color:"#242A31"}};function v(e,t){return"linear-gradient(to bottom right, ".concat(e," 0%, ").concat(t," 100%)")}var k=s(0);const y=new o.a;let w;const{Provider:N,Consumer:C}=w=n.a.createContext();class S extends c.Component{constructor(){super(...arguments),this.state={...f.react,type:"react"},this.subscription=null,this.changeTheme=e=>{f[e]&&this.setState((t=>(this.setThemeColors(f[e]),t.type!==e?{...f[e],animate:!0,type:e}:t)))},this.stopThemeChangeTimer=()=>{y.next(!1)},this.startThemeChangeTimer=()=>{y.next(!0)}}componentDidMount(){this.setThemeColors(f.react),this.subscription=y.pipe(Object(j.a)(!0),Object(m.a)((e=>e?Object(l.a)(1e4):d.a))).subscribe((()=>{const e=Object.keys(f);let t=e[Math.floor(Math.random()*e.length)];for(;t===this.state.type;)t=e[Math.floor(Math.random()*e.length)];this.changeTheme(t)}))}setThemeColors(e){document.documentElement.style.setProperty("--primary-color",e.primaryColor),document.documentElement.style.setProperty("--secondary-color",e.color)}render(){return Object(k.jsx)(N,{value:{...this.state,changeTheme:this.changeTheme,stopThemeChangeTimer:this.stopThemeChangeTimer,startThemeChangeTimer:this.startThemeChangeTimer},children:this.props.children})}}function T(){const{type:e}=Object(c.useContext)(w),[t,s]=Object(c.useState)(""),[n,a]=Object(c.useState)(null);return Object(c.useEffect)((()=>{s(""),setTimeout((()=>s("fade-in")),50)}),[e]),{animation:t}}s(61);const E=()=>{const{linearGradient:e}=Object(c.useContext)(w),{animation:t}=T();return Object(k.jsx)("div",{className:"main ".concat(t),style:{background:e},children:Object(k.jsx)(E.Bubbles,{})})};E.Bubbles=()=>function(e,t){const s=[];for(let c=e;c<=t;c++)s.push(c);return s}(1,30).map((e=>Object(k.jsx)("div",{className:"bubble bubble-".concat(e)},e)));var D=E;s(62),s(63);class _ extends n.a.Component{constructor(){super(...arguments),this.state={text:"",isDeleting:!1,loopNum:1,typingSpeed:150,cursor:"|"},this.handleType=()=>{const{dataText:e}=this.props,{isDeleting:t,loopNum:s,text:c,typingSpeed:n}=this.state,a=e[s%e.length];this.setState({text:t?a.substring(0,c.length-1):a.substring(0,c.length+1),typingSpeed:t?30:150}),t||c!==a?t&&""===c&&this.setState({isDeleting:!1,loopNum:s+1}):setTimeout((()=>this.setState({isDeleting:!0})),500),setTimeout(this.handleType,n)},this.handleCursor=()=>{this.setState((e=>({cursor:"|"===e.cursor?"":"|"}))),setTimeout(this.handleCursor,300)}}componentDidMount(){this.handleType(),this.handleCursor()}render(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("span",{className:"typed-text",children:[this.state.text,Object(k.jsx)("span",{className:"typed-cursor",children:this.state.cursor})]})})}}var A=_;s(64);const I=()=>Object(k.jsxs)("div",{className:"social",children:[Object(k.jsx)(I.Link,{url:"https://github.com/486xtm",type:"github"}),Object(k.jsx)(I.Link,{url:"https://www.linkedin.com/in/emrebaskan/",type:"linkedin"}),Object(k.jsx)(I.Link,{url:"https://t.me/Biomagic0730",type:"telegram"}),Object(k.jsx)(I.Link,{url:"https://join.skype.com/invite/b7GMpyT187y8",type:"skype"})]});I.Link=e=>{let{url:t,type:s}=e;return Object(k.jsx)("a",{href:t,target:"_blank",children:Object(k.jsx)("span",{className:"fab fa-".concat(s)})})};var M=I;s(65);var B=e=>{let{icon:t,children:s}=e;return Object(k.jsxs)("div",{className:"info",children:[Object(k.jsxs)("div",{className:"property",children:[Object(k.jsx)("i",{className:"ion-ios-".concat(t)}),Object(k.jsxs)("strong",{children:[t,":"]})]}),Object(k.jsx)("span",{children:s})]})};s(66);var L=()=>{const{changeTheme:e,startThemeChangeTimer:t,stopThemeChangeTimer:s}=Object(c.useContext)(w);return Object(k.jsxs)("div",{className:"skills",children:[Object(k.jsx)("h6",{children:"Skills"}),Object(k.jsxs)("ul",{onMouseEnter:s,onMouseLeave:t,onMouseOver:function(t){const s=t.nativeEvent.target.id;s&&e(s)},children:[Object(k.jsx)("li",{id:"rxjs",children:"DEFI"}),Object(k.jsx)("li",{id:"rxjs",children:"Dapp Development"}),Object(k.jsx)("li",{id:"rxjs",children:"Solidity"}),Object(k.jsx)("li",{id:"rxjs",children:"SmartContract"}),Object(k.jsx)("li",{id:"rxjs",children:"NFT"}),Object(k.jsx)("li",{id:"rxjs",children:"ICOs"}),Object(k.jsx)("li",{id:"rxjs",children:"Solana"}),Object(k.jsx)("li",{id:"react",children:"React.js"}),Object(k.jsx)("li",{id:"angular",children:"Angular.js"}),Object(k.jsx)("li",{id:"vue",children:"Vue.js"}),Object(k.jsx)("li",{id:"rxjs",children:"React Native"}),Object(k.jsx)("li",{id:"redux",children:"Redux"}),Object(k.jsx)("li",{id:"node",children:"Node.js"}),Object(k.jsx)("li",{id:"ngrx",children:"Next.js"}),Object(k.jsx)("li",{id:"javascript",children:"JavaScript"})]})]})},R=s.p+"static/media/Resume.61dfe85a.pdf";var F=()=>{const{backgroundImage:e,type:t}=Object(c.useContext)(w),{animation:s}=T();return Object(k.jsxs)("div",{className:"profile",children:[Object(k.jsx)("div",{className:"profile__banner",children:Object(k.jsx)("div",{className:"profile__photo ".concat(s),style:{backgroundImage:"url(".concat(e,")")}})}),Object(k.jsxs)("div",{className:"profile__content",children:[Object(k.jsx)("div",{className:"profile__title",children:"Rudy Tan"}),Object(k.jsx)(A,{dataText:["Senior Blockchain Engineer","BlockChain Development","FullStack Development"]}),Object(k.jsx)(M,{}),Object(k.jsx)(B,{icon:"location",children:"Bremen, Germany"}),Object(k.jsx)(L,{})]}),Object(k.jsxs)("div",{className:"profile__contact",children:[Object(k.jsx)("a",{href:R,target:"_blank",rel:"noreferrer",children:Object(k.jsx)("span",{children:"Download CV"})}),Object(k.jsx)("a",{href:"mailto:floria428@gmail.com",children:Object(k.jsx)("span",{children:"Contact Me"})})]})]})},G=s(49);s(67);const V=()=>Object(k.jsxs)("ul",{className:"menu",children:[Object(k.jsx)(V.Item,{name:"person",link:"/#about",children:"About"}),Object(k.jsx)(V.Item,{name:"android-list",link:"/resume#resume",children:"Resume"}),Object(k.jsx)(V.Item,{name:"paintbrush",link:"/works#works",children:"Works"}),Object(k.jsx)(V.Item,{name:"at",link:"/contact#contact",children:"Contact"})]});V.Item=e=>{let{link:t="#",children:s,name:c}=e;return Object(k.jsx)("li",{children:Object(k.jsxs)(G.a,{smooth:!0,to:t,activeClassName:"active",exact:!0,children:[Object(k.jsx)("span",{className:"icon ion-".concat(c)}),s]})})};var P=V;s(75),s(76);var W=e=>{let{children:t,icon:s}=e;return Object(k.jsxs)("div",{className:"title",children:[s&&Object(k.jsx)("i",{className:s}),Object(k.jsx)("h3",{children:t})]})};var q=()=>Object(k.jsxs)("div",{className:"page",id:"about",children:[Object(k.jsx)(W,{children:"About Me"}),Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"column",children:[Object(k.jsx)("strong",{children:"Hi, I am Rudy"}),Object(k.jsxs)("p",{children:["I am a highly skilled and innovative Web3 Full Stack Developer with over 4 years of experience in building decentralized applications (dApps) and blockchain solutions.",Object(k.jsx)("br",{})," ",Object(k.jsx)("br",{}),"I excel in leveraging cutting-edge web technologies and blockchain protocols to create seamless and secure user experiences. My expertise spans both front-end and back-end development, with a deep understanding of smart contracts, distributed ledgers, and decentralized finance (DeFi).",Object(k.jsx)("br",{})," ",Object(k.jsx)("br",{}),"I am committed to staying at the forefront of emerging technologies, continuously learning, and contributing to the evolution of the Web3 ecosystem."]})]})}),Object(k.jsx)(W,{children:"Interests & Hobbies"}),Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"SPassionate about Family"}),Object(k.jsx)("li",{children:"Horse-riding & spending time in nature "}),Object(k.jsx)("li",{children:"Developing our team into star analysts"})]})}),Object(k.jsx)(W,{children:"Language"}),Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"Germany - Native Speaker"}),Object(k.jsx)("li",{children:"English - Fluent"})]})})]}),z=s(22),H=s(4);s(77),s(79),s(80);var U=e=>{let{date:t,title:s,company:c,children:n,logo:a,classNames:i=""}=e;return Object(k.jsxs)("div",{className:"resume-item ".concat(i),children:[Object(k.jsx)("div",{className:"resume-item__experience",children:Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"resume-item__date",children:t}),Object(k.jsxs)("div",{className:"resume-item__company",children:[Object(k.jsx)("p",{children:s}),Object(k.jsx)("h3",{children:c})]})]})}),Object(k.jsx)("p",{className:"resume-item__desc",children:n})]})};var X=()=>Object(k.jsxs)("div",{className:"page",id:"resume",children:[Object(k.jsx)(W,{icon:"fa fa-briefcase",children:"Resume - Total Commercial Experience 7 years"}),Object(k.jsxs)(U,{date:"2023.1 - 2024.5",title:"Senior Blockchain Engineer",company:"Fracas Web3 Agency, US | Remote ",children:[Object(k.jsx)("h4",{className:"text-center",children:"Description"}),"\u2022 Developed decentralized applications (dApps) on the Solana blockchain.",Object(k.jsx)("br",{}),"\u2022 Architected scalable and secure blockchain solutions.",Object(k.jsx)("br",{}),"\u2022 Led a team of developers and conducted code reviews.  ",Object(k.jsx)("br",{}),"\u2022 Integrated smart contracts and front-end interfaces. ",Object(k.jsx)("br",{}),"\u2022 Implemented SEO strategies to improve search engine rankings. ",Object(k.jsx)("br",{})]}),Object(k.jsxs)(U,{date:"2020.6 - 2022.12",title:"Senior Blockchain & Full Stack Developer",company:"KPMG, US | Remote",children:[Object(k.jsx)("h4",{className:"text-center",children:"Description"}),"\u2022 Completed big projects on time and got good feedback from clients.   Implemented fullstack applications using Web3 technologies.",Object(k.jsx)("br",{}),"\u2022 Built the MEVN, MEAN stack making sure it worked well and was safe.",Object(k.jsx)("br",{}),"\u2022 Used Next.js to make websites load faster and be easier to find on search engines like Google.",Object(k.jsx)("br",{}),"\u2022 Made it quicker and easier to release new updates to our software.",Object(k.jsx)("br",{}),"\u2022 Added blockchain technology to our software, making it more secure and letting us do more things with it.",Object(k.jsx)("br",{}),"\u2022 Got awards for doing great work and shared what I know with others in the team.",Object(k.jsx)("br",{}),"\u2022 Developed basic smart contracts using Solidity for Ethereum blockchain applications, under the guidance of senior developers.",Object(k.jsx)("br",{})]}),Object(k.jsxs)(U,{date:"2019.4 - 2020.5",title:"Senior Frontend  Developer",company:"TRUSCOVA GMBH, Germany",children:[Object(k.jsx)("h4",{className:"text-center",children:"Description"}),"\u2022 Developed software applications using the React.js , Next.js and Vue.js, making sure it worked well and was safe.",Object(k.jsx)("br",{}),"\u2022 Worked with teams to understand project requirements and design features.",Object(k.jsx)("br",{}),"\u2022 Built responsive and dynamic user interfaces.",Object(k.jsx)("br",{}),"\u2022 Participated in code reviews and received feedback from senior developers. ",Object(k.jsx)("br",{}),"\u2022 Improved coding skills and followed best practices in software development.",Object(k.jsx)("br",{})]}),Object(k.jsxs)(U,{date:"2018.2 - 2019.3",title:"React Developer",company:"MAINMATTER, Germany",children:[Object(k.jsx)("h4",{className:"text-center",children:"Description"}),"\u2022 Helped make software using MERN (MongoDB, Express, React, Node.js) stack, learning how to build all parts of a program.",Object(k.jsx)("br",{}),"\u2022 Worked with the team to understand what the software needed to do and then helped make it.",Object(k.jsx)("br",{}),"\u2022 Learned how to use MongoDB for storing data, Express for making the software run, and React for making it look good.",Object(k.jsx)("br",{}),"\u2022 Was part of the team and learned how to work together to finish tasks on time.",Object(k.jsx)("br",{}),"\u2022 Got feedback from others on my work and learned how to make it better.",Object(k.jsx)("br",{})]}),Object(k.jsx)(W,{icon:"fa fa-university",children:"Education"}),Object(k.jsx)(U,{date:"Aug 2018",title:"University of Bremen",company:"Germany",children:"Bachelor of Computer Science"})]});const J=[{title:"Centric.com",images:["https://i.ibb.co/SmT9sw8/1.jpg","https://i.ibb.co/pXr4Q2G/2.jpg","https://i.ibb.co/gv63DSc/3.jpg"],sourceCodeLink:"https://github.com/TheCoderDream/React-Ecommerce-App-with-Redux",demoLink:"http://centric.com/",type:"Blockchain"},{title:"Cryptocurrency Betting Site",images:["https://i.ibb.co/2czxSny/port3.png"],sourceCodeLink:"https://github.com/TheCoderDream/React-Ecommerce-App-with-Redux",demoLink:"https://blockchainbets.app/",type:"Blockchain"},{title:"Next Company Site",images:["https://i.ibb.co/Nr9QwtP/analogueitsolutions-com-2.png","https://i.ibb.co/xLGc2V2/analogueitsolutions-com.png","https://i.ibb.co/0rdSVD6/analogueitsolutions-com-3.png"],sourceCodeLink:"https://github.com/TheCoderDream/Angular-Ecommerce-App-with-NGRX",demoLink:"http://delirious-coast.surge.sh/",type:"Next"},{title:"React Compnay Site",images:["https://i.ibb.co/9hf618r/www-nactechsolution-com-1.png","https://i.ibb.co/x5xBKK9/www-nactechsolution-com-2.png","https://i.ibb.co/3RB7jBf/www-nactechsolution-com-3.png"],sourceCodeLink:"https://github.com/TheCoderDream/Vue-Ecommerce-App-with-Vuex",demoLink:"http://nactechsolution.com",type:"React"},{title:"Next Ecommerce App",images:["https://i.ibb.co/zSMNdtd/port5.jpg"],sourceCodeLink:"https://github.com/TheCoderDream/Vue-Ecommerce-App-with-Vuex",demoLink:"myfuturebaby.com",type:"Next"},{title:"Vue Project",images:["https://i.ibb.co/mcSv0wy/port8.png"],sourceCodeLink:"https://github.com/TheCoderDream/Vue-Ecommerce-App-with-Vuex",demoLink:"myfuturebaby.com",type:"Vue"}];s(81);var K=s(50);s(82),s(83);var Q=e=>{let{len:t,activeItem:s,changeItem:c}=e;const n=[];for(let a=0;a<t;a++){let e="owl-dot";s===a&&(e+=" active"),n.push(Object(k.jsx)("button",{onClick:()=>{c(a)},className:e,children:Object(k.jsx)("span",{})}))}return Object(k.jsx)("div",{className:"owl-dots",children:n})};var Y=e=>{let{classNames:t,images:s}=e;const n=Object(c.useRef)(),[a,i]=Object(c.useState)(s[0]),[r,o]=Object(c.useState)(0),l=e=>{let t;t="touchmove"===e.type?e.touches[0].clientX:e.clientX;const c=t-n.current.getBoundingClientRect().left,a=n.current.clientWidth/s.length;let r=Math.ceil(c/a)-1;r<0&&(r=0),r>=s.length&&(r=s.length-1),o(r),i(s[r])},d=e=>{i(s[0]),o(0)};return Object(k.jsxs)("div",{ref:n,className:t,style:{position:"relative"},children:[Object(k.jsx)(K.LazyLoadImage,{src:a,alt:"works",effect:"blur",onMouseMove:l,onMouseOut:d,onTouchMove:l,onTouchEnd:d}),Object(k.jsx)(Q,{len:s.length,activeItem:r,changeItem:e=>{i(s[e]),o(e)}})]})};var Z=e=>{let{images:t,title:s,sourceCodeLink:c,demoLink:n}=e;return Object(k.jsxs)("div",{className:"work-item",children:[Object(k.jsx)(Y,{images:t,classNames:"work-item__slider"}),Object(k.jsx)("h3",{children:s}),Object(k.jsx)("div",{className:"work-item__links",children:Object(k.jsxs)("a",{href:n,className:"work-item__demo",children:[Object(k.jsx)("i",{className:"fas fa-rocket"}),"Visit Site"]})})]})};s(84);var $=e=>{let{items:t,selected:s,clicked:c}=e;return Object(k.jsx)("div",{className:"works-menu",children:t.map((e=>Object(k.jsx)("button",{className:s===e?"active":"",onClick:()=>c(e),children:e},e)))})};var ee=()=>{const[e,t]=Object(c.useState)(J),[s,n]=Object(c.useState)("All");return Object(k.jsxs)("div",{className:"page",id:"works",children:[Object(k.jsx)(W,{children:"My Work History"}),Object(k.jsx)($,{items:["All","Blockchain","React","Next","Vue"],selected:s,clicked:function(e){n(e),"All"==e?t(J):(console.log(e),t(J.filter((t=>t.type===e))))}}),Object(k.jsx)("div",{children:e.map(((e,t)=>Object(k.jsx)("div",{className:"column",children:Object(k.jsx)(Z,{...e})},t)))})]})},te=s(54),se=s(51),ce=s.n(se);s(87);var ne=()=>{const[e,t]=Object(c.useState)(""),[s,n]=Object(c.useState)(""),a=Object(te.a)({initialValues:{name:"",email:"",subject:"",message:""},validate(e){const t={};return e.name||(t.name="Required"),e.subject||(t.subject="Required"),e.message||(t.message="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},async onSubmit(e){try{await ce.a.send("gmail","contact-form",e,"user_ivLokzQVLoHuv1nbXEhJi"),a.resetForm(),t("Thank you! Your message has been successfully sent"),setTimeout((()=>{t("")}),5e3)}catch(s){n("Something went wrong while sending your message!"),setTimeout((()=>{n("")}),5e3)}}});function i(e){let{name:t}=e;return a.errors[t]?Object(k.jsx)("div",{className:"contact-form__err",children:a.errors[t]}):null}return Object(k.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(k.jsxs)("div",{className:"contact-form",children:[Object(k.jsxs)("div",{className:"contact-form__control",children:[Object(k.jsx)("input",{value:a.values.name,onChange:a.handleChange,type:"text",placeholder:"Full Name",name:"name"}),Object(k.jsx)(i,{name:"name"})]}),Object(k.jsxs)("div",{className:"contact-form__control",children:[Object(k.jsx)("input",{value:a.values.email,onChange:a.handleChange,type:"text",placeholder:"Email Address",name:"email"}),Object(k.jsx)(i,{name:"email"})]}),Object(k.jsxs)("div",{className:"contact-form__control full-row",children:[Object(k.jsx)("input",{value:a.values.subject,onChange:a.handleChange,className:"subject",type:"text",placeholder:"Subject",name:"subject"}),Object(k.jsx)(i,{name:"subject"})]}),Object(k.jsxs)("div",{className:"contact-form__control full-row",children:[Object(k.jsx)("textarea",{value:a.values.message,onChange:a.handleChange,placeholder:"Your Message",name:"message"}),Object(k.jsx)(i,{name:"message"})]})]}),Object(k.jsx)("button",{className:"send-message",type:"submit",children:"SEND MESSAGE"}),Object(k.jsxs)("div",{className:"contact-form__result",children:[e&&Object(k.jsxs)("span",{className:"contact-form__scc",children:[" ",e," "]}),s&&Object(k.jsxs)("span",{className:"contact-form__scc",children:[" ",s," "]})]})]})};var ae=()=>Object(k.jsxs)("div",{className:"page",id:"contact",children:[Object(k.jsx)(W,{children:"Contact Me"}),Object(k.jsx)(ne,{})]});s(88);const ie=()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&(window.requestAnimationFrame(ie),window.scrollTo(0,e-e/10))};var re=()=>{const[e,t]=Object(c.useState)("");return Object(c.useEffect)((()=>{function e(e){window.scrollY>0?t("show"):t("hide")}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),Object(k.jsx)("div",{onClick:ie,className:"back-to-top ".concat(e),children:Object(k.jsx)("i",{className:"fas fa-arrow-circle-up"})})};const oe=Object(H.f)((e=>{let{location:t}=e;return Object(k.jsx)(r.TransitionGroup,{className:"transition-wrapper",children:Object(k.jsx)(r.CSSTransition,{classNames:"transition",timeout:1e3,unmountOnExit:!0,children:Object(k.jsxs)(H.c,{children:[Object(k.jsx)(H.a,{exact:!0,path:"/",children:Object(k.jsx)(q,{})}),Object(k.jsx)(H.a,{exact:!0,path:"/resume",children:Object(k.jsx)(X,{})}),Object(k.jsx)(H.a,{exact:!0,path:"/works",children:Object(k.jsx)(ee,{})}),Object(k.jsx)(H.a,{exact:!0,path:"/contact",children:Object(k.jsx)(ae,{})})]})},t.pathname)})}));var le=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(re,{}),Object(k.jsxs)("div",{className:"page-wrap",children:[Object(k.jsx)(D,{}),Object(k.jsx)(z.a,{children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(P,{}),Object(k.jsx)(F,{}),Object(k.jsx)(oe,{})]})})]})]})};var de=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,104)).then((t=>{let{getCLS:s,getFID:c,getFCP:n,getLCP:a,getTTFB:i}=t;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(S,{children:Object(k.jsx)(le,{})})}),document.getElementById("root")),de()}},[[96,1,2]]]);
//# sourceMappingURL=main.01bc5730.chunk.js.map