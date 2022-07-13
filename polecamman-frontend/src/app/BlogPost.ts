export interface BlogPost {
  attributes: {
    content: string,
    title: string,
    media: any,
    createdAt: string,
    locale: string,
    publishedAt: string,
    updatedAt: string
  },
  id: number,
  Prototype: Object
}

export interface ApiResponse<T> {
  data?: T,
  error?: any,
}
