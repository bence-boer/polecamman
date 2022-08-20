import {MediaElement} from "./MediaElement";

export interface Album{
  attributes:{
    title: string,
    slug: string,
    media: {
      data: {
        attributes: MediaElement
      }[]
    },
    length: number,
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
  },
  id: number
}
