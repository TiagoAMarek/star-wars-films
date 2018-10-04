<template>
  <div class="films-page container">
    <h1 class="films-page__title title">Star Wars films</h1>

    <div class="films-page__loader" v-if="loading">
      <img class="films-page__loader-gif" src="@/assets/loading.gif">
    </div>

    <ul class="films-page__list">
      <li v-for="film in films" v-bind:key="film.id">
        <film :film="film"></film>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import '@/utils/filters'
import Film from '@/components/Film'

export default {
  name: 'FilmsList',

  components: {
    Film,
  },

  data() {
    return {
      loading: false,
    }
  },

  computed: {
    ...mapGetters('films', {
      films: 'getSortedFilms'
    }),
  },

  methods: {
    ...mapActions({
      fetchFilms: 'films/fetchFilms',
    })
  },

  async created() {
    this.loading = true
    await this.fetchFilms()
    this.loading = false
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

    &__loader {
      display: flex;
      justify-content: center;
    }
  }
</style>
