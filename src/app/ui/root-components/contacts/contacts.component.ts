import { Component } from '@angular/core';
import { ModelService} from 'src/app/model/model.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private modelService: ModelService) {}
  contacts = this.modelService.contacts;
}
