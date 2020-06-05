import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserSignInAction } from 'src/app/store/actions/user.action';
import { ValidationService } from 'src/app/services/validation.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { GraphQLService } from 'src/app/services/graphql.service';
import { ToastController, NavController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-home-page',
    templateUrl: './sign-in-page.component.html',
    styleUrls: ['./sign-in-page.component.scss']
})

export class SignInPageComponent implements OnInit {
    public formAuthorization: FormGroup;

    constructor(
        private toastController: ToastController,
        private graphqlService: GraphQLService,
        private fb: FormBuilder,
        private store$: Store<AppState>,
        private router: Router,
        private navCtrl: NavController,
        private loading: LoadingController
    ) { }

    ngOnInit() {
        this.formAuthorization = this.fb.group({
            login: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', [Validators.required, ValidationService.passwordValidator]]
        });
    }

    public loginUser(formData: any, formDirective: FormGroupDirective): void {
        this.loading.create({
            message: 'Logging in...'
        }).then(load => load.present());

        this.graphqlService.login(formData)
            .subscribe(response => {
                if (!response.errors) {
                    this.store$.dispatch(new UserSignInAction(response.data.login));
                    this.router.navigate(['/tabs/home']);

                    this.toastController.create({
                        message: 'Successful!',
                        position: 'top',
                        duration: 3000
                    });
                    this.loading.dismiss();

                } else {
                    this.toastController.create({
                        message: response.errors[0].message,
                        position: 'top',
                        duration: 3000
                    }).then(load => load.present());
                    this.formAuthorization.reset();
                    this.loading.dismiss();
                }
            });
    }

    public navigateDefault(): void {
        this.navCtrl.navigateForward(`/tabs/home`);
    }

    public navigate(url: string): void {
        this.navCtrl.navigateForward(`/tabs/home/${url}`);
    }
}
