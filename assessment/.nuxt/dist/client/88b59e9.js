(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{254:function(t,e,n){var content=n(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("00f600ae",content,!0,{sourceMap:!1})},260:function(t,e,n){"use strict";n(254)},261:function(t,e,n){var r=n(56)((function(i){return i[1]}));r.push([t.i,".terms{\n  background-color:#e6e6e6;\n  overflow:auto;\n  height:200px;\n  width:100%;\n  margin-bottom:20px\n}",""]),t.exports=r},272:function(t,e,n){"use strict";n.r(e);var r=n(167),o=n(1),l=n(84);o.default.use(l.a);var c={el:"#button-links",data:function(){return{terms:"I agree to the terms and conditions"}},methods:{savePerson:function(){var t=this;this.$validator.validateAll().then((function(e){if(e){var data=t.$store.state.userInfo;r.default.create(data).then((function(e){console.log(e.data),alert("Congrats!!! Process is complete."),t.$router.push("/")})).catch((function(t){console.log(t)}))}else alert("To proceed, please agree to T&Cs.")}))}}},v=(n(260),n(28)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},[n("br"),t._v(" "),n("form",[n("p",{},[t._v("\n        Please be advised that your information will be stored in a database.\n      ")]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"mb-3"},[n("div",{staticClass:"terms"},[n("p",[t._v("\n            "+t._s(t.terms)+"\n          ")])]),t._v(" "),n("div",[n("p",{staticClass:"control"},[n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"terms",type:"checkbox"}}),t._v("\n              I consent.\n            ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("terms"),expression:"errors.has('terms')"}],staticClass:"help is-danger"},[t._v(t._s(t.errors.first("terms")))])])]),t._v(" "),n("p",{staticClass:"control"},[n("router-link",{staticClass:"prev-btn",attrs:{to:"/health"}},[t._v("Back")]),t._v(" "),n("button",{staticClass:"next-btn button is-primary",attrs:{type:"button"},on:{click:t.savePerson}},[t._v("\n            Save\n          ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);