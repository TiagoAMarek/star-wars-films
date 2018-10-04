<template>
  <div class="film">
    <section class="hero is-light">
      <div class="hero-body">
        <h2 class="title">{{film.title}}</h2>
        <h3 class="subtitle">{{film.release_date | formatDate}}</h3>
      </div>
    </section>
    <div class="film__container">
      <h4 class="film__director">Director: {{film.director}}</h4>
      <p class="film__opening-crawl">{{film.opening_crawl}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Film',

  props: {
    film: {
      type: Object,
    }
  }

}
</script>

<style lang="scss">
  // using variables from https://bulma.io/documentation/customize/variables/
  .film {

    &__director {
      padding-bottom: $size-small;
    }

    &__container {
      padding: $size-medium;
    }
  }
</style>
