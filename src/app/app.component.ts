import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-CommerceClient';
  constructor(private toastrService: CustomToastrService) {
      toastrService.message("merhaba","ilayda", {
        messageType:ToastrMessageType.Info,
        position: ToastrPosition.TopCenter
      });
      toastrService.message("merhaba","ilayda", {
        messageType:ToastrMessageType.Success,
        position: ToastrPosition.TopCenter
      });
      toastrService.message("merhaba","ilayda", {
        messageType:ToastrMessageType.Error,
        position: ToastrPosition.TopCenter
      });
      toastrService.message("merhaba","ilayda", {
        messageType:ToastrMessageType.Warning,
        position: ToastrPosition.TopCenter
      });
  }
}
