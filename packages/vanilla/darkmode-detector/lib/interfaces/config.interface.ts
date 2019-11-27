export interface Config {
  defaultMode: string;
  brightnessThreshold: number;
}

export interface DarkmodeDetectorConfig {
  defaultMode?: string;
  brightnessThreshold?: number;
}

/** @param {number} howOften amount of SECONDS between checks */
export interface LocalTimeCheckerConfig {
  howOften?: number;
  fallbackLocalSunShine?: number;
  fallbackLocalSunSet?: number;
}

export type Nullable<T> = T | null;