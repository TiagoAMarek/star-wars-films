import films from '@/api/films'

export default {
  namespaced: true,

  state: {
    films: [],
  },

  getters: {
    getSortedFilms(state) {
      return state.films.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
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
