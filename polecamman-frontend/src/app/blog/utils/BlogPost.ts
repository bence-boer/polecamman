import {MediaElement} from "../../data-types/MediaElement";

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
