import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterestsTabComponent } from './interests-tab.component';

const routes: Routes = [
  {
    path: '',
    component: InterestsTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterestsTabRoutingModule { }
