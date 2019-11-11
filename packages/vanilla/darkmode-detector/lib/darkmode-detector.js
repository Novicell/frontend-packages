import { BehaviorSubject } from 'rxjs'

export default class DarkmodeDetector {
    _currentMode$;

    constructor({defaultMode} = {defaultMode: 'light'}) {
        this._currentMode$ = new BehaviorSubject(defaultMode);
    }

    get currentMode$() {
        return this._currentMode$.asObservable();
    }

    get currentMode() {
        return this._currentMode$.value();
    }

    set currentMode(val) {
        this._currentMode$.next(val);
    }


}
