<template>
  <main>
    <div class="container">
      <br />
      <form @submit.prevent="validateBeforeSubmit">
        <div class="mb-3">
          <div class="column is-12">
            <label class="label">Height(Meters)</label>
            <p class="control has-icon has-icon-right">
              <input
                name="height"
                class="form-control"
                @change="updateHealthState"
                v-validate="'required|decimal'"
                :class="{ input: true, 'is-danger': errors.has('height') }"
                type="text"
                placeholder="height"
              />
              <i v-show="errors.has('height')" class="fa fa-warning"></i>
              <span v-show="errors.has('height')" class="help is-danger">{{
                errors.first('height')
              }}</span>
            </p>
          </div>
        </div>
        <div class="mb-3">
          <div class="column is-12">
            <label class="label">Weight(Kilograms) *</label>
            <p class="control has-icon has-icon-right">
              <input
                name="weight"
                class="form-control"
                @change="updateHealthState"
                v-validate="'decimal'"
                :class="{ input: true, 'is-danger': errors.has('weight') }"
                type="text"
                placeholder="weight"
              />
              <i v-show="errors.has('weight')" class="fa fa-warning"></i>
              <span v-show="errors.has('weight')" class="help is-danger">{{
                errors.first('weight')
              }}</span>
            </p>
          </div>
        </div>
        <div class="mb-3">
          <p class="control">
            <label class="checkbox">
              <input
                id="recentlySick"
                name="recentlySick"
                @change="updateHealthState"
                value="0"
                type="checkbox"
              />
              Recently Sick
            </label>
          </p>
        </div>
        <div class="">
          <router-link class="prev-btn" to="/contact">Back</router-link>
          <button class="next-btn">Next</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'

Vue.use(VeeValidate)
Vue.use(VueRouter)

export default {
  computed: {
    ...mapState({
      weight: (state) => state.weight,
      height: (state) => state.height,
      recentlySick: (state) => state.recentlySick,
    }),
  },
  methods: {
    updateHealthState(e) {
      e.preventDefault()
      var checkBox = document.getElementById('recentlySick')

      if (checkBox.checked === true) {
        document.getElementById('recentlySick').value = '1'
      } else {
        document.getElementById('recentlySick').value = '0'
      }
      console.log(e.target.elements)

      this.$store.commit('userInfo/setInfo', e.target)
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          this.$router.push('/finalize')
        } else {
          alert('Correct errors!')
        }
      })
    },
    ...mapMutations({
      toggle: 'todos/toggle',
    }),
  },
}
</script>
