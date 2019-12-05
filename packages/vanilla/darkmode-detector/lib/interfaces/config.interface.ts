export interface Config {
  defaultMode: string;
  brightnessThreshold: number;
  features: string[]
}

export interface DarkmodeDetectorConfig {
  defaultMode?: string;
  brightnessThreshold?: number;
  features?: string[]
}

/** @param {number} interval amount of SECONDS between checks */
export interface LocalTimeCheckerConfig {
  interval?: number;
  fallbackLocalSunShine?: number;
  fallbackLocalSunSet?: number;
}

export type Nullable<T> = T | null;