<template>
  <main>
    <div class="container">
      <br />
      <form @submit.prevent="validateBeforeSubmit">
        <div class="mb-3">
          <div class="column is-12">
            <label class="label">Cellphone *</label>
            <p class="control has-icon has-icon-right">
              <input
                name="cellphone"
                class="form-control"
                v-validate="'numeric'"
                :class="{ input: true, 'is-danger': errors.has('cellphone') }"
                type="text"
                placeholder="cellphone"
                @change="updateContact"
              />
              <i v-show="errors.has('cellphone')" class="fa fa-warning"></i>
              <span v-show="errors.has('cellphone')" class="help is-danger">{{
                errors.first('cellphone')
              }}</span>
            </p>
          </div>
        </div>
        <div class="mb-3">
          <div class="column is-12">
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
              <input
                name="email"
                @change="updateContact"
                class="form-control"
                v-validate="'required|email'"
                :class="{ input: true, 'is-danger': errors.has('email') }"
                type="text"
                placeholder="Email"
              />
              <i v-show="errors.has('email')" class="fa fa-warning"></i>
              <span v-show="errors.has('email')" class="help is-danger">{{
                errors.first('email')
              }}</span>
            </p>
          </div>
        </div>
        <router-link class="prev-btn" to="/">Back</router-link>
        <button class="next-btn">Next</button>
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
      cellphone: (state) => state.cellphone,
      email: (state) => state.email,
    }),
  },
  methods: {
    updateContact(e) {
      e.preventDefault()
      console.log(e.target.elements)
      this.$store.commit('userInfo/setInfo', e.target)
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          this.$router.push('/health')
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
