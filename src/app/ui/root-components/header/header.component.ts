import { Component } from '@angular/core';
import { ModelService, About } from 'src/app/model/model.service';
import { CallFormComponent } from '../../popup/popup-content/call-form/call-form.component';
import { PopupService } from '../../popup/popup.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private modelService: ModelService, private popupService: PopupService) { }
  about: About = this.modelService.about;

  openCallForm = () => {
    this.popupService.openPopup(CallFormComponent, []);
  }
}
