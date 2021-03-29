exports.ids = [2];
exports.modules = {

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("00f600ae", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finalize_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finalize_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finalize_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finalize_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_finalize_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".terms{\n  background-color:#e6e6e6;\n  overflow:auto;\n  height:200px;\n  width:100%;\n  margin-bottom:20px\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/finalize.vue?vue&type=template&id=32b9b12e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<br> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<p>\n        Please be advised that your information will be stored in a database.\n      </p> <br> "),_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"terms\"><p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.terms)+"\n          ")+"</p></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<p class=\"control\">","</p>",[_vm._ssrNode("<label class=\"checkbox\">","</label>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],attrs:{"name":"terms","type":"checkbox"}},[]),_vm._ssrNode("\n              I consent.\n            ")],2),_vm._ssrNode(" <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('terms')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('terms')))+"</span>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<p class=\"control\">","</p>",[_c('router-link',{staticClass:"prev-btn",attrs:{"to":"/health"}},[_vm._v("Back")]),_vm._ssrNode(" <button type=\"button\" class=\"next-btn button is-primary\">\n            Save\n          </button>")],2)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/finalize.vue?vue&type=template&id=32b9b12e&

// EXTERNAL MODULE: ./middleware/dataservice.js + 1 modules
var dataservice = __webpack_require__(15);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(7);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/finalize.vue?vue&type=script&lang=js&
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




external_vue_default.a.use(external_vue_router_default.a);
/* harmony default export */ var finalizevue_type_script_lang_js_ = ({
  el: '#button-links',
  data: () => ({
    terms: 'I agree to the terms and conditions'
  }),
  methods: {
    savePerson() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var data = this.$store.state.userInfo;
          dataservice["default"].create(data).then(response => {
            console.log(response.data);
            alert('Congrats!!! Process is complete.'); // eslint-disable-next-line

            this.$router.push('/');
          }).catch(e => {
            console.log(e);
          });
        } else {
          // eslint-disable-next-line
          alert('To proceed, please agree to T&Cs.');
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/finalize.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_finalizevue_type_script_lang_js_ = (finalizevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/finalize.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_finalizevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3dbc8d80"
  
)

/* harmony default export */ var finalize = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=finalize.js.map