import { ProfilePageComponent } from './profile-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { UserInterestsComponent } from 'src/app/components/user-interests/user-interests.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilePageComponent,
        children: [
            {
                path: 'info',
                component: UserInfoComponent
            },
            {
                path: 'my-interests',
                component: UserInterestsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
