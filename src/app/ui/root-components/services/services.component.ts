import { Component, ElementRef, ViewChild } from '@angular/core';
import { Backend } from 'src/app/model/backend';
import { MenuService } from 'src/app/ui/root-components/menu/menu.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  @ViewChild('ref', { static: false }) ref!: ElementRef;

  constructor(private menuService: MenuService) { }
  backend: Backend = new Backend();

  id: number = 2;
  services!: any;
  postsIdArray!: number[];
  cards: any[] = [];

  async ngOnInit(): Promise<void> {
    this.services = await this.backend.getTypeAttributesById('blocks', this.id, 'content.posts');
    this.menuService.addBlock({ id: this.id, short_name_for_menu: this.services.short_name_for_menu, element: this.ref });

    this.postsIdArray = this.backend.getIdArray(this.services.content[0], 'posts');
    for (let i = 0; i < this.postsIdArray.length; i++) {
      this.cards.push(await this.backend.getTypeAttributesById('posts', this.postsIdArray[i], '*'));
    }
  }
}
