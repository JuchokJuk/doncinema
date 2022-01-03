import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PopupService {

    imagePath!: string;
    header!: string;
    text!: string;

    popupIsOpened: boolean = false;

    openPopup(imagePath: string, header: string, text: string) {
        this.imagePath = imagePath;
        this.header = header;
        this.text = text;

        this.popupIsOpened = true;
        (document.body as HTMLElement).style.overflow = 'hidden';
    }
    closePopup() {
        this.popupIsOpened = false;
        (document.body as HTMLElement).style.overflow = 'auto';
    }
}
