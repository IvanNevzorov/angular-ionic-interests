import { GraphQLService } from './../../services/graphql.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-modal-authorization',
    templateUrl: './modal-authorization.component.html',
    styleUrls: ['./modal-authorization.component.scss']
})

export class ModalAuthorizationComponent implements OnInit {
    public formAuthorization: FormGroup;
    public modalController: ModalController

    constructor(
        private graphqlService: GraphQLService,
        private fb: FormBuilder
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

    public submit() {
        this.graphqlService.login(this.formAuthorization.value).subscribe(data => console.log(data)
        );
    }
}