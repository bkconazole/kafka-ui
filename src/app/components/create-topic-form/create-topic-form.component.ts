import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-topic-form',
  templateUrl: './create-topic-form.component.html',
  styleUrls: ['./create-topic-form.component.scss']
})
export class CreateTopicFormComponent implements OnInit {
  myform: FormGroup;
  topic: string = "";

  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormControl(),
      readUser: new FormControl(),
      
    });
  }

}
