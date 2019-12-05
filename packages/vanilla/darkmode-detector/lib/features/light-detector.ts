import { BehaviorSubject } from 'rxjs'
import { Config, DarkmodeDetectorConfig } from '../interfaces/config.interface';

export default class LightDetector {
  private _currentMode$: BehaviorSubject<string>;

  private defaultConfig: Config = {
    defaultMode: 'light', brightnessThreshold: 50
  };

  private config: Config;

  constructor(config: DarkmodeDetectorConfig = {}) {
    this.config = {...this.defaultConfig, ...config};

    this._currentMode$ = new BehaviorSubject(this.config.defaultMode);
  }

  public get currentMode$() {
    return this._currentMode$.asObservable();
  }

  private get currentMode() {
    return this._currentMode$.value;
  }

  private set currentMode(val) {
    this._currentMode$.next(val);
  }

  public initLightningDetection() {
    const canvasSize = 100;
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // document.body.appendChild(canvas);

    navigator.mediaDevices.getUserMedia({
      video: {
        width: canvasSize,
        height: canvasSize,
        frameRate: 60
      }
    }).then((stream) => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };

      video.addEventListener('play', () => {
        setTimeout(() => {
          this.drawVideoToCanvas(video, canvas, 60, canvasSize);
        }, 100);
      })
    }).catch(e => {
      console.error(e);
    })

    return this.currentMode$;
  }

  private drawVideoToCanvas(video: HTMLVideoElement, canvas: HTMLCanvasElement, frameRate: number, canvasSize: number) {
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    context.drawImage(video, 0, 0, canvasSize, canvasSize);

    const imageData = context.getImageData(0, 0, canvasSize, canvasSize).data;
    const length = imageData.length;

    let r; let g; let b; let avg; let colorSum = 0;

    for(let x = 0;  x < length; x+=4) {
      r = imageData[x];
      g = imageData[x+1];
      b = imageData[x+2];

      avg = Math.floor((r+g+b)/3);
      colorSum += avg;
    }

    const brightness = Math.floor(colorSum / (canvasSize*canvasSize));

    const mode = brightness < this.config.brightnessThreshold ? 'dark' : 'light';

    if(mode !== this.currentMode) {
      this.currentMode = mode;
    }

    setTimeout(this.drawVideoToCanvas.bind(this), 1000, video, canvas, frameRate, canvasSize)
  }


}
