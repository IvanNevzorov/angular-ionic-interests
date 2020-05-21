import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InterestsPageComponent } from './interests-page.component';

const routes: Routes = [
    {
        path: '',
        component: InterestsPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})

export class InterestsPageRoutingModule { }
