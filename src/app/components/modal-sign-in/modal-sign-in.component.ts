import { AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { ModalController, ToastController } from '@ionic/angular';

import { GraphQLService } from '../../services/graphql.service';
import { UserSignInAction } from 'src/app/store/actions/user.action';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
    selector: 'app-modal-sign-in',
    templateUrl: './modal-sign-in.component.html',
    styleUrls: ['./modal-sign-in.component.scss']
})

export class ModalSingInComponent implements OnInit {
    public formAuthorization: FormGroup;


    constructor(
        private toastController: ToastController,
        public modalController: ModalController,
        private graphqlService: GraphQLService,
        private fb: FormBuilder,
        private store$: Store<AppState>,
        private router: Router,

    ) { }

    ngOnInit() {
        this.formAuthorization = this.fb.group({
            login: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', [Validators.required, ValidationService.passwordValidator]]
        });
    }

    public dismissAuthorization(): void {
        this.modalController.dismiss();
    }

    public submitForm(formData: any, formDirective: FormGroupDirective): void {
        this.graphqlService.login(this.formAuthorization.value)
            .subscribe(response => {
                if (!response.errors) {
                    this.store$.dispatch(new UserSignInAction(response.data.login));
                    this.modalController.dismiss();
                    this.router.navigate(['/tabs/profile']);
                } else {
                    this.toastController.create({
                        message: response.errors[0].message,
                        position: 'top',
                        duration: 3000
                    });
                    formDirective.resetForm();
                    this.formAuthorization.reset()
                }
            });
    }
}
