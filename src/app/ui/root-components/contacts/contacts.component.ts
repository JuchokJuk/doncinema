import { Component, ElementRef, ViewChild } from '@angular/core';
import { Backend } from 'src/app/model/backend';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @ViewChild('ref', { static: false }) ref!: ElementRef;

  constructor(private menuService: MenuService) { }

  backend: Backend = new Backend();
  id:number = 5;
  contacts!: any;

  async ngOnInit(): Promise<void> {
    this.contacts = await this.backend.getTypeAttributesById('blocks', this.id, '*');
    this.menuService.addBlock({ id: this.id, short_name_for_menu: this.contacts.short_name_for_menu, element: this.ref });
  }
}
