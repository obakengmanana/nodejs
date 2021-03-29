<template>
  <main>
    <div class="container">
      <br />
      <form>
        <p class="">
          Please be advised that your information will be stored in a database.
        </p>
        <br />
        <div class="mb-3">
          <div class="terms">
            <p>
              {{ terms }}
            </p>
          </div>
          <div>
            <p class="control">
              <label class="checkbox">
                <input name="terms" v-validate="'required'" type="checkbox" />
                I consent.
              </label>
              <span class="help is-danger" v-show="errors.has('terms')">{{
                errors.first('terms')
              }}</span>
            </p>
          </div>
          <p class="control">
            <router-link class="prev-btn" to="/health">Back</router-link>
            <button type="button" class="next-btn button is-primary" @click="savePerson">
              Save
            </button>
          </p>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import dataservice from '../middleware/dataservice'
import { mapMutations, mapState, mapGetters } from 'vuex'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
  el: '#button-links',
  data: () => ({
    terms: 'I agree to the terms and conditions',
  }),
  methods: {
    savePerson() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          var data = this.$store.state.userInfo
          dataservice
            .create(data)
            .then((response) => {
              console.log(response.data)
              alert('Congrats!!! Process is complete.')
                // eslint-disable-next-line
              this.$router.push('/')
            })    
            .catch((e) => {
              console.log(e)
            })

        } else {
          // eslint-disable-next-line
          alert('To proceed, please agree to T&Cs.')
        }
      })
    },
  },
}
</script>

<style>
.terms {
  background-color: #e6e6e6;
  overflow: auto;
  height: 200px;
  width: 100%;
  margin-bottom: 20px;
}
</style>
