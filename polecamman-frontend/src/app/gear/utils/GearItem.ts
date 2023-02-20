import {MediaElement} from "../../shared/utils/MediaElement";

export interface GearItem {
  // TODO: Check if this is correct
  attributes:{
    content: string,
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
