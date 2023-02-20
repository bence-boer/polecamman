import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  public readonly DEVICE_TYPE: DeviceType;

  constructor() {
    this.DEVICE_TYPE = DeviceInfoService.getDeviceType();
  }

  private static getDeviceType(): DeviceType {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    if (aspectRatio < 1) {
      return 'mobile';
    } else if (aspectRatio < 1.5) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }
}

type DeviceType = 'mobile' | 'tablet' | 'desktop';
