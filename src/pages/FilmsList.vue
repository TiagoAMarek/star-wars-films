<template>
  <div class="films-page container">
    <h1 class="films-page__title title">Star Wars films</h1>

    <ul class="films-page__list">
      <li v-for="film in films" v-bind:key="film.id">
        <section class="hero is-light">
          <div class="hero-body">
            <div class="container">
              <h2 class="title">{{film.title}}</h2>
              <h3 class="subtitle">{{film.release_date | formatDate}}</h3>
            </div>
          </div>
        </section>
        <h4>Director: {{film.director}}</h4>
        <p>{{film.opening_crawl}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import '@/utils/filters'

export default {
  name: 'FilmsList',

  computed: {
    ...mapGetters('films', {
      films: 'getFilms'
    }),
  },

  methods: {
    ...mapActions({
      fetchFilms: 'films/fetchFilms',
    })
  },

  async created() {
    await this.fetchFilms()
  },
}
</script>

<style lang="scss">
  @import '~bulma/sass/elements/container';
  @import '~bulma/sass/layout/hero';

  .films-page {

    &__title {
      text-align: center;
    }
  }
</style>
