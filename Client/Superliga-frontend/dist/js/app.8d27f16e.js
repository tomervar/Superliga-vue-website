(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-688701fc":"d8a18c43","chunk-8bdab35c":"7ab95257"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-688701fc":1,"chunk-8bdab35c":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-688701fc":"faa571e1","chunk-8bdab35c":"e04c5eaf"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var m=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,r[1](m)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=l;s.push(["56d7","chunk-vendors"]),r()})({"14c8":function(e,t,r){"use strict";var n=r("3809"),a=r.n(n);a.a},1970:function(e,t,r){},"1e1c":function(e,t,r){"use strict";var n=r("6bd7"),a=r.n(n);a.a},"348e":function(e,t,r){"use strict";var n=r("4ce0"),a=r.n(n);a.a},3809:function(e,t,r){},"4ce0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("4160"),r("d3b7"),r("159b"),r("96cf");var n=r("1da1"),a=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{to:{name:"main"}}},[e._v("Superliga Vue")]),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"search"}}},[e._v("Search")]),r("b-nav-item",{attrs:{to:{name:"StageMatches"}}},[e._v("Stage Matches")]),r("b-nav-item",{attrs:{to:{name:"About"}}},[e._v("About")])],1),e.$root.store.username?r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" "+e._s(e.getUserName)+" ")]},proxy:!0}])},[r("b-dropdown-item",{attrs:{to:{name:"FavoritesMatches",params:e.getUserName}}},[e._v("My Matches")])],1),r("b-nav-item",{attrs:{href:"#"},on:{click:e.Logout}},[e._v("Log Out")])],1):r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-navbar-brand",[e._v("Hello Guest")]),r("b-nav-item",{attrs:{to:{name:"login"}}},[e._v("Login")]),r("b-nav-item",{attrs:{to:{name:"register"}}},[e._v("Register")])],1)],1)],1),r("router-view")],1)},s=[],i={name:"App",methods:{Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}},computed:{getUserName:function(){return this.$root.store.username}}},u=i,c=(r("5c0b"),r("2877")),l=Object(c["a"])(u,o,s,!1,null,null,null),m=l.exports,d=r("a7fe"),f=r.n(d),p=r("bc3a"),v=r.n(p),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Main Page")]),e.$root.store.username?r("FavoriteGames"):r("LoginPage"),r("LeagueInfo")],1)},h=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"league-preview"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-alt":"Image",tag:"article"}},[r("b-card-title",[e._v(e._s(e.leagueName))]),r("b-card-text",[e._v(" Season: "+e._s(e.season)+" "),r("br"),e._v(" Stage: "+e._s(e.stage)+" ")]),r("b-button",{attrs:{href:"#",variant:"primary"}},[e._v("Go somewhere")])],1)],1)},_=[],w={data:function(){return{leagueName:"superliga",season:"season",stage:"stage"}}},y=w,$=(r("e280"),Object(c["a"])(y,b,_,!1,null,null,null)),x=$.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.games,(function(e){return r("GamePreview",{key:e.id,attrs:{id:e.id,hostTeam:e.hostTeam,guestTeam:e.guestTeam,date:e.date,hour:e.hour}})})),1)},S=[],O=r("2909"),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game-preview"},[r("div",{staticClass:"game-title",attrs:{title:e.id}},[r("b",[e._v("Game Id:")]),e._v(" "+e._s(e.id)+" ")]),r("ul",{staticClass:"game-content"},[r("li",[e._v(" host: "+e._s(e.hostTeam))]),r("li",[e._v(" guest: "+e._s(e.guestTeam))]),r("li",[e._v(" date: "+e._s(e.date))]),r("li",[e._v(" time: "+e._s(e.hour))])])])},E=[],L=(r("a9e3"),{name:"GamePreview",props:{id:{type:Number,required:!0},hostTeam:{type:String,required:!0},guestTeam:{type:String,required:!0},date:{type:String,required:!0},hour:{type:String,required:!0}},mounted:function(){console.log("game preview mounted")}}),P=L,C=(r("14c8"),Object(c["a"])(P,j,E,!1,null,null,null)),T=C.exports,q={name:"FavoriteGames",components:{GamePreview:T},data:function(){return{games:[]}},methods:{updateGames:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("response"),t.prev=1,t.next=4,e.axios.get("http://localhost:3000/games/favoriteGames");case 4:n=t.sent,a=n.data.games,e.games=[],(r=e.games).push.apply(r,Object(O["a"])(a)),console.log(n),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log("error in update games"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},mounted:function(){console.log("favorite games mounted"),this.updateGames()}},G=q,N=Object(c["a"])(G,k,S,!1,null,null,null),U=N.exports,M=r("62cc"),A={components:{LeagueInfo:x,LoginPage:M["default"],FavoriteGames:U}},F=A,R=(r("348e"),Object(c["a"])(F,g,h,!1,null,"50ef67ec",null)),I=R.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Four Oh Four you didn't")]),r("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},H=[],B={},J=Object(c["a"])(B,D,H,!1,null,null,null),K=J.exports,V=[{path:"/",name:"main",component:I},{path:"/register",name:"register",component:function(){return r.e("chunk-688701fc").then(r.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return r.e("chunk-8bdab35c").then(r.bind(null,"37906"))}},{path:"*",name:"notFound",component:K}],z=V,Q=r("8c4f"),W=r("1dce"),X=r.n(W),Y=(r("f9e3"),r("2dd8"),r("1073")),Z=r("cbd0"),ee=r("b1fc"),te=r("7049"),re=r("a7e2"),ne=r("f9bc"),ae=r("44d4"),oe=r("cca8"),se=r("51c2"),ie=r("498a"),ue=r("9ae9");a["default"].use(Q["a"]);var ce=new Q["a"]({routes:z});[Y["a"],Z["a"],ee["a"],te["a"],re["a"],ne["a"],ae["a"],oe["a"],se["a"],ie["a"],ue["a"]].forEach((function(e){return a["default"].use(e)})),a["default"].use(X.a),v.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),a["default"].use(f.a,v.a),a["default"].config.productionTip=!1;var le={username:"",login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post("http://localhost:3000/Logout",{});case 3:t.sent,console.log("logout"),localStorage.removeItem("username"),e.username=void 0,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}};console.log(le),new a["default"]({router:ce,data:function(){return{store:le}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"62cc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Login")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin(t)}}},[r("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[r("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),r("b-form-invalid-feedback",[e._v(" Username is required ")])],1),r("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[r("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),r("b-form-invalid-feedback",[e._v(" Password is required ")])],1),r("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),r("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),r("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},a=[],o=(r("96cf"),r("1da1")),s=r("b5ae"),i={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:s["required"]},password:{required:s["required"]}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post("http://localhost:3000/Login",{username:e.form.username,password:e.form.password});case 3:t.sent,console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=i,c=(r("1e1c"),r("2877")),l=Object(c["a"])(u,n,a,!1,null,"10d55c30",null);t["default"]=l.exports},"6bd7":function(e,t,r){},"9c0c":function(e,t,r){},e280:function(e,t,r){"use strict";var n=r("1970"),a=r.n(n);a.a}});
//# sourceMappingURL=app.8d27f16e.js.map