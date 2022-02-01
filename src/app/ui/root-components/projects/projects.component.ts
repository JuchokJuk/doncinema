import { Component, ElementRef, ViewChild } from '@angular/core';
import { Backend } from 'src/app/model/backend';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @ViewChild('ref', { static: false }) ref!: ElementRef;

  constructor(private menuService: MenuService) { }
  backend: Backend = new Backend();

  id: number = 3;
  projects!: any;
  postsIdArray!: number[];
  cards: any[] = [];

  async ngOnInit(): Promise<void> {
    this.projects = await this.backend.getTypeAttributesById('blocks', this.id, 'content.posts');
    this.menuService.addBlock({ id: this.id, short_name_for_menu: this.projects.short_name_for_menu, element: this.ref });

    this.postsIdArray = this.backend.getIdArray(this.projects.content[0], 'posts');
    for (let i = 0; i < this.postsIdArray.length; i++) {
      this.cards.push(await this.backend.getTypeAttributesById('posts', this.postsIdArray[i], '*'));
    }
  }
}
