export interface Config {
  defaultMode: string;
  brightnessThreshold: number;
}

export interface DarkmodeDetectorConfig {
  defaultMode?: string;
  brightnessThreshold?: number;
}

/** @param {number} interval amount of SECONDS between checks */
export interface LocalTimeCheckerConfig {
  interval?: number;
  fallbackLocalSunShine?: number;
  fallbackLocalSunSet?: number;
}

export type Nullable<T> = T | null;