import { BehaviorSubject } from 'rxjs'
import { Config, DarkmodeDetectorConfig } from './interfaces/config.interface';
import LightDetector from './features/light-detector';

export default class DarkmodeDetector {
  private _currentMode$: BehaviorSubject<string>;

  private defaultConfig: Config = {
    defaultMode: 'light', brightnessThreshold: 50, features: []
  };

  private config: Config;

  constructor(config: DarkmodeDetectorConfig = {}) {
    this.config = {...this.defaultConfig, ...config};

    this._currentMode$ = new BehaviorSubject(this.config.defaultMode);

    this.config.features.map((feature) => {
      if(feature === 'light') {
        const mySub = new LightDetector().initLightningDetection().subscribe(val => this.currentMode = val);
      }
    })



    
  }

  public get currentMode$() {
    return this._currentMode$.asObservable();
  }

  public get currentMode() {
    return this._currentMode$.value;
  }

  public set currentMode(val) {
    this._currentMode$.next(val);
  }

}
