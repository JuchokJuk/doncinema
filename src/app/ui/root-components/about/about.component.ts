import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Backend } from 'src/app/model/backend';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  @ViewChild('ref', { static: false }) ref!: ElementRef;

  constructor(private menuService: MenuService) { }

  backend: Backend = new Backend();
  id:number = 1;
  about!: any;

  async ngOnInit(): Promise<void> {
    this.about = await this.backend.getTypeAttributesById('blocks', this.id, 'content.image, content.chips');
    this.menuService.addBlock({ id: this.id, short_name_for_menu: this.about.short_name_for_menu, element: this.ref });
  }

}
