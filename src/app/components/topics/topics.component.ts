import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FilterPipe } from '../../filter.pipe';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  topics$: Object;
  public hide: boolean = false;
  constructor( private data: DataService ) { }

  ngOnInit() {
    this.data.getTopics().subscribe(
      data => this.topics$ = data
    )

    $(document).ready(function () {

      'use strict';
      var materialInputs = $('input.input-material');
  
      // activate labels for prefilled values
      materialInputs.filter(function() { return $(this).val() !== ""; }).siblings('.label-material').addClass('active');
  
      // move label on focus
      materialInputs.on('focus', function () {
          $(this).siblings('.label-material').addClass('active');
      });
  
      // remove/keep label on blur
      materialInputs.on('blur', function () {
          $(this).siblings('.label-material').removeClass('active');
  
          if ($(this).val() !== '') {
              $(this).siblings('.label-material').addClass('active');
          } else {
              $(this).siblings('.label-material').removeClass('active');
          }
      });
  });
    //end of ngOnInit
  }
  getHide() {
    return this.hide;
  }

  toggleHide() {
    console.log("toggle hide is called");
    this.hide = !this.hide;
  }
}
