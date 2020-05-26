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
        loadChildren: () => import('../pages/profile/profile-page.module').then(module => module.ProfilePageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'interests',
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/interests/interests-page.module').then(module => module.InterestsPageModule)
          },
          {
            path: 'list',
            loadChildren: () => import('../pages/list/list-page.module').then(m => m.ListPageModule)
          },
          {
            path: 'categories',
            loadChildren: () => import('../pages/categories/categories-page.module').then(m => m.CategoriesPageModule)
          }
        ],
      },
      {
        path: 'my-interests',
        canActivate: [AuthGuard],
        loadChildren: () => import('../pages/my-interests/my-interests-page.module').then(module => module.MyInterestsPageModule)
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
