import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/profile/profile-page.module').then(module => module.ProfilePageModule)
          },
          {
            path: 'my-interests',
            loadChildren: () => import('../pages/my-interests/my-interests-page.module').then(module => module.MyInterestsPageModule)
          }
        ]
      },
      {
        path: 'interests',
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
        path: '',
        redirectTo: '/tabs/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/tabs/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }