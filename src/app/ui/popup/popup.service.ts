import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PopupService {
    popupIsOpened: boolean = false;
    popupContentContainer!: ViewContainerRef;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
    openPopup(componentClass: any, inputs: any) {
        this.popupIsOpened = true;
        (document.body as HTMLElement).style.overflow = 'hidden';

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);

        this.popupContentContainer.clear();
        const component = this.popupContentContainer.createComponent<typeof componentClass>(componentFactory);

        if (inputs.length > 0) {
            for (let i = 0; i < inputs.length; i++) {
                component.instance[inputs[i].name] = inputs[i].value;
            }
        }

    }
    closePopup() {
        this.popupIsOpened = false;
        (document.body as HTMLElement).style.overflow = 'auto';
    }
    getPopupContentContainer(): ViewContainerRef {
        return this.popupContentContainer;
    }
}
