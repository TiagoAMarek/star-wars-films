import films from '@/api/films'

export default {
  async fetchFilms({ commit }) {
    const { results } = await films.getFilms()
    commit('setFilms', results)
  },
}
