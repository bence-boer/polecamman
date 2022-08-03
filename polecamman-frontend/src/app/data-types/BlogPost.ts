export interface BlogPost {
  attributes: {
    content: string,
    title: string,
    slug: string,
    media: {
      data: {
        attributes:{
          url: string
        }
      }[]
    },
    createdAt: string,
    locale: string,
    publishedAt: string,
    updatedAt: string
  },
  id: number,
  Prototype: Object
}
