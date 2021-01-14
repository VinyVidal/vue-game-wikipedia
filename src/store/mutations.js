import getters from './getters'

export default {
    appendGame: function(state, game) {
        const obj = {
            id: getters.lastId(state) + 1,
            ...game
        }

        state.gameList.push(obj)
    }
}