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

    constructor(
        private fb: FormBuilder,
        public modalController: ModalController
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
}