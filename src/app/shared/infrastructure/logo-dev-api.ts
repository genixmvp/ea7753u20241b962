import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class LogoDevApi {
  readonly #baseUrl = environment.logoProviderApiBaseUrl;
  readonly #apiKey = environment.logoProviderPublishableKey;

  getUrlToLogo(url: string): string {
    return `${this.#baseUrl}${new URL(url).hostname}?token=${this.#apiKey}`;
  }
}
