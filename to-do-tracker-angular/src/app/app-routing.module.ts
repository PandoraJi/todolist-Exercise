import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from './common/router-helper/selective-preloading.strategy';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    urlUpdateStrategy: 'eager',
    preloadingStrategy: SelectivePreloadingStrategy,
    enableTracing: false,
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule],
  providers: [
    { provide: PreloadingStrategy, useClass: SelectivePreloadingStrategy }]
})
export class AppRoutingModule { }
