module.exports = () => {
  return {
    ckeditor: true,
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          "blog-post": {
            field: 'slug',
            references: 'title'
          },
          "album": {
            field: 'slug',
            references: 'title'
          },
        },
      },
    },
  }
}
