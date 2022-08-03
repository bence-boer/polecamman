export interface Gear{
  attributes:{
    content: string,
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
