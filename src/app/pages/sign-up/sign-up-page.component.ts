import { Component, OnInit } from '@angular/core';
import { UserSignInAction } from 'src/app/store/actions/user.action';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { GraphQLService } from 'src/app/services/graphql.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-home-page',
    templateUrl: './sign-up-page.component.html',
    styleUrls: ['./sign-up-page.component.scss']
})

export class SignUpPageComponent implements OnInit {
    public formRegistration: FormGroup;
    public errorMessage = '';

    constructor(
        private graphqlService: GraphQLService,
        private fb: FormBuilder,
        private store$: Store<AppState>,
        private router: Router,
        private navCtrl: NavController
    ) { }

    ngOnInit() {
        this.formRegistration = this.fb.group({
            firstName: ['', [Validators.required]],
            secondName: ['', [Validators.required]],
            city: ['', [Validators.required]],
            email: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', [Validators.required, ValidationService.passwordValidator]],
            confirmPassword: ['', [Validators.required, ValidationService.passwordValidator]]
        });
    }

    public create(formValue): void {
        if (formValue.confirmPassword !== formValue.password) {
            this.errorMessage = 'Password must match...';
            return;
        }
        this.graphqlService.register(formValue)
            .subscribe(response => {
                if (!response.errors) {
                    this.store$.dispatch(new UserSignInAction(response.data.register));
                    this.router.navigate(['/tabs/home']);
                }
            });
    }
    public navigateDefault(): void {
        this.navCtrl.navigateForward(`/tabs/home`);
    }
}
