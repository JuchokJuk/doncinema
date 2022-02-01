import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild('menuFirstRow', { static: false }) menuFirstRow!: ElementRef;

  constructor(private menuService: MenuService) { }
  blocks: any;
  ngOnInit(): void {
    this.blocks = this.menuService.blocks;
  }

  scrollTo(el: any) {
    const yOffset = this.menuFirstRow.nativeElement.getBoundingClientRect().height;
    const y = el.nativeElement.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  menuIsOpened: boolean = false;
  toggleBurgerMenu() {
    if (this.menuIsOpened === false) {
      this.menuIsOpened = true;
    } else {
      this.menuIsOpened = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 960) {
      this.menuIsOpened = false;
    }
  }

}
