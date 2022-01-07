import { Component, OnInit } from '@angular/core';
import { ModelService, Contacts } from 'src/app/model/model.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private modelService: ModelService) {}
  contacts:Contacts = this.modelService.contacts;
}
