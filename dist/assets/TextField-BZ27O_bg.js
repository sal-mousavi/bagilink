import{_ as l,r as i,m as c,o as a,c as s,i as p,b as r,u,j as m,d as y,C as f}from"./index-DH5bKGWT.js";const v={class:"text-field"},_={__name:"TextField",props:{type:{type:String,required:!0},name:{type:String,required:!0},placeholder:{type:String},id:{type:String},value:{type:String}},setup(e){let t=i(e.type);const n=()=>{t.value=t.value==="password"?"text":"password"};return(d,x)=>{const o=c("VField");return a(),s("div",v,[p(d.$slots,"prepend-inner",{},void 0,!0),r(o,{class:"text-field__input",type:u(t),name:e.name,placeholder:e.placeholder,id:e.id,value:e.value},null,8,["type","name","placeholder","id","value"]),e.type=="password"?(a(),s("div",{key:0,class:"text-field__show-password",onClick:m(n,["prevent"])},[r(y,{name:"eye"})])):f("",!0)])}}},S=l(_,[["__scopeId","data-v-5c877dc3"]]);export{S as V};