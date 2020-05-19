import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { StartPageComponent } from '../pages/start/start-page.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile-tab.module').then(m => m.ProfileTabModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'interests',
        loadChildren: () => import('./interests/interests-tab.module').then(m => m.InterestsTabModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: StartPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
