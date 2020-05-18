import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { GraphQLService } from 'src/app/services/graphql.service';
import { UserSignInAction } from 'src/app/store/actions/user.action';
import { Router } from '@angular/router';

@Component({
    selector: 'app-modal-registration',
    templateUrl: './modal-registration.component.html',
    styleUrls: ['./modal-registration.component.scss']
})

export class ModalRegistrationComponent implements OnInit {
    public formRegistration: FormGroup;

    constructor(
        public modalController: ModalController,
        private graphqlService: GraphQLService,
        private fb: FormBuilder,
        private store: Store,
        private router: Router
    ) { }

    ngOnInit() {
        this.formRegistration = this.fb.group({
            firstName: '',
            secondName: '',
            city: '',
            email: '',
            password: '',
            repeatPassword: ''
        })
    }

    public dismissRegistration(): void {
        this.modalController.dismiss()
    }

    public submit(): void {
        this.graphqlService.register(this.formRegistration.value)
            .subscribe(response => {
                if (!response.errors) {
                    this.store.dispatch(new UserSignInAction(response.data.register));
                    this.modalController.dismiss();
                    this.router.navigate(['/tabs/tab1']);
                }
            });
    }
}