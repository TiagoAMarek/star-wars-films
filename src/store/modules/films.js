import films from '@/api/films'

export default {
  namespaced: true,

  state: {
    films: [],
  },

  getters: {
    getFilms(state) {
      return state.films
    }
  },

  actions: {
    async fetchFilms({ commit }) {
      const { results } = await films.getFilms()
      commit('setFilms', results)
    },
  },

  mutations: {
    setFilms(state, films) {
      state.films = films
    },
  },
}
