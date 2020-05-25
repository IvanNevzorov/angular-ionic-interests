import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInterestsPageComponent } from './my-interests-page.component';

const routes: Routes = [
    {
        path: '',
        component: MyInterestsPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyInterestsPageRoutingModule { }
