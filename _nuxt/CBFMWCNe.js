import h from"./vUBxjk4V.js";import y from"./DIzv2rRg.js";import{d as b,x,p as S,r as v,a1 as V,c as l,e as u,f as i,F as w,X as B,K as s,i as F,w as R,g as T,t as k,V as C,k as E}from"./wF0296W9.js";const j=["action"],N={class:"inputs"},O=b({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(m){const d=x().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=v(),p=V(m.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const c=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:c,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=d.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,c)=>{const r=h,a=y;return l(),u("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[i("div",N,[(l(!0),u(w,null,B(s(p),(o,_)=>(l(),C(r,{key:_,modelValue:o.data,"onUpdate:modelValue":g=>o.data=g,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),i("div",null,[F(a,{type:"submit",disabled:!s(n)},{default:R(()=>[T(k(s(t)?s(t):m.submitButtonText),1)]),_:1},8,["disabled"])])],40,j)}}}),D=E(O,[["__scopeId","data-v-2c0e155e"]]);export{D as default};
