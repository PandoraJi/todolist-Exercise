import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const doPreload = (route.data && route.data.preload) || false;
    if (doPreload) {
      return load();
    }

    return of(undefined);
  }
}
