import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landingcontent/landingcontent.module').then(m => m.LandingcontentModule),
  },


  {
    path: '**',
    loadChildren: () => import('./emptycontent/emptycontent.module').then(m => m.EmptycontentModule)
  } // must be always last as wild card for 404
];
