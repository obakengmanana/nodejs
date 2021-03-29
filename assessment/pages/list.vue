<template>
  <div class="container">
    <h3 class="p-3 text-center">Persons list</h3>
    <div class="overflow-auto">
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
        hover
        :fields="fields"
      ></b-table>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </div>
</template>

<script>
import dataservice from '../middleware/dataservice'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  data() {
    const fields = [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'First Name' },
      { key: 'last_name', label: 'Last Name' },
      { key: 'gender', label: 'Gender' },
      { key: 'cellphone', label: 'Cellphone' },
      { key: 'email', label: 'Email' },
      { key: 'height', label: 'Height (m)' },
      { key: 'weight', label: 'Weight (kg)' },
      { key: 'r_sick', label: 'Recently Sick' },
    ]
    return {
      perPage: 10,
      currentPage: 1,
      fields,
      items: '',
    }
  },
  mounted() {
    dataservice
      .getAll()
      .then((response) => {
        console.log(response.data)
        this.items = response.data
      })
      .catch((e) => {
        console.log(e)
      })
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
}
</script>
