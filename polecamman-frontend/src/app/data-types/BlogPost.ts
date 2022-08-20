import {MediaElement} from "./MediaElement";

export interface BlogPost {
  attributes: {
    content: string,
    title: string,
    slug: string,
    media: {
      data: {
        attributes: MediaElement
      }[]
    },
    createdAt: string,
    locale: string,
    publishedAt: string,
    updatedAt: string
  },
  id: number,
}
