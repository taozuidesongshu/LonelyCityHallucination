import{d,Q as L,b as y,o as s,c as r,A as i,_ as m,s as E,e as _,y as w,B as P,x as f,F as g,p as D,n as b,t as v,a as N,K as V,C as I,u as C,a1 as p,w as B,I as h,a2 as x,a3 as T,a4 as S,a5 as F,a6 as R,a7 as j,a8 as H,a9 as O,aa as G,ab as z,ac as K,h as W,l as Q,ad as U,ae as Z,af as q}from"./chunks/framework.60272d8a.js";import{_ as J,t as k}from"./chunks/theme.86fbdf61.js";const X=e=>{if(window.dataLayer&&window.gtag)return;const t=document.createElement("script");t.src=`https://www.googletagmanager.com/gtag/js?id=${e}`,t.async=!0,document.head.appendChild(t),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",e)},Y=({id:e})=>{e&&typeof window<"u"&&X(e)},ee={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes",onerror:"this.style.display='none'"},te=d({__name:"MNavVisitor",setup(e){const t=L("DEV");return(n,a)=>y(t)?i("",!0):(s(),r("img",ee))}});const ne=m(te,[["__scopeId","data-v-89740a75"]]),ae={class:"copyright"},oe=d({__name:"MDocFooter",setup(e){L("DEV");const t=E();return _(()=>t.path.replace("/LonelyCityHallucination","")),(n,a)=>(s(),r("div",ae))}});const se=m(oe,[["__scopeId","data-v-02605af7"]]),re=d({__name:"MAsideSponsors",setup(e){const t=[];return(n,a)=>(s(),w(y(J),{data:t}))}});const ie=/[\u0000-\u001f]/g,ce=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,le=/[\u0300-\u036F]/g,M=e=>e.normalize("NFKD").replace(le,"").replace(ie,"").replace(ce,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),de=["href"],ue={class:"box-header"},pe=["innerHTML"],_e={key:1,class:"icon"},fe=["src","alt"],me=["id"],ge={key:1,class:"desc"},ve=d({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=_(()=>t.title?M(t.title):""),a=_(()=>typeof t.icon=="object"?t.icon.svg:""),u=_(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(o,De)=>{const $=P("Badge");return o.link?(s(),r("a",{key:0,class:"m-nav-link",href:o.link,target:"_blank",rel:"noreferrer"},[f("article",{class:b(["box",{"has-badge":u.value}])},[f("div",ue,[o.noIcon?i("",!0):(s(),r(g,{key:0},[a.value?(s(),r("div",{key:0,class:"icon",innerHTML:a.value},null,8,pe)):o.icon&&typeof o.icon=="string"?(s(),r("div",_e,[f("img",{src:y(D)(o.icon),alt:o.title,onerror:"this.parentElement.style.display='none'"},null,8,fe)])):i("",!0)],64)),o.title?(s(),r("h5",{key:1,id:n.value,class:b(["title",{"no-icon":o.noIcon}])},v(o.title),11,me)):i("",!0)]),u.value?(s(),w($,{key:0,class:"badge",type:u.value.type,text:u.value.text},null,8,["type","text"])):i("",!0),o.desc?(s(),r("p",ge,v(o.desc),1)):i("",!0)],2)],8,de)):i("",!0)}}});const he=m(ve,[["__scopeId","data-v-f6a1464b"]]),ye=["id"],we=["href"],be={class:"m-nav-links"},ke=d({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=_(()=>M(t.title));return(a,u)=>(s(),r(g,null,[a.title?(s(),r("h2",{key:0,id:n.value,tabindex:"-1"},[N(v(a.title)+" ",1),f("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,we)],8,ye)):i("",!0),f("div",be,[(s(!0),r(g,null,V(a.items,o=>(s(),w(he,I({noIcon:a.noIcon},o),null,16,["noIcon"]))),256))])],64))}});const Le=m(ke,[["__scopeId","data-v-3a009e39"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));let c;const Ce={extends:k,Layout:()=>{var n;const e={},{frontmatter:t}=C();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),p(k.Layout,e,{"nav-bar-title-after":()=>p(ne),"doc-after":()=>p(se),"aside-bottom":()=>p(re)})},enhanceApp({app:e,router:t}){e.component("MNavLinks",Le),e.provide("DEV",!1),typeof window<"u"&&B(()=>t.route.data.relativePath,()=>Me(location.pathname==="/"),{immediate:!0}),Y({id:"G-7VVLPMCBTZ"})}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Me(e){if(e){if(c)return;c=document.createElement("style"),c.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(c)}else{if(!c)return;c.remove(),c=void 0}}function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const l=A(Ce),Ae=d({name:"VitePressApp",setup(){const{site:e}=C();return W(()=>{Q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),U(),Z(),q(),l.setup&&l.setup(),()=>p(l.Layout)}});async function $e(){const e=Pe(),t=Ee();t.provide(T,e);const n=S(e.route);return t.provide(F,n),t.component("Content",R),t.component("ClientOnly",j),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),l.enhanceApp&&await l.enhanceApp({app:t,router:e,siteData:H}),{app:t,router:e,data:n}}function Ee(){return O(Ae)}function Pe(){let e=h,t;return G(n=>{let a=z(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),h&&(e=!1),K(()=>import(a),[])},l.NotFound)}h&&$e().then(({app:e,router:t,data:n})=>{t.go().then(()=>{x(t.route,n.site),e.mount("#app")})});export{$e as createApp};
