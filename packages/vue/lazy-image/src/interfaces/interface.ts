export interface IImage {
    path?: string;
    altText?: string;
    title?: string;
    focalPoint?: IFocalPoint;
    url?: string;
}

export interface IFocalPoint {
    top: number;
    left: number;
}

export interface IImageSize {
  windowWidth?: number;
  imageWidth: number;
  imageHeight?: number;
  queryString?: string;
}