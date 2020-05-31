import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
    providedIn: 'root'
})
export class CameraService {
    public imageStr: string = '';
    constructor(private camera: Camera) { }

    async takePicture(): Promise<string> {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        await this.camera.getPicture(options).then((imageData) => {

            this.imageStr = `data:image/jpeg;base64,${imageData}`;


        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });

        return this.imageStr;
    }
}