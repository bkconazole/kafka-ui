import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  apiUrl = "http://localhost:9090/api/v1/kafka/topic";
  uploader: FileUploader = new FileUploader({url: this.apiUrl});
  
  constructor() { }

  ngOnInit() {
  }

}
