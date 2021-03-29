exports.ids = [3];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/health.vue?vue&type=template&id=12ff888e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<br> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"column is-12\">","</div>",[_vm._ssrNode("<label class=\"label\">Height(Meters)</label> "),_vm._ssrNode("<p class=\"control has-icon has-icon-right\">","</p>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required|decimal'),expression:"'required|decimal'"}],staticClass:"form-control",class:{ input: true, 'is-danger': _vm.errors.has('height') },attrs:{"name":"height","type":"text","placeholder":"height"},on:{"change":_vm.updateHealthState}},[]),_vm._ssrNode(" <i class=\"fa fa-warning\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('height')) ? '' : 'none' }))+"></i> <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('height')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('height')))+"</span>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-3\">","</div>",[_vm._ssrNode("<div class=\"column is-12\">","</div>",[_vm._ssrNode("<label class=\"label\">Weight(Kilograms) *</label> "),_vm._ssrNode("<p class=\"control has-icon has-icon-right\">","</p>",[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('decimal'),expression:"'decimal'"}],staticClass:"form-control",class:{ input: true, 'is-danger': _vm.errors.has('weight') },attrs:{"name":"weight","type":"text","placeholder":"weight"},on:{"change":_vm.updateHealthState}},[]),_vm._ssrNode(" <i class=\"fa fa-warning\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('weight')) ? '' : 'none' }))+"></i> <span class=\"help is-danger\""+(_vm._ssrStyle(null,null, { display: (_vm.errors.has('weight')) ? '' : 'none' }))+">"+_vm._ssrEscape(_vm._s(_vm.errors.first('weight')))+"</span>")],2)],2)]),_vm._ssrNode(" <div class=\"mb-3\"><p class=\"control\"><label class=\"checkbox\"><input id=\"recentlySick\" name=\"recentlySick\" value=\"0\" type=\"checkbox\">\n            Recently Sick\n          </label></p></div> "),_vm._ssrNode("<div>","</div>",[_c('router-link',{staticClass:"prev-btn",attrs:{"to":"/contact"}},[_vm._v("Back")]),_vm._ssrNode(" <button class=\"next-btn\">Next</button>")],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/health.vue?vue&type=template&id=12ff888e&

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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/health.vue?vue&type=script&lang=js&
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
/* harmony default export */ var healthvue_type_script_lang_js_ = ({
  computed: { ...Object(external_vuex_["mapState"])({
      weight: state => state.weight,
      height: state => state.height,
      recentlySick: state => state.recentlySick
    })
  },
  methods: {
    updateHealthState(e) {
      e.preventDefault();
      var checkBox = document.getElementById('recentlySick');

      if (checkBox.checked === true) {
        document.getElementById('recentlySick').value = '1';
      } else {
        document.getElementById('recentlySick').value = '0';
      }

      console.log(e.target.elements);
      this.$store.commit('userInfo/setInfo', e.target);
    },

    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          this.$router.push('/finalize');
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
// CONCATENATED MODULE: ./pages/health.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_healthvue_type_script_lang_js_ = (healthvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/health.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_healthvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "101c4f3e"
  
)

/* harmony default export */ var health = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=health.js.map