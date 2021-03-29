export const state = () => ({
  gender: '',
  name: '',
  lastname: '',
  cellphone: null,
  email: '',
  height: '',
  weight: null,
  recentlySick: 0,
})

export const mutations = {
  setInfo(state, element) {
    const value = element.value
    const name = element.name
    state[name] = value
    console.log(state)
  },
  setRecentlySick(state, element) {
    const value = element.checked
    const name = element.name
    state[name] = value
    console.log(state)
  },
  getInfo(state, element) {
    return state.userDetails.element
  },
  updateHealth(state, element) {
    const value = element.value
    const name = element.name
    state.userDetails.push({
      [name]: value,
    })
  },
  toggleRecentlySick(state, todo) {
    todo.done = !todo.done
  },

}
