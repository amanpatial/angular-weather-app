import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
    apiEndpoint: 'http://localhost:15422/api/'
};
