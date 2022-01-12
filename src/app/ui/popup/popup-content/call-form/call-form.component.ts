import { Component} from '@angular/core';
import { PopupService } from '../../popup.service';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.css']
})
export class CallFormComponent  {

  constructor(private popupService:PopupService) { }


  notificate(phone: string) {
    let url = `https://api.telegram.org/bot5078699319:AAEBu-AkoyPH_YFw07ZrqWI1t2kIe1EC340/sendMessage?chat_id=-708633462&text=${phone}`;
    fetch(url);
    this.popupService.closePopup();
  }
}
