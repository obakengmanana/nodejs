(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{259:function(e,t,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(57).default)("bad8e090",content,!0,{sourceMap:!1})},267:function(e,t,r){"use strict";r(259)},268:function(e,t,r){var n=r(56)((function(i){return i[1]}));n.push([e.i,".is-danger{\n  color:red\n}",""]),e.exports=n},275:function(e,t,r){"use strict";r.r(t);r(48),r(26),r(36),r(58),r(34),r(59);var n=r(20),o=(r(21),r(49)),l=r(1),c=r(248),v=r(84);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}l.default.use(c.a),l.default.use(v.a);var f={computed:d({},Object(o.c)({name:function(e){return e.name},lastname:function(e){return e.lastname},gender:function(e){return e.gender}})),methods:d({updateState:function(e){e.preventDefault(),console.log(e.target.elements),this.$store.commit("userInfo/setInfo",e.target)},validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then((function(t){t?e.$router.push("/contact"):alert("Correct errors!")}))}},Object(o.b)({toggle:"todos/toggle"}))},h=(r(267),r(28)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"container"},[r("br"),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.validateBeforeSubmit(t)}}},[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"gender"}},[e._v("Gender")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],staticClass:"form-control",attrs:{id:"gender",name:"gender",required:""},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.gender=t.target.multiple?r:r[0]},e.updateState]}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),r("option",{attrs:{value:"male"}},[e._v("Male")]),e._v(" "),r("option",{attrs:{value:"female"}},[e._v("Female")]),e._v(" "),r("option",{attrs:{value:"na"}},[e._v("Na")])])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"mb-3"},[r("div",{staticClass:"column is-12"},[r("label",{staticClass:"label"},[e._v("Name")]),e._v(" "),r("p",{staticClass:"control has-icon has-icon-right"},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"form-control",class:{input:!0,"is-danger":e.errors.has("name")},attrs:{name:"name",type:"text",placeholder:"Name"},on:{change:e.updateState}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"fa fa-warning"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("name")))])])])]),e._v(" "),r("div",{staticClass:"mb-3"},[r("div",{staticClass:"column is-12"},[r("label",{staticClass:"label"},[e._v("Lastname")]),e._v(" "),r("p",{staticClass:"control has-icon has-icon-right"},[r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"form-control",class:{input:!0,"is-danger":e.errors.has("lastname")},attrs:{name:"lastname",type:"text",placeholder:"Lastname"},on:{change:e.updateState}}),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"fa fa-warning"}),e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastname"),expression:"errors.has('lastname')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("lastname")))])])])]),e._v(" "),r("button",{staticClass:"next-btn",attrs:{type:"submit"}},[e._v("Next")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);