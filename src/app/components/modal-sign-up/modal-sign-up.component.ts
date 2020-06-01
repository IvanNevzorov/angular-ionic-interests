import { AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { ModalController } from '@ionic/angular';

import { GraphQLService } from 'src/app/services/graphql.service';
import { UserSignInAction } from 'src/app/store/actions/user.action';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
    selector: 'app-modal-sign-up',
    templateUrl: './modal-sign-up.component.html',
    styleUrls: ['./modal-sign-up.component.scss']
})

export class ModalSignUpComponent implements OnInit {
    public formRegistration: FormGroup;

    constructor(
        public modalController: ModalController,
        private graphqlService: GraphQLService,
        private fb: FormBuilder,
        private store$: Store<AppState>,
        private router: Router
    ) { }

    ngOnInit() {
        this.formRegistration = this.fb.group({
            firstName: ['', [Validators.required]],
            secondName: ['', [Validators.required]],
            city: ['', [Validators.required]],
            email: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', [Validators.required, ValidationService.passwordValidator]],
            repeatPassword: ['', [Validators.required, ValidationService.passwordValidator]]
        })
    }

    public dismissRegistration(): void {
        this.modalController.dismiss()
    }

    public submit(): void {
        this.graphqlService.register(this.formRegistration.value)
            .subscribe(response => {
                if (!response.errors) {
                    this.store$.dispatch(new UserSignInAction(response.data.register));
                    this.modalController.dismiss();
                    this.router.navigate(['/tabs/profile']);
                }
            });
    }
}