import { InterestsTabComponent } from './interests-tab.component';
import { AuthGuard } from './../../auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InterestsTabComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('../../pages/categories/categories-page.module').then(m => m.CategoriesPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'list',
        loadChildren: () => import('../../pages/list/list-page.module').then(m => m.ListPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        loadChildren: () => import('../../pages/interests/interests-page.module').then(m => m.InterestsPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestsTabRoutingModule { }
