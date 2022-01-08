import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() blocks:any;

  scrollTo(el: any) {
    console.log(el)
    el.nativeElement.scrollIntoView({behavior: 'smooth'});
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
    if(window.innerWidth > 800){
      this.menuIsOpened = false;
    }
  }
}
