import { DarkmodeDetector } from '../lib';

const DMDetector = new DarkmodeDetector();

DMDetector.currentMode$.subscribe(val => {
  console.log(val);
});
