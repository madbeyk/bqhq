import{d as h,G as n,a2 as y,c as b,e as S,f as x,n as I,K as $,k as E}from"./wF0296W9.js";const k=h({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(s){const c=n(()=>((t=e)=>t.top)()),d=n(()=>((t=e)=>t.left)()),o=n(()=>((t=e)=>t.right)()),r=n(()=>((t=e)=>t.zIndex)()),_=n(()=>((t=e)=>t.width)()),u=n(()=>((t=e)=>t.height)()),f=n(()=>((t=e)=>`blur(${t.blur})`)()),g=n(()=>((t=e)=>{var a,i,l;return`linear-gradient(97.62deg, ${(a=t==null?void 0:t.colors)==null?void 0:a[0]} 2.27%, ${(i=t==null?void 0:t.colors)==null?void 0:i[1]} 50.88%, ${(l=t==null?void 0:t.colors)==null?void 0:l[2]} 98.48%)`})()),e=s,{$pinceau:m}=y(e,void 0,{_cCN_top:c,_eih_insetInlineStart:d,_IfB_insetInlineEnd:o,_SsE_zIndex:r,_wj8_maxWidth:_,_t33_height:u,_Jfd_filter:f,_yUj_background:g});return(t,a)=>(b(),S("div",{class:I(["ellipsis",[$(m)]])},a[0]||(a[0]=[x("div",{class:"ellipsis-item"},null,-1)]),2))}}),z=E(k,[["__scopeId","data-v-67b8dcbc"]]);export{z as default};
