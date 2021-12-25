import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/model/model.service';
import swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.css']
})
export class ProjectsSliderComponent {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  @Input() cards!: Card[];
  config: SwiperOptions = {
    slidesPerView: 'auto',
    nested: true,
    centeredSlides: true
  };
  toLeft(){
    this.swiperContainer.nativeElement.firstElementChild.swiper.slidePrev();
  }
  toRight(){
    this.swiperContainer.nativeElement.firstElementChild.swiper.slideNext();
  }
}
