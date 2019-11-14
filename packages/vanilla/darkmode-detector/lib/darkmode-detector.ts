import { BehaviorSubject } from 'rxjs'

export default class DarkmodeDetector {
  private _currentMode$: BehaviorSubject<string>;

  constructor({defaultMode} = {defaultMode: 'light'}) {
    this._currentMode$ = new BehaviorSubject(defaultMode);
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
