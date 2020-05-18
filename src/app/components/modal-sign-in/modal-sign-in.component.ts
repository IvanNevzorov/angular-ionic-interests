import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { ModalController } from '@ionic/angular';

import { GraphQLService } from '../../services/graphql.service';
import { UserSignInAction } from 'src/app/store/actions/user.action';

@Component({
    selector: 'app-modal-sign-in',
    templateUrl: './modal-sign-in.component.html',
    styleUrls: ['./modal-sign-in.component.scss']
})

export class ModalSingInComponent implements OnInit {
    public formAuthorization: FormGroup;


    constructor(
        public modalController: ModalController,
        private graphqlService: GraphQLService,
        private fb: FormBuilder,
        private store: Store,
        private router: Router
    ) { }

    ngOnInit() {
        this.formAuthorization = this.fb.group({
            login: '',
            password: ''
        });
    }

    public dismissAuthorization(): void {
        this.modalController.dismiss()
    }

    public submit(): void {
        this.graphqlService.login(this.formAuthorization.value)
            .subscribe(response => {
                if (!response.errors) {
                    console.log(response);
                    this.store.dispatch(new UserSignInAction(response.data.login));
                    this.modalController.dismiss();
                    this.router.navigate(['/tabs/profile']);
                }
            });
    }
}