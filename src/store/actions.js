export default {
    // { commit } = context.commit
    // context = object given to the Vuex actions method
    // game = Our custom variable
    addGame: function({ commit }, game) {
        // Commit will call the mutations method "appendGame" and pass the game object
        commit('appendGame', game)
    }
}