(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{344:function(t,s,e){"use strict";var n=e(1);s.a=new n.b},379:function(t,s,e){},447:function(t,s,e){"use strict";e(379)},457:function(t,s,e){"use strict";e.r(s);var n=e(344),u=e(59),i={data:()=>({submitEvent:null}),computed:{enabled(){return Boolean(this.submitEvent)},message(){return this.submitEvent?"success"===this.submitEvent.result?"Thank you for subscribing!":"Request failed!":""},isError(){return!(!this.submitEvent||"error"!==this.submitEvent.result)}},created(){n.a.$on("submited",this.onSubmited)},methods:{onSubmited(t){this.submitEvent=t,setTimeout(()=>{this.submitEvent=null},u.popupTimeout)}}},r=(e(447),e(2)),a=Object(r.a)(i,(function(){var t=this,s=t._self._c;return s("transition",{attrs:{name:"submit-popup"}},[t._t("default",(function(){return[t.enabled?s("div",{staticClass:"submit-popup",class:{error:t.isError},attrs:{"data-cy":"popup"}},[t._v("\n      "+t._s(t.message)+"\n    ")]):t._e()]}),{enabled:t.enabled,message:t.message,isError:t.isError})],2)}),[],!1,null,null,null);s.default=a.exports}}]);