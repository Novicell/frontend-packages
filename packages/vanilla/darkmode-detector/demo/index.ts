import { DarkmodeDetector, LocalTimeChecker } from '../lib';

const DMDetector = new DarkmodeDetector();

DMDetector.currentMode$.subscribe(val => {
  console.log(val);
});

const { isDark } = new LocalTimeChecker({interval: 1000});
isDark.subscribe((val: boolean) => console.log(val));
