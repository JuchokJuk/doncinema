import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @ViewChild('swiperTabsNavWrapper', { static: false }) swiperTabsNavWrapper!: ElementRef;
  @ViewChild('swiperTabsWrapper', { static: false }) swiperTabsWrapper!: ElementRef;

  public ctx!: CanvasRenderingContext2D;
  config: SwiperOptions = {
    slidesPerView: 'auto',
  };

  tabNav: HTMLElement[] = [];

  ngAfterViewInit(): void {
    this.tabNav = [...this.swiperTabsNavWrapper.nativeElement.firstElementChild.firstElementChild.children];

    this.onClick = this.onClick.bind(this);
    for (let i = 0; i < this.tabNav.length; i++) {
      this.tabNav[i].addEventListener('click', this.onClick, false);
    }
  }


  onClick(event: any) {
    for (let i = 0; i < event.target.parentElement.children.length; i++) {
      event.target.parentElement.children[i].classList.remove('selected');
    }
    event.target.classList.add('selected');

    this.swiperTabsNavWrapper.nativeElement.firstElementChild.swiper.slideTo(this.tabNav.indexOf(event.target), 300, false);
    this.swiperTabsWrapper.nativeElement.firstElementChild.swiper.slideTo(this.tabNav.indexOf(event.target), 300, false);
  }

  configTabs: SwiperOptions = {
    slidesPerView: 1,
    touchReleaseOnEdges: true
  };

  onIndexChange(e: number) {
    this.swiperTabsNavWrapper.nativeElement.firstElementChild.swiper.slideTo(e, 300, false);
    for (let i = 0; i < this.tabNav[e].parentElement!.children.length; i++) {
      this.tabNav[e].parentElement!.children[i].classList.remove('selected');
    }
    this.tabNav[e].classList.add('selected');
  }
}