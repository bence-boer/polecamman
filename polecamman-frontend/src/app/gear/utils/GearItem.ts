import { MediaElement } from "../../shared/utils/MediaElement";

export interface GearItem {
  attributes: {
    name: string,
    description: string,
    media: {
      data: {
        attributes: MediaElement,
        id: number
      }
    },
    locale: string,
    length: number,
    createdAt: string,
    publishedAt: string,
    updatedAt: string
  },
  id: number
}
