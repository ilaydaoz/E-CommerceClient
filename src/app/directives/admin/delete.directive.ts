import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogsComponent, DeleteState } from 'src/app/dialogs/delete-dialogs/delete-dialogs.component';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $: any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private productservice: ProductService,
    public dialog: MatDialog
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "/assets/delete.png");
    img.setAttribute("style", "cursor : pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")

  async onclick() {
    this.openDialog(async () => {
      const td: HTMLImageElement = this.element.nativeElement;
      await this.productservice.delete(this.id)
      $(td.parentElement).animate({
        opacity:0,
        left:"+=50",
        height:"toogle"
      },700,()=>{
        this.callback.emit();
      })
    });
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogsComponent, {
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes)
        afterClosed();

    });
  }
}

