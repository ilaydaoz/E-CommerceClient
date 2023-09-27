import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {
  constructor(
    private httpClientServise: HttpClientService,
  ){}
  public files: NgxFileDropEntry[];
  @Input() options: Partial<FileUploadOptions>;

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }
   this.httpClientServise.post({
      controller: this.options.controller,
      action:  this.options.action,
      queryString :this.options.queryString,
      headers: new HttpHeaders({"responseType":"blob"})
   },fileData).subscribe(data =>{

   },(errorResponse:HttpErrorResponse)=>{
    
   })
  }
}

export class FileUploadOptions{
controller?: string;
action?: string;
queryString?: string;
explanation?: string;
accept? :string;
}



