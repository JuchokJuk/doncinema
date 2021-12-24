import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  config: SwiperOptions = {
    slidesPerView: 'auto',
    nested: true,
    centeredSlides: true
  };

}
