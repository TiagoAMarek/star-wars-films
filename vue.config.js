module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import '~bulma/sass/utilities/_all';
          @import '~bulma/sass/base/_all';
          @import '~bulma/sass/elements/_all';
        `,
      },
    },
  },
}
