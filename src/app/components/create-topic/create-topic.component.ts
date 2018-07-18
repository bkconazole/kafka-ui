import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from "@angular/forms";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  private fileText;
  
  constructor( private dataService: DataService ) { 
    
  }
  ngOnInit() {
  }

  createTopic() {
    console.log("create topic is called");
    this.dataService.createTopic(this.fileText).subscribe(
      res => {
        console.log("http response starts here...");
        console.log(res);
        console.log("http response ends here...");
      },
      ( err: HttpErrorResponse ) => {
        console.log("error message starts here....");
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
        console.log("error message ends here....");
      }
    );
  }

  fileUpload(event) {
    let reader = new FileReader();
    reader.readAsText(event.srcElement.files[0]);
    let me = this;
    reader.onload = function () {
      me.fileText = reader.result;

      console.log('file text in crate topic'+me.fileText);
    }
  }

}
