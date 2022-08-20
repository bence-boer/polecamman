export interface MediaElement{
  alternativeText: string,
  caption: string,
  createdAt: string,
  ext: string,
  formats: {
    large: {
      ext: string,
      hash: string,
      height: number,
      mime: string,
      name: string,
      path: string,
      size: number,
      url: string,
      width: number
    },
    medium: {
      ext: string,
      hash: string,
      height: number,
      mime: string,
      name: string,
      path: string,
      size: number,
      url: string,
      width: number
    },
    small: {
      ext: string,
      hash: string,
      height: number,
      mime: string,
      name: string,
      path: string,
      size: number,
      url: string,
      width: number
    },
    thumbnail: {
      ext: string,
      hash: string,
      height: number,
      mime: string,
      name: string,
      path: string,
      size: number,
      url: string,
      width: number
    }
  }
  hash: string,
  height: number,
  mime: string,
  name: string,
  previewUrl: string,
  provider: string,
  provider_metadata: string,
  size: number,
  updatedAt: string,
  url: string,
  width: number
}
