export interface Album{
  attributes:{
    title: string,
    slug: string,
    media: {
      data: {
        attributes:{
          url: string
        }
      }[]
    },
    length: number,
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
  },
  id: number
}
