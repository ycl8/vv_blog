import{d,S as w,b as y,o as s,c as r,A as i,_ as f,s as D,e as _,a as L,B as N,x as m,F as v,p as P,n as b,t as h,y as C,M as I,C as V,u as M,a3 as p,w as B,K as g,a4 as x,a5 as S,a6 as T,a7 as F,a8 as R,a9 as H,aa as j,ab as O,ac as z,ad as K,H as W,h as G,l as U,ae as q,af as J,ag as Q}from"./chunks/framework.06bd107b.js";import{t as k}from"./chunks/theme.f374a26d.js";const X={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes",onerror:"this.style.display='none'"},Y=d({__name:"MNavVisitor",setup(e){const t=w("DEV");return(n,a)=>y(t)?i("",!0):(s(),r("img",X))}});const Z=f(Y,[["__scopeId","data-v-20bab59e"]]),ee={class:"copyright"},te=["src"],ne=d({__name:"MDocFooter",setup(e){const t=w("DEV"),n=D(),a=_(()=>n.path.replace("/mm-notes",""));return(l,o)=>(s(),r("div",ee,[y(t)?i("",!0):(s(),r("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes.${a.value}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,te)),L(" Copyright © 2019-present maomao ")]))}});const ae=f(ne,[["__scopeId","data-v-888e4da0"]]),oe=d({__name:"MAsideSponsors",setup(e){return(t,n)=>(s(),r("div"))}});const se=/[\u0000-\u001f]/g,re=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,ie=/[\u0300-\u036F]/g,A=e=>e.normalize("NFKD").replace(ie,"").replace(se,"").replace(re,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),ce=["href"],le={class:"box-header"},ue=["innerHTML"],de={key:1,class:"icon"},pe=["src","alt"],_e=["id"],me={key:1,class:"desc"},fe=d({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=_(()=>t.title?A(t.title):""),a=_(()=>typeof t.icon=="object"?t.icon.svg:""),l=_(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(o,Ee)=>{const E=N("Badge");return o.link?(s(),r("a",{key:0,class:"m-nav-link",href:o.link,target:"_blank",rel:"noreferrer"},[m("article",{class:b(["box",{"has-badge":l.value}])},[m("div",le,[o.noIcon?i("",!0):(s(),r(v,{key:0},[a.value?(s(),r("div",{key:0,class:"icon",innerHTML:a.value},null,8,ue)):o.icon&&typeof o.icon=="string"?(s(),r("div",de,[m("img",{src:y(P)(o.icon),alt:o.title,onerror:"this.parentElement.style.display='none'"},null,8,pe)])):i("",!0)],64)),o.title?(s(),r("h5",{key:1,id:n.value,class:b(["title",{"no-icon":o.noIcon}])},h(o.title),11,_e)):i("",!0)]),l.value?(s(),C(E,{key:0,class:"badge",type:l.value.type,text:l.value.text},null,8,["type","text"])):i("",!0),o.desc?(s(),r("p",me,h(o.desc),1)):i("",!0)],2)],8,ce)):i("",!0)}}});const ve=f(fe,[["__scopeId","data-v-775fcbc2"]]),he=["id"],ge=["href"],ye={class:"m-nav-links"},be=d({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=_(()=>A(t.title));return(a,l)=>(s(),r(v,null,[a.title?(s(),r("h2",{key:0,id:n.value,tabindex:"-1"},[L(h(a.title)+" ",1),m("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,ge)],8,he)):i("",!0),m("div",ye,[(s(!0),r(v,null,I(a.items,o=>(s(),C(ve,V({noIcon:a.noIcon},o),null,16,["noIcon"]))),256))])],64))}});const ke=f(be,[["__scopeId","data-v-0e779ac1"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));let c;const we={extends:k,Layout:()=>{var n;const e={},{frontmatter:t}=M();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),p(k.Layout,e,{"nav-bar-title-after":()=>p(Z),"doc-after":()=>p(ae),"aside-bottom":()=>p(oe)})},enhanceApp({app:e,router:t}){e.component("MNavLinks",ke),e.provide("DEV",!1),typeof window<"u"&&B(()=>t.route.data.relativePath,()=>Le(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Le(e){if(e){if(c)return;c=document.createElement("style"),c.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(c)}else{if(!c)return;c.remove(),c=void 0}}function $(e){if(e.extends){const t=$(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const u=$(we),Ce=d({name:"VitePressApp",setup(){const{site:e}=M();return G(()=>{U(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),q(),J(),Q(),u.setup&&u.setup(),()=>p(u.Layout)}});async function Me(){const e=$e(),t=Ae();t.provide(S,e);const n=T(e.route);return t.provide(F,n),t.component("Content",R),t.component("ClientOnly",H),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),u.enhanceApp&&await u.enhanceApp({app:t,router:e,siteData:j}),{app:t,router:e,data:n}}function Ae(){return O(Ce)}function $e(){let e=g,t;return z(n=>{let a=K(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),g&&(e=!1),W(()=>import(a),[])},u.NotFound)}g&&Me().then(({app:e,router:t,data:n})=>{t.go().then(()=>{x(t.route,n.site),e.mount("#app")})});export{Me as createApp};