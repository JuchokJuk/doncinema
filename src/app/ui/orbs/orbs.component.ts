import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
@Component({
  selector: 'app-orbs',
  templateUrl: './orbs.component.html',
  styleUrls: ['./orbs.component.css']
})
export class OrbsComponent {
  @ViewChild('myCanvas', { static: false }) myCanvas!: ElementRef;
  public ctx!: CanvasRenderingContext2D;
  height: number = window.innerHeight;
  width: number = window.innerWidth;
  numberOfCircles: number = 5;
  @HostListener('window:resize')
  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }
  ngAfterViewInit(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    let circles: movingCircle[] = [];
    for (var i = 0; i < this.numberOfCircles; i++) {
      circles[i] = new movingCircle(this.width, this.height);
    }
    this.render(circles);
  }
  render(circles: movingCircle[]) {
    const animate = () => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (var i = 0; i < circles.length; i++) {
        circles[i].calcPos();
        this.drawCircle(this.width*1/8  + circles[i].x, 0 + circles[i].y, circles[i].rCircle, circles[i].color);
        this.drawCircle(this.width*7/8 + circles[i].x, this.height + circles[i].y, circles[i].rCircle, circles[i].color);
      }
      this.render(circles);
    }
    requestAnimationFrame(animate);
  }
  drawCircle(x: number, y: number, r: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
    this.ctx.fill();
  }
}
class movingCircle {
  boundX: number;
  boundY: number;
  time: number = 0;
  rCircle!: number;
  rBig!: number;
  r!: number;
  h!: number;
  x: number = 0;
  y: number = 0;
  color!: string;
  constructor(boundX: number, boundY: number) {
    this.boundX = boundX;
    this.boundY = boundY;
    this.newRandomMovingCircle();
  }
  newRandomMovingCircle() {
    this.rCircle = this.getRandomNumber((this.boundX + this.boundY) / 16, (this.boundX + this.boundY) / 6)
    this.rBig = this.getRandomNumber(0, (this.boundX + this.boundY) / 6);
    this.r = this.rCircle;
    this.h = this.getRandomNumber(0, (this.boundX + this.boundY) / 8);

    this.color = Math.random() < 0.5 ? getComputedStyle(document.body).getPropertyValue('--accent-color-transparent') : getComputedStyle(document.body).getPropertyValue('--accent-coplementary-color-transparent');
  }
  getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  calcPos() {
    this.time += 0.01
    this.x = (this.rBig - this.r) * Math.cos(this.time) + this.h * Math.cos(((this.rBig - this.r) / (this.r)) * this.time)
    this.y = (this.rBig - this.r) * Math.sin(this.time) + this.h * Math.sin(((this.rBig - this.r) / (this.r)) * this.time)
  }
}
