import { BehaviorSubject } from 'rxjs'
import { LocalTimeCheckerConfig, Nullable } from './interfaces/config.interface';
import { getSunrise, getSunset } from 'sunrise-sunset-js';

export default class LocalTimeChecker {
  private _isDark$: BehaviorSubject<boolean>;
  private _defaultValue: boolean = false;
  private config: LocalTimeCheckerConfig;

  /** @param {number} howOften amount of SECONDS between checks */
  constructor(config: LocalTimeCheckerConfig = {howOften: 1}) {
    this.config = config;
    this._isDark$ = new BehaviorSubject<boolean>(this._defaultValue);
    this.initIsDark();
  }

  public get isDark(): BehaviorSubject<boolean> {
    return this._isDark$;
  }

  // if for some reason one wants to reset default value
  public set defaultValue(newVal: boolean) {
    this._defaultValue = newVal;
  }

  private initIsDark() {
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        const LOCAL_SUNSET = getSunset(coords.latitude, coords.longitude).getHours();
        const LOCAL_SUNRISE = getSunrise(coords.latitude, coords.longitude).getHours();
        this._isDark$.next(this.calculateIsDark(LOCAL_SUNSET, LOCAL_SUNRISE));
      },
      (err) => {
        console.log('User declined sharing location')
        // continue with fallback method
        this._isDark$.next(this.calculateIsDark());
      }
    );
    setTimeout(() => this.initIsDark(), this.config.howOften && 1 * 1000);
  }

  private calculateIsDark(sunset: Nullable<number> = null, sunrise: Nullable<number> = null): boolean {
    const CURRENT_HOUR = new Date().getHours();
    if (sunset && sunrise) { 
      return CURRENT_HOUR > sunset || CURRENT_HOUR < sunrise;
    }

    // fallback if user declines sharing location
    const _sunset = this.config.fallbackLocalSunSet ? this.config.fallbackLocalSunSet : 20;
    const _sunrise = this.config.fallbackLocalSunShine ? this.config.fallbackLocalSunShine : 6;
    return CURRENT_HOUR > _sunset || CURRENT_HOUR < _sunrise;
  }
}
