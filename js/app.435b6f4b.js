(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&u.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i={app:0},s=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2c7b4702","chunk-6c837274":"d12b49c6"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-6c837274":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"7d79b346","chunk-6c837274":"c7c26022"}[t]+".css",i=c.p+o,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===o||d===i)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[t],m.parentNode.removeChild(m),n(s)},m.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){a[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}i[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var m=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0032":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg-icon",attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:t.path}})])},a=[],i=(n("b0c0"),n("94ed")),s={arrowLeft:i["e"],arrowRight:i["f"],arrowDown:i["c"],dotCircle:i["h"],closeCircle:i["i"],arrowExpand:i["d"],arrowCollapse:i["b"],triangle:i["j"],checkCircle:i["g"],alertCircle:i["a"]},r={name:"svg-icon",props:{name:String},computed:{path:function(){return s[this.name]}}},c=r,l=n("2877"),d=Object(l["a"])(c,o,a,!1,null,null,null);e["a"]=d.exports},"00e2":function(t,e,n){"use strict";var o=n("1ab5"),a=n.n(o);a.a},"01c4":function(t,e,n){},"0273":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-hum-header",class:{"clip-it":t.clip}},[n("div",{staticClass:"header-content"},[n("div",{staticClass:"c-header-bg overflow-hidden"},[t._t("header-bg",[n("div",{ref:"banner",staticClass:"home-banner"})])],2),n("div",{staticClass:"header-body overflow-hidden"},[n("div",{staticClass:"header-body-content",class:t.getClass},[n("div",{staticClass:"content-main"},[t._t("header-body",[t._m(0)])],2)]),n("svg-icon",{staticClass:"go-down",attrs:{name:"arrowDown"}})],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-header-body-text"},[n("p",[t._v(" Hi, my name is Luna."),n("br"),n("br"),t._v("I have been investigating the HUM Organisation for the last couple of months. ")]),n("p",[t._v(" Below, you will find my research notes on my progress so far. It is incredibly important that this information be made public inspite of forces that don’t wish for this to happen. ")]),n("p",[t._v("Look. Share.")])])}],i=n("0032"),s={name:"HumHeader",components:{svgIcon:i["a"]},props:{options:{type:Object,default:function(){return{overlay:!1}}},clip:{type:Boolean,default:!1}},computed:{getClass:function(){var t="";if(this.options.overlay){var e=this.options.overlayType||"";t+="overlay "+e}return t}},mounted:function(){var t=this,e=this.$refs.banner;if(e){var n=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);n<1024?t.$emit("header-mounted",e):t.$emit("header-mounted",e,!0)}window.addEventListener("resize",(function(){var n=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);n<1024?t.$emit("header-mounted",e):t.$emit("header-mounted",e,!0)}))}},r=s,c=(n("93a9"),n("2877")),l=Object(c["a"])(r,o,a,!1,null,"3b669cd6",null);e["a"]=l.exports},"05be":function(t,e,n){t.exports=n.p+"img/matka.7a523714.png"},"0b80":function(t,e,n){t.exports=n.p+"img/about-step3.0ab388ef.png"},1099:function(t,e,n){"use strict";var o=n("14f9"),a=n.n(o);a.a},1485:function(t,e,n){t.exports=n.p+"img/hum_objectives.8a49d429.svg"},"14f9":function(t,e,n){},1771:function(t,e,n){var o={"./about/about-exhibit1.png":"e08a","./about/about-exhibit2.png":"e689","./about/about-exhibit3.png":"eb94","./about/about-exhibit4.png":"53d4","./about/about-exhibit5.png":"811b","./about/about-exhibit6.png":"6679","./about/about-step2.png":"bf5a","./about/about-step3.png":"0b80","./about/about-step4-1.png":"2b14","./about/about-step4-2.png":"9524","./about/about-step4-3.png":"8146","./about/about-step4-4.png":"4f2c","./about/logos/barbican.svg":"c62d","./about/logos/british_council.svg":"4c38","./about/logos/future_fiction.svg":"bb1d","./about/logos/hetco.png":"bc40","./about/logos/hla.png":"3bd1","./about/logos/msf.png":"ca2e","./about/logos/nid.svg":"7ae7","./about/logos/quicksand.svg":"f390","./about/logos/sixervr.png":"fc9d","./about/logos/stby.png":"7fc9","./about/logos/tandem_research.svg":"f0ab","./carousel/hum_epidemiologist.jpg":"4bfb","./carousel/hum_hydro_engineer.jpg":"945e","./carousel/hum_hydro_farmer.jpg":"810a","./carousel/hum_med_worker.jpg":"3c71","./carousel/hum_relief_worker.jpg":"34f1","./carousel/hum_well_digger.jpg":"848d","./fedlogo.png":"6379","./hum_homes.jpg":"3778","./hum_objectives.svg":"1485","./hum_vr_fed.jpg":"67de","./hum_vr_hydro.jpg":"4b73","./hum_vr_pod.jpg":"87a1","./hum_vr_wars.jpg":"c6b9","./hydrologo.png":"8023","./matka.png":"05be","./medlogo.png":"5d89","./tankerpod.png":"7fef","./toolkit/toolkit-content1.jpg":"3fa9","./toolkit/toolkit-content2.jpg":"38c8","./toolkit/toolkit-header-bg.png":"e196","./wars-map.png":"6015","./warslogo.png":"da89","./whellogo.png":"5fd0"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=i,t.exports=a,a.id="1771"},"1ab5":function(t,e,n){},"2b14":function(t,e,n){t.exports=n.p+"img/about-step4-1.9534c45c.png"},"2cf1":function(t,e,n){},3242:function(t,e,n){"use strict";var o=n("ce53"),a=n.n(o);a.a},"34f1":function(t,e,n){t.exports=n.p+"img/hum_relief_worker.c5e7a14e.jpg"},3778:function(t,e,n){t.exports=n.p+"img/hum_homes.b92cad39.jpg"},"38c8":function(t,e,n){t.exports=n.p+"img/toolkit-content2.31f8f459.jpg"},"3bd1":function(t,e,n){t.exports=n.p+"img/hla.26827ad7.png"},"3c71":function(t,e,n){t.exports=n.p+"img/hum_med_worker.2e769780.jpg"},"3fa9":function(t,e,n){t.exports=n.p+"img/toolkit-content1.754f9906.jpg"},"4b73":function(t,e,n){t.exports=n.p+"img/hum_vr_hydro.abaecbca.jpg"},"4bfb":function(t,e,n){t.exports=n.p+"img/hum_epidemiologist.4a8a04ff.jpg"},"4c38":function(t,e,n){t.exports=n.p+"img/british_council.c629cb17.svg"},"4f2c":function(t,e,n){t.exports=n.p+"img/about-step4-4.367ca4e4.png"},"53d4":function(t,e,n){t.exports=n.p+"img/about-exhibit4.dfc7976b.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HumNav"),n("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-nav",class:{"dark-text":t.darkText}},[n("div",{staticClass:"nav-logo-text"},[t._v("hum")]),n("div",{staticClass:"spacer"}),n("div",{class:["c-nav-items",t.showNav?"show":"hide"]},[n("ul",{staticClass:"items-list"},["Home"!=t.nextRoute?n("li",{staticClass:"nav-item",staticStyle:{"--n":"0"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"},nativeOn:{click:function(e){return t.toggleNav(e)}}},[n("span",[t._v("HUM.2035")])])],1):t._e(),"About"!=t.nextRoute?n("li",{staticClass:"nav-item",staticStyle:{"--n":"1"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"},nativeOn:{click:function(e){return t.toggleNav(e)}}},[n("span",[t._v("About")])])],1):t._e(),"Toolkit"!=t.nextRoute?n("li",{staticClass:"nav-item",staticStyle:{"--n":"2"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/toolkit"},nativeOn:{click:function(e){return t.toggleNav(e)}}},[n("span",[t._v("Toolkit")])])],1):t._e()])]),n("div",{staticClass:"toggle-icon",on:{click:t.toggleNav}},[n("svg-icon",{attrs:{name:t.iconName}})],1)])},r=[],c=(n("b0c0"),n("0032")),l=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hum-home"}},[n("div",{staticClass:"home-vr-viewer",class:{show:t.showVrPopup}},[n("div",{staticClass:"vr-content"},[n("div",{ref:"content-pano",staticClass:"content-pano-img"}),t.contentPanoLoading?n("div",{staticClass:"content-loading"},[t._m(0),t._m(1)]):t._e(),n("div",{staticClass:"c-vr-close",on:{click:t.closeVr}},[n("svg-icon",{attrs:{name:"closeCircle"}})],1),n("div",{staticClass:"vr-textual-info weight-light"},[n("p",[t._v(t._s(t.contentPanoText))])])])]),n("HumHeader",{attrs:{options:t.headerOptions,clip:""},on:{"header-mounted":t.processHeaderPano}}),n("HomeAbout"),n("HumEvidence"),n("HumOrg",{on:{"open-vr":t.processContentPano}}),n("HumExtras"),n("HumDetails"),n("HumFooter")],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"dot1"}),n("div",{staticClass:"dot2"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-text"},[n("p",[t._v("Loading Scene...")])])}],m=n("0273"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-home-about overflow-hidden"},[o("div",{staticClass:"about-section c-boards"},[o("div",{staticClass:"board jotted overflow-hidden"},[o("div",{staticClass:"board-content"},[o("div",{staticClass:"content-main"},[o("img",{staticClass:"board-bg",attrs:{src:n("3778")}}),o("div",{staticClass:"sticky-note side-note"},[o("p",[t._v(" NANO Pill for poor people where they can get tracked for their health metrics. Epidemiologist in a van/modded bike with an antenna. ")])]),o("div",{staticClass:"sticky-note below-note"},[o("p",[t._v(" Telling the story of a digital epidemiologist trying to "),o("strong",[t._v(" investigate transmission amongst the homeless and "),o("span",{staticClass:"xyz"},[t._v("prisoners")]),t._v(" with trackers and tags ")]),t._v(" in a world "),o("strong",[t._v("where the underprivileged are neglected.")])])]),o("div",{staticClass:"rough-jot"},[o("p",[t._v(" + ambulance + police ?? "),o("br"),t._v("+ citizen activists food distribution ")])])])])]),o("div",{staticClass:"board sorted overflow-hidden"},[o("div",{staticClass:"board-content",attrs:{id:"card-notes-container"}},[o("div",{staticClass:"content-main"},[o("div",{staticClass:"c-info-pic overlay light"},[o("img",{staticClass:"pic-elem",attrs:{src:n("4bfb")}})]),o("div",{staticClass:"c-info-data"},[o("span",{staticClass:"data-header weight-bold"},[t._v("Epidemiologist")]),o("span",{staticClass:"data-undertext"},[t._v("-- ext. shot for better control")]),o("div",{staticClass:"data-content"},[o("div",{staticClass:"sticky-note data-note"},[o("p",[t._v(" Telling the story of a digital epidemiologist trying to develop "),o("strong",[t._v("tools to monitor the public travelling on public transport ")]),t._v("in a world where"),o("strong",[t._v(" citizens are adapting to living with thw pandemic.")])])])])])])])])]),o("div",{staticClass:"about-section desc"},[o("div",{staticClass:"desc-content"},[o("p",{staticClass:"title weight-bold"},[t._v("HUM.2035")]),o("p",{staticClass:"content"},[t._v(" HUM, a humanitarian aid network founded in 2020 India, the project tells the stories of HUM-affiliated humanitarian workers dealing with the aftermath of storm Lata which has recently hit Goa. In it are explored themes like the purpose of upskilling and questions around employment when facing displacement, the use of mobile-based or digital services, encouraging multidisciplinarity across sectors (from food provision to health care to financial inclusion) and the support of local efforts and knowledge. ")])])])])}],f={name:"HomeAbout"},g=f,v=(n("c530"),n("2877")),b=Object(v["a"])(g,h,p,!1,null,"5a3f6c74",null),w=b.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-hum-evidence"},[n("div",{staticClass:"evidence-article"},[n("div",{staticClass:"article-header"},[n("p",{staticClass:"highlight-para"},[n("span",[t._v(" This is latest video I scraped from their confidential broadcast to their partners ")])])]),n("div",{staticClass:"article-info"},[n("p",[t._v(" …and we’re pleased to announce that we have met our targets for the last quarter and we are on track to meet or possibly exceed targets for the next quarter as well. We thank you for your patience and your support for the same. ")])]),n("div",{staticClass:"article-media"},[n("div",{staticClass:"c-media-content",staticStyle:{"--aspect-ratio":"9 / 16"}},[n("iframe",{staticClass:"media-content",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://player.vimeo.com/video/329957538?title=0&byline=0&portrait=0",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})]),n("div",{staticClass:"media-text only-desktop"},[n("div",{staticClass:"from-to"},[n("p",[n("strong",[t._v("FROM: ")]),t._v("#########@HUM.ORG")]),n("p",[n("strong",[t._v("TO: ")]),t._v("########@HUM.ORG")])]),n("div",{staticClass:"caption-text"},[n("p",[t._v("..…and we’re pleased to announce that we have met our targets for the last quarter and we are on track to meet or possibly exceed targets for the next quarter as well. We thank you for your patience and your support for the same. We have put together a small video to give you a better understanding of the work we do. We hope you find this of value……")])])])]),n("div",{staticClass:"article-caption"},[n("p",[t._v(" We have put together a small video to give you a better understanding of the work we do. We hope you find this of… ")])])])])}],C={name:"HumEvidence"},x=C,k=(n("3242"),Object(v["a"])(x,y,_,!1,null,"b5396c80",null)),E=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-hum-org"},[t._m(0),n("div",{staticClass:"hum-org-section hum-structure"},[t._m(1),n("div",{staticClass:"section-figure"},[n("div",{staticClass:"c-figure-items"},[t._m(2),t._l(t.structureTags,(function(e,o){return n("div",{key:o,class:["figure-item-wrapper",e.isBig?"big":""],style:{"--n":o+1}},[n("div",{staticClass:"figure-item structure-tag"},[n("div",{staticClass:"c-tag-img"},[n("img",{staticClass:"tag-img",attrs:{src:e.src},on:{click:function(n){return t.openVrImg(e)}}})]),n("div",{staticClass:"tag-content"},[n("div",{staticClass:"tag-title"},[n("span",[t._v(t._s(e.title))])]),n("div",{staticClass:"tag-desc"},[n("p",[t._v(t._s(e.desc))])])])])])}))],2)])])])},H=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hum-org-section hum-objective"},[o("div",{staticClass:"section-data"},[o("div",{staticClass:"section-title weight-bold"},[o("span",[t._v("Aims and Objectives")])]),o("div",{staticClass:"section-info"},[o("p",[t._v(" The HUM organisation has a set way of working. Digging through some of their shareholder meeting documents, I found this organisation matrix, which explains their modus operandi. ")])])]),o("div",{staticClass:"section-figure"},[o("div",{staticClass:"figure-img"},[o("img",{attrs:{src:n("1485")}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-data"},[n("div",{staticClass:"section-title weight-bold"},[n("span",[t._v("Organisation Structure")])]),n("div",{staticClass:"section-info"},[n("p",[t._v(" It appears that well known organisations such as WARS, WHEL, and MED.CN are all under control of HUM! These well-liked public facing organisations are under their direct control. ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"figure-item-wrapper only-desktop title-tag-wrapper",staticStyle:{"--n":"0"}},[n("div",{staticClass:"figure-item structure-tag dark"},[n("div",{staticClass:"c-tag-logo-text"},[t._v("hum")]),n("div",{staticClass:"tag-content"},[n("div",{staticClass:"tag-desc"},[n("p",[t._v("A Humanitarian Conglomerate")])])])])])}],j=(n("2ef0"),{name:"HumOrg",data:function(){return{structureTags:[{shortCode:"wars",title:"WARS",desc:"Water Allocation and Rationing System",src:n("da89"),vrPath:n("c6b9"),isBig:!0},{shortCode:"fed",title:"FED",desc:"Farming Exponential Deployment",src:n("6379"),vrPath:n("67de")},{shortCode:"whel",title:"WHEL",desc:"Water Health and Environment Labour",src:n("5fd0"),vrPath:n("c6b9")},{shortCode:"med",title:"MED.CN",desc:"Mass Environmental Disease Control",src:n("5d89"),vrPath:n("c6b9")},{shortCode:"hydro",title:"Hydrosystem Cooperatives",desc:"An assembly line of water relief kits for households",src:n("8023"),vrPath:n("4b73")}]}},methods:{openVrImg:function(t){var e=this;e.$emit("open-vr",t.shortCode,t.vrPath)}}}),M=j,P=(n("729d"),Object(v["a"])(M,T,H,!1,null,"4f14d9f3",null)),I=P.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-hum-extras"},[n("div",{staticClass:"extra-content"},[n("div",{staticClass:"c-extra-img"},[n("div",{staticClass:"c-pano-img"})]),n("div",{staticClass:"c-extra-info"},[n("div",{staticClass:"info-title weight-bold"},[n("span",[t._v("A Discreet Meeting")])]),n("div",{staticClass:"info-desc"},[n("p",[t._v("Through sheer luck I met an ex-HUM operative at a farm-market, through whom I obtained additional confidential material, the most interesting of which is the HUM Ecosystem Map. This diagram meticulously lays out the structure of HUM, and how their public facing organisations worked together post Storm Lata.")])])])])])}],N=n("3f1d"),A={name:"HumExtras",data:function(){return{panoviewer:null}},mounted:function(){var t=this,e=document.querySelector(".c-pano-img");t.panoviewer=new N["a"](e,{image:n("c6b9"),gyroMode:"yawPitch",useZoom:!1}),t.panoviewer.on("ready",(function(t){t.currentTarget.updateViewportDimensions()})),window.addEventListener("resize",(function(){Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);t.panoviewer.updateViewportDimensions()}))}},F=A,L=(n("00e2"),Object(v["a"])(F,S,O,!1,null,"643d1c30",null)),D=L.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-hum-details"},[o("div",{staticClass:"hum-section"},[o("humcard",{attrs:{title:"The Hum Ecosystem Map",loneImgName:"wars-map.png"},scopedSlots:t._u([{key:"desc",fn:function(){return[o("p",[t._v("HUM is a diverse ecosystem of actors upholding high standards in the world of humanitarian aid in India, here is an overview of our activity as of 2035.")])]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"action-item",on:{click:t.fullEcosystem}},[o("span",[t._v("See Full Map")]),o("svg-icon",{attrs:{name:"arrowDown"}})],1)]},proxy:!0}]),model:{value:t.ecoFullscreen,callback:function(e){t.ecoFullscreen=e},expression:"ecoFullscreen"}})],1),o("div",{staticClass:"hum-section"},[o("humcard",{attrs:{title:"The Hum Timeline","info-bg":"humgreen"},scopedSlots:t._u([{key:"desc",fn:function(){return[o("p",[t._v("The timeline is an overview of the various events that led to the creation of hum. "),o("br"),o("br"),t._v(" I have also been trying to track the origin story of HUM and how exactly we got to where we are. I’ve pieced together a timeline of events. "),o("br"),o("br"),t._v(" It’s been a long journey, & it’s worth stopping and reflecting ")])]},proxy:!0},{key:"content",fn:function(){return[o("div",{staticClass:"timeline"},[o("div",{staticClass:"c-timeline-content"},[o("iframe",{staticClass:"timeline-frame",class:{fullscreen:t.timelineFs},attrs:{src:"https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=14cAw46BRZIh0mcYXWxAspYWnwOrc2uevbHL4dAY8U_M&font=Georgia-Helvetica&lang=en&initial_zoom=2",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:"0"}}),t.timelineFs?o("div",{staticClass:"timeline-close",on:{click:t.closeTimelineFs}},[o("svg-icon",{staticClass:"close-icon",attrs:{name:"closeCircle"}})],1):t._e()])])]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"action-item",on:{click:t.openTimelineFs}},[o("span",[t._v("See Full Timeline")]),o("svg-icon",{attrs:{name:"arrowDown"}})],1)]},proxy:!0}])})],1),o("div",{staticClass:"hum-section"},[o("humcard",{attrs:{title:"The Hum Employees"},scopedSlots:t._u([{key:"desc",fn:function(){return[o("p",[t._v("What I have really come to admire is the aid efforts on the ground. What I have really come to admire is the aid efforts on the ground. Through my field visits I have been able to collect digital business cards of a few of the workers leading the efforts.")])]},proxy:!0},{key:"content",fn:function(){return[o("div",{ref:"emp-carousel",staticClass:"emp-card-carousel carousel"},t._l(t.empList,(function(e,n){return o("div",{key:n,staticClass:"emp-card carousel-cell"},[o("div",{ref:"emp-detail",refInFor:!0,staticClass:"c-emp-details"},[o("img",{staticClass:"emp-img",attrs:{src:e.img}}),o("div",{ref:"emp-info",refInFor:!0,staticClass:"emp-info"},[o("div",{staticClass:"info-header"},[o("span",[t._v(t._s(e.title))])]),o("div",{staticClass:"info-content"},[o("p",[t._v(t._s(e.desc))])]),o("div",{staticClass:"info-footer"},[o("img",{staticClass:"logo-img",attrs:{src:e.logo}})]),o("div",{staticClass:"hide-info",on:{click:function(e){return t.toggleEmpDetails(!1,n)}}},[o("svg-icon",{staticClass:"collapse",attrs:{name:"arrowCollapse"}})],1)]),o("div",{ref:"emp-show",refInFor:!0,staticClass:"show-info",on:{click:function(e){return t.toggleEmpDetails(!0,n)}}},[o("svg-icon",{staticClass:"expand",attrs:{name:"arrowExpand"}})],1)])])})),0)]},proxy:!0},{key:"actions",fn:function(){return[o("div",{staticClass:"action-item",on:{click:function(t){}}},[o("svg-icon",{attrs:{name:"arrowLeft"}}),o("span",[t._v("Swipe")]),o("svg-icon",{attrs:{name:"arrowRight"}})],1)]},proxy:!0}])})],1),o("div",{staticClass:"hum-section"},[o("humcard",{attrs:{title:"The Hum Technology"},scopedSlots:t._u([{key:"desc",fn:function(){return[o("p",[t._v("Partnering with private entities and the government, HUM has been able to invest heavily in embedding digital technology within the humanitarian space. The use of familiar objects like water matkas and E-waste to develop their technology has surely helped HUM penetrate Indian markets.")])]},proxy:!0},{key:"content",fn:function(){return[o("div",{staticClass:"tech-content"},[o("div",{staticClass:"c-assets"},[o("div",{staticClass:"c-asset-img"},[o("img",{staticClass:"first",attrs:{src:n("7fef")}}),o("img",{staticClass:"second",attrs:{src:n("05be")}})])])])]},proxy:!0}])})],1)])},$=[],W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"c-hum-card"},[o("div",{class:["card-info",t.infoBg]},[o("div",{staticClass:"card-title"},[o("span",{staticClass:"title"},[t._v(t._s(t.title))])]),o("div",{staticClass:"card-desc"},[t._t("desc")],2),o("div",{staticClass:"card-actions"},[o("div",{staticClass:"c-action-items"},[t._t("actions")],2)])]),o("div",{staticClass:"card-content",class:{fullscreen:t.isFullscreen}},[t.loneImgName?o("div",{staticClass:"c-img-content"},[o("img",{attrs:{src:n("1771")("./"+t.loneImgName)}}),t.loneFullscreen?o("div",{staticClass:"fs-close",on:{click:t.closeFs}},[o("svg-icon",{staticClass:"close-icon",attrs:{name:"closeCircle"}})],1):t._e()]):t._e(),t.loneImgName?t._e():t._t("content")],2)])},B=[],U={name:"humcard",props:{title:String,infoBg:String,loneImgName:String,loneFullscreen:{type:Boolean,default:!1}},model:{prop:"loneFullscreen",event:"fschange"},computed:{isFullscreen:{get:function(){return this.loneFullscreen},set:function(t){this.$emit("fschange",t)}}},methods:{closeFs:function(){this.isFullscreen=!1;var t=document.getElementsByTagName("body")[0];t.classList.remove("overflow-hidden")}}},q=U,V=(n("6668"),Object(v["a"])(q,W,B,!1,null,"2ce05ce0",null)),G=V.exports,z=n("217b"),Y={name:"HumDetails",components:{humcard:G},data:function(){return{ecoFullscreen:!1,timelineFs:!1,empList:[{title:"MED.CN HEALTH WORKERS",img:n("3c71"),logo:n("5d89"),desc:"The role of MED.CN health workers is to provide adapted care to affected communities, namely via telemedicine services on hand-held tablets carried by WHEL staff for initial check-ups."},{title:"FED FARMERS",img:n("810a"),logo:n("6379"),desc:"Displaced farmers, engineers and botanists in collaboration with the FEDs, are working day and night in pop-up experimental growing labs to tend to the high demand of locally grown food post the floods."},{title:"HYDROSYSTEMS TECHNICIANS",img:n("34f1"),logo:n("8023"),desc:"Working out of the (under-construction) Hydrosystem warehouses, these volunteers are assembling affordable water purification, testing, and relief kits, and tropical disease prevention kits for neighbouring communities and camps."},{title:"WHEL WATER ACTIVISTS",img:n("848d"),logo:n("5fd0"),desc:"Traditional well-diggers and other water activists have a unique knowledge of homes’ respective water needs and inhabitants; thanks to their practice of supplying homes with means to harvest rainwater, and recharge groundwater."},{title:"MED.CN EPIDEMIOLOGISTS",img:n("4bfb"),logo:n("5d89"),desc:"Given the lack of prompt response the last time the city was affected by an epidemic, MED.CN put together a team of trained personnel ready to confront and contain an epidemic quickly, to study outbreaks, and setup an immediate system of response; from disease surveillance to coordinated treatment."},{title:"THE INFORMAL ENGINEER",img:n("945e"),logo:n("5fd0"),desc:"After realizing the vulnerabilities in his informal community in South Goa, and state inaction to recognize the settlement and equitably provide it with public resources, this engineer has taken it upon himself to learn, and train others in his (and other) community(s) on how the power of local resources, e-waste, and renewable energy can be harnessed to generate quick and resilient solutions."}]}},methods:{openTimelineFs:function(){this.timelineFs=!0;var t=document.getElementsByTagName("body")[0];t.classList.add("overflow-hidden")},closeTimelineFs:function(){this.timelineFs=!1;var t=document.getElementsByTagName("body")[0];t.classList.remove("overflow-hidden")},fullEcosystem:function(){this.ecoFullscreen=!0;var t=document.getElementsByTagName("body")[0];t.classList.add("overflow-hidden")},toggleEmpDetails:function(t,e){var n=this.$refs["emp-detail"][e],o=this.$refs["emp-info"][e],a=this.$refs["emp-show"][e];t?(n.classList.add("opened"),o.classList.add("show-me"),a.classList.add("hide-me")):(n.classList.remove("opened"),o.classList.remove("show-me"),a.classList.remove("hide-me"))}},mounted:function(){var t=this.$refs["emp-carousel"];new z(t,{dragThreshold:10,accessibility:!1,setGallerySize:!1,imagesLoaded:!0,contain:!0,cellAlign:"left",prevNextButtons:!0,pageDots:!1})}},Z=Y,J=(n("9f1e"),Object(v["a"])(Z,R,$,!1,null,"449a6f8a",null)),K=J.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-hum-footer"},[n("p",[t._v("Find out more about this project "),n("router-link",{attrs:{to:"/about"}},[n("span",{staticClass:"underline"},[t._v("here.")])])],1),n("p",[t._v("You too can do your own research, using this "),n("router-link",{attrs:{to:"/toolkit"}},[n("span",{staticClass:"underline"},[t._v("toolkit.")])])],1)])},Q=[],tt={name:"HumFooter"},et=tt,nt=(n("1099"),Object(v["a"])(et,X,Q,!1,null,"0c771c10",null)),ot=nt.exports,at={name:"Home",components:{HumHeader:m["a"],HomeAbout:w,HumEvidence:E,HumOrg:I,HumExtras:D,HumDetails:K,HumFooter:ot},data:function(){return{vrTextArray:{wars:"Through sheer luck I met an ex-HUM operative at a farm-market, through whom I obtained additional confidential material, the most interesting of which is the HUM Ecosystem Map. This diagram meticulously lays out the structure of HUM, and how their public facing organisations worked together post Storm Lata.",med:"I captured this scene during my field visit to one of the bastis in South Goa recovering from the aftermath of the storm. As you can see infront, the water supply here has been severely affected and the WHEL water truck is distributing clean drinking water. Behind me, the frontline health worker is on one of her community health checkup rounds, collecting data for the MEDCN health servers.",fed:"I recently got access into a FED Farm! Had to pull some strings, the few that I do have. I had a brief conversation with the farmer you see ahead; he migrated from a neighbouring state during the droughts there to the water-rich Goa (he couldn't have predicted the storm). He's now working on testing new technologies that can help produce low-resource food for neighbouring communities, making families more resilient to future disasters."},vrTextAlias:{wars:"wars",med:"med",whel:"med",fed:"fed",hydro:"fed"},vrTextShortCode:null,headerOptions:{overlay:!1,overlayType:"dark"},headerPanoviewer:null,contentPanoviewer:null,contentPanoLoading:!1,headerPanoRafId:null,contentPanoRafId:null,showVrPopup:!1,desktopMode:!1}},computed:{contentPanoText:function(){if(this.vrTextShortCode){var t=this.vrTextArray[this.vrTextShortCode]||this.vrTextArray[this.vrTextAlias[this.vrTextShortCode]];return t}return""}},methods:{disableBodyScroll:function(){var t=document.getElementsByTagName("body")[0];t.classList.add("overflow-hidden")},enableBodyScroll:function(){var t=document.getElementsByTagName("body")[0];t.classList.remove("overflow-hidden")},closeVr:function(){this.enableBodyScroll(),window.cancelAnimationFrame(this.contentPanoRafId),this.contentPanoviewer.setImage(null),this.contentPanoLoading=!1,this.showVrPopup=!1},processHeaderPano:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this;o.desktopMode=e;var a=t.clientHeight||480,i=2*a+"px";t.style.width=i;var s="yawPitch";o.desktopMode&&(s="none"),o.headerPanoviewer?o.headerPanoviewer.updateViewportDimensions():(o.headerPanoviewer=new N["a"](t,{image:n("87a1"),gyroMode:s,touchDirection:N["a"].TOUCH_DIRECTION.NONE}),o.headerPanoviewer.on("ready",(function(t){o.applyAutoRotate(t.currentTarget,"headerPanoRafId")})))},processContentPano:function(t,e){var n=this;n.disableBodyScroll(),n.vrTextShortCode=t,n.showVrPopup=!0,n.contentPanoLoading=!0,n.desktopMode=n.getDesktopMode();var o=n.$refs["content-pano"],a="yawPitch";n.desktopMode&&(a="none"),n.contentPanoviewer?(n.contentPanoviewer.setImage(e),n.contentPanoviewer.setGyroMode(a)):(n.contentPanoviewer=new N["a"](o,{image:e,gyroMode:a,useZoom:!1}),n.contentPanoviewer.on("ready",(function(t){t.currentTarget.updateViewportDimensions(),n.contentPanoLoading=!1,n.applyAutoRotate(t.currentTarget,"contentPanoRafId")}))),n.$nextTick((function(){setTimeout((function(){n.contentPanoviewer.updateViewportDimensions()}),0)}))},getDesktopMode:function(){var t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return!(t<1024)},applyAutoRotate:function(t,e){var n=this;if(!n.desktopMode)return 0;n.autoRotate(t,e)},autoRotate:function(t,e){var n=this,o=(new Date).getTime(),a=t.getPitch(),i=t.getYaw(),s=0;function r(){s=(new Date).getTime()-o,t.lookAt({yaw:i+s/100%360,pitch:a},0),n[e]=window.requestAnimationFrame(r)}n[e]=window.requestAnimationFrame(r)}},beforeRouteLeave:function(t,e,n){window.cancelAnimationFrame(this.headerPanoRafId),window.cancelAnimationFrame(this.contentPanoRafId),n()}},it=at,st=(n("61f4"),Object(v["a"])(it,d,u,!1,null,"4a5bca32",null)),rt=st.exports;o["a"].use(l["a"]);var ct=[{path:"/",name:"Home",component:rt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/toolkit",name:"Toolkit",component:function(){return n.e("chunk-6c837274").then(n.bind(null,"6d07"))}}],lt=new l["a"]({routes:ct}),dt=lt,ut={name:"HumNav",components:{svgIcon:c["a"]},data:function(){return{iconName:"dotCircle",showNav:!1,darkText:!1,nextRoute:"Home"}},methods:{toggleNav:function(){this.showNav=!this.showNav,this.showNav?this.iconName="closeCircle":this.iconName="dotCircle"}},created:function(){var t=this;dt.afterEach((function(e,n){t.nextRoute=e.name,"About"==e.name?t.darkText=!0:t.darkText=!1}))}},mt=ut,ht=(n("aace"),Object(v["a"])(mt,s,r,!1,null,"51b97a50",null)),pt=ht.exports,ft={name:"App",components:{HumNav:pt}},gt=ft,vt=(n("5c0b"),Object(v["a"])(gt,a,i,!1,null,null,null)),bt=vt.exports;n("913a");o["a"].config.productionTip=!1,o["a"].component("svg-icon",c["a"]),new o["a"]({router:dt,render:function(t){return t(bt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"5cc6":function(t,e,n){},"5d89":function(t,e,n){t.exports=n.p+"img/medlogo.d7c15c5d.png"},"5fd0":function(t,e,n){t.exports=n.p+"img/whellogo.1f1d16ff.png"},6015:function(t,e,n){t.exports=n.p+"img/wars-map.b2a8d764.png"},"61f4":function(t,e,n){"use strict";var o=n("2cf1"),a=n.n(o);a.a},6379:function(t,e,n){t.exports=n.p+"img/fedlogo.ec958ef2.png"},6668:function(t,e,n){"use strict";var o=n("cffb"),a=n.n(o);a.a},6679:function(t,e,n){t.exports=n.p+"img/about-exhibit6.dfe10fbe.png"},"67de":function(t,e,n){t.exports=n.p+"img/hum_vr_fed.2030011b.jpg"},"729d":function(t,e,n){"use strict";var o=n("e93f"),a=n.n(o);a.a},"7ae7":function(t,e,n){t.exports=n.p+"img/nid.335404c3.svg"},"7fc9":function(t,e,n){t.exports=n.p+"img/stby.01408166.png"},"7fef":function(t,e,n){t.exports=n.p+"img/tankerpod.848aa601.png"},8023:function(t,e,n){t.exports=n.p+"img/hydrologo.ed642d11.png"},"810a":function(t,e,n){t.exports=n.p+"img/hum_hydro_farmer.cf34bc02.jpg"},"811b":function(t,e,n){t.exports=n.p+"img/about-exhibit5.d7a611a3.png"},8146:function(t,e,n){t.exports=n.p+"img/about-step4-3.b58154bc.png"},"848d":function(t,e,n){t.exports=n.p+"img/hum_well_digger.34aa9806.jpg"},"87a1":function(t,e,n){t.exports=n.p+"img/hum_vr_pod.dd724b08.jpg"},"913a":function(t,e,n){},"93a9":function(t,e,n){"use strict";var o=n("dca0"),a=n.n(o);a.a},"945e":function(t,e,n){t.exports=n.p+"img/hum_hydro_engineer.daa44b68.jpg"},9524:function(t,e,n){t.exports=n.p+"img/about-step4-2.762decb9.png"},"9c0c":function(t,e,n){},"9f1e":function(t,e,n){"use strict";var o=n("01c4"),a=n.n(o);a.a},aace:function(t,e,n){"use strict";var o=n("5cc6"),a=n.n(o);a.a},bb1d:function(t,e,n){t.exports=n.p+"img/future_fiction.2b23102f.svg"},bc40:function(t,e,n){t.exports=n.p+"img/hetco.66ca5fb0.png"},bf5a:function(t,e,n){t.exports=n.p+"img/about-step2.ac0b415e.png"},c530:function(t,e,n){"use strict";var o=n("cc81"),a=n.n(o);a.a},c62d:function(t,e,n){t.exports=n.p+"img/barbican.df9c2ba1.svg"},c6b9:function(t,e,n){t.exports=n.p+"img/hum_vr_wars.f762acf7.jpg"},ca2e:function(t,e,n){t.exports=n.p+"img/msf.adf43425.png"},cc81:function(t,e,n){},ce53:function(t,e,n){},cffb:function(t,e,n){},da89:function(t,e,n){t.exports=n.p+"img/warslogo.d34b67e9.png"},dca0:function(t,e,n){},e08a:function(t,e,n){t.exports=n.p+"img/about-exhibit1.42933e54.png"},e196:function(t,e,n){t.exports=n.p+"img/toolkit-header-bg.cec4434c.png"},e689:function(t,e,n){t.exports=n.p+"img/about-exhibit2.a9d161b5.png"},e93f:function(t,e,n){},eb94:function(t,e,n){t.exports=n.p+"img/about-exhibit3.e2690ddf.png"},f0ab:function(t,e,n){t.exports=n.p+"img/tandem_research.ebf26317.svg"},f390:function(t,e,n){t.exports=n.p+"img/quicksand.f44d7dc0.svg"},fc9d:function(t,e,n){t.exports=n.p+"img/sixervr.cf4a7c4b.png"}});
//# sourceMappingURL=app.435b6f4b.js.map