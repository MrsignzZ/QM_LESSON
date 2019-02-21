export default {
  addTodo ( { commit }, text ) {
    commit('addTodo', {
      text,
      done: false
    })
  },
  toggleTodo ({ commit }, todo) {
    commit('editTodo', {
      todo,
      done: !todo.done
    })
  }
}