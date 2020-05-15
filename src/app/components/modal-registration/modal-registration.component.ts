import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-modal-registration',
    templateUrl: './modal-registration.component.html',
    styleUrls: ['./modal-registration.component.scss']
})

export class ModalRegistrationComponent implements OnInit {
    public formRegistration: FormGroup;

    constructor(
        private fb: FormBuilder,
        public modalController: ModalController
    ) { }

    ngOnInit() {
        this.formRegistration = this.fb.group({
            firstName: '',
            secondName: '',
            city: '',
            login: '',
            password: '',
            repeatPassword: ''
        })
    }

    public dismissRegistration(): void {
        this.modalController.dismiss()
    }

    public submit(): void {
        console.log(this.formRegistration.value);

    }
}