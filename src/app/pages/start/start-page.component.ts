import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSignUpComponent } from 'src/app/components/modal-sign-up/modal-sign-up.component';
import { ModalSingInComponent } from 'src/app/components/modal-sign-in/modal-sign-in.component';

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
            component: ModalSignUpComponent
        });
        return await modal.present();
    }

    public async presentAuthorization(): Promise<void> {
        const modal = await this.modalController.create({
            component: ModalSingInComponent
        });
        return await modal.present();
    }
}