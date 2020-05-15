import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRegistrationComponent } from 'src/app/components/modal-registration/modal-registration.component';
import { ModalAuthorizationComponent } from 'src/app/components/modal-authorization/modal-authorization.component';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})

export class StartPageComponent {
    constructor(public modalController: ModalController) { }

    ngOnInit() { }

    public async presentRegistration(): Promise<void> {
        const modal = await this.modalController.create({
            component: ModalRegistrationComponent
        });
        return await modal.present();
    }

    public async presentAuthorization(): Promise<void> {
        const modal = await this.modalController.create({
            component: ModalAuthorizationComponent
        });
        return await modal.present();
    }
}