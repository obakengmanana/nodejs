<template>
  <main>
    <div class="container">
      <br />
      <form @submit.prevent="validateBeforeSubmit">
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select
            id="gender"
            v-model="gender"
            name="gender"
            class="form-control"
            required
            @change="updateState"
          >
            <option disabled value="">Please select one</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="na">Na</option>
          </select>
        </div>
        <br />
        <div class="mb-3">
          <div class="column is-12">
            <label class="label">Name</label>
            <p class="control has-icon has-icon-right">
              <input
                name="name"
                class="form-control"
                @change="updateState"
                v-validate="'required|alpha'"
                :class="{ input: true, 'is-danger': errors.has('name') }"
                type="text"
                placeholder="Name"
              />
              <i v-show="errors.has('name')" class="fa fa-warning"></i>
              <span v-show="errors.has('name')" class="help is-danger">{{
                errors.first('name')
              }}</span>
            </p>
          </div>
        </div>
        <div class="mb-3">
          <div class="column is-12">
            <label class="label">Lastname</label>
            <p class="control has-icon has-icon-right">
              <input
                name="lastname"
                class="form-control"
                @change="updateState"
                v-validate="'required|alpha'"
                :class="{ input: true, 'is-danger': errors.has('lastname') }"
                type="text"
                placeholder="Lastname"
              />
              <i v-show="errors.has('lastname')" class="fa fa-warning"></i>
              <span v-show="errors.has('lastname')" class="help is-danger">{{
                errors.first('lastname')
              }}</span>
            </p>
          </div>
        </div>
        <button class="next-btn" type="submit">Next</button>
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
      name: (state) => state.name,
      lastname: (state) => state.lastname,
      gender: (state) => state.gender,
    }),
  },
  methods: {
    updateState(e) {
      e.preventDefault()
      console.log(e.target.elements)
      this.$store.commit('userInfo/setInfo', e.target)
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          this.$router.push('/contact')
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

<style>
.is-danger {
  color: red;
}
</style>
