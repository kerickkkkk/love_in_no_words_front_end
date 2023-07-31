import{_ as At}from"./SideBar-f0adbc64.js";import{I as vt,r as m,A as V,K as _t,J as P,_ as yt,z as xt,R as wt,a as it,w as St,S as Lt,f as r,g as p,i as t,F as N,M,j as Q,m as D,u as c,E as l,B as k,L as dt,T as kt,P as Nt,N as j,k as J,l as Ct,t as ct,D as Dt,Q as rt,s as It,n as pt,v as Ot,x as Mt}from"./index-e978c30f.js";import{_ as Ut}from"./TheModal-6bc90acc.js";import{a as Tt,b as Bt}from"./day-cea40187.js";import{u as Vt,e as Rt}from"./formValidate-a0d0f42c.js";import{c as I}from"./catchError-23a142f6.js";import{s as ut,b as Et,d as Ft,e as Ht,f as Pt}from"./order-3098547f.js";import"./LOGO_horizon-e3e3e605.js";import"./titleNo-3c0f6505.js";import"./axios-15129f52.js";const Qt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBxZe9UsJAEMc3JwzJDEUoGJihCU9gSju0s8TSSt9A3wCobOENoLO0tVLeAJ/AKyigMgUMMMOA/z0TBmIcIpDcbyZk80F2b/d279agmDiOY8/n8/pqtaoZhuHyLRy2/9jDIdfr9UAI0TdN80VK6cX5rrHvhXK57ODDDxDvtxTuBf/pwpjWaDSSdIgBPOLZbNaA+EjH0bYsq/WXRyIN8Ef9Rj9uPgUSYbuK8oYI3ygWi+6JlTNqQJVKxQ0/2PFAAiMP88sTGw9wzBNWrtSwDtYV3DgLhFwu94TTNSWPvVwuzel0+soXKgS+6z8pRRCKKodChQDFpUEpgwGr9DZsAPd/Ufp4qA9VgbJZJz2o0i64tpM+asJfWLSAeeDyJHRIH06GYqxwSBc6BKT3vldsQZoxSqUSp2Dsdf7EeOwBSfqQnAUfpAnoHrAH3kkf/aAU80KU+jxAKS4ID0DuUcrA/V3eJwr/ok3p0+IftSGZTCZePp8vQLygdOiMx+NnFjaFaLFYNCmdlJSIfTO42BjAc4E3jAkboTal2z3CTinmLRKW55uEjFDfDvcG2huTs6i3eVJms9leJpOx6PiJ2UHMb4fDYeSSGqs5xakJj9xRfFRt4fQ+uDkNE7TnEC9hzDlFtOdc23H+V3v+DXJx1edV4bpaAAAAAElFTkSuQmCC",jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgBxZexbsJADIadAwRIDHRAILGEJ2jGbrRbRzp2at+gfQNg6gpvAFtH1k4tb0CfoDcwwNQMIEBCpL+PBEGaijSQ3CdFMUk4+2yf72xQSEzTLC6Xy8Zms6kbhmHxI1xF97WNSzqOMxJCDHO53EBKaYcZ1zj2QaVSMTHwE8THPYVHwX96MKY9mUwkRTGAZ7xYLJoQn+k0Ovl8vv2XRwINcGf9Tls3nwOJsN0EeUP4H5RKJevMyhk1oWq1avlfHHgghpn7+eWJnQc45jErV2pYB+vyHqQ8IZvNvuB2S/FTXK/Xufl8/sY/VAhc139RgiAUNQ6FCgGKS5MigAHUFQVMWC1vowjg/m+KgKccHqQI2KgPNYGy2SA9qNIuuLaTPurC3Vi0gDywOAlN0odplMtl59hXUTM9THIK0gx7gJdg6H1+nxOXIWOzByTpQ/Iq+CRNQPeIPfBB+hgKVKMBbQ+VicOHV2EDyH1KGLi/x+dE7duxOpDMZjO7UChcQLyiZOhOp9NXFnaFaLVatSiZJSmxDbe8HzsDOBf4wBizEepQut8jHJRijgm257uYjFBj+3sD7Y1JKuhrTspMJtNPp9N5Oj0xu4j5/Xg8DtxSQzWnuLXgkQcKj6otmHUncnPqx2vPIV7DmEsKaM+5tuP+r/b8BxaH7US617tAAAAAAElFTkSuQmCC",Jt=vt("orderData",()=>{const x=m([]),s=m(null),a=I(async(u,_)=>{var y;const{orderStatus:f,createdAt:A}=u,{data:v}=await ut(f,A,_);s.value=(y=v.meta)==null?void 0:y.pagination.nextPage,x.value=v.ordersList,x.value.forEach(O=>{w.value.push(O)})}),w=m([]),U=m(0),i=I(async(u,_)=>{var y;const{orderStatus:f,createdAt:A}=u,{data:v}=await ut(f,A,_);s.value=(y=v.meta)==null?void 0:y.pagination.nextPage,U.value=f,w.value=v.ordersList}),S=V({}),L=I(async(u,_)=>{const{data:f}=await Et(u);f.orderList.length===0&&_t("沒有符合的訂單資料"),S.value={[_]:f,...S.value}}),K=I(async(u,_,f)=>{const{payment:A,orderType:v,satisfaction:y,description:O}=_,{message:F}=await Ft(u,{payment:A,orderType:v,satisfaction:y,description:O});P(F),i(f)}),R=I(async u=>{const{message:_}=await Ht(u);P(_)}),E=I(async u=>{const{message:_}=await Pt(u);P(_)});return{prePage:s,currentIndex:U,orderList:w,orderDetail:S,LoadNewFile:a,getOrders:i,getOrderDetail:L,postOrderRating:K,getLinePayStatus:R,getOrderStatus:E}});const n=x=>(Ot("data-v-a636b0eb"),x=x(),Mt(),x),Kt={class:"min-h-screen p-6"},zt={class:"flex justify-between items-center mb-6"},Yt={class:"flex text-xl font-medium"},Xt=["onClick"],$t={class:"flex flex-col"},Gt=n(()=>t("label",{for:"form_createdAt",class:"block mb-1 font-medium whitespace-nowrap"},"日期",-1)),Zt={class:"flex items-center mr-3"},qt=["value"],Wt=["onClick"],te={class:"overflow-auto"},ee=It('<table class="w-full border-2 text-center border-black rounded-lg border-separate" data-v-a636b0eb><thead class="text-xl font-medium text-secondary-light bg-textself" data-v-a636b0eb><tr class="grid grid-cols-12" data-v-a636b0eb><th class="p-4 col-span-1" data-v-a636b0eb></th><th class="p-4 col-span-3" data-v-a636b0eb>日期</th><th class="p-4 col-span-1" data-v-a636b0eb>時段</th><th class="p-4 col-span-3" data-v-a636b0eb>訂單編號</th><th class="p-4 col-span-2" data-v-a636b0eb>桌號</th><th class="p-4 col-span-2" data-v-a636b0eb></th></tr></thead></table>',1),se={class:"bg-white relative"},ae={class:"grid grid-cols-12 p-4"},oe={class:"p-4 col-span-1 align-middle"},ne=["onUpdate:modelValue","id"],le=["for"],ie=["onClick","src"],de={class:"p-4 col-span-3 align-middle"},ce={class:"p-4 col-span-1 align-middle"},re={class:"p-4 col-span-3 align-middle"},pe={class:"p-4 col-span-2 align-middle"},ue={class:"text-white bg-primary-light rounded py-1 px-2"},_e={class:"col-span-2 align-middle"},me={class:"flex"},he=["onClick"],fe=["onClick"],ge=["onClick"],be={class:"grid grid-cols-12 p-4"},Ae=n(()=>t("td",{class:"p-4 col-span-1"},null,-1)),ve={class:"p-4 col-span-11 bg-bgself-light rounded-lg"},ye={class:"w-full"},xe=n(()=>t("thead",null,[t("tr",{class:"border-b-2 border-textself"},[t("th",{class:"p-4"},"#"),t("th",{class:"p-4"},"餐點名稱"),t("th",{class:"p-4"},"價錢"),t("th",{class:"p-4"},"數量"),t("th",{class:"p-4"},"備註")])],-1)),we={class:"p-4"},Se={class:"p-4"},Le={class:"p-4"},ke={class:"p-4"},Ne={class:"p-4"},Ce={class:"bg-white text-left grid grid-cols-12"},De=n(()=>t("td",{class:"p-4 col-span-1"},null,-1)),Ie={class:"p-4 col-span-11"},Oe=n(()=>t("span",{class:"text-neutralself-200"},"製作時間",-1)),Me={class:"ml-4 text-xl font-medium"},Ue={class:"bg-white text-left grid grid-cols-12"},Te=n(()=>t("td",{class:"p-4 col-span-1"},null,-1)),Be={class:"p-4 col-span-11"},Ve=n(()=>t("span",{class:"text-neutralself-200"},"出餐狀態",-1)),Re={class:"bg-white text-left grid grid-cols-12"},Ee=n(()=>t("td",{class:"p-4 col-span-1"},null,-1)),Fe={class:"p-4 col-span-11"},He=n(()=>t("span",{class:"text-neutralself-200"},"優惠活動",-1)),Pe={class:"ml-4 inline text-sm font-medium bg-secondary-light rounded-lg py-1 px-2"},Qe={class:"bg-white text-left grid grid-cols-12"},je=n(()=>t("td",{class:"p-4 col-span-1"},null,-1)),Je={class:"p-4 col-span-11"},Ke=n(()=>t("span",{class:"text-neutralself-200"},"折扣金額",-1)),ze={class:"ml-4 text-primary font-medium"},Ye={class:"bg-white text-left grid grid-cols-12"},Xe=n(()=>t("td",{class:"p-4 pb-4 col-span-1"},null,-1)),$e={class:"p-4 pb-4 col-span-11"},Ge=n(()=>t("span",{class:"text-neutralself-200"},"付款金額",-1)),Ze={class:"ml-4 text-primary text-xl font-medium"},qe=n(()=>t("span",{class:"text-xl lg:text-[28px] font-medium"},"點選以載入新資料",-1)),We=[qe],ts=["action"],es=["value"],ss=n(()=>t("button",{type:"submit"},"送出表單",-1)),as={class:"relative w-full h-full max-w-md md:h-auto"},os={class:"relative bg-white border-2 border-textself rounded-lg shadow"},ns={class:"flex items-center justify-end border-b-2 border-textself p-3 rounded-t"},ls={key:0,class:"text-xl font-medium"},is=n(()=>t("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)),ds=n(()=>t("span",{class:"sr-only text-black"},"Close modal",-1)),cs=[is,ds],rs={key:0,class:"w-full rounded-lg p-3"},ps={class:"flex justify-between items-center bg-bgself-light rounded-xl p-3 mb-3"},us={class:"font-medium"},_s={class:"py-1 px-2"},ms={class:"font-medium"},hs={class:"text-white bg-primary-light rounded py-1 px-2"},fs={class:"space-y-3",action:"#"},gs=n(()=>t("label",{for:"form_satisfaction",class:"block mb-2 font-medium"},"滿意度",-1)),bs=["value"],As=n(()=>t("label",{for:"form_description",class:"block font-medium"},"建議",-1)),vs=n(()=>t("h3",{class:"font-medium mb-1"},"付款方式",-1)),ys={class:"flex"},xs={class:"mr-3"},ws={class:"flex items-center"},Ss=n(()=>t("label",{for:"payment_money",class:"ml-2 text-xl font-medium"}," 現金 ",-1)),Ls={class:"flex items-center"},ks=n(()=>t("label",{for:"payment_LinePay",class:"ml-2 text-xl font-medium"}," LinePay ",-1)),Ns={class:"text-sm text-primary-light mt-2"},Cs=["onClick"],Ds={__name:"AccordionMenuItem",setup(x){const s=Jt(),a=xt(),w=m(["","未結帳","已結帳"]),U=m(Tt()),i=V({orderStatus:w.value[0],createdAt:""}),S=m([]),L=m(1),R=wt().ctx.$forceUpdate;it(async()=>{a.isLoading=!0,await R(),a.isLoading=!1});const E=()=>{i.createdAt=""},u=async()=>{L.value++,a.isLoading=!0,await s.LoadNewFile(i,L.value),a.isLoading=!1};it(async()=>{a.isLoading=!0,await s.getOrders(i,1),a.isLoading=!1,L.value=1}),St([()=>i.orderStatus,()=>i.createdAt],async()=>{a.isLoading=!0,await s.getOrders(i,1),a.isLoading=!1,L.value=1},{immediate:!0,deep:!0});const _=async(g,d)=>{a.isLoading=!0,await s.getOrderDetail(g,d),a.isLoading=!1},f=m(`${Lt()}`),A=m(""),v=m(),{errors:y,useFieldModel:O}=Vt({validationSchema:Rt}),F=V({orderId:"",orderNo:"",tableName:"1",payment:"",orderType:"已結帳",satisfaction:10,description:""}),o=V({orderId:"",orderNo:"",tableName:"1",payment:O("payment"),orderType:"已結帳",satisfaction:10,description:""}),mt=async()=>{if(!o.payment){_t("請選擇付款類型");return}i.orderStatus=w.value[1],i.createdAt="",o.payment==="現金"?(a.isLoading=!0,await s.postOrderRating(o.orderId,o,i),a.isLoading=!1):o.payment==="linepay"&&(o.orderType="未結帳",a.isLoading=!0,await s.postOrderRating(o.orderId,o,i),a.isLoading=!1,A.value&&(v.value.submit(),A.value="",a.isLoading=!1)),z(),a.isLoading=!1},ht=async g=>{a.isLoading=!0,await s.getLinePayStatus(g),a.isLoading=!1},ft=async g=>{a.isLoading=!0,await s.getOrderStatus(g),a.isLoading=!1},T=m(!1),H=m(),gt=(g,d)=>{T.value=g;const e=H.value;pt(()=>{if(e&&e.openModal(),T.value==="create"){const{_id:h,orderNo:C,tableName:B}=d;o.orderId=h,o.orderNo=C,o.tableName=B,A.value=`https://love-in-no-words-api.zeabur.app//v1/line_pay/${C}`}})},z=()=>{const g=H.value;pt(()=>{g&&(g.closeModal(),Object.assign(o,F),i.orderStatus=w.value[0],i.createdAt="",L.value=1)})};return(g,d)=>(r(),p(N,null,[t("main",Kt,[t("div",zt,[t("ul",Yt,[(r(!0),p(N,null,M(w.value,(e,h)=>(r(),p("li",{class:"mr-2",key:h},[t("a",{onClick:Q(C=>i.orderStatus=e,["prevent"]),href:"#",class:D(["block px-6 py-3 rounded-lg hover:text-primary-light hover:bg-white",{"tabbar-active":c(s).currentIndex===e}])},l(e||"全部"),11,Xt)]))),128))]),t("section",$t,[Gt,t("div",Zt,[k(t("select",{id:"form_createdAt",class:"form-select","onUpdate:modelValue":d[0]||(d[0]=e=>i.createdAt=e)},[(r(!0),p(N,null,M(U.value,(e,h)=>(r(),p("option",{value:e,key:h},l(e),9,qt))),128))],512),[[dt,i.createdAt]]),t("button",{onClick:Q(E,["prevent"]),type:"button",class:"btn btn-outline-dark whitespace-nowrap mx-3"}," 清空 ",8,Wt)])])]),t("div",te,[ee,(r(!0),p(N,null,M(c(s).orderList,(e,h)=>{var C,B,Y,X,$,G,Z,q,W,tt,et,st,at,ot,nt,lt;return r(),p("table",{class:"w-full border-2 text-center border-separate mt-4 rounded-lg border-black overflow-hidden",key:e._id},[t("tbody",se,[t("tr",ae,[t("td",oe,[k(t("input",{type:"checkbox",class:"sr-only","onUpdate:modelValue":b=>S.value[h]=b,id:e.orderNo},null,8,ne),[[kt,S.value[h]]]),t("label",{for:e.orderNo},[t("img",{onClick:b=>_(e._id,e.orderNo),src:S.value[h]===!0?c(Qt):c(jt),width:"32",height:"32",alt:"IconMinus"},null,8,ie)],8,le)]),t("td",de,l(c(Bt)(e.createdAt)),1),t("td",ce,l(e.time),1),t("td",re,l(e.orderNo),1),t("td",pe,[t("span",ue,l(e.tableName),1)]),t("td",_e,[t("div",me,[t("button",{type:"button",class:D(["w-full mr-1 btn btn-outline-dark",e.orderStatus==="未結帳"?"":"hidden"]),onClick:b=>gt("create",e)}," 結帳 ",10,he),t("button",{type:"button",class:D(["w-full ml-1 btn btn-dark",e.payment==="linepay"?"":"hidden"]),onClick:b=>ht(e.orderNo)}," 查詢 ",10,fe),t("button",{type:"button",class:D(["w-full ml-1 btn btn-primary",e.payment==="現金"?"":"hidden"]),onClick:b=>ft(e.orderNo)}," 查詢 ",10,ge)])])])]),t("tbody",{class:D([S.value[h]===!0?"":"hidden","bg-white relative","overflow-hidden transition-all"])},[t("tr",be,[Ae,t("td",ve,[t("table",ye,[xe,t("tbody",null,[(r(!0),p(N,null,M((B=(C=c(s).orderDetail.value)==null?void 0:C[e.orderNo])==null?void 0:B.orderList,(b,bt)=>(r(),p("tr",{class:"border-b-2 border-textself",key:b._id},[t("td",we,l(bt+1),1),t("td",Se,l(b.productName),1),t("td",Le,l(b.price),1),t("td",ke,l(b.qty),1),t("td",Ne,l(b.note),1)]))),128))])])])]),t("tr",Ce,[De,t("td",Ie,[Oe,t("span",Me,l((X=(Y=c(s).orderDetail.value)==null?void 0:Y[e.orderNo])==null?void 0:X.totalTime)+" 分",1)])]),t("tr",Ue,[Te,t("td",Be,[Ve,t("span",{class:D(["ml-4 inline text-sm font-medium rounded-lg py-1 px-2",((G=($=c(s).orderDetail.value)==null?void 0:$[e.orderNo])==null?void 0:G.status)==="未出餐"?"bg-neutralself-100 text-white":"bg-primary-light text-white"])},l((q=(Z=c(s).orderDetail.value)==null?void 0:Z[e.orderNo])==null?void 0:q.status),3)])]),k(t("tr",Re,[Ee,t("td",Fe,[He,t("span",Pe,l((tt=(W=c(s).orderDetail.value)==null?void 0:W[e.orderNo])==null?void 0:tt.couponName),1)])],512),[[Nt,(st=(et=c(s).orderDetail.value)==null?void 0:et[e.orderNo])==null?void 0:st.couponName]]),t("tr",Qe,[je,t("td",Je,[Ke,t("span",ze,"$ "+l((ot=(at=c(s).orderDetail.value)==null?void 0:at[e.orderNo])==null?void 0:ot.discount),1)])]),t("tr",Ye,[Xe,t("td",$e,[Ge,t("span",Ze,"$ "+l((lt=(nt=c(s).orderDetail.value)==null?void 0:nt[e.orderNo])==null?void 0:lt.totalPrice),1)])])],2)])}),128))]),c(s).prePage!==null?(r(),p("button",{key:0,type:"button",class:"w-full btn btn-secondary my-6",onClick:u},We)):j("",!0),t("form",{action:A.value,method:"POST",ref_key:"linepayForm",ref:v,class:"sr-only"},[t("input",{type:"hidden",name:"_token",value:f.value},null,8,es),ss],8,ts)]),J(Ut,{ref_key:"childComponentRef",ref:H},{default:Ct(()=>[t("section",as,[t("div",os,[t("div",ns,[T.value==="create"?(r(),p("h2",ls,"填寫付款資訊")):j("",!0),t("button",{onClick:d[1]||(d[1]=e=>z()),type:"button",class:"text-gray-400 bg-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"},cs)]),T.value==="create"?(r(),p("div",rs,[t("div",ps,[t("p",us,[ct(" 訂單編號 "),t("span",_s,l(o.orderNo),1)]),t("p",ms,[ct(" 桌號 "),t("span",hs,l(o.tableName),1)])]),t("form",fs,[t("div",null,[gs,k(t("select",{id:"form_satisfaction",class:"form-select py-3","onUpdate:modelValue":d[2]||(d[2]=e=>o.satisfaction=e)},[(r(),p(N,null,M(10,(e,h)=>t("option",{value:e,key:h},l(e),9,bs)),64))],512),[[dt,o.satisfaction]])]),t("div",null,[As,k(t("textarea",{id:"form_description",rows:"5",class:"form-input my-2",placeholder:"請輸入建議","onUpdate:modelValue":d[3]||(d[3]=e=>o.description=e)},null,512),[[Dt,o.description,void 0,{trim:!0}]])]),t("div",null,[vs,t("ul",ys,[t("li",xs,[t("div",ws,[k(t("input",{id:"payment_money",type:"radio",value:"現金","onUpdate:modelValue":d[4]||(d[4]=e=>o.payment=e),name:"form-radio",class:"form-radio"},null,512),[[rt,o.payment]]),Ss])]),t("li",null,[t("div",Ls,[k(t("input",{id:"payment_LinePay",type:"radio",value:"linepay","onUpdate:modelValue":d[5]||(d[5]=e=>o.payment=e),name:"form-radio",class:"form-radio"},null,512),[[rt,o.payment]]),ks])])]),t("p",Ns,l(c(y).payment),1)]),t("button",{type:"submit",class:"w-full btn btn-dark",onClick:Q(mt,["prevent"])}," 結帳 ",8,Cs)])])):j("",!0)])])]),_:1},512)],64))}},Is=yt(Ds,[["__scopeId","data-v-a636b0eb"]]),Os={class:"fixed top-0 left-0 z-40 w-[315px] h-screen"},Ms={class:"ml-[315px] bg-white"},Us=t("nav",{class:"border-b-2 border-textself p-6"},[t("h1",{class:"flex items-center text-[36px] font-bold"},"訂單資訊")],-1),Js={__name:"OrderView",setup(x){return(s,a)=>(r(),p(N,null,[t("aside",Os,[J(At)]),t("section",Ms,[Us,J(Is)])],64))}};export{Js as default};
