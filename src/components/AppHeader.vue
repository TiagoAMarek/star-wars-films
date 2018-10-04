<template>
  <header class="app-header">
    <img class="app-header__logo" src="@/assets/logo.png" alt="Star Wars logo">
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss">
  .app-header {
    align-items: center;
    background-color: #333;
    display: flex;
    height: 64px;
    justify-content: center;
    margin-bottom: 16px;
    width: 100%;

    &__logo {
      width: 80px;
    }
  }
</style>
