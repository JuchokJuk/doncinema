import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diagonal',
  templateUrl: './diagonal.component.html',
  styleUrls: ['./diagonal.component.css']
})
export class DiagonalComponent {

  @ViewChild('myCanvas', { static: false }) myCanvas!: ElementRef;
  public ctx!: CanvasRenderingContext2D;
  height!: number;
  width!: number;
  @HostListener('window:resize')
  onResize() {
    this.width = this.myCanvas.nativeElement.offsetWidth;
    this.height = this.myCanvas.nativeElement.offsetHeight;
    setTimeout(() => { this.render();}, 0 );
  }
  ngAfterViewInit(): void {
    this.width = this.myCanvas.nativeElement.offsetWidth;
    this.height = this.myCanvas.nativeElement.offsetHeight;

    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    setTimeout(() => { this.render();}, 0 );
  }
  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--main-low-contrast-color');

    this.ctx.moveTo(0, this.height);
    this.ctx.lineTo(this.width, 0);
    this.ctx.stroke();
  }
}

