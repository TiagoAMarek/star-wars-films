<template>
  <div>
    <h1>Star Wars movies</h1>

    <ul>
      <li v-for="film in films" v-bind:key="film.id">
        {{film.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import films from '@/api/films'

export default {
  name: 'FilmsList',

  data () {
    return {
      films: null,
    }
  },

  async created () {
    const { results } = await films.getFilms()
    this.films = results
  }
}
</script>

<style lang="scss">

</style>
