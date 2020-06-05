import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
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
            loadChildren: () => import('../pages/list/list-page.module').then(module => module.ListPageModule)
          },
          {
            path: 'categories',
            loadChildren: () => import('../pages/categories/categories-page.module').then(module => module.CategoriesPageModule)
          }
        ],
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home-page.module').then(module => module.HomePageModule)
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
