import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
declare var $ : any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private httppClientService: HttpClientService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "/assets/delete.png");
    img.setAttribute("style", "cursor : pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

@HostListener("click")

  onclick() {
    const td :HTMLImageElement=this.element.nativeElement;
    $(td.parentElement).fadeOut(1000);
  }
}
