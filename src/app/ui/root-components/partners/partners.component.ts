import { Component, ElementRef, ViewChild } from '@angular/core';
import { Backend } from 'src/app/model/backend';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  @ViewChild('ref', { static: false }) ref!: ElementRef;

  constructor(private menuService: MenuService) { }
  backend: Backend = new Backend();

  id: number = 4;
  partners!: any;
  parntersIdArray!: number[];
  partnerLogotypes: any[] = [];

  async ngOnInit(): Promise<void> {
    this.partners = await this.backend.getTypeAttributesById('blocks', this.id, 'content.partners');
    this.menuService.addBlock({ id: this.id, short_name_for_menu: this.partners.short_name_for_menu, element: this.ref });

    this.parntersIdArray = this.backend.getIdArray(this.partners.content[0], 'partners');
    for (let i = 0; i < this.parntersIdArray.length; i++) {
      this.partnerLogotypes.push(await this.backend.getTypeAttributesById('partners', this.parntersIdArray[i], '*'));
    }
  }
}
