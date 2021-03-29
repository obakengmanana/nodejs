exports.ids = [1];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=44012613&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<br> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"column is-12\">","</div>",[_vm._ssrNode("<label class=\"label\">Cellphone *</label> "),_vm._ssrNode("<p class=\"control has-icon has-icon-right\">","</p>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('numeric'),expression:"'numeric'"}],staticClass:"form-control",class:{ input: true, 'is-danger': _vm.errors.has('cellphone') },attrs:{"name":"cellphone","type":"text","placeholder":"cellphone"},on:{"change":_vm.updateContact}},[]),_vm._ssrNode(" <i class=\"fa fa-warning\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('cellphone')) ? '' : 'none' }))+"></i> <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('cellphone')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('cellphone')))+"</span>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"column is-12\">","</div>",[_vm._ssrNode("<label class=\"label\">Email</label> "),_vm._ssrNode("<p class=\"control has-icon has-icon-right\">","</p>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],staticClass:"form-control",class:{ input: true, 'is-danger': _vm.errors.has('email') },attrs:{"name":"email","type":"text","placeholder":"Email"},on:{"change":_vm.updateContact}},[]),_vm._ssrNode(" <i class=\"fa fa-warning\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('email')) ? '' : 'none' }))+"></i> <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('email')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('email')))+"</span>")],2)],2)]),_vm._ssrNode(" "),_c('router-link',{staticClass:"prev-btn",attrs:{"to":"/"}},[_vm._v("Back")]),_vm._ssrNode(" <button class=\"next-btn\">Next</button>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=44012613&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      cellphone: state => state.cellphone,
      email: state => state.email
    })
  },
  methods: {
    updateContact(e) {
      e.preventDefault();
      console.log(e.target.elements);
      this.$store.commit('userInfo/setInfo', e.target);
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.$router.push('/health');
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
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a72a7ae"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map