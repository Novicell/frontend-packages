import { DarkmodeDetector, LocalTimeChecker } from '../lib';

const DMDetector = new DarkmodeDetector({
  brightnessThreshold: 57,
  features: ['light', 'time']
});

DMDetector.currentMode$.subscribe(val => {
  console.log(val);
});