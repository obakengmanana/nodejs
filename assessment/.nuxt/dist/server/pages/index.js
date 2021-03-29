exports.ids = [4];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bad8e090", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".is-danger{\n  color:red\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a96bd184&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<br> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<label for=\"gender\" class=\"form-label\">Gender</label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],staticClass:"form-control",attrs:{"id":"gender","name":"gender","required":""},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.gender=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.updateState]}},[_c('option',{attrs:{"disabled":"","value":""}},[_vm._v("Please select one")]),_vm._v(" "),_c('option',{attrs:{"value":"male"}},[_vm._v("Male")]),_vm._v(" "),_c('option',{attrs:{"value":"female"}},[_vm._v("Female")]),_vm._v(" "),_c('option',{attrs:{"value":"na"}},[_vm._v("Na")])])],2),_vm._ssrNode(" <br> "),_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"column is-12\">","</div>",[_vm._ssrNode("<label class=\"label\">Name</label> "),_vm._ssrNode("<p class=\"control has-icon has-icon-right\">","</p>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"}],staticClass:"form-control",class:{ input: true, 'is-danger': _vm.errors.has('name') },attrs:{"name":"name","type":"text","placeholder":"Name"},on:{"change":_vm.updateState}},[]),_vm._ssrNode(" <i class=\"fa fa-warning\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('name')) ? '' : 'none' }))+"></i> <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('name')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('name')))+"</span>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"column is-12\">","</div>",[_vm._ssrNode("<label class=\"label\">Lastname</label> "),_vm._ssrNode("<p class=\"control has-icon has-icon-right\">","</p>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"}],staticClass:"form-control",class:{ input: true, 'is-danger': _vm.errors.has('lastname') },attrs:{"name":"lastname","type":"text","placeholder":"Lastname"},on:{"change":_vm.updateState}},[]),_vm._ssrNode(" <i class=\"fa fa-warning\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('lastname')) ? '' : 'none' }))+"></i> <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('lastname')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('lastname')))+"</span>")],2)],2)]),_vm._ssrNode(" <button type=\"submit\" class=\"next-btn\">Next</button>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a96bd184&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(28);
var external_vee_validate_default = /*#__PURE__*/__webpack_require__.n(external_vee_validate_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(7);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




external_vue_default.a.use(external_vee_validate_default.a);
external_vue_default.a.use(external_vue_router_default.a);
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      name: state => state.name,
      lastname: state => state.lastname,
      gender: state => state.gender
    })
  },
  methods: {
    updateState(e) {
      e.preventDefault();
      console.log(e.target.elements);
      this.$store.commit('userInfo/setInfo', e.target);
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.$router.push('/contact');
        } else {
          alert('Correct errors!');
        }
      });
    },

    ...Object(external_vuex_["mapMutations"])({
      toggle: 'todos/toggle'
    })
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4230c8e0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map