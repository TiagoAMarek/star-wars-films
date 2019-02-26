export default {
  getSortedFilms(state) {
    return state.films.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
  },
}
