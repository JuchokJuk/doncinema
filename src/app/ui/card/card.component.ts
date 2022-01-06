import { Component, ComponentFactoryResolver, ComponentRef, Input, Type, ViewContainerRef } from '@angular/core';
import { PopupService } from '../popup.service';

import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  constructor(private popupService: PopupService, private componentFactoryResolver: ComponentFactoryResolver) { }
  @Input() imagePath!:string;
  @Input() header!:string;
  @Input() text!: string;
  showPopup(){
    this.popupService.openPopup();

    let component = PostComponent;
    this.addComponent(component);
  }

  // container:ViewContainerRef = this.popupService.popupContentContainer;


  // Keep track of list of generated components for removal purposes
  // components = [];

  // Expose class so that it can be used in the template
  


  addComponent(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const component = this.popupService.getPopupContentContainer().createComponent(componentFactory);
     

    // Push the component so that we can keep track of which components are created
    // this.components.push(component);
  }

}
