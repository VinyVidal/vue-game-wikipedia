export default {
    count: function(state) {
        return state.gameList.length
    },
    lastId: function(state) {
        return state.gameList[state.gameList.length-1].id
    }
}