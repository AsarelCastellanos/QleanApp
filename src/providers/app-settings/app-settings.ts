import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl: 'https://cometserver-scla.herokuapp.com',
};

@Injectable()
export class AppSettingsProvider {

  constructor() {

  }

  public getApiUrl() {
    return CONFIG.apiUrl;
  }

}