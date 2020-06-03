import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
    providedIn: 'root'
})

export class CameraService {
    public imageSrc: string = '';
    constructor(private camera: Camera) { }

    public async takePicture(): Promise<string> {
        const cameraOptions: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        await this.camera.getPicture(cameraOptions).then((imageData) => {
            this.imageSrc = `data:image/jpeg;base64,${imageData}`;
        }, (err) => {
            console.log("Camera issue: " + err);
        });
        return this.imageSrc;
    }

    public async openGallery(): Promise<string> {
        let galleryOptions: CameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        }

        await this.camera.getPicture(galleryOptions).then((imageData) => {
            this.imageSrc = `data:image/jpeg;base64,${imageData}`;
        }, (err) => {
            console.log("Camera issue: " + err);
        });
        return this.imageSrc;
    }
}