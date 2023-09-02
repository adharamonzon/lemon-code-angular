import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRotation]'
})
export class RotationDirective {
  acc = 0;
  @HostListener('click') onCLick () {
    this.rotate(this.acc);
  }
  constructor( private el: ElementRef) {}

  private rotate(deg: number) {
    const finalDeg = deg + 45;
    this.acc = finalDeg;
    this.el.nativeElement.style.transform = `rotate(${finalDeg}deg)`
  }
}
