import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() blocks:any;

  @ViewChild('menuFirstRow', { static: false }) menuFirstRow!: ElementRef;

  scrollTo(el: any) {


    const yOffset = this.menuFirstRow.nativeElement.getBoundingClientRect().height; 
    const y = el.nativeElement.getBoundingClientRect().top + window.pageYOffset - yOffset;
    
    window.scrollTo({top: y, behavior: 'smooth'});

    // el.nativeElement.scrollIntoView({behavior: 'smooth'});
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
