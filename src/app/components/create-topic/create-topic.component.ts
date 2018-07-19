import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from "@angular/forms";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {
  private fileText;
  res$: any;
  error$: any;
  private newText;

  constructor(private dataService: DataService) {

  }
  ngOnInit() {
  }

  createTopic() {
    console.log("create topic is called with..." + this.newText);
    this.dataService.createTopic(this.fileText).subscribe(
      res => {
        console.log("http response starts here...");
        //console.log(res);
        console.log("http response ends here...");
      },
      (err: HttpErrorResponse) => {
        console.log("error message starts here....");
        console.log('error: ' + err.error);
        console.log('name: ' + err.name);
        console.log('message: ' + err.message);
        console.log('status: ' + err.status);
        console.log("error message ends here....");
      }
    );
  }

  fileUpload(event) {
    let fileName = event.target.files[0].name;
    let fileExtenstion = fileName.substring(fileName.lastIndexOf('.') + 1);
    /* original file upload function
    fileUpload(event) {
      let reader = new FileReader();
      reader.readAsText(event.srcElement.files[0]);
      let me = this;
      reader.onload = function () {
        me.fileText = reader.result;
      }
    }
    */
    if (fileExtenstion === 'json') {
      let reader = new FileReader();
      reader.readAsText(event.srcElement.files[0]);
      let me = this;
      reader.onload = function () {
        me.fileText = reader.result;
      }
      return;
    } else if (fileExtenstion === 'txt') {
      let reader = new FileReader();
      reader.readAsText(event.srcElement.files[0]);
      let me = this;
      reader.onload = function () {
        let rd = new FileReader();
        console.log('text file before split' + me.fileText);
        var t = reader.result.split(';');
        console.log('text file after split' + t);
        me.newText = '{';
        for (var i = 0; i < t.length; i++) {
          let pair = t[i].split(':');
          me.newText += `"${pair[0]}":"${pair[1]}"`
          if (i !== t.length - 1) {
            me.newText += ',\n';
          }
        }
        me.newText += '}';
        console.log("final form : " + me.newText);
      }
      return;
    }
  }


}
