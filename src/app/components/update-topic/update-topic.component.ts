import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.scss']
})
export class UpdateTopicComponent implements OnInit {
  private fileText;
  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }

  updateTopic() {
    this.dataService.updateTopic(this.fileText).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.message);
        console.log(err.headers);
      }
    );
  }

  fileUpload(event) {
    let reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    let me = this;
    reader.onload = function () {
      me.fileText = reader.result;
      console.log(me.fileText);
    }
  }

}
