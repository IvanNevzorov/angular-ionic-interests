import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'sign-in',
                loadChildren: () => import('../sign-in/sign-in-page.module').then(module => module.SignInPageModule)
            },
            {
                path: 'sign-up',
                loadChildren: () => import('../sign-up/sign-up-page.module').then(module => module.SignUpPageModule)
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
