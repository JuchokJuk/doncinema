import { ElementRef, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PopupService {
    popupIsOpened: boolean = false;
    popupContentContainer!: ViewContainerRef;
    openPopup() {
        this.popupIsOpened = true;
        (document.body as HTMLElement).style.overflow = 'hidden';
    }
    closePopup() {
        this.popupIsOpened = false;
        (document.body as HTMLElement).style.overflow = 'auto';
    }
    getPopupContentContainer():ViewContainerRef{
        return this.popupContentContainer;
    }
}
