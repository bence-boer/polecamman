export interface MediaElement{
  alternativeText: string,
  caption: string,
  createdAt: string,
  ext: string,
  formats: {
    large: MediaFormat,
    medium: MediaFormat,
    small: MediaFormat,
    thumbnail: MediaFormat
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

export interface MediaFormat{
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
