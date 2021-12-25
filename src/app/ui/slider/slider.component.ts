import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';
import {Card}  from 'src/app/model/model.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() cards!: Card[];
  config: SwiperOptions = {
    slidesPerView: 'auto',
    nested: true,
    centeredSlides: true
  };

}
