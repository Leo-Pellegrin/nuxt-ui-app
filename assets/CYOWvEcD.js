import{r as $,j as N,P as dt,y as j,S as ut,m as B,N as pt,T as mt,_ as F,v as Y,x as O,B as ft,C as R,F as St,o as g,c as w,J as L,I,d as z,t as _,L as V,M as Z,a1 as xt,a2 as T,K as C,w as h,b as x,i as f,a as s,O as K,a0 as tt,A as gt,p as _t,f as ht,a3 as It,z as W,q as Dt,a4 as Bt,V as Q,G as H,H as M,a5 as at,Z as Ct,a6 as jt,a7 as At,W as Ot,a8 as Et,a9 as zt,aa as Pt,ab as Ut,X as Lt,$ as Ht}from"./CYqw3OqJ.js";import{o as D,I as lt,u as it,t as Mt,i as q,A as et,l as Tt,N as rt,a as U,_ as vt,d as yt,b as Nt,c as Kt,e as Vt}from"./DfW1sKBi.js";const Rt={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},translate:{"top-right":"-translate-y-1/2 translate-x-1/2 transform","bottom-right":"translate-y-1/2 translate-x-1/2 transform","top-left":"-translate-y-1/2 -translate-x-1/2 transform","bottom-left":"translate-y-1/2 -translate-x-1/2 transform"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"},default:{size:"sm",color:"primary",position:"top-right",inset:!1}},qt={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}};function ct(t,a){if(t)return t;let u=a??"button";if(typeof u=="string"&&u.toLowerCase()==="button")return"button"}function Ft(t,a){let u=$(ct(t.value.type,t.value.as));return N(()=>{u.value=ct(t.value.type,t.value.as)}),dt(()=>{var n;u.value||D(a)&&D(a)instanceof HTMLButtonElement&&!((n=D(a))!=null&&n.hasAttribute("type"))&&(u.value="button")}),u}var Wt=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Wt||{});let bt=Symbol("DisclosureContext");function st(t){let a=mt(bt,null);if(a===null){let u=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,st),u}return a}let wt=Symbol("DisclosurePanelContext");function Gt(){return mt(wt,null)}let Jt=j({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(t,{slots:a,attrs:u}){let n=$(t.defaultOpen?0:1),o=$(null),p=$(null),c={buttonId:$(`headlessui-disclosure-button-${lt()}`),panelId:$(`headlessui-disclosure-panel-${lt()}`),disclosureState:n,panel:o,button:p,toggleDisclosure(){n.value=it(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(r){c.closeDisclosure();let y=r?r instanceof HTMLElement?r:r.value instanceof HTMLElement?D(r):D(c.button):D(c.button);y==null||y.focus()}};return ut(bt,c),Mt(B(()=>it(n.value,{0:q.Open,1:q.Closed}))),()=>{let{defaultOpen:r,...y}=t,m={open:n.value===0,close:c.close};return et({theirProps:y,ourProps:{},slot:m,slots:a,attrs:u,name:"Disclosure"})}}}),Qt=j({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{attrs:a,slots:u,expose:n}){let o=st("DisclosureButton"),p=Gt(),c=B(()=>p===null?!1:p.value===o.panelId.value);N(()=>{c.value||t.id!==null&&(o.buttonId.value=t.id)}),pt(()=>{c.value||(o.buttonId.value=null)});let r=$(null);n({el:r,$el:r}),c.value||dt(()=>{o.button.value=r.value});let y=Ft(B(()=>({as:t.as,type:a.type})),r);function m(){var e;t.disabled||(c.value?(o.toggleDisclosure(),(e=D(o.button))==null||e.focus()):o.toggleDisclosure())}function b(e){var l;if(!t.disabled)if(c.value)switch(e.key){case U.Space:case U.Enter:e.preventDefault(),e.stopPropagation(),o.toggleDisclosure(),(l=D(o.button))==null||l.focus();break}else switch(e.key){case U.Space:case U.Enter:e.preventDefault(),e.stopPropagation(),o.toggleDisclosure();break}}function d(e){switch(e.key){case U.Space:e.preventDefault();break}}return()=>{var e;let l={open:o.disclosureState.value===0},{id:i,...v}=t,k=c.value?{ref:r,type:y.value,onClick:m,onKeydown:b}:{id:(e=o.buttonId.value)!=null?e:i,ref:r,type:y.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||D(o.panel)?o.panelId.value:void 0,disabled:t.disabled?!0:void 0,onClick:m,onKeydown:b,onKeyup:d};return et({ourProps:k,theirProps:v,slot:l,attrs:a,slots:u,name:"DisclosureButton"})}}}),Xt=j({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:a,slots:u,expose:n}){let o=st("DisclosurePanel");N(()=>{t.id!==null&&(o.panelId.value=t.id)}),pt(()=>{o.panelId.value=null}),n({el:o.panel,$el:o.panel}),ut(wt,o.panelId);let p=Tt(),c=B(()=>p!==null?(p.value&q.Open)===q.Open:o.disclosureState.value===0);return()=>{var r;let y={open:o.disclosureState.value===0,close:o.close},{id:m,...b}=t,d={id:(r=o.panelId.value)!=null?r:m,ref:o.panel};return et({ourProps:d,theirProps:b,slot:y,attrs:a,slots:u,features:rt.RenderStrategy|rt.Static,visible:c.value,name:"DisclosurePanel"})}}});const A=Y(O.ui.strategy,O.ui.chip,Rt),Zt=j({inheritAttrs:!1,props:{size:{type:String,default:()=>A.default.size,validator(t){return Object.keys(A.size).includes(t)}},color:{type:String,default:()=>A.default.color,validator(t){return["gray",...O.ui.colors].includes(t)}},position:{type:String,default:()=>A.default.position,validator(t){return Object.keys(A.position).includes(t)}},text:{type:[String,Number],default:null},inset:{type:Boolean,default:()=>A.default.inset},show:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:a,attrs:u}=ft("chip",R(t,"ui"),A,R(t,"class")),n=B(()=>St(a.value.base,a.value.size[t.size],a.value.position[t.position],t.inset?null:a.value.translate[t.position],a.value.background.replaceAll("{color}",t.color)));return{ui:a,attrs:u,chipClass:n}}});function Yt(t,a,u,n,o,p){return g(),w("div",Z({class:t.ui.wrapper},t.attrs),[L(t.$slots,"default"),t.show?(g(),w("span",{key:0,class:I(t.chipClass)},[L(t.$slots,"content",{},()=>[z(_(t.text),1)])],2)):V("",!0)],16)}const te=F(Zt,[["render",Yt]]),ee=t=>(_t("data-v-d11f024a"),t=t(),ht(),t),se={class:"p-5 text-left"},oe={class:"ease-in-out duration-300"},ne={class:"text-lg font-bold"},ae={class:"ease-in-out duration-300"},le={class:"ease-in-out duration-300"},ie=ee(()=>s("span",{class:"text-base text-gray-400 ease-in-out duration-300"},"Show project",-1)),re=j({__name:"ProjectCard",props:{project:{}},setup(t){const a=t,u=B(()=>{const c=a.project.images.find(r=>r.main===!0);if(n.value=a.project.title,c)return{name:c.name,path:c.path,size:c.size,main:c.main}}),n=$("");N(()=>{});const o=$(!1);function p(){o.value=!1}return(c,r)=>{const y=vt,m=K,b=tt,d=gt,e=yt,l=xt("auto-animate");return g(),w("div",null,[T((g(),C(e,{class:"m-5"},{header:h(()=>[T((g(),w("div",{class:"-px-4 -py-5 sm:-p-6",onMouseover:r[0]||(r[0]=i=>o.value=!0),onMouseleave:r[1]||(r[1]=i=>p())},[x(m,{to:f(n),variant:"ghost"},{default:h(()=>[f(u).path?(g(),C(y,{key:0,src:f(u).path,sizes:"100vw sm:80vw md:50vw lg:50vw xl:50vw",class:I({img:!0,"image-contained":f(o)})},null,8,["src","class"])):V("",!0)]),_:1},8,["to"])],32)),[[l]])]),footer:h(()=>[s("div",se,[s("div",oe,[s("span",ne,_(c.project.title),1)]),s("div",ae,[f(o)?V("",!0):(g(),w("span",{key:0,class:"text-base text-gray-400",onMouseover:r[2]||(r[2]=i=>o.value=!0)},_(c.project.type),33))]),s("div",le,[f(o)?(g(),C(d,{key:0,to:f(n),class:"flex",onMouseleave:r[3]||(r[3]=i=>p())},{default:h(()=>[ie,x(b,{class:"flex-1 ml-3"})]),_:1},8,["to"])):V("",!0)])])]),_:1})),[[l]])])}}}),ce=F(re,[["__scopeId","data-v-d11f024a"]]),X=Y(O.ui.strategy,O.ui.accordion,qt),de=Y(O.ui.strategy,O.ui.button,It),ue=j({components:{HDisclosure:Jt,HDisclosureButton:Qt,HDisclosurePanel:Xt,UIcon:W,UButton:K},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>X.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>X.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(t,{emit:a}){const{ui:u,attrs:n}=ft("accordion",R(t,"ui"),X,R(t,"class")),o=B(()=>de),p=$([]),c=B(()=>p.value.map(({open:e})=>e));Dt(c,(e,l)=>{for(const i in e){const v=l[i],k=e[i];!v&&k&&a("open",i)}},{immediate:!0});function r(e,l){!t.items[e].closeOthers&&t.multiple||p.value.forEach(i=>{i.open&&i.close(l.target)})}function y(e,l){const i=e;i.style.height="0",i.offsetHeight,i.style.height=i.scrollHeight+"px",i.addEventListener("transitionend",l,{once:!0})}function m(e){const l=e;l.style.height=l.scrollHeight+"px",l.offsetHeight}function b(e){const l=e;l.style.height="auto"}function d(e,l){const i=e;i.style.height="0",i.addEventListener("transitionend",l,{once:!0})}return Nt(()=>Kt("$0KOfoCuwG9")),{ui:u,uiButton:o,attrs:n,buttonRefs:p,closeOthers:r,omit:Bt,onEnter:y,onBeforeLeave:m,onAfterEnter:b,onLeave:d}}}),pe={key:1};function me(t,a,u,n,o,p){const c=W,r=K,y=Q("HDisclosureButton"),m=Q("HDisclosurePanel"),b=Q("HDisclosure");return g(),w("div",{class:I(t.ui.wrapper)},[(g(!0),w(H,null,M(t.items,(d,e)=>(g(),C(b,{key:e,as:"div",class:I(t.ui.container),"default-open":t.defaultOpen||d.defaultOpen},{default:h(({open:l,close:i})=>[x(y,{ref_for:!0,ref:()=>t.buttonRefs[e]={open:l,close:i},as:"template",disabled:d.disabled,onClick:v=>t.closeOthers(e,v),onKeydown:[at(v=>t.closeOthers(e,v),["enter"]),at(v=>t.closeOthers(e,v),["space"])]},{default:h(()=>[L(t.$slots,"default",{item:d,index:e,open:l,close:i},()=>[x(r,Z({ref_for:!0},{...t.omit(t.ui.default,["openIcon","closeIcon"]),...t.attrs,...t.omit(d,["slot","disabled","content","defaultOpen"])}),{trailing:h(()=>[x(c,{name:l&&t.closeIcon?t.closeIcon:t.openIcon,class:I([l&&!t.closeIcon?"-rotate-180":"",t.uiButton.icon.size[d.size||t.uiButton.default.size],t.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),x(Ct,Z({ref_for:!0},t.ui.transition,{onEnter:t.onEnter,onAfterEnter:t.onAfterEnter,onBeforeLeave:t.onBeforeLeave,onLeave:t.onLeave}),{default:h(()=>[t.unmount?(g(),C(m,{key:0,class:I([t.ui.item.base,t.ui.item.size,t.ui.item.color,t.ui.item.padding]),unmount:""},{default:h(()=>[L(t.$slots,d.slot||"item",{item:d,index:e,open:l,close:i},()=>[z(_(d.content),1)])]),_:2},1032,["class"])):T((g(),w("div",pe,[x(m,{class:I([t.ui.item.base,t.ui.item.size,t.ui.item.color,t.ui.item.padding]),static:""},{default:h(()=>[L(t.$slots,d.slot||"item",{item:d,index:e,open:l,close:i},()=>[z(_(d.content),1)])]),_:2},1032,["class"])],512)),[[jt,l]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const fe=F(ue,[["render",me]]),xe={class:"truncate text-lg"},ge={class:"truncate text-lg"},_e={class:"flex items-center mt-2"},he={class:"ml-2 text-sm font-semibold text-gray-500 dark:text-gray-400"},ve={class:"text-base text-gray-900 dark:text-white text-left ml-4 mt-3"},ye={class:"ml-3 mt-3 mb-5"},be=j({__name:"ExperienceAccordion",props:{steps:{}},setup(t){return(a,u)=>{const n=tt,o=W,p=K,c=gt,r=At,y=fe;return g(),w("div",null,[x(y,{items:a.steps,color:"primary",variant:"solid","open-icon":"i-heroicons-plus","close-icon":"i-heroicons-minus",multiple:""},{default:h(({item:m,open:b})=>[x(p,{color:"gray",variant:"ghost",class:"border rounded-md border-primary-500 dark:border-primary-500 mb-5",ui:{rounded:"rounded-none",padding:{sm:"p-3"}}},{trailing:h(()=>[x(o,{name:"i-heroicons-chevron-right-20-solid",class:I(["w-5 h-5 ms-auto transform transition-transform duration-200",[b&&"rotate-90"]])},null,8,["class"])]),default:h(()=>[s("span",xe,_(m.subtitle),1),x(n,{class:"flex-1"}),s("span",ge,_(m.startdate)+" - "+_(m.enddate),1)]),_:2},1024)]),item:h(({item:m})=>[s("div",_e,[x(o,{name:"i-heroicons-map-pin",class:"text-base text-primary-500 dark:text-primary-400"}),s("span",he,_(m.location),1),x(o,{name:"i-heroicons-arrow-top-right-on-square",class:"text-base ml-3 text-primary-500 dark:text-primary-400"}),x(c,{to:m.companylink,class:"ml-2 text-sm font-semibold text-gray-500 dark:text-gray-400"},{default:h(()=>[z(_(m.companylink),1)]),_:2},1032,["to"])]),s("p",ve,_(m.description),1),s("div",ye,[(g(!0),w(H,null,M(m.technology,(b,d)=>(g(),C(r,{key:d,variant:"outline",color:"primary",class:"mx-1",size:"md"},{default:h(()=>[z(_(b.name),1)]),_:2},1024))),128))])]),_:1},8,["items"])])}}}),E=t=>(_t("data-v-6829b973"),t=t(),ht(),t),we={id:"home",class:"animate-on-scroll w-screen h-screen bg-[url('/public/mainbg.png')] bg-cover bg-center lineargradient py-24 sm:py-32 md:py-40 relative"},ke={class:"gap-10 sm:gap-y-24 flex flex-col text-center"},$e={class:"mt-10"},Se={class:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl"},Ie={class:"text-lg tracking-tight text-gray-600 dark:text-gray-300"},De={class:"mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3"},Be={id:"knowledge",class:"py-24 sm:py-32 mt-10"},Ce={class:"gap-16 sm:gap-y-24 text-center"},je={class:"mb-2 text-base/7 font-semibold text-primary"},Ae={class:"text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl"},Oe={class:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300"},Ee={class:"animate-on-scroll z-3 w-100 mt-16 mb-16 mx-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"},ze={class:"flex items-center"},Pe={class:"ml-2 text-2xl font-semibold text-gray-900 dark:text-white underline decoration-primary-500 decoration-2 underline-offset-6"},Ue={class:"grid"},Le={class:"col-start-1 auto-rows-min mt-3"},He=E(()=>s("span",{class:"text-gray-500"},"<div>",-1)),Me=E(()=>s("span",{class:"text-gray-500"},"</div>",-1)),Te={class:"col-start-2 text-left my-auto text-lg"},Ne={class:"mt-2 font-extrabold text-gray-500 dark:text-gray-200"},Ke={class:"animate-on-scroll col-start-2 text-left my-auto text-lg hidden sm:hidden md:block lg:hidden xl:hidden"},Ve={class:"grid"},Re={class:"col-start-1 auto-rows-min mt-3"},qe=Ut('<div class="col-start-2 text-left my-auto text-lg" data-v-6829b973><span class="mt-2 text-lg text-gray-500 dark:text-gray-200 font-bold" data-v-6829b973> &quot;The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.&quot; </span><div class="ml-10 mt-4" data-v-6829b973><span class="text-primary-300" data-v-6829b973>-</span><span class="text-md text-gray-500 dark:text-gray-400" data-v-6829b973> Tim Berners-Lee</span></div></div>',1),Fe={class:"flex animate-on-scroll justify-center -mt-60 -z-50 xs:-mt-40 sm:-mt-50 md:-mt-50 lg:-mt-60 xl:-mt-60"},We={id:"projects",class:"mt-14 pt-24 pb-60 mb-14"},Ge={class:"gap-16 sm:gap-y-24 text-center"},Je=E(()=>s("div",{class:"mb-2 text-base/7 font-semibold text-primary"}," Projects ",-1)),Qe=E(()=>s("h2",{class:"text-4xl mb-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl"}," Accomplishments to date ",-1)),Xe=E(()=>s("div",{class:"hidden xs:block sm:hidden md:hidden lg:hidden xl:hidden"},[s("span",{class:"mr-3 ml-10 text-base xs:ml-2"},"Filter By")],-1)),Ze={class:"flex items-center animate-on-scroll"},Ye=E(()=>s("span",{class:"mr-3 ml-10 text-base xs:ml-2 sm:ml-6 md:ml-6 hidden xs:hidden sm:block md:block lg:block xl:block"},"Filter By",-1)),ts={class:"flex xs:mx-auto sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0"},es={id:"experience",class:"mt-14 py-24 mb-48"},ss={class:"gap-16 sm:gap-y-24 text-center"},os=E(()=>s("div",{class:"animate-on-scroll mb-10"},[s("span",{class:"mb-10 text-base/7 font-semibold text-primary"},"Experience")],-1)),ns={class:"animate-on-scroll grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2"},as={class:"animate-on-scroll mt-0 xs:mt-10 sm:mt-10"},ls={class:"text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl xs:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"},is={class:"mt-10"},rs={class:"animate-on-scroll mt-0 xs:mt-10 sm:mt-10"},cs={class:"text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl xs:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"},ds={class:"mt-10"},us=j({__name:"index",async setup(t){let a,u;const{data:n}=([a,u]=Ot(()=>Lt("index",()=>Ht("/").findOne())),a=await a,u(),a),o=Et();zt({title:n.value.title,ogTitle:n.value.title,description:n.value.description,ogDescription:n.value.description});const p=$(n.value.projects),c=$("All"),r=B(()=>{const d=n.value.projects.reduce((e,l)=>{const i=l.type;return e.All?e.All++:e.All=1,e[i]?e[i]++:e[i]=1,e},{});return Object.entries(d)});function y(d){d==="All"?(p.value=n.value.projects,c.value="All"):(p.value=n.value.projects.filter(e=>e.type===d),c.value=d)}function m(){const e=()=>{document.querySelectorAll(".animate-on-scroll").forEach(v=>{const k=l(v,10);v.classList.toggle("is-visible",k)})},l=(i,v)=>{const k=i.getBoundingClientRect(),G=window.innerHeight||document.documentElement.clientHeight,J=window.innerWidth||document.documentElement.clientWidth;return k.top-v<=G&&k.left-v<=J&&k.bottom+v>=0&&k.right+v>=0};window.addEventListener("scroll",e),e()}N(()=>{m(),o.hash&&Pt(o.hash)});const b=()=>{var d;document&&((d=document.querySelector("#knowledge"))==null||d.scrollIntoView({behavior:"smooth"}))};return(d,e)=>{const l=W,i=K,v=tt,k=yt,G=vt,J=te,kt=ce,ot=be,$t=Vt,nt=xt("auto-animate");return g(),w("div",null,[s("div",we,[s("div",ke,[s("div",$e,[s("span",Se,_(f(n).hero.title),1)]),s("span",Ie,_(f(n).hero.description),1),s("div",De,[x(i,{size:"xl",class:"mt-16 2xl:mb-28 2xl:mt-40 2xl:text-xl px-8 py-4",onClick:e[0]||(e[0]=S=>b())},{default:h(()=>[x(l,{name:f(n).hero.links[0].icon,class:"animate-bounce 2xl:text-2xl"},null,8,["name"]),z(" "+_(f(n).hero.links[0].label),1)]),_:1})])])]),s("div",Be,[s("div",Ce,[s("div",je,_(f(n).knowledge.headline),1),s("h2",Ae,_(f(n).knowledge.title),1),s("div",Oe,[s("div",Ee,[(g(!0),w(H,null,M(f(n).knowledge.categories,(S,P)=>(g(),C(k,{key:P,class:"mb-4 !bg-inherit ring-1 ring-primary-200 dark:ring-primary-800"},{header:h(()=>[s("div",ze,[x(l,{name:S.icon,class:"text-3xl text-primary-500 dark:text-primary-400"},null,8,["name"]),s("span",Pe,_(S.title),1)])]),default:h(()=>[s("div",Ue,[s("div",Le,[He,x(v,{orientation:"vertical",class:"h-24 w-10 bgdividergray",size:"sm"}),Me]),s("div",Te,[s("span",Ne,_(S.description),1)])])]),_:2},1024))),128)),s("div",Ke,[s("div",Ve,[s("div",Re,[x(v,{orientation:"vertical",class:"h-36 w-10 bgdivider",size:"md"})]),qe])])])]),s("div",Fe,[x(G,{src:"/image.png",alt:"Image",class:"opacity-25 transform scale-100 sm:scale-100 md:scale-100",sizes:"100vw sm:80vw md:70vw lg:70vw xl:70vw"})])])]),s("div",We,[s("div",Ge,[Je,Qe,Xe,s("div",Ze,[Ye,s("div",ts,[(g(!0),w(H,null,M(f(r),(S,P)=>(g(),w("div",{key:P,class:""},[x(J,{text:String(S[1]),size:"xl",inset:""},{default:h(()=>[x(i,{color:"gray",variant:"ghost",class:"mx-2",onClick:ps=>y(S[0])},{default:h(()=>[s("span",{id:"projectFilter",class:I(["text-sm",{"text-primary-500":S[0]===f(c)}])},"/ "+_(S[0]),3)]),_:2},1032,["onClick"])]),_:2},1032,["text"])]))),128))])]),T((g(),w("div",{class:I(`grid grid-cols-1 sm:grid-cols-${Math.min(f(p).length,2)} md:grid-cols-${Math.min(f(p).length,2)} lg:grid-cols-${Math.min(f(p).length,3)} xl:grid-cols-${Math.min(f(p).length,3)}`)},[(g(!0),w(H,null,M(f(p),(S,P)=>T((g(),C(kt,{key:P,project:S},null,8,["project"])),[[nt]])),128))],2)),[[nt]])])]),s("div",es,[s("div",ss,[os,s("div",ns,[s("div",as,[s("h2",ls,_(f(n).experiences[0].title),1),s("div",is,[x(ot,{steps:f(n).experiences[0].steps,class:"mx-10"},null,8,["steps"])])]),s("div",rs,[s("h2",cs,_(f(n).experiences[1].title),1),s("div",ds,[x(ot,{steps:f(n).experiences[1].steps,class:"mx-10"},null,8,["steps"])])])])])]),x($t)])}}}),xs=F(us,[["__scopeId","data-v-6829b973"]]);export{xs as default};