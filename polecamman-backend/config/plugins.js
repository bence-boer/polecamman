module.exports = ({ env }) => {
  return {
    ckeditor: true,
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          "blog-post": {
            field: 'slug',
            references: 'title',
            slugifyWithCount: true,
            shouldUpdateSlug: true
          },
          album: {
            field: 'slug',
            references: 'title',
            slugifyWithCount: true,
            shouldUpdateSlug: true
          },
        },
      },
    },
  }
}
